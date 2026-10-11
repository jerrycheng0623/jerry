import earcut from './vendor/earcut.js';
import {groundOrigin,groundOutline,tilePolygon} from './map-frustum.js?v=20261009-smooth-v2';
// Native WebGL: a flat geographic surface and illustrative ginkgo meshes.
// Tree sizes, branch layout and leaf counts are design units, not field measurements.
import {stages} from './leaf.js?v=20261009-smooth-v2';
export function multiply(a,b){const o=new Float32Array(16);for(let c=0;c<4;c++)for(let r=0;r<4;r++)for(let k=0;k<4;k++)o[c*4+r]+=a[k*4+r]*b[c*4+k];return o;}
const dot=(a,b)=>a.reduce((s,v,i)=>s+v*b[i],0);
const cross=(a,b)=>[a[1]*b[2]-a[2]*b[1],a[2]*b[0]-a[0]*b[2],a[0]*b[1]-a[1]*b[0]];
const normalize=a=>{const l=Math.hypot(...a)||1;return a.map(v=>v/l);};
export function cameraMatrix(w,h,yaw=0,tilt=48,street=null){
 const p=tilt*Math.PI/180,a=yaw*Math.PI/180,d=Math.max(w*.95,h*1.6),eye=[Math.sin(a)*d*Math.sin(p),-Math.cos(a)*d*Math.sin(p),d*Math.cos(p)];
 if(street){eye[0]=0;eye[1]=0;eye[2]=1.7/street.mpp;}
 const target=street?[Math.sin(a)*100/street.mpp,Math.cos(a)*100/street.mpp,1.6/street.mpp]:[0,0,0];
 const z=normalize(eye.map((n,i)=>n-target[i])),x=normalize(cross([0,0,1],z)),y=cross(z,x);
 const view=new Float32Array([x[0],y[0],z[0],0,x[1],y[1],z[1],0,x[2],y[2],z[2],0,-dot(x,eye),-dot(y,eye),-dot(z,eye),1]);
 const fov=street?Math.max(20,Math.min(70,42*2**(20-(street.zoom??20)))):42;
 const f=1/Math.tan(fov*Math.PI/360),near=street?.1/street.mpp:1,far=street?5000/street.mpp:d*8;
 const projection=new Float32Array([f/(w/h),0,0,0,0,f,0,0,0,0,(far+near)/(near-far),-1,0,0,2*far*near/(near-far),0]);
 return multiply(projection,view);
}
export function screenPoint(m,p,w,h){const v=[...p,1],q=[0,0,0,0];for(let r=0;r<4;r++)for(let c=0;c<4;c++)q[r]+=m[c*4+r]*v[c];return [(q[0]/q[3]+1)*w/2,(1-q[1]/q[3])*h/2];}
const rgb=hex=>[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
function triangle(out,a,b,c,color){const normal=normalize(cross(b.map((n,i)=>n-a[i]),c.map((n,i)=>n-a[i])));for(const v of [a,b,c])out.push(...v,...normal,...color);}
function cylinder(out,a,b,r,color){
 const axis=normalize(b.map((n,i)=>n-a[i])),u=normalize(cross(axis,Math.abs(axis[2])>.9?[1,0,0]:[0,0,1])),v=cross(axis,u);
 for(let i=0;i<8;i++){const point=(p,n)=>p.map((n0,k)=>n0+r*(u[k]*Math.cos(n*Math.PI/4)+v[k]*Math.sin(n*Math.PI/4)));const aa=point(a,i),ab=point(a,i+1),ba=point(b,i),bb=point(b,i+1);triangle(out,aa,ab,bb,color);triangle(out,aa,bb,ba,color);triangle(out,a,ab,aa,color);triangle(out,b,ba,bb,color);}
}
export function treeMesh(x,y,stage='unknown',selected=false,detail='full'){
 const out=[],brown=[.40,.29,.16],color=stage==='unknown'?[.90,.68,.27]:rgb((stages.find(s=>s.id===stage)||stages.at(-1)).color);
 cylinder(out,[x,y,1],[x,y,105],4.8,brown);
 const bare=stage==='dormant',young=stage==='bud'||stage==='young';
 for(let level=0;level<6;level++)for(let b=0;b<7;b++){
  const angle=b*Math.PI*2/7+level*.72,r=32-level*4,z=35+level*12;
  const end=[x+Math.cos(angle)*r,y+Math.sin(angle)*r,z+9];
  cylinder(out,[x,y,z-8],end,1.05,brown);
  if(bare)continue;
  const count=detail==='low'?(stage==='falling'?1:young?2:3):(stage==='falling'?2:young?6:14),segments=detail==='low'?4:8;
  for(let j=0;j<count;j++){
   const a=angle+j*2.399,spread=young?8:16,leaf=[end[0]+Math.cos(a)*spread*(.5+j/count),end[1]+Math.sin(a)*spread*(.5+j/count),end[2]+Math.sin(j*1.3)*8],size=young?6:14;
   // A fan blade with a shallow split, a petiole, front and reverse faces.
   const base=[leaf[0],leaf[1],leaf[2]-size*.7],arc=[];
   for(let k=0;k<=segments;k++){const t=-1.18+k*2.36/segments,s=k===segments/2?.78:1;arc.push([leaf[0]+Math.sin(t)*size*s,leaf[1]+Math.cos(a)*Math.sin(t)*size*.45,leaf[2]+Math.cos(t)*size*s]);}
   const shade=color.map(v=>v*(.68+(j%4)*.10));
   for(let k=0;k<segments;k++){triangle(out,base,arc[k],arc[k+1],shade);triangle(out,base,arc[k+1],arc[k],shade);}
  }
 }
 if(selected)for(let i=0;i<40;i++){const a=i*Math.PI/20,b=(i+1)*Math.PI/20,p=(r,t)=>[x+r*Math.cos(t),y+r*Math.sin(t),1.4];triangle(out,p(34,a),p(37,a),p(37,b),[1,.79,.36]);triangle(out,p(34,a),p(37,b),p(34,b),[1,.79,.36]);}
 let maxZ=0;for(let i=2;i<out.length;i+=9)maxZ=Math.max(maxZ,out[i]);for(let i=2;i<out.length;i+=9)out[i]*=105/maxZ;
 return out;
}
export class GinkgoScene {
 constructor(element,onLost){
  this.canvas=document.createElement('canvas');this.canvas.className='scene-3d';this.canvas.setAttribute('aria-hidden','true');
  const gl=this.canvas.getContext('webgl',{alpha:true,antialias:true,preserveDrawingBuffer:false});
  if(!gl)throw new Error('此裝置無法使用 WebGL 立體地圖');
  this.gl=gl;this.yaw=0;this.tilt=48;this.meshCache=new Map();this.gpuMeshes=new Map();this.tileTextures=new Map();this.textureUploads=0;
  this.canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();onLost();});
  const shader=(type,source)=>{const s=gl.createShader(type);gl.shaderSource(s,source);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw new Error(gl.getShaderInfoLog(s));return s;};
  const program=gl.createProgram();gl.attachShader(program,shader(gl.VERTEX_SHADER,`attribute vec3 position;attribute vec3 normal;attribute vec3 color;attribute vec2 uv;uniform mat4 matrix;uniform vec3 offset;uniform float modelScale;varying vec3 shade;varying vec2 tex;void main(){gl_Position=matrix*vec4(position*modelScale+offset,1.0);shade=color*(0.64+0.36*abs(dot(normalize(normal),normalize(vec3(-.3,-.4,1.0)))));tex=uv;}`));
  gl.attachShader(program,shader(gl.FRAGMENT_SHADER,`precision mediump float;uniform sampler2D image;uniform bool ground;uniform float opacity;varying vec3 shade;varying vec2 tex;void main(){if(ground){vec4 c=texture2D(image,tex);if(c.a<.1)discard;float v=1.0-dot(c.rgb,vec3(.299,.587,.114));gl_FragColor=vec4(vec3(.12,.15,.12)+v*vec3(.49,.43,.25),opacity);}else gl_FragColor=vec4(shade,opacity);}`));
  gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw new Error(gl.getProgramInfoLog(program));
  this.program=program;this.buffer=gl.createBuffer();this.texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  this.locations={};for(const name of ['matrix','offset','modelScale','opacity','ground'])this.locations[name]=gl.getUniformLocation(program,name);for(const name of ['position','normal','color','uv'])this.locations[name]=gl.getAttribLocation(program,name);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,1,1,0,gl.RGBA,gl.UNSIGNED_BYTE,new Uint8Array([187,195,160,255]));
  element.prepend(this.canvas);
 }
 configure(w,h,mpp=1,zoom=20){this.w=w;this.h=h;this.mpp=mpp;this.matrix=cameraMatrix(w,h,this.yaw,this.tilt,this.street?{mpp,zoom}:null);}
 point(x,y,z=0){return screenPoint(this.matrix,[x-this.w/2,this.h/2-y,z],this.w,this.h);}
 groundDelta(dx,dy){if(this.street){const a=this.yaw*Math.PI/180;return [dx*Math.cos(a)-dy*Math.sin(a),-dx*Math.sin(a)-dy*Math.cos(a)];}const a=this.point(this.w/2,this.h/2),b=this.point(this.w/2+1,this.h/2),c=this.point(this.w/2,this.h/2+1),bx=b[0]-a[0],by=b[1]-a[1],cx=c[0]-a[0],cy=c[1]-a[1],d=bx*cy-by*cx;return [(dx*cy-dy*cx)/d,(dy*bx-dx*by)/d];}
 draw({w,h,tiles,left,top,outline,trees,route,city,tileSize=256,mpp=1,zoom=20}){
  this.configure(w,h,mpp,zoom);const gl=this.gl,dpr=Math.min(devicePixelRatio||1,1.5,Math.sqrt(1800000/(w*h))),cw=Math.round(w*dpr),ch=Math.round(h*dpr);if(this.canvas.width!==cw)this.canvas.width=cw;if(this.canvas.height!==ch)this.canvas.height=ch;gl.viewport(0,0,cw,ch);
  gl.clearColor(.035,.045,.039,1);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);gl.enable(gl.DEPTH_TEST);gl.useProgram(this.program);gl.uniformMatrix4fv(this.locations.matrix,false,this.matrix);
  let vertices=0;
  const draw=(array,ground,offset=[0,0,0],modelScale=1,cacheKey=null,opacity=1)=>{
   gl.useProgram(this.program);gl.uniformMatrix4fv(this.locations.matrix,false,this.matrix);
   const cached=cacheKey&&this.gpuMeshes.get(cacheKey),buffer=cached?.buffer||(cacheKey?gl.createBuffer():this.buffer);
   gl.bindBuffer(gl.ARRAY_BUFFER,buffer);if(!cached)gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(array),cacheKey?gl.STATIC_DRAW:gl.DYNAMIC_DRAW);
   const count=cached?.count||array.length/11;if(cacheKey&&!cached)this.gpuMeshes.set(cacheKey,{buffer,count});
   for(const [name,size,offset] of [['position',3,0],['normal',3,12],['color',3,24],['uv',2,36]]){const a=this.locations[name];gl.enableVertexAttribArray(a);gl.vertexAttribPointer(a,size,gl.FLOAT,false,44,offset);}
   gl.uniform3fv(this.locations.offset,offset);gl.uniform1f(this.locations.modelScale,modelScale);
   gl.uniform1f(this.locations.opacity,opacity);gl.uniform1i(this.locations.ground,ground?1:0);gl.drawArrays(gl.TRIANGLES,0,count);if(!ground)vertices+=count;
  };
  const meshFor=polygon=>{const flat=polygon.flat(),indices=earcut(flat,[],2),array=[];for(const i of indices){const [x,y]=polygon[i];array.push(x,y,0,0,0,1,1,1,1,x,y);}return array;};
  if(city){gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);}
  // The background is the entire Tokyo polygon, never a viewport-sized quad.
  if(!this.groundMesh)this.groundMesh=meshFor(groundOutline.map(p=>[p[0]-groundOrigin[0],groundOrigin[1]-p[1]]));
  gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.depthMask(false);gl.disable(gl.DEPTH_TEST);
  draw(this.groundMesh,true,[groundOrigin[0]*2**zoom-left-w/2,h/2-(groundOrigin[1]*2**zoom-top),0],2**zoom,'tokyo-ground');
  const active=new Set([...tiles].filter(([,i])=>i.dataset.active!=='false').map(([key])=>key)),ancestors=new Set();
  for(const key of active){if(tiles.get(key)?.dataset.loadState==='ready'){ancestors.add(key);continue;}let [z,x,y]=key.split('/').map(Number);while(z>=8){ancestors.add(`${z}/${x}/${y}`);z--;x=Math.floor(x/2);y=Math.floor(y/2);}}
  for(const [key,image] of [...tiles].sort((a,b)=>Number(a[0].split('/')[0])-Number(b[0].split('/')[0]))){
   if(image.dataset.loadState!=='ready'||!ancestors.has(key))continue;
   let cached=this.tileTextures.get(key);
   if(!cached||cached.image!==image){if(cached)gl.deleteTexture(cached.texture);const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,image);if(image.naturalWidth>0&&(image.naturalWidth&(image.naturalWidth-1))===0&&(image.naturalHeight&(image.naturalHeight-1))===0){gl.generateMipmap(gl.TEXTURE_2D);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);}cached={texture,image};this.tileTextures.set(key,cached);this.textureUploads++;}
   gl.bindTexture(gl.TEXTURE_2D,cached.texture);const [z,x,y]=key.split('/').map(Number),size=256*2**(zoom-z),gpuKey='tile:'+key;
   if(!this.meshCache.has(gpuKey))this.meshCache.set(gpuKey,meshFor(tilePolygon(key)));
   draw(this.meshCache.get(gpuKey),true,[x*size-left-w/2,h/2-((y+1)*size-top),0],size,gpuKey);
  }
  for(const [key,cached] of this.tileTextures)if(!tiles.has(key)){gl.deleteTexture(cached.texture);this.tileTextures.delete(key);const gpuKey='tile:'+key,mesh=this.gpuMeshes.get(gpuKey);if(mesh)gl.deleteBuffer(mesh.buffer);this.gpuMeshes.delete(gpuKey);this.meshCache.delete(gpuKey);}
  // Paint coplanar tiles in order without comparing their rounded depth values.
  // Then establish the Tokyo ground depth once, avoiding rectangular z-fighting.
  gl.enable(gl.DEPTH_TEST);gl.depthMask(true);gl.colorMask(false,false,false,false);gl.bindTexture(gl.TEXTURE_2D,this.texture);gl.enable(gl.POLYGON_OFFSET_FILL);gl.polygonOffset(1,1);
  draw(this.groundMesh,true,[groundOrigin[0]*2**zoom-left-w/2,h/2-(groundOrigin[1]*2**zoom-top),0],2**zoom,'tokyo-ground');
  gl.disable(gl.POLYGON_OFFSET_FILL);gl.colorMask(true,true,true,true);gl.depthFunc(gl.LESS);
  this.canvas.dataset.groundCoverage='東京完整邊界';this.canvas.dataset.textureUploads=String(this.textureUploads);this.canvas.dataset.textureCache=String(this.tileTextures.size);this.canvas.dataset.renderScale=dpr.toFixed(2);
  city?.draw3d({draw,gl,w,h,left,top});
  const meshes=[];
  for(const tree of trees){const detail=zoom<16?'low':'full',key=tree.stage+tree.selected+detail;if(!this.meshCache.has(key)){const mesh=treeMesh(0,0,tree.stage,tree.selected,detail),array=new Float32Array(mesh.length/9*11);for(let i=0,j=0;i<mesh.length;i+=9,j+=11)for(let k=0;k<9;k++)array[j+k]=mesh[i+k];this.meshCache.set(key,array);}draw(this.meshCache.get(key),false,[tree.x-w/2,h/2-tree.y,0],tree.scale||1,key);}
  if(route)for(let i=1;i<route.length;i++){
   if(!route[i-1]||!route[i])continue;
   const a=[route[i-1][0]-w/2,h/2-route[i-1][1],1.1],b=[route[i][0]-w/2,h/2-route[i][1],1.1],d=Math.hypot(b[0]-a[0],b[1]-a[1])||1,n=[-(b[1]-a[1])/d*2.3,(b[0]-a[0])/d*2.3],pa=[a[0]+n[0],a[1]+n[1],a[2]],pb=[b[0]+n[0],b[1]+n[1],b[2]],pc=[b[0]-n[0],b[1]-n[1],b[2]],pd=[a[0]-n[0],a[1]-n[1],a[2]],m=[];triangle(m,pa,pb,pc,[1,.8,.4]);triangle(m,pa,pc,pd,[1,.8,.4]);for(let k=0;k<m.length;k+=9)meshes.push(...m.slice(k,k+9),0,0);
  }
  if(meshes.length)draw(meshes,false);
  gl.depthMask(true);gl.disable(gl.BLEND);
  this.canvas.dataset.treeCount=String(trees.length);this.canvas.dataset.vertexCount=String(vertices);this.canvas.dataset.yaw=String(this.yaw);this.canvas.dataset.tilt=String(this.tilt);
 }
 dispose(){const gl=this.gl;for(const cached of this.tileTextures.values())gl.deleteTexture(cached.texture);for(const mesh of this.gpuMeshes.values())gl.deleteBuffer(mesh.buffer);gl.deleteBuffer(this.buffer);gl.deleteTexture(this.texture);gl.deleteProgram(this.program);this.canvas.remove();}
}
