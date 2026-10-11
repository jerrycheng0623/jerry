export const stages = [
  {id:'bud',name:'萌芽',color:'#a3bf73',description:'用小芽示意新一輪生長；實際萌芽日期需有當地紀錄。'},
  {id:'young',name:'嫩葉',color:'#b1cf71',description:'新葉展開的教學示意；大小與展開程度請依實測判讀。'},
  {id:'green',name:'成熟綠葉',color:'#73a65d',description:'銀杏葉呈扇形，裂片深淺可能不同，並非固定的成長階段指標。'},
  {id:'turning',name:'正在轉黃',color:'#c0b75d',description:'綠色與黃色可以同時出現；同一園區的不同樹木也可能進度不同。'},
  {id:'gold',name:'滿黃',color:'#f2c760',description:'秋季金黃葉色的示意。是否見頃仍需有日期的現場觀測。'},
  {id:'falling',name:'落葉',color:'#ba8c4f',description:'分別確認樹上剩餘葉量與地面覆蓋，不能只憑落葉推定金色地毯。'},
  {id:'dormant',name:'休眠',color:'#a0a091',description:'以無葉枝條作季節教學示意，不以月份推定每棵樹的狀態。'},
  {id:'unknown',name:'尚無紀錄',color:'#b3b3a7',description:'目前沒有可用的觀測；不從日期、例年或其他樹種猜測葉況。'}
];
export const biologySources = [
  {label:'英國皇家植物園 Kew：扇形葉、裂片與秋季葉色',url:'https://www.kew.org/read-and-watch/ginkgo-biloba-maidenhair-tree-kew-gardens',checkedAt:'2026-10-08'},
  {label:'明治神宮外苑：銀杏並木的春夏秋冬',url:'https://www.meijijingugaien.jp/walk/sight/season.html',checkedAt:'2026-10-08'}
];
export function stageFor(record) {
  if (!record) return stages.at(-1);
  if (record.stage) return stages.find(s=>s.id===record.stage) || stages.at(-1);
  const text=record.status || '';
  const id=/接近|正在|轉黃/.test(text)?'turning':/見頃|滿黃/.test(text)?'gold':/落葉/.test(text)?'falling':/綠葉/.test(text)?'green':'unknown';
  return stages.find(s=>s.id===id);
}
export function observationAt(spot,date) {
  // A date view is not an estimate: only same-year observations on/before that date.
  if(!date) return null;
  const records=[...(spot.observations || []),...(spot.current?[spot.current]:[])];
  return records.filter(r=>r.date<=date && r.date.slice(0,4)===date.slice(0,4)).sort((a,b)=>b.date.localeCompare(a.date))[0] || null;
}
export function leafSVG(id='unknown',className='leaf-icon') {
  const stage=stages.find(s=>s.id===id) || stages.at(-1);
  const color=stage.color;
  const leaf='<path d="M50 74C28 68 13 51 11 29L24 15 39 11 50 26 61 11 76 15 89 29C87 51 72 68 50 74Z" fill="currentColor"/><path d="M50 75V92M50 72 25 26M50 72 39 22M50 72 61 22M50 72 75 26M50 72 16 38M50 72 84 38" stroke="#263320" stroke-opacity=".4" fill="none" stroke-width="1.5"/>';
  const bud='<path d="M50 88V50M50 55C20 41 34 16 50 14C66 16 80 41 50 55Z" stroke="currentColor" fill="currentColor" stroke-width="3"/>';
  const bare='<path d="M50 92V26M50 65 28 41M50 50 72 28M28 41V27M72 28 79 16" stroke="currentColor" stroke-width="4" stroke-linecap="round" fill="none"/>';
  const illustrated=id==='bud'?bud:id==='dormant'?bare:id==='young'?`<g transform="translate(16 15) scale(.68)">${leaf}</g>`:id==='falling'?`<g transform="rotate(-20 50 50)">${leaf}</g>`:leaf;
  return `<svg class="${className}" viewBox="0 0 100 100" aria-hidden="true" style="color:${color}">${illustrated}${id==='unknown'?'<text x="50" y="53" text-anchor="middle" fill="#20251a" font-size="32" font-family="sans-serif">?</text>':''}</svg>`;
}
