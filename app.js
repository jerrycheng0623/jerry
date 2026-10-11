import { spots, areaNames, metadata, sourceRegistry, imageReferences } from './data.js?v=20261009-smooth-v2';
import { GinkgoMap } from './map.js?v=20261009-smooth-v2';
import {stages,stageFor,observationAt,leafSVG,biologySources} from './leaf.js?v=20261009-smooth-v2';
import {transport} from './transport.js?v=20261009-smooth-v2';
import {initWalk} from './walk.js?v=20261009-smooth-v2';

import {nearbyTransitHTML} from './nearby-transit.js?v=20261009-smooth-v2';
import {initCity} from './city.js?v=20261009-smooth-v2';

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const escapeHTML = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const ids = new Set(spots.map(s => s.id));
const storageKey = 'tokyo-ginkgo-favorites-v1';
const motionKey = 'tokyo-ginkgo-motion-v1';
let storageAvailable = true;
function readStorage(key) { try { return localStorage.getItem(key); } catch { storageAvailable = false; return null; } }
function parseFavorites(value) { try { const d = JSON.parse(value); return new Set(Array.isArray(d) ? d.filter(id => ids.has(id)) : []); } catch { return new Set(); } }
const today=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Tokyo'}).format(new Date());
const state = { view:'explore', query:'', feature:'all', area:'all', record:'all', selected:'gaien',transitRequested:false,previewClosed:false, favorites:parseFavorites(readStorage(storageKey)), calendarMode:'typical',leafDate:today,leafFilter:'all',grade:'all',sort:'original' };
let toastTimer, detailOrigin = null, detailPreviousView = 'explore', routingDialog = false;
function notify(message) {
  $('#toast').textContent = message; $('#toast').classList.add('visible');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => $('#toast').classList.remove('visible'), 3500);
}
function persistFavorites() {
  try { localStorage.setItem(storageKey, JSON.stringify([...state.favorites])); }
  catch { storageAvailable = false; notify('收藏暫存於本次瀏覽；此裝置未允許儲存。'); }
}
const bookmarkIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 4h12v17l-6-4-6 4z"/></svg>';
function currentLabel(spot) { const record=observationAt(spot,state.leafDate);return record?`${record.status} · ${record.date} 紀錄`:`${state.leafDate.slice(0,4)} 年葉況待更新`; }
function favoriteButton(spot) {
  const saved = state.favorites.has(spot.id);
  return `<button class="favorite-button ${saved ? 'saved' : ''}" data-favorite="${spot.id}" aria-pressed="${saved}" aria-label="${saved ? '取消收藏' : '收藏'}${escapeHTML(spot.name)}">${bookmarkIcon}</button>`;
}
function filteredSpots() {
  const q = state.query.trim().toLocaleLowerCase();
  const results = spots.filter(s => (!q || [s.name,s.japanese,...(s.aliases||[]),s.district,areaNames[s.area],s.description,s.address||'',...s.tags.map(tag=>({avenue:'銀杏並木',free:'免費景點',tree:'大銀杏'}[tag]||tag))].some(v => v.toLocaleLowerCase().includes(q))) && (state.feature === 'all' || s.tags.includes(state.feature)) && (state.area === 'all' || s.area === state.area) && (state.record !== 'history' || s.observations.length > 0) && (state.record !== 'unknown' || !observationAt(s,state.leafDate)) && (state.leafFilter==='all'||stageFor(observationAt(s,state.leafDate)).id===state.leafFilter) && (state.grade==='all'||s.grade===state.grade));
  if(state.sort==='name')results.sort((a,b)=>a.name.localeCompare(b.name,'zh-Hant'));
  if(state.sort==='history')results.sort((a,b)=>(b.observations.map(o=>o.date).sort().at(-1)||'').localeCompare(a.observations.map(o=>o.date).sort().at(-1)||''));
  return results;
}
const map = new GinkgoMap($('#map'), {
  onNotice:notify,
  onModeChange: mode => {
    $$('button[data-map-mode]').forEach(button=>{const active=button.dataset.mapMode===mode;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
    $('#scene-controls').hidden=mode!=='3d';
    if(mode==='3d')map.tilt($('#map-tilt').value);
    map.city?.modeChanged(mode);
  },
  onMapClick:(x,y,target)=>map.city?.pick(x,y,target),
  onSelect: id => state.view==='walk'?openDetail(id):selectSpot(id),
  onLoadState: status => {
    const message = $('#map-message');
    if (status === 'ready' || status === 'loading') { message.hidden = true; return; }
    $('#map-message-text').textContent = status === 'blocked' ? '底圖服務拒絕請求（403）。請確認使用本機網站網址，或稍後再試；景點清單仍可使用。' : status === 'slow' ? '地圖載入較慢，你仍可使用下方景點列表。' : status === 'partial' ? '部分地圖未載入；景點列表仍可使用。' : '地圖暫時無法載入；景點列表與詳細資訊仍可使用。';
    message.hidden = false;
  }
});
$$('button[data-map-mode]').forEach(button=>button.addEventListener('click',()=>map.setMode(button.dataset.mapMode)));
$('#rotate-left').addEventListener('click',()=>map.rotate(-30));
$('#rotate-right').addEventListener('click',()=>map.rotate(30));
$('#north-map').addEventListener('click',()=>map.north());
$('#map-tilt').addEventListener('change',e=>{map.tilt(e.target.value);if(e.target.value==='street')$('#map-preview').hidden=true;});
$('#map-preview').addEventListener('click',e=>{if(e.target.closest('[data-close-preview]')){e.stopPropagation();state.previewClosed=true;$('#map-preview').hidden=true;}});
const city=initCity({notify,map,spots,getSelected:()=>state.selected,shouldRecenter:()=>state.view==='explore',onChoose:id=>{resetFilters();selectSpot(id);}});
const walk=initWalk({map,notify,openDetail,beforeEnter:()=>closeDetail(false),getFavorites:()=>state.favorites});
function renderExplore() {
  const results = filteredSpots();
  if (!results.some(s => s.id === state.selected)) state.selected = results[0]?.id || null;
  $('#result-count').textContent = `${results.length} 處`;
  $('#spot-list').innerHTML = results.length ? results.map(s => `<article class="spot-row ${s.id === state.selected ? 'selected' : ''}" data-row="${s.id}"><button class="spot-row-main" data-select="${s.id}" aria-label="在地圖選取${escapeHTML(s.name)}"><h3>${escapeHTML(s.name)}</h3><div class="spot-row-meta">${escapeHTML(s.district)} · ${escapeHTML(currentLabel(s))}</div><div class="spot-row-season">${s.typical ? `例年 ${escapeHTML(s.typical.label)}` : s.observations.length ? `歷史觀測 ${s.observations[0].date}` : '尚無可用季節區間'}</div></button>${favoriteButton(s)}</article>`).join('') : `<div class="empty-state"><h3>沒有符合的景點</h3><p>試試其他名稱、地區或篩選條件。</p><button class="gold-button" data-reset>清除篩選</button></div>`;
  if(state.view!=='walk') {
    map.setSpots(results.map(s=>({...s,leafStage:stageFor(observationAt(s,state.leafDate)).id,leafLabel:currentLabel(s)})), state.selected);
    renderPreview();city.focus(state.selected);
  }
}
function renderPreview() {
  $('#map-preview').hidden=state.previewClosed;
  const s = spots.find(s => s.id === state.selected);
  $('#map-preview').innerHTML = s ? `<article class="preview-card"><div class="preview-top"><h3>${escapeHTML(s.name)}</h3>${favoriteButton(s)}<button class="preview-close" data-close-preview aria-label="收合景點資訊">×</button></div><p class="preview-jp">${escapeHTML(s.district)} · ${escapeHTML(currentLabel(s))}</p><p class="preview-description">${escapeHTML(s.description)}</p>${state.transitRequested?nearbyTransitHTML(transport[s.id],escapeHTML):'<p class="small-note">點選地圖上的銀杏樹，查看附近交通。</p>'}<div class="preview-bottom"><button class="outline-button" data-add-walk="${s.id}">加入散步</button><button class="gold-button" data-open="${s.id}">查看景點</button></div></article>` : '';
}
function selectSpot(id) {
  const spot = filteredSpots().find(s => s.id === id); if (!spot) return;
  state.selected = id;state.previewClosed=false;city.deselectBuilding();state.transitRequested=true;$('#map-preview').hidden=false;if(map.scene)map.scene.street=false;map.flyTo(spot.coords, map.mode==='3d'?18.5:Math.max(13,map.zoom)); renderExplore();
  if (innerWidth <= 760) $('#map').scrollIntoView({behavior:motionEnabled ? 'smooth' : 'instant',block:'center'});
}
function resetFilters() {
  state.query = ''; state.feature = 'all'; state.area = 'all'; state.record = 'all';
  state.grade='all';state.sort='original';$('#grade-filter').value='all';$('#sort-filter').value='original';
  state.leafFilter='all';$('#leaf-filter').value='all';
  $('#search').value = ''; $('#area-filter').value = 'all'; $('#status-filter').value = 'all';
  $$('#feature-filters button').forEach(b => { b.classList.toggle('active',b.dataset.feature === 'all'); b.setAttribute('aria-pressed',String(b.dataset.feature === 'all')); });
  renderExplore();
}
function updateFavorites() {
  $('#favorite-count').textContent = state.favorites.size;
  $('#clear-favorites').hidden = !state.favorites.size;
  renderExplore(); renderFavorites();
  walk.refreshFavorites();
  const detail = $('#detail-dialog');
  if (detail.open) {
    const spot = spots.find(s => s.id === detail.dataset.spot);
    if (spot) {
      const button = detail.querySelector('[data-detail-favorite]');
      const saved = state.favorites.has(spot.id);
      button.textContent = saved ? '已收藏・取消收藏' : '收藏景點'; button.setAttribute('aria-pressed',String(saved));
    }
  }
}
function toggleFavorite(id) {
  if (!ids.has(id)) return;
  const saved = state.favorites.has(id);
  saved ? state.favorites.delete(id) : state.favorites.add(id);
  persistFavorites(); updateFavorites();
  if (storageAvailable) notify(saved ? '已從收藏移除' : '已收藏，金色秋天等你再訪。');
}
function renderFavorites() {
  const saved = spots.filter(s => state.favorites.has(s.id));
  $('#favorites-list').innerHTML = saved.length ? saved.map(s => `<article class="saved-card"><div class="saved-card-top"><h3>${escapeHTML(s.name)}</h3>${favoriteButton(s)}</div><p>${escapeHTML(s.description)}</p><p>${escapeHTML(s.district)} · ${escapeHTML(currentLabel(s))}<br>${s.typical ? `例年 ${escapeHTML(s.typical.label)}` : '例年區間尚待補充'}</p><div class="saved-actions"><button class="gold-button" data-open="${s.id}">查看景點</button><button class="outline-button" data-map-return="${s.id}">在地圖查看</button><button class="outline-button" data-add-walk="${s.id}">加入散步</button></div></article>`).join('') : `<div class="empty-state"><img src="assets/ginkgo-leaf.png" alt=""><h3>讓下一次散步，從收藏開始。</h3><p>在地圖或景點頁點選收藏，就能在這裡找到它。</p><a href="#explore" class="gold-button">探索銀杏景點</a></div>`;
}
function ordinal(mmdd) {
  const [m,d] = mmdd.split('-').map(Number); return Math.floor((Date.UTC(2024,m-1,d) - Date.UTC(2024,9,1))/86400000);
}
function renderCalendar() {
  $$('.calendar-tabs button').forEach(b => {const active = b.dataset.calendarMode === state.calendarMode; b.classList.toggle('active',active); b.setAttribute('aria-pressed',String(active));});
  $('.date-label').hidden = state.calendarMode === 'history';
  if (state.calendarMode === 'history') {
    const observations = spots.flatMap(s => s.observations.map(o => ({...o,spot:s}))).sort((a,b) => b.date.localeCompare(a.date));
    $('#calendar-content').innerHTML = `<p class="calendar-note">以下為有日期的當季及歷史觀測。觀測日期與發布日期分開保存；只代表紀錄當時、來源指定位置的狀態，不是未來預測。</p><div class="history-list">${observations.map(o => `<article class="history-item"><time datetime="${o.date}">${o.date} 觀測</time><h3>${escapeHTML(o.spot.name)}</h3><p>${escapeHTML(o.status)}<br>${escapeHTML(o.description)}</p><p>發布日期 ${o.publishedAt}</p><a href="${escapeHTML(o.url)}" target="_blank" rel="noopener">查看原始紀錄</a><button class="text-button" data-open="${o.spot.id}">查看景點</button></article>`).join('')}</div>`;
    return;
  }
  const date = $('#travel-date').value;
  const mmdd = date ? date.slice(5) : null;
  const periodSpots = spots.filter(s => s.typical);
  const matches = periodSpots.filter(s => mmdd && mmdd >= s.typical.start && mmdd <= s.typical.end);
  const chosen = date ? date.replaceAll('-', '/') : '尚未選擇日期';
  const note = !date ? '選擇旅行日期，查看是否落在景點的例年觀賞區間。' : matches.length ? `${chosen} 落在 ${matches.length} 處景點的例年區間。這是一般季節參考，當年的天氣與現場狀況可能不同。` : `${chosen} 沒有落在目前收錄的例年區間；不代表其他景點沒有銀杏可看。`;
  $('#calendar-content').innerHTML = `<p class="calendar-note">${escapeHTML(note)}<br>僅列出有來源支持的銀杏季節；上旬、中旬、下旬分別以 1–10 日、11–20 日、21 日至月底比對。</p><div class="season-table"><div class="season-table-head"><span>銀杏景點</span><div class="month-grid"><span>10月</span><span>11月</span><span>12月</span></div><span>所選日期 · 例年參考</span></div>${periodSpots.map(s => {
    const matched = matches.includes(s), start = ordinal(s.typical.start), end = ordinal(s.typical.end);
    return `<article class="season-table-row ${matched ? 'matched' : ''}"><button data-open="${s.id}"><h3>${escapeHTML(s.name)}</h3><p>${escapeHTML(s.typical.label)}</p></button><div class="season-bar-track" aria-label="例年 ${escapeHTML(s.typical.label)}"><div class="season-bar" style="left:${start/92*100}%;width:${(end-start+1)/92*100}%"></div></div><div><span class="match-label ${matched ? '' : 'outside'}">${!date ? '請選擇日期' : matched ? '落在例年區間' : '不在例年區間'}</span><br><a class="text-button" href="${escapeHTML(s.typical.source)}" target="_blank" rel="noopener">季節資料來源 · ${s.typical.kind==='tourism'?'旅遊指南':s.typical.kind==='historical-intro'?'歷史介紹':'官方季節資訊'}</a></div></article>`;
  }).join('')}</div><p class="calendar-missing">另外 ${spots.length - periodSpots.length} 處景點尚無可用的銀杏例年區間；仍可從探索地圖查看景點資訊。此日曆尚未加入當年度景點預測。</p>`;
}
function sourceList(s) { return `<ul class="sources-list">${s.sources.map(x => `<li><a href="${escapeHTML(x.url)}" target="_blank" rel="noopener">${escapeHTML(x.label)}</a><small>內容查閱基準 ${x.checkedAt}</small></li>`).join('')}<li><a href="${escapeHTML(s.coordinateSource || 'https://www.openstreetmap.org/')}" target="_blank" rel="noopener">代表位置資料來源</a><small>位置沿用 2026-10-02 快照；標記不是個別銀杏樹定位</small></li></ul>`; }
function transportHTML(s) {
  const t=transport[s.id];
  if(!t)return '<p>交通資料尚待補充，請由官方資訊確認。</p>';
  return `<div class="transit-list">${t.stations.map(station=>`<div class="transit-row"><span class="station-symbol" aria-hidden="true">站</span><div><h4>${escapeHTML(station.name)}</h4><p>${escapeHTML(station.lines)}</p><p>${escapeHTML(station.note)}</p></div><a class="text-button" href="https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(station.name+' 東京')}&destination=${s.coords.join(',')}&travelmode=walking" target="_blank" rel="noopener">步行導航 ↗</a></div>`).join('')}</div><p class="small-note">${escapeHTML(t.extra)} ${escapeHTML(t.note||'')} 官方步行分鐘不是即時測量；距離未公開時不換算假公尺。</p><p><a class="text-button" href="${t.url}" target="_blank" rel="noopener">${escapeHTML(t.publisher)}：交通來源</a>${t.extraUrl?` · <a class="text-button" href="${t.extraUrl}" target="_blank" rel="noopener">補充官方來源</a>`:''} · 查閱 ${t.checkedAt}</p><p class="small-note">班次、票價、末班車與電梯運作請查官方，尚未接入即時交通。</p>`;
}
function leafDetailHTML(s) {
  const record=observationAt(s,state.leafDate),stage=stageFor(record),traits={...(record?.traits||{})};
  const fields=[['葉片顏色','color'],['大小與量測','size'],['輪廓與裂片','shape'],['葉脈／完整度','condition'],['樹上葉量','canopy'],['地面覆蓋','ground']];
  if(record&&!traits.color)traits.color=`來源描述：${record.status}；無色碼量測`;
  return `<div class="leaf-detail-toolbar"><label>查閱日期<input type="date" id="detail-leaf-date" value="${state.leafDate}"></label><span>只顯示同年份、日期以前的紀錄</span></div><div class="leaf-detail-snapshot">${leafSVG(stage.id,'leaf-detail-icon')}<div><strong>${stage.name}</strong><p>${record?`${escapeHTML(record.status)} · 最近觀測 ${record.date}${record.date!==state.leafDate?'（非所選當日）':''}`:'此年份尚無可用紀錄，形態及葉況未知。'}</p>${record?`<a class="text-button" href="${escapeHTML(record.url)}" target="_blank" rel="noopener">觀測來源 · 發布 ${escapeHTML(record.publishedAt||'未提供')}</a>`:''}${record?.scope?`<p class="small-note">適用位置：${escapeHTML(record.scope)}。${escapeHTML(record.description)}</p>`:''}<p class="small-note">葉形圖示為教學示意，不能代替現場照片。</p></div></div><div class="leaf-stage-track">${stages.slice(0,7).map(x=>`<span class="${x.id===stage.id?'active':''}">${leafSVG(x.id)}${x.name}</span>`).join('')}</div><dl class="leaf-traits">${fields.map(([label,key])=>`<div><dt>${label}</dt><dd>${escapeHTML(traits[key]||'來源未提供實測資料')}</dd></div>`).join('')}</dl><p class="small-note">裂片、葉脈及大小不按階段自動填值；目前未取得可使用的觀測照片。原始來源可查閱現場紀錄。</p>${s.observations.length?`<div class="leaf-history-buttons">${s.observations.map(o=>`<button class="outline-button" data-observation-date="${o.date}" data-observation-spot="${s.id}">在地圖查看 ${o.date} 紀錄</button>`).join('')}</div>`:''}`;
}
function showDetail(id) {
  const s = spots.find(s => s.id === id); if (!s) { notify('找不到這個景點'); return; }
  const dialog = $('#detail-dialog');
  if (!dialog.open) { detailOrigin = document.activeElement; detailPreviousView = state.view; }
  dialog.dataset.spot = s.id;
  const saved = state.favorites.has(s.id);
  const currentBlock = s.current ? `<strong>${escapeHTML(s.current.status)} · 觀測 ${escapeHTML(s.current.date)}</strong><p>${escapeHTML(s.current.description || '')}</p><p><a class="text-button" href="${escapeHTML(s.current.url)}" target="_blank" rel="noopener">查看觀測來源</a> · 發布 ${escapeHTML(s.current.publishedAt || s.current.date)}</p>` : `<strong>當季葉況尚待更新</strong><p>目前收錄資料未確認 ${new Date().getFullYear()} 年當季銀杏狀態。歷史觀測、例年季節與現場狀況分開呈現，不推測今日葉況。</p>`;
  const direction = `https://www.google.com/maps/dir/?api=1&destination=${s.coords.join(',')}&travelmode=transit`;
  $('#detail-content').innerHTML = `<div class="detail-header"><p class="place-area">${escapeHTML(areaNames[s.area])} · ${escapeHTML(s.district)}</p><h2 id="detail-title">${escapeHTML(s.name)}</h2><p class="jp-name">${escapeHTML(s.japanese)}</p><div class="detail-actions"><button class="gold-button" data-detail-favorite="${s.id}" aria-pressed="${saved}">${saved ? '已收藏・取消收藏' : '收藏景點'}</button><a class="outline-button" href="${direction}" target="_blank" rel="noopener">查看交通路線</a><button class="outline-button" data-map-return="${s.id}">回到地圖</button></div></div><div class="detail-body"><section class="detail-status">${currentBlock}</section><section><h3>值得停下來的風景</h3><p>${escapeHTML(s.description)}<br>${escapeHTML(s.details)}</p></section><section><h3>散步前的資訊</h3><dl class="detail-facts"><div><dt>位置與地址</dt><dd>${escapeHTML(s.address)}<br>${escapeHTML(s.district)} · 代表座標 ${s.coords.map(v=>v.toFixed(5)).join("，")}<br>地址保留官方日文，入口另確認；不將代表點當單棵樹定位。</dd></div><div><dt>園內觀賞位置</dt><dd>${s.highlights.map(escapeHTML).join('<br>')}</dd></div><div><dt>例年銀杏季節</dt><dd>${s.typical ? escapeHTML(s.typical.label) : '尚無可用區間，不以其他樹種推估'}</dd></div><div><dt>入園費用</dt><dd>${escapeHTML(s.fee)}</dd></div><div><dt>開放時間</dt><dd>${escapeHTML(s.hours)}</dd></div><div><dt>交通參考</dt><dd>${escapeHTML(s.access)}</dd></div><div><dt>使用與通行規則</dt><dd>${escapeHTML(s.rules)}</dd></div><div><dt>地面落葉景觀</dt><dd>尚無有日期的記錄，無法確認是否形成金色地毯。</dd></div></dl><p class="position-note">${escapeHTML(s.coordinateNote || '地圖為園區代表位置，不是個別銀杏樹的精確定位。')} 參觀資訊查閱基準為 ${s.reviewedAt}，出發前請確認官方最新公告。</p></section><section><h3>有日期的觀測紀錄</h3>${s.observations.length ? s.observations.map(o => `<div class="observation-row"><time datetime="${o.date}">${o.date} 觀測 · 發布 ${o.publishedAt}</time><p>${escapeHTML(o.status)}：${escapeHTML(o.description)}</p><a href="${escapeHTML(o.url)}" target="_blank" rel="noopener">原始紀錄</a></div>`).join('') : '<p>目前未整理到可採用的銀杏觀測紀錄；不代表景點沒有銀杏。</p>'}</section><section><h3>尚待補齊的資料</h3><ul>${s.missingData.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>${(s.datedReferences||[]).map(x=>`<p>${escapeHTML(x.date)}：${escapeHTML(x.note)} · <a href="${escapeHTML(x.url)}" target="_blank" rel="noopener">查看原頁</a></p>`).join('')}</section><section><h3>資料從哪裡來</h3><p>原清冊 ${escapeHTML(s.sourceId)} · 原等級 ${escapeHTML(s.grade)}；等級不是即時葉況保證。</p>${sourceList(s)}</section></div>`;
  $('.detail-actions').insertAdjacentHTML('beforeend',`<button class="outline-button" data-add-walk="${s.id}">加入散步</button>`);
  $('.detail-status').insertAdjacentHTML('afterend',`<section id="detail-leaf-section"><h3>葉子正在經歷什麼？</h3>${leafDetailHTML(s)}</section><section><h3>附近交通，一眼看懂。</h3>${transportHTML(s)}</section>`);
  if (!dialog.open) { dialog.showModal(); document.body.style.overflow = 'hidden'; }
  dialog.scrollTop = 0;
}
function closeDetail(updateURL = true) {
  const dialog = $('#detail-dialog');
  if (!dialog.open) return;
  routingDialog = !updateURL;
  dialog.close();
}
$('#detail-dialog').addEventListener('close', () => {
  document.body.style.overflow = '';
  if (!routingDialog && location.hash.startsWith('#spot/')) history.replaceState(null,'',`#${detailPreviousView}`);
  routingDialog = false;
  if (detailOrigin?.isConnected) detailOrigin.focus();
});
$('#detail-dialog').addEventListener('keydown',event=>{
  if(event.key!=='Tab')return;
  const controls=[...event.currentTarget.querySelectorAll('button,a[href],input,select,textarea,[tabindex]')].filter(el=>!el.disabled&&el.tabIndex>=0&&el.getClientRects().length);
  if(!controls.length)return;
  const first=controls[0],last=controls.at(-1),active=document.activeElement;
  if(event.shiftKey&&(active===first||!controls.includes(active))){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&(active===last||!controls.includes(active))){event.preventDefault();first.focus();}
});
function setView(view) {
  if(state.view==='walk'&&view!=='walk')walk.leave();
  state.view = view;
  for (const name of ['explore','calendar','favorites','walk','sources']) $(`#${name}-view`).hidden = name !== view;
  $$('nav [data-view]').forEach(a => { const active = a.dataset.view === view; a.classList.toggle('active',active); active ? a.setAttribute('aria-current','page') : a.removeAttribute('aria-current'); });
  const content = {explore:['把東京的秋天，<br>收進你的地圖。','探索銀杏步道，尋找屬於你的金色風景。'],calendar:['挑一段秋日，<br>走進金色風景。','從有來源的季節資訊，開始規劃你的散步。'],favorites:['把喜歡的秋天，<br>留給下一次散步。','你的銀杏景點，收藏在這台裝置。'],walk:['把散步的時間，<br>留給金色風景。','三個步驟，串起你的東京銀杏散步。'],sources:['每一筆秋色，<br>都有它的來處。','教學使用、非營利；觀測、推論與示意分開呈現。']}[view];
  $('#page-title').innerHTML = content[0]; $('#page-subtitle').textContent = content[1];
  if (view === 'calendar') renderCalendar();
  if (view === 'favorites') renderFavorites();
  if (view === 'explore') {renderExplore();map.schedule();}
  if(view==='walk')walk.enter();
  if(view==='sources')renderSources();
}
function route() {
  const hash = location.hash.slice(1);
  if(hash==='city')history.replaceState(null,'','#explore');
  if (hash.startsWith('spot/')) {
    const id = hash.slice(5);
    if (ids.has(id)) { showDetail(id); return; }
    history.replaceState(null,'','#explore'); notify('此景點連結無效，已返回探索地圖。');
  }
  closeDetail(false);
  setView(['calendar','favorites','walk','sources'].includes(hash) ? hash : 'explore');
}
function openDetail(id) { if (!ids.has(id)) return;if(state.view==='walk'){state.leafDate=walk.date();$('#leaf-date').value=state.leafDate;} if (location.hash === `#spot/${id}`) showDetail(id); else location.hash = `spot/${id}`; }

$('#search').addEventListener('input', e => {state.query=e.target.value;renderExplore();if(state.query.trim())map.fit(filteredSpots());});
$('#feature-filters').addEventListener('click', e => {
  const button = e.target.closest('[data-feature]'); if (!button) return;
  state.feature = button.dataset.feature;
  $$('#feature-filters button').forEach(b => {const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});
  renderExplore(); map.fit(filteredSpots());
});
$('#area-filter').addEventListener('change', e => {state.area=e.target.value;renderExplore();map.fit(filteredSpots());});
$('#status-filter').addEventListener('change', e => {state.record=e.target.value;renderExplore();map.fit(filteredSpots());});
for(const [id,key] of [['grade-filter','grade'],['sort-filter','sort']])$('#'+id).addEventListener('change',e=>{state[key]=e.target.value;renderExplore();map.fit(filteredSpots());});
$('#reset-filters').addEventListener('click', resetFilters);
$('#fit-map').addEventListener('click', () => { if(state.view==='walk'){walk.fit();return;}resetFilters();state.transitRequested=false;state.previewClosed=true;$('#map-preview').hidden=true;map.overview();$('#map-tilt').value='25';notify('已顯示完整東京與 26 處銀杏位置。'); });
$('#zoom-in').addEventListener('click', () => map.zoomBy(1));
$('#zoom-out').addEventListener('click', () => map.zoomBy(-1));
$('#retry-map').addEventListener('click', () => {map.retry(); $('#map-message-text').textContent='正在重新載入地圖…';});
$('#close-detail').addEventListener('click', () => closeDetail());
$('#detail-dialog').addEventListener('click', e => { if(e.target === $('#detail-dialog')) { const r = e.target.getBoundingClientRect(); if(e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) closeDetail(); } });
document.addEventListener('click', e => {
  const target = e.target.closest('button'); if (!target) return;
  if(target.hasAttribute('data-close-preview')){state.previewClosed=true;$('#map-preview').hidden=true;return;}
  if (target.dataset.select) selectSpot(target.dataset.select);
  if (target.dataset.favorite) toggleFavorite(target.dataset.favorite);
  if (target.dataset.detailFavorite) toggleFavorite(target.dataset.detailFavorite);
  if (target.dataset.open) openDetail(target.dataset.open);
  if (target.hasAttribute('data-reset')) resetFilters();
  if (target.dataset.mapReturn) {
    const id = target.dataset.mapReturn; closeDetail(false); resetFilters(); setView('explore'); history.replaceState(null,'','#explore'); selectSpot(id);
  }
  if (target.dataset.month) {
    $('#travel-date').value = `${new Date().getFullYear()}-${target.dataset.month}-20`; state.calendarMode='typical'; location.hash='calendar'; setView('calendar');
  }
  if (target.dataset.calendarMode) {state.calendarMode=target.dataset.calendarMode;renderCalendar();}
  if(target.dataset.observationDate){state.leafDate=target.dataset.observationDate;$('#leaf-date').value=state.leafDate;const id=target.dataset.observationSpot;closeDetail(false);setView('explore');history.replaceState(null,'','#explore');resetFilters();selectSpot(id);}
  if(target.dataset.learningStage)renderLearning(target.dataset.learningStage);
});
document.addEventListener('change',e=>{if(e.target.id==='detail-leaf-date'){state.leafDate=e.target.value||today;$('#leaf-date').value=state.leafDate;renderExplore();const s=spots.find(s=>s.id===$('#detail-dialog').dataset.spot);$('#detail-leaf-section').innerHTML=`<h3>葉子正在經歷什麼？</h3>${leafDetailHTML(s)}`;}});
$('#leaf-date').value=today;
$('#travel-date').value=`${new Date().getFullYear()}-11-20`;
$('#leaf-filter').insertAdjacentHTML('beforeend',stages.map(s=>`<option value="${s.id}">${s.name}</option>`).join(''));
$('#leaf-date').addEventListener('change',e=>{state.leafDate=e.target.value||today;e.target.value=state.leafDate;renderExplore();});
$('#leaf-filter').addEventListener('change',e=>{state.leafFilter=e.target.value;renderExplore();map.fit(filteredSpots());});
$('#leaf-today').addEventListener('click',()=>{state.leafDate=today;$('#leaf-date').value=today;state.leafFilter='all';$('#leaf-filter').value='all';renderExplore();});
$('#leaf-legend').innerHTML=stages.map(s=>`<span>${leafSVG(s.id)}${s.name}</span>`).join('');
function renderLearning(id='green') {
  const stage=stages.find(s=>s.id===id)||stages[2];
  $('#learning-stages').innerHTML=stages.slice(0,7).map(s=>`<button data-learning-stage="${s.id}" aria-pressed="${s.id===id}" class="${s.id===id?'active':''}">${leafSVG(s.id)}${s.name}</button>`).join('');
  $('#learning-leaf').innerHTML=leafSVG(id,'teaching-leaf');$('#learning-description').innerHTML=`<h3>${stage.name}</h3><p>${stage.description}</p><span class="small-note">圖形為教學示意，不是此景點的實測形態。</span>`;
}
function renderSources() {
  $('#sources-content').innerHTML=`<div class="source-policy"><h3>資訊如何使用</h3><p>當季、歷史、例年與預測分開保存；沒有觀測時顯示未知。園區座標不是個別銀杏樹定位。交通為官方資料快照，查閱日期不等於公告發布日期。</p><p>本站沒有使用原清冊的實拍照片；頁首背景與飄葉為生成素材；葉片圖形為程式繪製的教學示意。本網站僅供教學使用，非營利用途。</p></div><div class="source-services"><section><h3>地圖與路線</h3><a href="https://www.openstreetmap.org/relation/1543125" target="_blank" rel="noopener">東京本土範圍：OSM 東京都簡化邊界</a><small>2026-10-08 取得；不含離島，僅供地圖裁切參考，非官方測繪。</small><p>立體銀杏由原生 WebGL 繪製，扇形葉、枝條與樹高為設計示意；探索地圖加入 26 處一公里建築；樹為示意，未知葉況以設計金色顯示，實際葉況仍另列待更新。</p><a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap 貢獻者／資料授權</a><a href="https://routing.openstreetmap.de/about.html" target="_blank" rel="noopener">FOSSGIS／OSRM 路線服務及使用規範</a><a href="https://www.openstreetmap.org/fixthemap" target="_blank" rel="noopener">回報地圖問題</a><p>按產生路線才送出起終點；原 12 處與車站代表位置來自 OSM；新增 14 處沿用原清冊的公開位置快照，位置查核分別為 2026-10-04 與 2026-10-02。路線不是即時通行或無障礙保證。</p></section><section><h3>葉片教學參考</h3>${biologySources.map(s=>`<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a><small>查閱 ${s.checkedAt}</small>`).join('')}</section></div>${spots.map(s=>`<article class="source-place"><div><h3>${escapeHTML(s.name)}</h3><button class="text-button" data-open="${s.id}">查看景點</button></div>${sourceList(s)}<ul class="sources-list"><li><a href="${transport[s.id].url}" target="_blank" rel="noopener">交通資訊：${escapeHTML(transport[s.id].publisher)}</a><small>查閱 ${transport[s.id].checkedAt}；部分出口與距離仍待查核</small></li>${transport[s.id].extraUrl?`<li><a href="${transport[s.id].extraUrl}" target="_blank" rel="noopener">交通與位置補充官方來源</a><small>查閱 ${transport[s.id].checkedAt}</small></li>`:""}</ul></article>`).join('')}`;
  const registryHTML=sourceRegistry.map(x=>`<article class="source-place registry-row"><div><h3>${escapeHTML(x.source_id)} · ${escapeHTML(x.name)}</h3><span>原列 ${x.row_number} · ${escapeHTML(x.grade)} 級</span></div><p>${escapeHTML(x.classification)} · ${x.adoptedBy.length?'對應：'+escapeHTML(x.adoptedBy.join('、')):'未直接建立景點；作入口、統計、指南或排除紀錄'}</p><p>${escapeHTML(x.auditNote)}</p><p>發布單位：${escapeHTML(x.operator)} · 本輪查閱 ${x.checkedAt} · HTTP ${x.httpStatus??'未確認'}</p><a href="${escapeHTML(x.url)}" target="_blank" rel="noopener">原來源入口 ↗</a>${x.evidence_url&&x.evidence_url!==x.url?` · <a href="${escapeHTML(x.evidence_url)}" target="_blank" rel="noopener">原清冊證據頁 ↗</a>`:''}<details><summary>原清冊快照（${x.audited_at}，非本輪結論）</summary><p>${escapeHTML(x.finding)}</p><p>${escapeHTML(x.caveat)}</p></details></article>`).join('');
  $('#sources-content').insertAdjacentHTML('afterbegin',`<div class="source-policy"><h3>探索地圖的立體銀杏 3D：周邊建築與地下鐵</h3><p>26 處銀杏代表座標各自半徑 1 公里，按需讀取本地建築分區。使用東京都／PLATEAU 官方 LOD1 3D Tiles 的模型底面及原始屬性加工，範圍邊緣裁切；地面平坦化。優先來源高度，僅有樓層時每層 3 公尺估算，無兩者時僅輪廓。並非單株測繪、現地調查或完整屋頂／地形模型。</p><p><a href="assets/data/ginkgo-building-index.json" target="_blank" rel="noopener">26 處建築分區、來源清單與轉換統計</a> · <a href="https://docs.plateauview.mlit.go.jp/datasets/3d-tiles/" target="_blank" rel="noopener">PLATEAU 官方模型說明</a> · <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a>。每棟資訊卡揭露所屬資料年度、發布日、原始模型與 CityGML 中繼資料。</p><p>總覽收錄全部 172,140 棟去重建築（196,263 筆分區紀錄），低細節模型為來源輪廓的包圍盒示意；選取位置放大後建立完整來源輪廓，不設棟數上限。<a href="assets/data/building-overview-index.json" target="_blank" rel="noopener">完整總覽模型索引與 26 區識別碼</a>。官方快照不等於現地建物普查；高度、地址缺失會明示。</p><p>地下鐵不顯示在地圖上。點選銀杏後，依各景點的官方交通頁面顯示附近站點與路線，附查閱日期；沒有已確認地下鐵時明示不足並列其他交通。未提供即時位置、時刻表、預估到站與延誤。金色銀杏為設計位置模型，非當季葉色觀測；近地視角為 1.7m 眼高示意、地面平坦化。</p><p>教學使用、非營利；用途說明不更改原授權。使用原生 WebGL 與 <a href="https://github.com/mapbox/earcut" target="_blank" rel="noopener">Mapbox Earcut 3.0.2（ISC）</a>。</p><a href="#explore">前往探索地圖 → 立體銀杏 3D</a></div>`);


}
renderLearning();
$('#travel-date').addEventListener('input', renderCalendar);
$('#clear-favorites').addEventListener('click', () => {
  if (!state.favorites.size || !confirm('清除這台裝置上的所有收藏？')) return;
  state.favorites.clear(); persistFavorites(); updateFavorites(); notify('已清除收藏');
});
window.addEventListener('hashchange', route);
window.addEventListener('storage', e => { if (e.key === storageKey || e.key === null) { state.favorites=parseFavorites(readStorage(storageKey));updateFavorites(); } });

// Preferences stay device-local. Respect reduced motion on the initial and future visits.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let motionEnabled = !reducedMotion.matches && readStorage(motionKey) !== 'off';
function renderMotion() {
  document.body.classList.toggle('motion-off', !motionEnabled);
  $('#motion-toggle').setAttribute('aria-pressed',String(motionEnabled));
  $('#motion-label').textContent = motionEnabled ? '動畫開啟' : '動畫關閉';
  $('#motion-toggle').title = reducedMotion.matches ? '裝置已設定減少動態效果' : '切換銀杏飄落動畫';
}
$('#motion-toggle').addEventListener('click', () => {
  if (reducedMotion.matches) { notify('裝置已設定減少動態效果，將保持動畫關閉。'); return; }
  motionEnabled=!motionEnabled;renderMotion();
  try { localStorage.setItem(motionKey,motionEnabled ? 'on' : 'off'); } catch { /* Preference can remain session-only. */ }
});
reducedMotion.addEventListener('change', () => {motionEnabled=!reducedMotion.matches && readStorage(motionKey)!=='off';renderMotion();});
const mobile = matchMedia('(max-width: 760px)');
function createLeaves() {
  $('#leaves').replaceChildren();
  const count = mobile.matches ? 7 : 15;
  for (let i=0;i<count;i++) {
    const img=document.createElement('img');img.className='falling-leaf';img.alt='';img.src='assets/ginkgo-leaf.png';
    img.style.left=`${(i*73.3)%100}%`;img.style.setProperty('--size',`${mobile.matches ? 18+i%4*6 : 23+i%5*10}px`);
    img.style.setProperty('--duration',`${20+i%6*4}s`);img.style.setProperty('--delay',`${-i*4.7}s`);
    img.style.setProperty('--rotation',`${i*43}deg`);img.style.setProperty('--drift',`${i%2 ? 80 : -100}px`);
    $('#leaves').append(img);
  }
}
document.addEventListener('visibilitychange',()=>document.body.classList.toggle('page-paused',document.hidden));
document.body.classList.toggle('page-paused',document.hidden);
mobile.addEventListener('change',createLeaves); createLeaves(); renderMotion();
updateFavorites(); route();

// Optional, feature-detected WebMCP: shares the same actions and state as the interface.
if (document.modelContext?.registerTool) {
  const lifecycle = new AbortController();
  const tools = [
    {name:'search_ginkgo_spots',title:'搜尋東京銀杏景點',description:'搜尋本站收錄的銀杏景點並更新可見列表及地圖。',inputSchema:{type:'object',properties:{query:{type:'string'}},required:['query'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||typeof input.query!=='string'||Object.keys(input).some(k=>k!=='query'))throw new Error('請提供 query 文字');closeDetail(false);resetFilters();state.query=input.query;$('#search').value=input.query;setView('explore');history.replaceState(null,'','#explore');renderExplore();map.fit(filteredSpots());return filteredSpots().map(s=>({id:s.id,name:s.name,current:s.current,typical:s.typical?.label||null}));}},
    {name:'set_ginkgo_favorite',title:'設定銀杏景點收藏',description:'在這台裝置收藏或移除指定銀杏景點。',inputSchema:{type:'object',properties:{id:{type:'string'},saved:{type:'boolean'}},required:['id','saved'],additionalProperties:false},annotations:{readOnlyHint:false},execute(input){if(!input||!ids.has(input.id)||typeof input.saved!=='boolean'||Object.keys(input).some(k=>!['id','saved'].includes(k)))throw new Error('請提供有效景點 id 和 saved 布林值');if(state.favorites.has(input.id)!==input.saved)toggleFavorite(input.id);return{id:input.id,saved:state.favorites.has(input.id),persisted:storageAvailable};}}
  ];
  for (const tool of tools) {
    try { Promise.resolve(document.modelContext.registerTool(tool,{signal:lifecycle.signal})).catch(()=>{}); } catch { /* Unsupported experimental API does not affect the app. */ }
  }
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
}
