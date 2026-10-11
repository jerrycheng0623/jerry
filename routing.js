export const routingInfo={name:'FOSSGIS／OSRM 步行服務',url:'https://routing.openstreetmap.de/about.html',base:'https://routing.openstreetmap.de/routed-foot'};
const cache=new Map();
let lastRequest=0;
async function request(path,signal) {
  if(signal?.aborted)throw new DOMException('已取消','AbortError');
  const url=`${routingInfo.base}/${path}`;
  if(cache.has(url))return cache.get(url);
  const wait=Math.max(0,1200-(Date.now()-lastRequest));
  if(wait)await new Promise(resolve=>setTimeout(resolve,wait));
  if(signal?.aborted)throw new DOMException('已取消','AbortError');
  lastRequest=Date.now();
  const response=await fetch(url,{signal,referrerPolicy:'strict-origin-when-cross-origin'});
  if(!response.ok)throw new Error('步行服務暫時無法使用');
  const result=await response.json();
  if(result.code!=='Ok')throw new Error(result.code==='NoRoute'?'找不到可步行的連接道路':'步行服務未能完成計算');
  cache.set(url,result);return result;
}
const coordinates=points=>points.map(p=>`${p.coords[1]},${p.coords[0]}`).join(';');
export async function walkingTable(points,signal) {
  const path=`table/v1/driving/${coordinates(points)}?annotations=duration,distance`;
  const result=await request(path,signal);
  const matrix=result.durations;
  if(!Array.isArray(matrix)||matrix.length!==points.length||matrix.some(row=>!Array.isArray(row)||row.length!==points.length||row.some(v=>v!==null&&(!Number.isFinite(v)||v<0)))){cache.delete(`${routingInfo.base}/${path}`);throw new Error('步行服務的時間表格式不完整，請重試');}
  return result;
}
export async function walkingRoute(points,signal) {
  const path=`route/v1/driving/${coordinates(points)}?overview=full&geometries=geojson&steps=true`;
  const result=await request(path,signal);
  const route=result.routes?.[0];
  if(!route||!Number.isFinite(route.distance)||route.distance<0||!Number.isFinite(route.duration)||route.duration<0||route.geometry?.type!=='LineString'||!Array.isArray(route.geometry.coordinates)||route.geometry.coordinates.length<2||route.geometry.coordinates.some(c=>!Array.isArray(c)||c.length<2||!Number.isFinite(c[0])||!Number.isFinite(c[1])||Math.abs(c[0])>180||Math.abs(c[1])>90)||!Array.isArray(route.legs)||route.legs.length!==points.length-1||route.legs.some(l=>!Number.isFinite(l.duration)||l.duration<0||!Number.isFinite(l.distance)||l.distance<0||!Array.isArray(l.steps)||l.steps.some(s=>!s||!Number.isFinite(s.distance)||s.distance<0))){cache.delete(`${routingInfo.base}/${path}`);throw new Error('步行服務的路線格式不完整，請重試');}
  return result;
}
export function distanceBetween(a,b) {
  const rad=Math.PI/180,dlat=(b[0]-a[0])*rad,dlon=(b[1]-a[1])*rad;
  const h=Math.sin(dlat/2)**2+Math.cos(a[0]*rad)*Math.cos(b[0]*rad)*Math.sin(dlon/2)**2;
  return 6371000*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h));
}
// Exact exhaustive comparison within at most six candidates; no global-optimal claim.
export function chooseOrder(matrix,count,{endIndex=null,budget=Infinity,stay=600,automatic=false,prefer='short',fixed=false}={}) {
  let best=null;
  function visit(order,remaining,walk) {
    const last=order.at(-1) || 0;
    const ending=endIndex===null?0:matrix[last][endIndex];
    if(ending===null||!Number.isFinite(ending))return;
    const total=walk+ending+order.length*stay;
    const complete=automatic?order.length>0:order.length===count;
    if(complete&&Number.isFinite(total)&&(!automatic||total<=budget)) {
      const candidate={order:[...order],walk:walk+ending,total};
      if(!best||(automatic&&prefer==='more'&&order.length>best.order.length)||(order.length===best.order.length&&total<best.total)||(automatic&&prefer!=='more'&&total<best.total))best=candidate;
    }
    if(fixed&&order.length) return;
    for(const next of remaining) {
      const segment=matrix[last][next];if(segment===null||!Number.isFinite(segment))continue;
      if(automatic&&walk+segment+(order.length+1)*stay>budget)continue;
      visit([...order,next],remaining.filter(n=>n!==next),walk+segment);
    }
  }
  if(fixed) {
    const order=Array.from({length:count},(_,i)=>i+1);let cost=0;
    for(let i=0;i<order.length;i++){const part=matrix[i?order[i-1]:0][order[i]];if(part===null||!Number.isFinite(part))return null;cost+=part;}
    const last=order.at(-1)||0,end=endIndex===null?0:matrix[last][endIndex];
    if(end===null||!Number.isFinite(end))return null;
    return{order,walk:cost+end,total:cost+end+count*stay};
  }
  visit([],Array.from({length:count},(_,i)=>i+1),0);return best;
}
export function directionText(step) {
  const type=step.maneuver?.type,modifier=step.maneuver?.modifier;
  const turn={left:'左轉',right:'右轉','slight left':'稍向左','slight right':'稍向右','sharp left':'向左急轉','sharp right':'向右急轉',straight:'直行',uturn:'迴轉'};
  const action=type==='depart'?'開始步行':type==='arrive'?'抵達此段終點':type==='roundabout'?'經過圓環':type==='end of road'?'道路盡頭':type==='continue'?'繼續前進':turn[modifier]||'沿道路前進';
  return `${action}${step.name?`，沿 ${step.name}`:''}`;
}
export function navigationLink(from,to,mode='walking') {
  const params=new URLSearchParams({api:'1',origin:from.coords.join(','),destination:to.coords.join(','),travelmode:mode});
  return `https://www.google.com/maps/dir/?${params}`;
}
