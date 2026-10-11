import {frustumPlanes,boxVisible} from './map-frustum.js?v=20261009-smooth-v2';
// Shared native WebGL renderer. All source records are included; no building count cap.
import {prepareBuilding,metresPerPixel,mercator,depthAt,triangleHit} from './city-geometry.js?v=20261009-smooth-v2';
export function shaderProgram(gl,vertex,fragment){
 const program=gl.createProgram();for(const [type,source] of [[gl.VERTEX_SHADER,vertex],[gl.FRAGMENT_SHADER,fragment]]){const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));gl.attachShader(program,s);gl.deleteShader(s);}gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));return program;
}
const locations=(gl,p,uniforms,attributes)=>Object.fromEntries([...uniforms.map(n=>[n,gl.getUniformLocation(p,n)]),...attributes.map(n=>[n,gl.getAttribLocation(p,n)])]);
const fragment='precision mediump float;varying vec3 shade;uniform float opacity;void main(){gl_FragColor=vec4(shade,opacity);}';
export class BuildingRenderer{
 constructor(gl){
  this.gl=gl;this.ext=gl.getExtension('ANGLE_instanced_arrays');this.batches=[];this.hidden=new Set();this.done=0;this.generation=0;this.index=null;
  this.detailProgram=shaderProgram(gl,`attribute vec3 position;attribute vec3 color;uniform mat4 matrix;uniform vec3 offset;uniform float scale;uniform float heightScale;varying vec3 shade;void main(){gl_Position=matrix*vec4(position.xy*scale+offset.xy,position.z*heightScale,1.0);shade=color;}`,fragment);
  if(this.ext)this.overviewProgram=shaderProgram(gl,`attribute vec3 vertex;attribute vec4 bounds;attribute vec3 info;uniform mat4 matrix;uniform vec3 offset;uniform float xyScale;uniform float heightScale;varying vec3 shade;void main(){vec3 p=vec3((bounds.xy+vertex.xy*bounds.zw)*xyScale+offset.xy,info.y>1.5?.05*heightScale:vertex.z*info.x*heightScale);gl_Position=matrix*vec4(p,1.0);if(info.z<.5)gl_Position=vec4(2.0,2.0,2.0,1.0);shade=info.y<.5?vec3(.67,.55,.32):info.y<1.5?vec3(.59,.45,.32):vec3(.45,.44,.38);shade*=.64+vertex.z*.36;}`,fragment);
  this.detailLocations=locations(gl,this.detailProgram,['matrix','offset','scale','heightScale','opacity'],['position','color']);if(this.ext)this.overviewLocations=locations(gl,this.overviewProgram,['matrix','offset','xyScale','heightScale','opacity'],['vertex','bounds','info']);
 }
 async loadOverview(){
  if(!this.ext)throw new Error('此裝置缺少大量模型繪製能力，請切換平面地圖。');
  const [ir,br]=await Promise.all([fetch('./assets/data/building-overview-index.json'),fetch('./assets/data/building-overview.bin')]);if(!ir.ok||!br.ok)throw new Error('建築總覽讀取失敗');const index=await ir.json(),raw=await br.arrayBuffer();if(raw.byteLength!==index.count*32)throw new Error('建築總覽長度不符');
  const gl=this.gl;this.index=index;this.records=new Float32Array(raw);this.lookup=new Map(index.ids.map((id,i)=>[id,i]));this.instances=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this.instances);
  const cells=new Map(),cellSize=.002;
  for(let i=0;i<index.count;i++){const j=i*8,r=this.records,key=`${Math.floor(r[j]/cellSize)},${Math.floor(r[j+1]/cellSize)}`;let cell=cells.get(key);if(!cell){cell={key,indices:[],bounds:[Infinity,Infinity,-Infinity,-Infinity,0,0]};cells.set(key,cell);}cell.indices.push(i);const b=cell.bounds;b[0]=Math.min(b[0],r[j]-r[j+2]/2);b[1]=Math.min(b[1],r[j+1]-r[j+3]/2);b[2]=Math.max(b[2],r[j]+r[j+2]/2);b[3]=Math.max(b[3],r[j+1]+r[j+3]/2);b[5]=Math.max(b[5],r[j+4]);}
  this.cells=[...cells.values()].sort((a,b)=>a.bounds[0]-b.bounds[0]||a.bounds[1]-b.bounds[1]);this.packed=new Float32Array(this.records.length);this.packedLookup=new Uint32Array(index.count);let cursor=0;
  for(const cell of this.cells){cell.start=cursor;cell.count=cell.indices.length;for(const i of cell.indices){this.packed.set(this.records.subarray(i*8,i*8+8),cursor*8);this.packedLookup[i]=cursor++;}delete cell.indices;}
  gl.bufferData(gl.ARRAY_BUFFER,this.packed,gl.DYNAMIC_DRAW);
  const v=[[-.5,-.5,0],[.5,-.5,0],[.5,.5,0],[-.5,.5,0],[-.5,-.5,1],[.5,-.5,1],[.5,.5,1],[-.5,.5,1]],cube=[];for(const [a,b,c,d]of [[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]])for(const n of [a,b,c,a,c,d])cube.push(...v[n]);this.cube=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this.cube);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(cube),gl.STATIC_DRAW);this.roof=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,this.roof);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(cube.slice(-18)),gl.STATIC_DRAW);this.hiddenDetail=false;return index;
 }
 clearRegion(){this.generation++;for(const b of this.batches)this.gl.deleteBuffer(b.buffer);this.batches=[];this.done=0;this.data=null;this.work=null;this.detailIds=null;this.hiddenDetail=false;this.setHidden(new Set());}
 setHidden(ids){
  if(!this.records)return;if(ids===this.hidden)return;let changed=false;
  for(const id of this.hidden){if(ids.has(id))continue;const i=this.lookup.get(id);if(i==null)continue;this.records[i*8+6]=1;this.packed[this.packedLookup[i]*8+6]=1;changed=true;}
  for(const id of ids){if(this.hidden.has(id))continue;const i=this.lookup.get(id);if(i==null)continue;this.records[i*8+6]=0;this.packed[this.packedLookup[i]*8+6]=0;changed=true;}
  this.hidden=ids;if(changed){const gl=this.gl;gl.bindBuffer(gl.ARRAY_BUFFER,this.instances);gl.bufferData(gl.ARRAY_BUFFER,this.packed,gl.DYNAMIC_DRAW);}
 }
 prepareRegion(data,onProgress){
  this.clearRegion();this.data=data;this.regionOrigin=mercator([data.spot.coords[1],data.spot.coords[0]]);this.localMetres=metresPerPixel(data.spot.coords[0],0);this.work=data.prepared.slice().sort((a,b)=>Math.floor(a.origin[0]/.0005)-Math.floor(b.origin[0]/.0005)||a.origin[1]-b.origin[1]);this.detailIds=new Set(data.features.map(f=>f.id));const token=this.generation;
  const work=()=>{if(token!==this.generation)return;const begin=this.done,deadline=performance.now()+4,array=[];let until=Math.min(data.prepared.length,begin+96);const bounds=[Infinity,Infinity,-Infinity,-Infinity,0,0];
   for(let i=begin;i<until;i++){const b=this.work[i];Object.assign(b,prepareBuilding(b.feature));bounds[0]=Math.min(bounds[0],b.origin[0]+b.bounds[0]-this.regionOrigin[0]);bounds[1]=Math.min(bounds[1],this.regionOrigin[1]-b.origin[1]+b.bounds[1]);bounds[2]=Math.max(bounds[2],b.origin[0]+b.bounds[2]-this.regionOrigin[0]);bounds[3]=Math.max(bounds[3],this.regionOrigin[1]-b.origin[1]+b.bounds[3]);bounds[5]=Math.max(bounds[5],b.height.metres);const color=b.height.kind==='source'?[.77,.65,.4]:b.height.kind==='estimated'?[.70,.5,.36]:[.5,.5,.42];
    for(const tri of b.triangles){if(b.height.kind==='missing'&&tri.some(p=>p[2]===0))continue;const side=tri.every(p=>p[2]===1)?1:.7;
     for(const p of tri)array.push(b.origin[0]+p[0]-this.regionOrigin[0],this.regionOrigin[1]-b.origin[1]+p[1],b.height.kind==='missing'?.05:p[2]*b.height.metres,...color.map(v=>v*side));}
    if(performance.now()>=deadline){until=i+1;break;}
   }
   const gl=this.gl,buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(array),gl.STATIC_DRAW);this.batches.push({buffer,count:array.length/6,bounds});this.done=until;onProgress(this.done,data.prepared.length);
   if(until<data.prepared.length)this.timer=setTimeout(work,8);
  };this.timer=setTimeout(work,0);
 }
 draw({scene,map,w,h,left,top,opacity,multiplier=1,simple=false}){
  const gl=this.gl,mpp=metresPerPixel(map.center[0],map.zoom),p=this.overviewProgram,xyScale=2**map.zoom,heightScale=multiplier/mpp,planes=frustumPlanes(scene.matrix);
  const details=!!this.data&&!simple&&map.zoom>=14.5;
  const hide=details&&this.done===this.data.features.length;
  if(hide!==this.hiddenDetail){this.setHidden(hide?this.detailIds:new Set());this.hiddenDetail=hide;}
  let overviewVisible=0,detailVertices=0,drawCalls=0;
  const visible=(b,offset)=>boxVisible(planes,[b[0]*xyScale+offset[0],b[1]*xyScale+offset[1],b[2]*xyScale+offset[0],b[3]*xyScale+offset[1],0,Math.max(.05,b[5])*heightScale]);
  if(this.index){const loc=this.overviewLocations,offset=[this.index.originMercator[0]*xyScale-left-w/2,h/2-(this.index.originMercator[1]*xyScale-top),0];gl.useProgram(p);gl.uniformMatrix4fv(loc.matrix,false,scene.matrix);gl.uniform3fv(loc.offset,offset);gl.uniform1f(loc.xyScale,xyScale);gl.uniform1f(loc.heightScale,heightScale);gl.uniform1f(loc.opacity,opacity);
   const attrs=[];const attr=(name,size,stride,offset,divisor)=>{const a=loc[name];gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,size,gl.FLOAT,false,stride,offset);this.ext.vertexAttribDivisorANGLE(a,divisor);if(!attrs.includes(a))attrs.push(a);};
   const overviewVertices=map.zoom<12?6:30;map.element.dataset.overviewTemplateVertices=String(overviewVertices);gl.bindBuffer(gl.ARRAY_BUFFER,map.zoom<12?this.roof:this.cube);attr('vertex',3,12,0,0);gl.bindBuffer(gl.ARRAY_BUFFER,this.instances);gl.depthMask(false);
   const ranges=[];for(const cell of this.cells){if(!visible(cell.bounds,offset))continue;const previous=ranges.at(-1);if(previous&&previous.start+previous.count===cell.start)previous.count+=cell.count;else ranges.push({start:cell.start,count:cell.count});overviewVisible+=cell.count;}
   for(const range of ranges){attr('bounds',4,32,range.start*32,1);attr('info',3,32,range.start*32+16,1);this.ext.drawArraysInstancedANGLE(gl.TRIANGLES,0,overviewVertices,range.count);drawCalls++;}
   for(const a of attrs){this.ext.vertexAttribDivisorANGLE(a,0);gl.disableVertexAttribArray(a);}gl.depthMask(true);
  }
  if(details){const dp=this.detailProgram,loc=this.detailLocations,offset=[this.regionOrigin[0]*xyScale-left-w/2,h/2-(this.regionOrigin[1]*xyScale-top),0];gl.useProgram(dp);gl.uniformMatrix4fv(loc.matrix,false,scene.matrix);gl.uniform3fv(loc.offset,offset);gl.uniform1f(loc.scale,xyScale);gl.uniform1f(loc.heightScale,heightScale);gl.uniform1f(loc.opacity,opacity);gl.depthMask(false);
   const a=loc.position,c=loc.color;gl.enableVertexAttribArray(a);gl.enableVertexAttribArray(c);for(const batch of this.batches){if(!visible(batch.bounds,offset))continue;gl.bindBuffer(gl.ARRAY_BUFFER,batch.buffer);gl.vertexAttribPointer(a,3,gl.FLOAT,false,24,0);gl.vertexAttribPointer(c,3,gl.FLOAT,false,24,12);gl.drawArrays(gl.TRIANGLES,0,batch.count);detailVertices+=batch.count;drawCalls++;}gl.disableVertexAttribArray(a);gl.disableVertexAttribArray(c);gl.depthMask(true);
  }
  map.element.dataset.overviewSubmitted=String(overviewVisible);map.element.dataset.detailVertices=String(detailVertices);map.element.dataset.buildingDrawCalls=String(drawCalls);
 }

 dispose(){this.clearRegion();clearTimeout(this.timer);for(const p of [this.detailProgram,this.overviewProgram])if(p)this.gl.deleteProgram(p);for(const b of [this.instances,this.cube,this.roof])if(b)this.gl.deleteBuffer(b);}
}
