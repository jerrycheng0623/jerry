// Official access summaries, not measured proximity or real-time vehicle data.
const subway=/(?:銀座|丸之內|丸ノ内|日比谷|東西|千代田|有樂町|有楽町|半藏門|半蔵門|南北|副都心|都營(?:大江戶|浅草|淺草|三田|新宿)|都営(?:大江戸|浅草|三田|新宿))線/;
export const nearbySubway=data=>(data?.stations||[]).filter(s=>subway.test(s.lines||''));
export function nearbyTransitHTML(data,escape){
 if(!data)return '<p>附近交通尚無資料。</p>';
 const metro=nearbySubway(data),others=data.stations.filter(s=>!metro.includes(s));const list=items=>items.map(s=>`<li><strong>${escape(s.name)}</strong><span>${escape(s.lines||'路線尚無資料')}</span><small>${escape(s.note||'出口與步行距離待確認')}</small></li>`).join('');
 return `<details class="nearby-transit" open><summary>附近地下鐵${metro.length?' · '+metro.length+' 個站點':''}</summary>${metro.length?'<ul>'+list(metro)+'</ul>':'<p>官方交通摘要尚無已確認的附近地下鐵。</p>'}${others.length?'<p>其他附近交通</p><ul>'+list(others)+'</ul>':''}<a href="${escape(data.url)}" target="_blank" rel="noopener">${escape(data.publisher||'官方交通來源')} ↗</a><small>官方交通摘要 · 查閱 ${escape(data.checkedAt)}；非即時資料。步行距離、到站時間與延誤尚無資料。</small></details>`;
}
