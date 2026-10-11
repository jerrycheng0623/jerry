import {prepareBuilding,buildingBounds} from './city-geometry.js?v=20261009-smooth-v2';
export async function readCityAsset(url,kind,{lazy=false,expectedSpot}={}){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),10000);
 let data;
 try{const response=await fetch(url,{cache:'no-cache',signal:controller.signal});if(!response.ok)throw new Error(`資料載入失敗（${response.status}）`);data=await response.json();}
 catch(error){if(error.name==='AbortError')throw new Error('資料讀取逾時，請重新讀取。');throw error;}
 finally{clearTimeout(timer);}
 if(kind==='buildings'){
  if(expectedSpot&&(data.spot?.id!==expectedSpot||data.radiusMetres!==1000))throw new Error('建築分區與所選銀杏位置不符');
  if(data.type!=='FeatureCollection'||!Array.isArray(data.features)||!data.source?.license)throw new Error('建築資料格式不符');
  return {...data,prepared:data.features.map(f=>{if(!f.properties||!['Polygon','MultiPolygon'].includes(f.geometry?.type))throw new Error('建築輪廓格式不符');return lazy?buildingBounds(f):prepareBuilding(f);})};
 }
 if(data.kind!=='static'||!Array.isArray(data.lines))throw new Error('交通資料格式不符');
 return {...data,lines:data.lines.map(line=>({...line,stations:line.stations.map(station=>({...station,code:(station.code||'').match(new RegExp(line.id+'[0-9]{2}'))?.[0]||null}))}))};
}
export const buildingURL='./assets/data/city-buildings.geojson';
export const metroURL='./assets/data/metro-static.json';
export const usageName=value=>({'業務施設':'辦公設施','共同住宅':'集合住宅','商業施設':'商業設施','官公庁施設':'政府機關設施','文教厚生施設':'教育與公共福利設施','運輸倉庫施設':'運輸與倉儲設施','供給処理施設':'公用供應與處理設施','宿泊施設':'住宿設施','店舗等併用住宅':'店鋪兼住宅','作業所併用住宅':'作業場所兼住宅','その他':'其他','不明':'尚無資料'})[value]||value||'尚無資料';
export const displayStation=value=>String(value).replaceAll('浅','淺').replaceAll('渋','澀').replaceAll('涩','澀').replaceAll('参','參').replaceAll('蔵','藏').replaceAll('国','國').replaceAll('町','町');
