import {attachPerformanceCheck} from './map-performance.js?v=20261009-smooth-v2';
import {select3DTiles} from './map-frustum.js?v=20261009-smooth-v2';
import {leafSVG} from './leaf.js?v=20261009-smooth-v2';
import {GinkgoScene} from './scene3d.js?v=20261009-smooth-v2';
import {tokyoOutline,clampTokyo,insideTokyo} from './tokyo-region.js?v=20261009-smooth-v2';
export function clusterPoints(points,radius=56) {
  const groups=[];
  for(const point of points) {
    const group=groups.find(g=>Math.hypot(g.x-point.x,g.y-point.y)<radius);
    if(group){group.points.push(point);group.x=group.points.reduce((n,p)=>n+p.x,0)/group.points.length;group.y=group.points.reduce((n,p)=>n+p.y,0)/group.points.length;}
    else groups.push({x:point.x,y:point.y,points:[point]});
  }
  return groups;
}
// A small dependency-free Web Mercator tile map. No tile prefetching or bulk download.
export class GinkgoMap {
  constructor(element, options = {}) {
    this.element = element;
    this.label=options.label||'東京本土銀杏';
    this.zoomIn = options.zoomIn || document.querySelector('#zoom-in');
    this.zoomOut = options.zoomOut || document.querySelector('#zoom-out');
    this.onMapClick = options.onMapClick || (()=>{});
    this.tiles = element.querySelector('.tile-layer');
    this.markers = element.querySelector('.marker-layer');
    const localQA=location.hostname==='127.0.0.1'&&new URLSearchParams(location.search).get('testMap')==='local';
    this.template=options.tileUrl||(localQA?'./assets/qa-grid.svg':'https://tile.openstreetmap.org/{z}/{x}/{y}.png');
    if(localQA){element.dataset.testMap='local';document.querySelector('.map-label').textContent='本機測試底圖 · 非真實道路';}
    this.center = [35.690, 139.724];
    this.zoom = 13;
    this.minZoom = 9;this.maxZoom=22;this.zoomTarget=null;
    this.dragSensitivity = .55;
    this.mode = '2d';
    this.onModeChange = options.onModeChange || (()=>{});
    this.onNotice = options.onNotice || (()=>{});
    element.dataset.mapMode='2d';element.dataset.dragSensitivity='0.55';
    this.spots = [];
    this.selected = null;
    this.tileNodes = new Map();
    this.tileRequests = new Map();
    this.markerNodes = new Map();
    this.treeLeaders=document.createElementNS('http://www.w3.org/2000/svg','svg');this.treeLeaders.classList.add('tree-leaders');this.treeLeaders.setAttribute('aria-hidden','true');this.markers.before(this.treeLeaders);
    this.clusterLayer=document.createElement('div');this.clusterLayer.className='cluster-layer';this.markers.append(this.clusterLayer);
    this.routeLayer=document.createElement('div');this.routeLayer.className='route-map-layer';this.tiles.after(this.routeLayer);
    this.routeData=null;
    this.onSelect = options.onSelect || (() => {});
    this.onLoadState = options.onLoadState || (() => {});
    this.loaded = 0;
    this.failed = 0;
    this.frame = 0;
    this.pointers = new Map();
    if(localQA)attachPerformanceCheck(this);
    this.bind();
    this.observer = new ResizeObserver(() => {this.updateMinZoom();this.schedule();});
    this.observer.observe(element);
    this.schedule();
    this.slowTimer = setTimeout(() => {
      if (!this.loaded) this.onLoadState('slow');
    }, 6500);
  }
  project([lat, lon], zoom = this.zoom) {
    const size = 256 * 2 ** zoom;
    const phi = Math.max(-85.0511, Math.min(85.0511, lat)) * Math.PI / 180;
    return [(lon + 180) / 360 * size, (1 - Math.log(Math.tan(phi) + 1 / Math.cos(phi)) / Math.PI) / 2 * size];
  }
  unproject([x, y], zoom = this.zoom) {
    const size = 256 * 2 ** zoom;
    return [Math.atan(Math.sinh(Math.PI * (1 - 2 * y / size))) * 180 / Math.PI, x / size * 360 - 180];
  }
  schedule() {
    if (this.frame) return;
    this.frame = requestAnimationFrame(() => { this.frame = 0; this.render(); });
  }
  setSpots(spots, selected) {
    this.spots = spots;
    this.selected = selected;
    const ids = new Set(spots.map(s => s.id));
    for (const [id, node] of this.markerNodes) {
      if (!ids.has(id)) { node.remove(); this.markerNodes.delete(id); }
    }
    for (const spot of spots) {
      if (this.markerNodes.has(spot.id)) continue;
      const marker = document.createElement('button');
      marker.className = 'map-marker';
      marker.setAttribute('aria-label', `選取${spot.name}`);
      marker.dataset.spot = spot.id;
      const leaf = document.createElement('span');leaf.className='pin';
      const label = document.createElement('span'); label.className = 'marker-text'; label.textContent = spot.name;
      marker.append(leaf, label);
      marker.addEventListener('click', () => this.onSelect(spot.id));
      this.markers.append(marker);
      this.markerNodes.set(spot.id, marker);
    }
    for(const spot of spots) {
      const node=this.markerNodes.get(spot.id);
      node.querySelector('.pin').innerHTML=leafSVG(spot.leafStage||'unknown');
      const label=node.querySelector('.marker-text');label.replaceChildren();
      const name=document.createElement('span');name.textContent=spot.name;
      const status=document.createElement('small');status.textContent=spot.leafLabel||'當季葉況待更新';
      label.append(name,status);node.setAttribute('aria-label',`選取${spot.name}，${status.textContent}`);
    }
    this.schedule();
  }
  setRoute(data) {
    this.routeData=data;this.routeLayer.replaceChildren();
    if(data) {
      const ns='http://www.w3.org/2000/svg',svg=document.createElementNS(ns,'svg');svg.classList.add('route-map-svg');
      const halo=document.createElementNS(ns,'polyline');halo.classList.add('route-line-halo');
      const line=document.createElementNS(ns,'polyline');line.classList.add('route-line');svg.append(halo,line);this.routeLayer.append(svg);
      data.points.forEach((p,i)=>{const marker=document.createElement('div');marker.className='route-number';marker.textContent=i===0?'起':p.id.startsWith('end-')?'終':String(i);marker.setAttribute('aria-hidden','true');this.routeLayer.append(marker);});
    }
    this.schedule();
  }
  setSelected(id) { this.selected = id; this.schedule(); }
  setMode(mode) {
    if(mode==='3d'&&!this.scene) {
      try {this.scene=new GinkgoScene(this.element,()=>{this.scene.dispose();this.scene=null;this.setMode('2d');this.onNotice('立體繪圖已中斷，已切回平面地圖。');});}
      catch {this.onNotice('此裝置無法使用立體繪圖，請使用平面地圖。');return false;}
    }
    this.mode=mode==='3d'?'3d':'2d';
    this.element.dataset.mapMode=this.mode;
    this.element.setAttribute('aria-label',`${this.label}${this.mode==='3d'?'立體':'平面'}地圖，可慢速拖曳或用方向鍵移動`);
    this.onModeChange(this.mode);this.updateMinZoom();this.schedule();return true;
  }
  rotate(delta){if(this.scene){this.scene.yaw=(this.scene.yaw+delta+360)%360;this.updateMinZoom();this.schedule();}}
  tilt(degrees){if(this.scene){this.scene.street=degrees==='street';if(this.scene.street){const spot=this.spots.find(s=>s.id===this.selected);const c=spot?.coords||this.center;this.scene.yaw=0;this.flyTo([c[0]-.00027,c[1]],20);}else this.scene.tilt=Math.max(25,Math.min(60,Number(degrees)));this.updateMinZoom();this.schedule();}}
  north(){if(this.scene){this.scene.yaw=0;this.schedule();}}
  constrain(){this.center=clampTokyo(this.center);}
  flyTo(coords, zoom = this.zoom) {
    cancelAnimationFrame(this.zoomAnimation);this.zoomTarget=null;this.center=[...coords];this.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,zoom));
    if(this.element.clientWidth<700&&!this.scene?.street){const point=this.project(coords);this.center=this.unproject([point[0]-(this.mode==='3d'?this.element.clientWidth*.22:0),point[1]+this.element.clientHeight*(this.mode==='3d'?.08:.18)]);}
    this.constrain();this.schedule();
  }
  pan(dx, dy) {
    dx*=this.dragSensitivity;dy*=this.dragSensitivity;
    if(this.mode==='3d'&&this.scene?.matrix)[dx,dy]=this.scene.groundDelta(dx,dy);
    const center = this.project(this.center);
    this.center = this.unproject([center[0] - dx, center[1] - dy]);
    this.constrain();
    this.schedule();
  }
  tokyoFit(){
    const w=this.element.clientWidth||900,h=this.element.clientHeight||650;
    const points=tokyoOutline.map(([lon,lat])=>this.project([lat,lon],0)),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
    const center=this.unproject([(Math.min(...xs)+Math.max(...xs))/2,(Math.min(...ys)+Math.max(...ys))/2],0);
    let zoom=Math.log2(Math.min(Math.max(100,w-100)/(Math.max(...xs)-Math.min(...xs)),Math.max(100,h-210)/(Math.max(...ys)-Math.min(...ys))));
    if(this.mode==='3d'&&this.scene){const wasStreet=this.scene.street;this.scene.street=false;this.scene.configure(w,h);let lo=6,hi=zoom+2;for(let i=0;i<24;i++){const z=(lo+hi)/2,c=this.project(center,z),p=tokyoOutline.map(([lon,lat])=>{const n=this.project([lat,lon],z);return this.scene.point(n[0]-c[0]+w/2,n[1]-c[1]+h/2,0);});if(p.every(([x,y])=>x>=40&&x<=w-40&&y>=135&&y<=h-85))lo=z;else hi=z;}zoom=lo;this.scene.street=wasStreet;}
    return {center,zoom};
  }
  updateMinZoom(){const fit=this.tokyoFit();this.minZoom=fit.zoom;this.element.dataset.minZoom=String(fit.zoom);this.element.dataset.maxZoom=String(this.maxZoom);if(this.zoom<this.minZoom){this.zoom=this.minZoom;this.center=fit.center;}}
  overview(){cancelAnimationFrame(this.zoomAnimation);this.zoomTarget=null;if(this.scene){this.scene.street=false;this.scene.yaw=0;this.scene.tilt=25;}this.updateMinZoom();const fit=this.tokyoFit();this.center=fit.center;this.zoom=fit.zoom;this.schedule();}
  zoomBy(delta, anchor) {
    const start=this.zoom,target=Math.max(this.minZoom,Math.min(this.maxZoom,(this.zoomTarget??start)+delta*.42));
    cancelAnimationFrame(this.zoomAnimation);if(this.scene?.street&&target<18.5){this.scene.street=false;this.scene.tilt=60;const control=document.querySelector('#map-tilt');if(control)control.value='60';this.updateMinZoom();}this.zoomTarget=target;if(Math.abs(target-start)<.00001){this.zoomTarget=null;return;}
    const started=performance.now(),duration=260,c=this.project(this.center),w=this.element.clientWidth,h=this.element.clientHeight;
    const point=anchor&&this.mode==='2d'?this.unproject([c[0]+anchor[0]-w/2,c[1]+anchor[1]-h/2]):null;
    const intervals=[];let lastTick=started;const tick=now=>{intervals.push(now-lastTick);lastTick=now;const t=Math.min(1,(now-started)/duration),ease=t*t*(3-2*t);this.zoom=start+(target-start)*ease;if(point){const p=this.project(point);this.center=this.unproject([p[0]-anchor[0]+w/2,p[1]-anchor[1]+h/2]);}if(this.zoom<=this.minZoom+.00001){this.center=this.tokyoFit().center;}this.constrain();this.schedule();if(t<1)this.zoomAnimation=requestAnimationFrame(tick);else {this.zoomTarget=null;const sorted=intervals.slice().sort((a,b)=>a-b);this.element.dataset.zoomFrames=String(intervals.length);this.element.dataset.zoomElapsedMs=(now-started).toFixed(1);this.element.dataset.zoomFrameP95Ms=sorted[Math.min(sorted.length-1,Math.floor(sorted.length*.95))].toFixed(1);}};this.zoomAnimation=requestAnimationFrame(tick);
  }
  fit(spots = this.spots) {
    if (!spots.length) return;
    if (spots.length === 1&&!this.routeData) { this.flyTo(spots[0].coords, 14); return; }
    const coords=this.routeData?[...spots.map(s=>s.coords),...this.routeData.geometry]:spots.map(s=>s.coords);
    const lat = coords.map(p=>p[0]), lon = coords.map(p=>p[1]);
    this.center = [(Math.max(...lat) + Math.min(...lat)) / 2, (Math.max(...lon) + Math.min(...lon)) / 2];
    const w=this.element.clientWidth,h=this.element.clientHeight;
    const reservedBottom=this.routeData?(this.mode==='3d'?(w<700?160:140):(w<700?260:220)):75,reservedTop=this.mode==='3d'?170:75;
    const width = Math.max(130,w-140), height = Math.max(100,h-reservedTop-reservedBottom);
    this.zoom=this.minZoom;
    for (let z = 17; z >= this.minZoom; z-=.1) {
      const a = this.project([Math.min(...lat), Math.min(...lon)], z);
      const b = this.project([Math.max(...lat), Math.max(...lon)], z);
      if (Math.abs(a[0] - b[0]) <= width && Math.abs(a[1] - b[1]) <= height) { this.zoom = z; break; }
    }
    if(this.routeData){const c=this.project(this.center);this.center=this.unproject([c[0],c[1]+h/2-(reservedTop+height/2)]);}
    this.constrain();this.schedule();
  }
  retry() {
    for (const [key, image] of this.tileNodes) this.releaseTile(key, image);
    this.tileNodes.clear(); this.loaded = 0; this.failed = 0; this.schedule();
  }
  releaseTile(key, image) {
    this.tileRequests.get(key)?.abort();
    this.tileRequests.delete(key);
    if (image.tileBlobUrl) URL.revokeObjectURL(image.tileBlobUrl);
    image.tileBlobUrl = null;
    image.onload = image.onerror = null;
    image.remove();
  }
  reportLoadState() {
    const visible = [...this.tileNodes.values()].filter(image=>image.dataset.active!=='false');
    const ready = visible.filter(image => image.dataset.loadState === 'ready').length;
    const failed = visible.filter(image => image.dataset.loadState === 'error');
    const blocked = failed.some(image => image.dataset.httpStatus === '403');
    const loading = visible.some(image => image.dataset.loadState === 'loading');
    const status = blocked ? 'blocked' : failed.length ? (ready ? 'partial' : 'error') : loading ? 'loading' : ready ? 'ready' : 'loading';
    if (ready || failed.length) clearTimeout(this.slowTimer);
    this.element.dataset.tileState = status;
    if(this.lastLoadState!==status){this.lastLoadState=status;this.onLoadState(status);}
  }
  async loadTile(image, key, url) {
    const controller = new AbortController();
    this.tileRequests.set(key, controller);
    const current = () => this.tileNodes.get(key) === image;
    const finish = success => {
      if (image.tileBlobUrl) URL.revokeObjectURL(image.tileBlobUrl);
      image.tileBlobUrl = null;
      if (!current()) return;
      image.dataset.loadState = success ? 'ready' : 'error';
      image.hidden = !success;
      success ? this.loaded++ : this.failed++;
      this.reportLoadState();
      if(this.mode==='3d')this.schedule();
    };
    try {
      // Default HTTP caching and the actual browser Referer are preserved.
      // Check status before decoding, so a 403 error PNG never becomes a map tile.
      const response = await fetch(url, {signal: controller.signal, referrerPolicy: 'strict-origin-when-cross-origin'});
      if (!current()) return;
      image.dataset.httpStatus = String(response.status);
      if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error('底圖請求失敗');
      const blob = await response.blob();
      if (!current()) return;
      image.tileBlobUrl = URL.createObjectURL(blob);
      image.onload = () => finish(true);
      image.onerror = () => finish(false);
      image.src = image.tileBlobUrl;
    } catch (error) {
      if (error.name !== 'AbortError') finish(false);
    } finally {
      if (this.tileRequests.get(key) === controller) this.tileRequests.delete(key);
    }
  }
  render() {
    const renderStarted=performance.now();
    const w = this.element.clientWidth, h = this.element.clientHeight;
    if (!w || !h) return;
    const center = this.project(this.center), left = center[0] - w / 2, top = center[1] - h / 2;
    const in3d=this.mode==='3d',mpp=40075016.68557849*Math.cos(this.center[0]*Math.PI/180)/(256*2**this.zoom);
    if(in3d)this.scene.configure(w,h,mpp,this.zoom);
    const tileZoom=Math.min(19,Math.floor(this.zoom));
    const tileSize=256*2**(this.zoom-tileZoom),max=2**tileZoom,needed=new Set();
    if(in3d){for(const key of select3DTiles({matrix:this.scene.matrix,zoom:this.zoom,left,top,w,h}))needed.add(key);}
    else for(let y=Math.max(0,Math.floor(top/tileSize));y<=Math.min(max-1,Math.floor((top+h)/tileSize));y++)for(let x=Math.floor(left/tileSize);x<=Math.floor((left+w)/tileSize);x++)needed.add(`${tileZoom}/${x}/${y}`);
    this.element.dataset.tileZoom=String(in3d?Math.max(0,...[...needed].map(k=>Number(k.split('/')[0]))):tileZoom);
    this.element.dataset.visibleTiles=String(needed.size);this.tileEpoch=(this.tileEpoch||0)+1;
    for(const key of needed){
      const [z,x,y]=key.split('/').map(Number),size=256*2**(this.zoom-z);let image=this.tileNodes.get(key);
      if(!image){image=new Image();image.className='map-tile';image.alt='';image.draggable=false;image.decoding='async';image.dataset.loadState='loading';const url=this.template.replace('{z}',z).replace('{x}',x).replace('{y}',y);image.dataset.tileUrl=url;this.tiles.append(image);this.tileNodes.set(key,image);this.loadTile(image,key,url);}
      image.lastUsed=this.tileEpoch;image.dataset.active='true';
      if(!in3d){image.style.width=size+'px';image.style.height=size+'px';image.style.transform=`translate(${x*size-left}px,${y*size-top}px)`;}
    }
    const inactive=[...this.tileNodes].filter(([key])=>!needed.has(key)).sort((a,b)=>(b[1].lastUsed||0)-(a[1].lastUsed||0));
    for(const [i,[key,image]] of inactive.entries()){image.dataset.active='false';if(!in3d||image.dataset.loadState!=='ready'||i>=32){this.releaseTile(key,image);this.tileNodes.delete(key);}}
    this.reportLoadState();
    let outline=[];
    if(!in3d){outline=tokyoOutline.map(([lon,lat])=>{const p=this.project([lat,lon]);return [p[0]-left,p[1]-top];});const clip=`path('${outline.map(([x,y],i)=>`${i?'L':'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' ')} Z')`;this.tiles.style.clipPath=clip;this.routeLayer.querySelector('svg')?.style.setProperty('clip-path',clip);}
    const modelScale=this.city?(this.zoom<14?Math.max(12/(105*mpp),.5):12/(105*mpp)):Math.min(1,.4+(this.zoom-this.minZoom)*.2);
    if(in3d)this.scene.configure(w,h,mpp,this.zoom);
    const modelPoints=this.spots.map(s=>{const p=this.project(s.coords);return {x:p[0]-left,y:p[1]-top,stage:s.leafStage||'unknown',selected:s.id===this.selected,scale:modelScale,spot:s};}).filter(p=>{const [x,y]=in3d?this.scene.point(p.x,p.y,0):[p.x,p.y];return x>=-60&&x<=w+60&&y>=-60&&y<=h+60&&insideTokyo(p.spot.coords);});
    if(in3d)this.scene.draw({w,h,tiles:this.tileNodes,tileSize,mpp,zoom:this.zoom,left,top,outline,trees:modelPoints,city:this.city,route:this.routeData?.geometry.map(coords=>{if(!insideTokyo(coords))return null;const p=this.project(coords);return [p[0]-left,p[1]-top];})});
    const displayPoint=(x,y,z=0)=>in3d?this.scene.point(x-left,y-top,z):[x-left,y-top];
    this.element.dataset.center=this.center.map(v=>v.toFixed(6)).join(',');this.element.dataset.zoom=String(this.zoom);
    for (const spot of this.spots) {
      const [x, y] = this.project(spot.coords), node = this.markerNodes.get(spot.id);
      if (!node) continue;
      const [sx,sy]=displayPoint(x,y,in3d?60*modelScale:0);
      node.style.left = `${sx}px`; node.style.top = `${sy}px`;
      node.dataset.leafStage=spot.leafStage||'unknown';
      node.classList.toggle('selected', spot.id === this.selected);
      node.classList.toggle('compact',this.zoom<=11&&spot.id!==this.selected);
      node.setAttribute('aria-pressed', String(spot.id === this.selected));
      node.hidden = (!in3d&&(x-left < -70 || x-left > w+70 || y-top < -70 || y-top > h+70)) || sx < -60 || sx>w+60 || sy < -60 || sy>h+60 || !insideTokyo(spot.coords);
    }
    this.element.dataset.visibleGinkgo=String(modelPoints.length);
    this.treeLeaders.replaceChildren();this.treeLeaders.setAttribute('viewBox',`0 0 ${w} ${h}`);
    this.markers.classList.toggle('overview-markers',in3d&&this.zoom<13);
    if(in3d&&this.zoom<13){const used=[];for(const [i,spot]of this.spots.entries()){const node=this.markerNodes.get(spot.id);node.dataset.number=String(i+1);if(node.hidden)continue;const p=this.scene.point(...this.project(spot.coords).map((v,j)=>v-(j?top:left)),0);let chosen=null;for(let r=48;r<350&&!chosen;r+=26)for(let a=0;a<16;a++){const x=p[0]+Math.cos(a*Math.PI/8)*r,y=p[1]+Math.sin(a*Math.PI/8)*r;if(x>35&&x<w-35&&y>150&&y<h-80&&used.every(q=>Math.hypot(x-q[0],y-q[1])>29)){chosen=[x,y];break;}}if(chosen){node.style.left=chosen[0]+'px';node.style.top=chosen[1]+'px';used.push(chosen);const line=document.createElementNS('http://www.w3.org/2000/svg','line');for(const [k,v]of Object.entries({x1:p[0],y1:p[1],x2:chosen[0],y2:chosen[1]}))line.setAttribute(k,v);this.treeLeaders.append(line);}}}
    this.clusterLayer.replaceChildren();
    if(this.zoom<=12&&!in3d) {
      const visible=this.spots.filter(s=>s.id!==this.selected&&!this.markerNodes.get(s.id).hidden).map(s=>{const [x,y]=this.project(s.coords);return {spot:s,x:x-left,y:y-top};});
      for(const group of clusterPoints(visible)) {
        if(group.points.length<2)continue;
        for(const p of group.points)this.markerNodes.get(p.spot.id).hidden=true;
        const button=document.createElement('button');button.className='map-cluster';button.textContent=String(group.points.length);
        button.setAttribute('aria-label',`放大查看 ${group.points.length} 處銀杏景點：${group.points.map(p=>p.spot.name).join('、')}`);
        button.style.left=`${group.x}px`;button.style.top=`${group.y}px`;
        button.addEventListener('click',()=>this.flyTo(this.unproject([group.x+left,group.y+top]),Math.min(this.maxZoom,this.zoom+2)));
        this.clusterLayer.append(button);
      }
    }
    if(this.routeData) {
      const svg=this.routeLayer.querySelector('svg');svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
      const path=this.routeData.geometry.map(coords=>{const [x,y]=this.project(coords);return `${(x-left).toFixed(1)},${(y-top).toFixed(1)}`;}).join(' ');
      svg.querySelectorAll('polyline').forEach(line=>line.setAttribute('points',path));
      const nodes=this.routeLayer.querySelectorAll('.route-number');
      this.routeData.points.forEach((p,i)=>{const [x,y]=displayPoint(...this.project(p.coords),in3d?5:0);nodes[i].style.left=`${x+18}px`;nodes[i].style.top=`${y-25}px`;nodes[i].hidden=!insideTokyo(p.coords);});
    }
    if(this.zoomIn)this.zoomIn.disabled = this.zoom >= this.maxZoom-.00001;
    if(this.zoomOut)this.zoomOut.disabled = this.zoom <= this.minZoom+.00001;
    this.city?.render({w,h,left,top,in3d});
    this.element.dataset.mapFrameMs=(performance.now()-renderStarted).toFixed(1);
  }
  bind() {
    this.element.addEventListener('pointerdown', e => {
      if (e.target.closest('button,a,input,select')) return;
      if(!this.pointers.size)this.clickStart=[e.clientX,e.clientY];else this.clickStart=null;
      this.clickTravel=0;this.clickTarget=e.target;
      this.element.setPointerCapture(e.pointerId);
      this.pointers.set(e.pointerId, [e.clientX, e.clientY]);
      if (this.pointers.size === 2) this.pinchStart = this.pointerDistance();
      this.element.classList.add('dragging');
    });
    this.element.addEventListener('pointermove', e => {
      const old = this.pointers.get(e.pointerId); if (!old) return;
      this.clickTravel+=Math.hypot(e.clientX-old[0],e.clientY-old[1]);
      this.pointers.set(e.pointerId, [e.clientX, e.clientY]);
      if (this.pointers.size === 2) {
        const ratio = this.pointerDistance() / this.pinchStart;
        if (Math.abs(Math.log2(ratio))>.06) { this.zoomBy(Math.log2(ratio)*1.3); this.pinchStart = this.pointerDistance(); }
      } else this.pan(e.clientX - old[0], e.clientY - old[1]);
    });
    const release = e => { if(e.type==='pointerup' && this.clickStart && this.clickTravel<5 && this.pointers.size===1){const r=this.element.getBoundingClientRect();this.onMapClick(e.clientX-r.left,e.clientY-r.top,this.clickTarget);}this.clickStart=null;this.clickTarget=null;this.pointers.delete(e.pointerId); if (!this.pointers.size) this.element.classList.remove('dragging'); };
    this.element.addEventListener('pointerup', release);
    this.element.addEventListener('pointercancel', release);
    this.element.addEventListener('lostpointercapture', release);
    this.element.addEventListener('wheel', e => {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      const rect = this.element.getBoundingClientRect();
      this.zoomBy(e.deltaY < 0 ? .4 : -.4, [e.clientX - rect.left, e.clientY - rect.top]);
    }, { passive: false });
    this.element.addEventListener('dblclick', e => {
      if (e.target.closest('button')) return;
      const r = this.element.getBoundingClientRect(); this.zoomBy(1, [e.clientX - r.left, e.clientY - r.top]);
    });
    this.element.addEventListener('keydown', e => {
      if (e.target !== this.element) return;
      const directions = { ArrowLeft: [80, 0], ArrowRight: [-80, 0], ArrowUp: [0, 80], ArrowDown: [0, -80] };
      if (directions[e.key]) { e.preventDefault(); this.pan(...directions[e.key]); }
      if (e.key === '+' || e.key === '=') { e.preventDefault(); this.zoomBy(1); }
      if (e.key === '-') { e.preventDefault(); this.zoomBy(-1); }
    });
  }
  pointerDistance() { const [a, b] = [...this.pointers.values()]; return Math.hypot(a[0] - b[0], a[1] - b[1]); }
}
