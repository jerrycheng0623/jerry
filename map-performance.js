// Explicit localhost QA only; uses the local grid, never external map tiles.
export function attachPerformanceCheck(map){
 const button=document.createElement('button');button.id='map-performance-run';button.className='map-action';button.textContent='本機效能檢測';button.style.cssText='position:absolute;right:20px;top:185px;z-index:8';map.element.parentElement.append(button);
 button.addEventListener('click',()=>{
  if(map.mode!=='3d'||map.element.dataset.regionModelComplete!=='true'){button.textContent='先選取景點並等待建模';return;}
  button.disabled=true;button.textContent='量測中…';map.element.dataset.benchmarkState='running';
  cancelAnimationFrame(map.zoomAnimation);cancelAnimationFrame(map.frame);map.frame=0;map.zoomTarget=null;
  const center=[...map.center],zoom=map.zoom,yaw=map.scene.yaw,c=map.project(center,zoom),start=performance.now(),samples=[],cpu=[];let previous=start;
  const frame=now=>{const t=(now-start)/1000,dt=now-previous;previous=now;
   map.zoom=zoom+Math.sin(t*Math.PI*2)*.18;map.center=map.unproject([c[0]+Math.sin(t*Math.PI)*24,c[1]+Math.cos(t*Math.PI)*15],zoom);map.scene.yaw=yaw+Math.sin(t*Math.PI)*4;
   const before=performance.now();map.render();if(t>.5){samples.push(dt);cpu.push(performance.now()-before);}
   if(t<4)requestAnimationFrame(frame);else{const percentile=(a,p)=>{const sorted=a.slice().sort((a,b)=>a-b);return Number(sorted[Math.min(sorted.length-1,Math.floor(sorted.length*p))].toFixed(2));};map.element.dataset.benchmarkResult=JSON.stringify({durationMs:Number((now-start).toFixed(1)),sampleCount:samples.length,averageFps:Number((1000*samples.length/samples.reduce((a,b)=>a+b,0)).toFixed(1)),frameP50Ms:percentile(samples,.5),frameP95Ms:percentile(samples,.95),over50ms:samples.filter(v=>v>50).length,cpuP50Ms:percentile(cpu,.5),cpuP95Ms:percentile(cpu,.95),viewport:[map.element.clientWidth,map.element.clientHeight],region:map.element.dataset.buildingRegion});map.center=center;map.zoom=zoom;map.scene.yaw=yaw;map.schedule();map.element.dataset.benchmarkState='complete';button.textContent='本機效能檢測';button.disabled=false;}
  };requestAnimationFrame(frame);
 });
}
