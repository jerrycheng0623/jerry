import earcut from './vendor/earcut.js';
export const metresPerPixel=(latitude,zoom)=>40075016.68557849*Math.cos(latitude*Math.PI/180)/(256*2**zoom);
export function heightInfo(properties){
 const h=Number(properties.height),levels=Number(properties.levels);
 if(properties.height!=null&&Number.isFinite(h)&&h>0&&h!==9999)return {metres:h,kind:'source',label:'來源高度'};
 if(properties.levels!=null&&Number.isFinite(levels)&&Number.isInteger(levels)&&levels>0&&levels<9999)return {metres:levels*3,kind:'estimated',label:'估算高度（每層 3 公尺）'};
 return {metres:0,kind:'missing',label:'尚無高度資料；僅顯示輪廓'};
}
export const mercator=([lon,lat])=>[(lon+180)/360*256,(1-Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))/Math.PI)/2*256];
export function appendTriangle(out,a,b,c,color){
 const u=b.map((v,i)=>v-a[i]),v=c.map((n,i)=>n-a[i]),n=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]],len=Math.hypot(...n)||1;
 for(const p of [a,b,c])out.push(...p,...n.map(x=>x/len),...color,0,0);
}
export function buildingBounds(feature){
 const polygons=feature.geometry.type==='Polygon'?[feature.geometry.coordinates]:feature.geometry.coordinates;
 const origin=mercator(polygons[0][0][0]),bounds=[Infinity,Infinity,-Infinity,-Infinity];
 for(const poly of polygons)for(const ring of poly)for(const p of ring){const q=mercator(p),x=q[0]-origin[0],y=origin[1]-q[1];bounds[0]=Math.min(bounds[0],x);bounds[1]=Math.min(bounds[1],y);bounds[2]=Math.max(bounds[2],x);bounds[3]=Math.max(bounds[3],y);}
 return {feature,origin,bounds,height:heightInfo(feature.properties)};
}
export function prepareBuilding(feature){
 const polygons=feature.geometry.type==='Polygon'?[feature.geometry.coordinates]:feature.geometry.coordinates;
 const origin=mercator(polygons[0][0][0]),height=heightInfo(feature.properties),triangles=[],rings=[];
 for(const polygon of polygons){
  const flat=[],holes=[];let count=0;
  polygon.forEach((ring,i)=>{if(i)holes.push(count);const r=ring.slice(0,-1).map(p=>{const q=mercator(p);return [q[0]-origin[0],origin[1]-q[1]];});rings.push(r);for(const p of r){flat.push(...p);count++;}});
  const indices=earcut(flat,holes,2);
  for(let i=0;i<indices.length;i+=3)triangles.push(indices.slice(i,i+3).map(n=>[flat[n*2],flat[n*2+1],1]));
  for(const ring of rings.slice(rings.length-polygon.length))for(let i=0;i<ring.length;i++){const a=ring[i],b=ring[(i+1)%ring.length];triangles.push([[...a,0],[...b,0],[...b,1]],[[...a,0],[...b,1],[...a,1]]);}
 }
 const points=rings.flat(),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
 return {feature,origin,height,triangles,rings,bounds:[Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]};
}
export function depthAt(matrix,p){const v=[...p,1];let z=0,w=0;for(let i=0;i<4;i++){z+=matrix[i*4+2]*v[i];w+=matrix[i*4+3]*v[i];}return w>0?z/w:Infinity;}
export function triangleHit(x,y,points){
 const [a,b,c]=points,d=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1]);if(Math.abs(d)<1e-7)return null;
 const u=((b[1]-c[1])*(x-c[0])+(c[0]-b[0])*(y-c[1]))/d,v=((c[1]-a[1])*(x-c[0])+(a[0]-c[0])*(y-c[1]))/d;
 return u>=0&&v>=0&&u+v<=1?[u,v,1-u-v]:null;
}
export function ribbon(out,a,b,width,color){const d=Math.hypot(b[0]-a[0],b[1]-a[1]);if(!d)return;const n=[-(b[1]-a[1])*width/d,(b[0]-a[0])*width/d],p=(a,s)=>[a[0]+s*n[0],a[1]+s*n[1],a[2]];appendTriangle(out,p(a,1),p(b,1),p(b,-1),color);appendTriangle(out,p(a,1),p(b,-1),p(a,-1),color);}
export function trainMesh(x,y,z,angle=0,color=[1,.6,.1]){
 const out=[],p=([a,b,c])=>[x+a*Math.cos(angle)-b*Math.sin(angle),y+a*Math.sin(angle)+b*Math.cos(angle),z+c];
 // A compact generic three-car design. These are illustration dimensions, not measurements.
 for(let car=-1;car<=1;car++){const c=car*16;const v=[[-7+c,-4,0],[7+c,-4,0],[7+c,4,0],[-7+c,4,0],[-7+c,-4,7],[7+c,-4,7],[7+c,4,7],[-7+c,4,7]].map(p);
  for(const [a,b,c,d] of [[0,1,5,4],[1,2,6,5],[2,3,7,6],[3,0,4,7],[4,5,6,7]]){appendTriangle(out,v[a],v[b],v[c],color);appendTriangle(out,v[a],v[c],v[d],color);}
  for(let i=-1;i<=1;i++){const a=p([car*16+i*4-1.3,-4.1,2]),b=p([car*16+i*4+1.3,-4.1,2]),c=p([car*16+i*4+1.3,-4.1,5]),d=p([car*16+i*4-1.3,-4.1,5]);appendTriangle(out,a,b,c,[.07,.12,.16]);appendTriangle(out,a,c,d,[.07,.12,.16]);}
 }return out;
}

export function buildingVertex(b,p,{zoom,centerLat,left,top,w,h,multiplier=1},forGL=false){
 const scale=2**zoom,x=(b.origin[0]+p[0])*scale-left,y=(b.origin[1]-p[1])*scale-top,z=p[2]*b.height.metres/metresPerPixel(centerLat,zoom)*multiplier;
 return forGL?[x-w/2,h/2-y,z]:[x,y,z];
}
