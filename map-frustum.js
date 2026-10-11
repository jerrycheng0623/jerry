// Clip in homogeneous camera space before dividing by W, including near/far planes.
import {mercator} from './city-geometry.js?v=20261009-smooth-v2';
import {tokyoOutline} from './tokyo-region.js?v=20261009-smooth-v2';
export const groundOrigin=mercator([139.5,35.7]);
export const groundOutline=tokyoOutline.map(mercator);
export function clipPolygon(poly,distance){
 const out=[];if(!poly.length)return out;let a=poly.at(-1),da=distance(a);
 for(const b of poly){const db=distance(b);if((da>=0)!==(db>=0)){const t=da/(da-db);out.push(a.map((v,i)=>v+(b[i]-v)*t));}if(db>=0)out.push(b);a=b;da=db;}return out;
}
export function clipRect(poly,[x0,y0,x1,y1]){for(const d of [p=>p[0]-x0,p=>x1-p[0],p=>p[1]-y0,p=>y1-p[1]])poly=clipPolygon(poly,d);return poly;}
export function frustumPlanes(matrix){const rows=[0,1,2,3].map(r=>[matrix[r],matrix[4+r],matrix[8+r],matrix[12+r]]);return [0,1,2].flatMap(r=>[1,-1].map(s=>rows[3].map((v,i)=>v+s*rows[r][i])));}
export function clipGround(poly,matrix){for(const p of frustumPlanes(matrix))poly=clipPolygon(poly,v=>p[0]*v[0]+p[1]*v[1]+p[3]);return poly;}
export function boxVisible(planes,[x0,y0,x1,y1,z0=0,z1=0]){return planes.every(p=>p[0]*(p[0]>=0?x1:x0)+p[1]*(p[1]>=0?y1:y0)+p[2]*(p[2]>=0?z1:z0)+p[3]>=-.01);}
export function projectedArea(poly,matrix,w,h){const points=poly.map(([x,y])=>{const q=matrix[3]*x+matrix[7]*y+matrix[15];return [(matrix[0]*x+matrix[4]*y+matrix[12])/q*w/2,(matrix[1]*x+matrix[5]*y+matrix[13])/q*h/2];});let area=0;for(let i=0;i<points.length;i++){const a=points[i],b=points[(i+1)%points.length];area+=a[0]*b[1]-b[0]*a[1];}return Math.abs(area/2);}
export function select3DTiles({matrix,zoom,left,top,w,h,maxZoom=19}){
 const scale=2**zoom,planes=frustumPlanes(matrix),needed=[];
 const visit=(z,x,y,polygon)=>{
  const size=256/2**z,rect=[x*size,y*size,(x+1)*size,(y+1)*size];
  const bounds=[rect[0]*scale-left-w/2,h/2-(rect[3]*scale-top),rect[2]*scale-left-w/2,h/2-(rect[1]*scale-top)];if(!boxVisible(planes,bounds))return;
  const clipped=clipRect(polygon,rect);if(clipped.length<3)return;
  const local=clipped.map(p=>[p[0]*scale-left-w/2,h/2-(p[1]*scale-top)]),visible=clipGround(local,matrix);if(visible.length<3)return;
  const area=projectedArea(visible,matrix,w,h);if(area<.25)return;
  // A tile is split according to its actual on-screen area, so distant ground
  // never requests the same resolution as streets close to the camera.
  if(z<maxZoom&&area>100000){for(let dy=0;dy<2;dy++)for(let dx=0;dx<2;dx++)visit(z+1,x*2+dx,y*2+dy,clipped);}else needed.push(`${z}/${x}/${y}`);
 };
 const xs=groundOutline.map(p=>p[0]),ys=groundOutline.map(p=>p[1]),root=8,size=256/2**root;
 for(let y=Math.floor(Math.min(...ys)/size);y<=Math.floor(Math.max(...ys)/size);y++)for(let x=Math.floor(Math.min(...xs)/size);x<=Math.floor(Math.max(...xs)/size);x++)visit(root,x,y,groundOutline);
 return needed;
}
export function tilePolygon(key){const [z,x,y]=key.split('/').map(Number),size=256/2**z;return clipRect(groundOutline,[x*size,y*size,(x+1)*size,(y+1)*size]).map(p=>[(p[0]-x*size)/size,1-(p[1]-y*size)/size]);}
