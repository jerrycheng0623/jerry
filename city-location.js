import {insideTokyo} from './tokyo-region.js?v=20261009-smooth-v2';
// Called only by the user's location button. Never runs on page load.
export function locateTokyo(geolocation){
 return new Promise((resolve,reject)=>{
  if(!geolocation){reject(new Error('此裝置不支援定位。'));return;}
  geolocation.getCurrentPosition(p=>{const coords=[p.coords.latitude,p.coords.longitude];if(!coords.every(Number.isFinite)||!insideTokyo(coords)){reject(new Error('目前位置不在東京本土範圍，保留原視角。'));return;}resolve(coords);},e=>reject(new Error(e.code===1?'未允許定位，可使用搜尋。':'無法取得位置，請稍後再試。')),{timeout:10000,maximumAge:60000});
 });
}
