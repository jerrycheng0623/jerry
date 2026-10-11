import {spots} from './data.js?v=20261009-smooth-v2';
import {starts,transport,openingCheck} from './transport.js?v=20261009-smooth-v2';
import {observationAt,stageFor} from './leaf.js?v=20261009-smooth-v2';
import {walkingTable,walkingRoute,chooseOrder,distanceBetween,directionText,navigationLink,routingInfo} from './routing.js?v=20261009-smooth-v2';
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const minutes=seconds=>Math.ceil(seconds/60);
const length=meters=>meters>=1000?`${(meters/1000).toFixed(1)} 公里`:`${Math.round(meters)} 公尺`;
export function parseWalkSelection(value,validIds) {
  try {const list=JSON.parse(value);return new Set(Array.isArray(list)?[...new Set(list.filter(id=>validIds.has(id)))].slice(0,6):[]);}catch{return new Set();}
}
export function parseOrigin(latitude,longitude) {
  if(!String(latitude).trim()||!String(longitude).trim())return null;
  const coords=[Number(latitude),Number(longitude)];
  return coords.every(Number.isFinite)&&Math.abs(coords[0])<=90&&Math.abs(coords[1])<=180?coords:null;
}
export function initWalk({map,notify,openDetail,beforeEnter,getFavorites}) {
  const $=s=>document.querySelector(s);
  const shell=$('.map-shell'),home=shell.parentElement;
  const selectionKey='tokyo-ginkgo-walk-v1',validIds=new Set(spots.map(s=>s.id));
  let saved=null;try{saved=localStorage.getItem(selectionKey);}catch{}
  let selected=saved===null?new Set(['gaien']):parseWalkSelection(saved,validIds),active=false,plan=null,custom=null,revision=0,controller=null;
  $('#walk-start').innerHTML=`<optgroup label="車站附近">${starts.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</optgroup><optgroup label="銀杏景點">${spots.map(s=>`<option value="${s.id}">${s.name}</option>`).join('')}</optgroup><option value="custom" disabled>自訂位置（尚未設定）</option>`;
  $('#walk-end').insertAdjacentHTML('beforeend',starts.map(s=>`<option value="${s.id}">${s.name}</option>`).join(''));
  $('#walk-date').value=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date());
  function origin() {return $('#walk-start').value==='custom'?custom:[...starts,...spots].find(s=>s.id===$('#walk-start').value);}
  function renderChoices() {
    const ordered=[...selected].map(id=>spots.find(s=>s.id===id));
    const remaining=spots.filter(s=>!selected.has(s.id));
    $('#walk-choices').innerHTML=[...ordered,...remaining].map(s=>`<div class="walk-choice ${selected.has(s.id)?'chosen':''}"><label><input type="checkbox" value="${s.id}" ${selected.has(s.id)?'checked':''}><span>${esc(s.name)}<small>${esc(s.district)}${getFavorites().has(s.id)?' · 已收藏':''}</small></span></label>${selected.has(s.id)?`<span class="walk-order">${[...selected].indexOf(s.id)+1}</span><button type="button" data-walk-up="${s.id}" aria-label="將${esc(s.name)}往前移">↑</button><button type="button" data-walk-down="${s.id}" aria-label="將${esc(s.name)}往後移">↓</button>`:''}</div>`).join('');
    $('#walk-selection-note').textContent=selected.size?`已選 ${selected.size} 處；箭頭調整順序，最多六處。`:'自動推薦：從起點附近六處比較可用方案。';
    $('#walk-choices').scrollTop=0;
  }
  function renderMap() {
    if(!active)return;
    const date=plan?plan.date:$('#walk-date').value;
    map.setSpots((plan?plan.visited:spots).map(s=>{const record=observationAt(s,date);return {...s,leafStage:stageFor(record).id,leafLabel:record?`${record.status} · ${record.date} 紀錄`:`${date.slice(0,4)} 年葉況待更新`};}),null);
    map.setRoute(plan?{geometry:plan.route.geometry.coordinates.map(([lon,lat])=>[lat,lon]),points:plan.points}:null);
    $('#map-preview').hidden=false;$('#map-preview').innerHTML=plan?`<article class="preview-card route-preview"><span class="route-kicker">依所選條件推薦</span><h3>${length(plan.route.distance)} 的金色散步</h3><p>步行約 ${minutes(plan.route.duration)} 分鐘 · ${plan.visited.length} 處景點</p><p>含停留約 ${minutes(plan.total)} 分鐘</p><a href="#walk-result" class="text-button" id="walk-itinerary-link">查看沿途行程 ↓</a></article>`:`<article class="preview-card route-preview"><h3>今天，想從哪裡走起？</h3><p>選起點、時間與景點，再產生真實步行路線。</p><p class="small-note">標記為園區代表點；不是個別銀杏樹。</p></article>`;
    $('.map-label').innerHTML=map.element.dataset.testMap==='local'?'本機測試底圖 · 非真實道路':'<span class="gold-dot"></span>你的散步路線';
    $('#fit-map').textContent='顯示散步範圍';
  }
  function invalidate() {
    try{localStorage.setItem(selectionKey,JSON.stringify([...selected]));}catch{notify('散步清單僅留在本次瀏覽，裝置未允許儲存。');}
    revision++;controller?.abort();plan=null;$('#walk-submit').disabled=false;$('#walk-submit').textContent='產生散步路線';
    $('#walk-status').textContent='設定已更新，請產生路線。';
    $('#walk-result').innerHTML='<div class="route-empty"><p>設定已更新，重新產生路線即可查看行程。</p></div>';
    renderMap();
  }
  function setCustom(coords,name) {
    custom={id:'custom',name,coords};
    const option=$('#walk-start option[value="custom"]');option.disabled=false;option.textContent=name;$('#walk-start').value='custom';
    $('#walk-start-note').textContent=`${coords.map(v=>v.toFixed(5)).join('，')} · ${name==='我的位置'?'定位精度依裝置':'自訂代表起點，入口需另確認'}；路線會連至附近道路。`;invalidate();
  }
  $('#walk-location').addEventListener('click',()=>{
    if(!navigator.geolocation){notify('此瀏覽器不支援定位，請選車站或地圖中心。');return;}
    const locationRevision=revision;const button=$('#walk-location');button.disabled=true;button.textContent='正在定位…';
    navigator.geolocation.getCurrentPosition(position=>{
      button.disabled=false;button.textContent='使用我的位置';if(locationRevision!==revision){notify('起點設定已變更，未套用較早的定位結果。');return;}setCustom([position.coords.latitude,position.coords.longitude],'我的位置');map.flyTo(custom.coords,14);
    },()=>{button.disabled=false;button.textContent='使用我的位置';notify('未取得定位，請選車站或用地圖中心。');},{enableHighAccuracy:false,timeout:10000,maximumAge:60000});
  });
  $('#walk-map-center').addEventListener('click',()=>setCustom([...map.center],'自訂地圖中心'));
  $('#walk-manual').addEventListener('click',()=>{
    const coords=parseOrigin($('#walk-lat').value,$('#walk-lng').value);
    if(!coords){notify('請填寫有效的緯度與經度；空白不能當作 0。');return;}
    if(distanceBetween(coords,[35.69,139.7])>100000){notify('請輸入東京附近的起點。');return;}
    setCustom(coords,'手動座標起點');map.flyTo(coords,14);
  });
  $('#walk-auto').addEventListener('click',()=>{selected.clear();renderChoices();invalidate();});
  $('.duration-options').addEventListener('click',e=>{
    const b=e.target.closest('[data-duration]');if(!b)return;$('#walk-budget').value=b.dataset.duration;updateDuration();invalidate();
  });
  function updateDuration(){const input=$('#walk-budget'),value=Number(input.value);input.setCustomValidity(input.value.trim()&&Number.isInteger(value)&&value>=10&&value<=480?'':'請輸入 10–480 之間的整數分鐘。');document.querySelectorAll('[data-duration]').forEach(b=>{const on=b.dataset.duration===$('#walk-budget').value;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on));});}
  $('#walk-form').addEventListener('change',e=>{
    if(e.target.matches('#walk-choices input')) {
      if(e.target.checked&&selected.size>=6){e.target.checked=false;notify('一次最多六個景點，方便比較與閱讀路線。');return;}
      e.target.checked?selected.add(e.target.value):selected.delete(e.target.value);renderChoices();
    }
    if(e.target.id==='walk-start')$('#walk-start-note').textContent='車站與景點為附近代表點；園內入口需另確認。';
    updateDuration();invalidate();
  });
  $('#walk-form').addEventListener('input',e=>{if(e.target.matches('#walk-budget,#walk-lat,#walk-lng,#walk-time,#walk-date')){updateDuration();invalidate();}});
  $('#walk-choices').addEventListener('click',e=>{
    const b=e.target.closest('[data-walk-up],[data-walk-down]');if(!b)return;
    const items=[...selected],id=b.dataset.walkUp||b.dataset.walkDown,i=items.indexOf(id),j=i+(b.dataset.walkUp?-1:1);
    if(j<0||j>=items.length)return;[items[i],items[j]]=[items[j],items[i]];selected=new Set(items);renderChoices();invalidate();
  });
  $('#walk-form').addEventListener('submit',async e=>{
    e.preventDefault();if(!$('#walk-form').reportValidity())return;
    const start=origin();if(!start){notify('請先設定起點。');return;}
    if(distanceBetween(start.coords,[35.69,139.7])>100000){notify('請選東京附近的起點，避免產生跨區長途步行。');return;}
    const budget=Number($('#walk-budget').value)*60,stay=Number($('#walk-stay').value)*60,automatic=!selected.size;
    const date=$('#walk-date').value,time=$('#walk-time').value,[hh,mm]=time.split(':').map(Number),depart=hh*60+mm;
    const prefer=$('#walk-preference').value,endValue=$('#walk-end').value;
    let candidates=automatic?[...spots].sort((a,b)=>distanceBetween(start.coords,a.coords)-distanceBetween(start.coords,b.coords)).slice(0,6):[...selected].map(id=>spots.find(s=>s.id===id));
    const excluded=[];
    if($('#walk-avoid-closed').checked)candidates=candidates.filter(s=>{const check=openingCheck(s,date,depart);if(check.warning?.includes('休園')){excluded.push(s.name);return false;}return true;});
    if(!candidates.length){$('#walk-status').textContent='沒有可用景點，請換日期或調整選擇。';return;}
    const end=endValue==='return'?start:starts.find(s=>s.id===endValue)||null;
    const tablePoints=[start,...candidates,...(end&&end!==start?[end]:[])];
    const endIndex=!end?null:end===start?0:tablePoints.length-1;
    const run=++revision;controller?.abort();controller=new AbortController();
    const runController=controller;
    const timer=setTimeout(()=>runController.abort(),26000);
    $('#walk-submit').disabled=true;$('#walk-submit').textContent='正在比較步行道路…';$('#walk-status').textContent='正在取得道路步行時間，接著比較景點順序。';
    try {
      const table=await walkingTable(tablePoints,controller.signal);
      if(run!==revision)return;
      const choice=chooseOrder(table.durations,candidates.length,{endIndex,budget,stay,automatic,prefer,fixed:prefer==='fixed'&&!automatic});
      if(!choice)throw new Error('目前時間內沒有可用方案，請增加時間或改起點。');
      const visited=choice.order.map(index=>candidates[index-1]);
      const points=[start,...visited,...(end?[{...end,id:`end-${end.id}`,name:end===start?'返回起點':end.name}]:[])];
      const response=await walkingRoute(points,controller.signal);if(run!==revision)return;
      const route=response.routes[0];
      plan={route,points,visited,total:route.duration+visited.length*stay,date,time,stay,automatic,prefer,excluded,budget,snap:response.waypoints};
      renderResult();renderMap();fit();
      $('#walk-status').textContent=plan.total>budget?'行程超出所選時間，請減少景點或增加時間。':'路線已完成，沿途資訊在地圖下方。';
    }catch(error){
      if(run!==revision)return;
      plan=null;renderMap();
      const message=error.name==='AbortError'?'步行服務連線逾時，請重試。':error.message;
      $('#walk-status').textContent=message;
      const target=candidates[0];
      $('#walk-result').innerHTML=`<div class="route-failure"><h3>這次未能產生路線</h3><p>${esc(message)}</p><p>未畫出估計直線。你仍可查看景點交通，或先導航到 ${esc(target.name)}。</p><a href="${navigationLink(start,target)}" class="outline-button" target="_blank" rel="noopener">開啟外部步行導航</a><button class="gold-button" data-retry-walk>重新計算</button></div>`;
    }finally{clearTimeout(timer);if(run===revision){$('#walk-submit').disabled=false;$('#walk-submit').textContent='重新產生散步路線';}}
  });
  function renderResult() {
    const p=plan;
    let elapsed=0;
    const cards=p.route.legs.map((leg,i)=>{
      elapsed+=leg.duration/60;const destination=p.points[i+1],isSpot=p.visited.some(s=>s.id===destination.id),t=isSpot?transport[destination.id]:null;
      const check=isSpot?openingCheck(destination,p.date,departMinutes(p.time)+elapsed,p.stay/60):null;
      const arrivals=departMinutes(p.time)+elapsed;
      if(isSpot)elapsed+=p.stay/60;
      return `<article class="route-stop"><div class="route-stop-heading"><span class="step-number">${i+1}</span><div><h3>${esc(destination.name)}</h3><p>此段 ${length(leg.distance)} · 步行約 ${minutes(leg.duration)} 分鐘 · 預估抵達 ${clock(arrivals)}</p></div></div>${isSpot?`<p class="route-stop-description">${esc(destination.description)}</p><p class="small-note">停留 ${p.stay/60} 分鐘 · ${esc(check.warning||check.note)}</p>`:''}${t?`<div class="route-transport"><span>${esc(t.stations[0].name)}</span><p>${esc(t.stations[0].lines)} · ${esc(t.stations[0].note)}</p><a href="${t.url}" target="_blank" rel="noopener">官方交通來源</a></div>`:''}<details class="route-directions"><summary>此段步行指引（${leg.steps.length} 步）</summary><ol>${leg.steps.map(step=>`<li>${esc(directionText(step))}${step.distance?` · ${length(step.distance)}`:''}</li>`).join('')}</ol></details><div class="route-stop-actions">${isSpot?`<button class="text-button" data-open="${destination.id}">景點與葉況</button><button class="text-button" data-remove-walk="${destination.id}">移出路線</button>`:''}<a href="${navigationLink(p.points[i],destination)}" target="_blank" rel="noopener">此段導航 ↗</a></div></article>`;
    }).join('');
    const over=p.total>p.budget?`<p class="route-warning">含停留超出預算 ${minutes(p.total-p.budget)} 分鐘；此方案未符合所選時間，請調整。</p>`:'';
    const snapped=p.snap?.some(s=>s.distance>150)?'<p class="route-warning">部分位置已連至較遠的可步行道路；請特別確認實際入口。</p>':'';
    const reason=p.automatic?`從起點附近六處比較，以${p.prefer==='more'?'時間內多賞點':'較少步行時間'}推薦 ${p.visited.length} 處。`:p.prefer==='fixed'?'採用你排列的景點順序。':'比較所選景點的所有排列，選擇道路步行時間較少的順序。';
    $('#walk-result').innerHTML=`<div class="route-overview"><div><span>總距離</span><strong>${length(p.route.distance)}</strong></div><div><span>預估步行</span><strong>${minutes(p.route.duration)} 分鐘</strong></div><div><span>含停留</span><strong>${minutes(p.total)} 分鐘</strong></div><div><span>沿途景點</span><strong>${p.visited.length} 處</strong></div></div><p class="route-explanation">${esc(reason)}依 ${p.date} ${p.time}（東京時間）規劃；不保證全東京的最佳路線。${p.excluded.length?`已排除一般規則休園的 ${esc(p.excluded.join('、'))}。`:''}</p>${over}${snapped}<div class="route-stops">${cards}</div><div class="route-source-note"><p>路徑計算：<a href="${routingInfo.url}" target="_blank" rel="noopener">FOSSGIS／OSRM</a>・© OpenStreetMap 貢獻者・<a href="https://www.openstreetmap.org/fixthemap" target="_blank" rel="noopener">回報地圖問題</a></p><p>連接園區代表點；園內移動、臨時施工、台階與通行限制未完整驗證，不能當無障礙保證。已知一般開園規則逐站提示，例外公告請查官方。</p></div>`;
  }
  const departMinutes=time=>{const [h,m]=time.split(':').map(Number);return h*60+m;};
  const clock=value=>`${Math.floor(value/60)%24}`.padStart(2,'0')+':'+`${Math.floor(value)%60}`.padStart(2,'0')+(value>=1440?'（翌日）':'');
  document.addEventListener('click',e=>{
    const add=e.target.closest('[data-add-walk]');
    if(add){if(!selected.has(add.dataset.addWalk)&&selected.size>=6){notify('一次最多六個景點。');return;}selected.add(add.dataset.addWalk);renderChoices();invalidate();beforeEnter();location.hash='walk';notify('已加入散步，可選時間後產生路線。');}
    const remove=e.target.closest('[data-remove-walk]');if(remove){selected.delete(remove.dataset.removeWalk);renderChoices();invalidate();}
    if(e.target.closest('[data-retry-walk]'))$('#walk-form').requestSubmit();
    if(e.target.closest('#walk-itinerary-link')){e.preventDefault();$('#walk-result').scrollIntoView({behavior:document.body.classList.contains('motion-off')?'instant':'smooth',block:'start'});}
  });
  function fit(){if(plan)map.fit(plan.points);else{const start=origin();map.fit([...(start?[start]:[]),...spots.filter(s=>selected.has(s.id))]);}}
  renderChoices();
  window.addEventListener('storage',e=>{if(e.key===selectionKey||e.key===null){selected=parseWalkSelection(e.newValue,validIds);renderChoices();invalidate();}});
  return {
    enter(){active=true;$('#walk-map-slot').append(shell);renderChoices();renderMap();map.schedule();fit();$('#walk-form').scrollTop=0;},
    leave(){active=false;home.append(shell);map.setRoute(null);$('.map-label').innerHTML=map.element.dataset.testMap==='local'?'本機測試底圖 · 非真實道路':'<span class="gold-dot"></span>東京銀杏探索';$('#fit-map').textContent='26 處總覽';},
    fit,
    selected:()=>selected,
    date:()=>$('#walk-date').value,
    refreshFavorites:renderChoices
  };
}
