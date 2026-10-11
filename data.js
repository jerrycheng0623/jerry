// 內容查閱 2026-10-08；座標沿用 2026-10-02 快照，非逐株調查。
export const metadata = {
  "contentReviewedAt": "2026-10-08",
  "coordinatesReviewedAt": "2026-10-02",
  "species": "銀杏",
  "observationsTimezone": "Asia/Tokyo",
  "automaticUpdates": false,
  "originalSheet": "https://docs.google.com/spreadsheets/d/1dx_41InyuuWuILc4ZHJW8tTZMVOCpIuSz-QzISzd7y0/edit?gid=164385659",
  "sheetRange": "'tokyo_ginkgo_sources_2026-09-29'!A1:R45",
  "sheetComparedCells": 738,
  "sourceRows": 41,
  "spotCount": 26,
  "jma": {
    "yellow": "11/23",
    "fall": "12/3",
    "normalPeriod": "1991–2020",
    "yellowSource": "https://www.data.jma.go.jp/sakura/data/ruinenchi/013.csv",
    "fallSource": "https://www.data.jma.go.jp/sakura/data/ruinenchi/014.csv",
    "normalSource": "https://www.data.jma.go.jp/stats/data/mdrr/normal/index.html"
  }
};
export const spots = [
  {
    "id": "ueno",
    "name": "上野恩賜公園",
    "japanese": "上野恩賜公園",
    "area": "central",
    "district": "台東區",
    "coords": [
      35.7140191,
      139.7739291
    ],
    "tags": ["free"],
    "description": "博物館與城市綠地相連的散步區，可從園內秋季情報尋找銀杏。",
    "highlights": [
      "園內銀杏；細部觀賞位置請確認園區地圖"
    ],
    "details": "2025 年東京都公園協會秋季公告將上野列入含銀杏的景點。公告涵蓋多樹種，不能把整體紅葉直接當成銀杏葉況。",
    "typical": {
      "label": "11 月下旬～12 月中旬",
      "start": "11-21",
      "end": "12-20",
      "source": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/midokoro/shizen",
      "kind": "official"
    },
    "current": null,
    "observations": [],
    "fee": "免費（公園）；博物館、動物園等設施另計",
    "hours": "05:00–23:00；時間外禁止進入。以管理單位東京都建設局為準",
    "access": "上野站：管理單位公園基本資訊：步行約 2 分鐘；京成上野站：步行約 1 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/ueno/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "d957025ec7452667.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/kouenannai",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "6243044f0312f987.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/access",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "366c0b88ff9e4562.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/rules",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5e92ccfdf3a92086.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/midokoro/shizen",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "ab76cefe133c9de9.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kensetsu.metro.tokyo.lg.jp/jimusho/toubuk/ueno/kouenannai",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": null
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E4%B8%8A%E9%87%8E%E6%81%A9%E8%B3%9C%E5%85%AC%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-002",
    "originalId": "TKG-002",
    "grade": "S",
    "address": "台東区上野公園・池之端三丁目",
    "rules": "禁止無人機、滑板及無牽繩遛狗；各設施另有規則。協會頁仍寫常時開園，保留來源分歧。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "大型公園，銀杏的具體位置在可讀頁面未載明（東京都公園協會2025名單只列到園區層級）；僅適合標示「園區」而非單棵樹。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-002",
      "source_id": "TKG-002",
      "name_ja": "上野恩賜公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.713,
      "lng": 139.7724,
      "basis": "公園整體的代表點（各來源座標平均）",
      "sources": [
        "https://www.openstreetmap.org/relation/5413419",
        "https://ja.wikipedia.org/wiki/上野恩賜公園",
        "https://weathernews.jp/s/koyo/spot/24412/"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 175,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.714,
          "lng": 139.7739,
          "desc": "Nominatim 公園 relation 中心",
          "url": "https://www.openstreetmap.org/relation/5413419"
        },
        {
          "kind": "wiki",
          "lat": 35.7122,
          "lng": 139.7711,
          "desc": "ja.wikipedia「上野恩賜公園」座標",
          "url": "https://ja.wikipedia.org/wiki/上野恩賜公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.7127,
          "lng": 139.7722,
          "desc": "Weathernews 紅葉スポット座標",
          "url": "https://weathernews.jp/s/koyo/spot/24412/"
        }
      ],
      "note": "大型公園，銀杏的具體位置在可讀頁面未載明（東京都公園協會2025名單只列到園區層級）；僅適合標示「園區」而非單棵樹。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認"
    ],
    "aliases": [
      "上野恩賜公園",
      "上野恩賜公園"
    ]
  },
  {
    "id": "kiba",
    "sourceId": "TKG-003",
    "originalId": "TKG-003",
    "name": "木場公園",
    "japanese": "木場公園",
    "area": "central",
    "district": "江東區",
    "coords": [
      35.6752,
      139.8085
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "以大橋連接南、中、北三區的城市綠地，適合沿園路慢慢尋找銀杏。",
    "highlights": [
      "2025 官方名單確認園內銀杏；具體觀賞位置待查"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "江東区木場四・五丁目・平野四丁目・三好四丁目・東陽六丁目",
    "rules": "部分設施、活動及工程區域有使用限制；南、中、北區入口不同。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "木場站：步行約 10 分鐘；清澄白河站：步行約 15 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/kiba/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5a7dba7a1cb4fdb6.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/kiba/assets/公園利用の注意事項（木場公園）（PDF）.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "54f384556f490fce.pdf"
      }
    ],
    "coordinateNote": "公園被木場公園大橋分成南北兩半，座標平均後落在中間；銀杏位置未載明。",
    "coordinateSource": "https://www.openstreetmap.org/relation/14273608",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-003",
      "source_id": "TKG-003",
      "name_ja": "木場公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.6752,
      "lng": 139.8085,
      "basis": "公園整體的代表點（平均）",
      "sources": [
        "https://www.openstreetmap.org/relation/14273608",
        "https://www.openstreetmap.org/way/845051284",
        "https://ja.wikipedia.org/wiki/木場公園"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 200,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6759,
          "lng": 139.8089,
          "desc": "Nominatim 公園 relation 中心",
          "url": "https://www.openstreetmap.org/relation/14273608"
        },
        {
          "kind": "osm",
          "lat": 35.6734,
          "lng": 139.8084,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/845051284"
        },
        {
          "kind": "wiki",
          "lat": 35.6764,
          "lng": 139.8083,
          "desc": "ja.wikipedia「木場公園」座標",
          "url": "https://ja.wikipedia.org/wiki/木場公園"
        }
      ],
      "note": "公園被木場公園大橋分成南北兩半，座標平均後落在中間；銀杏位置未載明。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "木場公園",
      "木場公園"
    ]
  },
  {
    "id": "koganei",
    "sourceId": "TKG-004",
    "originalId": "TKG-004",
    "name": "小金井公園",
    "japanese": "小金井公園",
    "area": "tama",
    "district": "小金井市等",
    "coords": [
      35.7155,
      139.5189
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "廣大的郊區公園，能把植物觀察和秋日散步安排在同一趟行程。",
    "highlights": [
      "園內銀杏；具體觀賞位置待查"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "小金井市桜町三丁目、関野町一・二丁目、小平市花小金井南町三丁目、西東京市向台町六丁目、武蔵野市桜堤三丁目",
    "rules": "博物館等設施有獨立票價與時間；交通頁只列巴士站，不推估未公布的步行分鐘。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "武藏小金井站：轉西武巴士至小金井公園西口；未公布步行分鐘；東小金井站：轉 CoCo 巴士至小金井公園入口",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/koganei/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "89008c9abfda8e10.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      }
    ],
    "coordinateNote": "約77公頃的大型公園；官方頁面僅列「秋：イチョウ」，無具體地點。",
    "coordinateSource": "https://www.openstreetmap.org/way/591077391",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-004",
      "source_id": "TKG-004",
      "name_ja": "小金井公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.7155,
      "lng": 139.5189,
      "basis": "公園整體的代表點（平均）",
      "sources": [
        "https://www.openstreetmap.org/way/591077391",
        "https://ja.wikipedia.org/wiki/小金井公園",
        "https://weathernews.jp/s/koyo/spot/24403/",
        "https://sp.jorudan.co.jp/leaf/spot_J0039.html"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 130,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7165,
          "lng": 139.5196,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/591077391"
        },
        {
          "kind": "wiki",
          "lat": 35.7144,
          "lng": 139.5189,
          "desc": "ja.wikipedia「小金井公園」座標",
          "url": "https://ja.wikipedia.org/wiki/小金井公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.7144,
          "lng": 139.5188,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24403/"
        },
        {
          "kind": "jorudan",
          "lat": 35.7166,
          "lng": 139.5184,
          "desc": "Jorudan 座標",
          "url": "https://sp.jorudan.co.jp/leaf/spot_J0039.html"
        }
      ],
      "note": "約77公頃的大型公園；官方頁面僅列「秋：イチョウ」，無具體地點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "小金井公園",
      "小金井公園"
    ]
  },
  {
    "id": "shiba",
    "sourceId": "TKG-005",
    "originalId": "TKG-005",
    "name": "芝公園",
    "japanese": "芝公園",
    "area": "central",
    "district": "港區",
    "coords": [
      35.6555,
      139.748
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "tree",
      "free"
    ],
    "description": "在東京鐵塔周邊的歷史公園散步，觀察園內銀杏與城市秋色。",
    "highlights": [
      "園內大樹與銀杏；單株位置未確認"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "港区芝公園一・二・三・四丁目",
    "rules": "公園無專用停車場；不要將增上寺或其他管理區域的規則混用。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "芝公園站／御成門站：各步行約 2 分鐘；赤羽橋站：步行約 2 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/siba/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "9f1fa70bf3512639.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/siba/assets/files/shiba_eng.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a3a87bfdeb13fcae.pdf"
      }
    ],
    "coordinateNote": "東京都公園協會頁面只寫「クスノキ、ケヤキ、イチョウなどの大木がところどころにあります」，無具體地點，故不能指到單一銀杏。正確網址為siba（不是shiba）。もみじ谷另列一點，且那是楓不是銀杏。",
    "coordinateSource": "https://www.openstreetmap.org/way/745301114",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-005",
      "source_id": "TKG-005",
      "name_ja": "芝公園",
      "point_label": "公園中心（概略；銀杏位置未核實）",
      "role": "site",
      "lat": 35.6555,
      "lng": 139.748,
      "basis": "環狀公園整體的代表點（平均）",
      "sources": [
        "https://www.openstreetmap.org/way/745301114",
        "https://www.openstreetmap.org/relation/18180831",
        "https://ja.wikipedia.org/wiki/芝公園",
        "https://weathernews.jp/s/koyo/spot/24414/"
      ],
      "confidence": "low",
      "site_position_agreement": "medium",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 332,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6539,
          "lng": 139.7475,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/745301114"
        },
        {
          "kind": "osm",
          "lat": 35.6583,
          "lng": 139.7467,
          "desc": "Nominatim 行政邊界 relation",
          "url": "https://www.openstreetmap.org/relation/18180831"
        },
        {
          "kind": "wiki",
          "lat": 35.6564,
          "lng": 139.7483,
          "desc": "ja.wikipedia「芝公園」座標",
          "url": "https://ja.wikipedia.org/wiki/芝公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.6536,
          "lng": 139.7494,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24414/"
        }
      ],
      "note": "東京都公園協會頁面只寫「クスノキ、ケヤキ、イチョウなどの大木がところどころにあります」，無具體地點，故不能指到單一銀杏。正確網址為siba（不是shiba）。もみじ谷另列一點，且那是楓不是銀杏。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "芝公園",
      "芝公園"
    ]
  },
  {
    "id": "johoku",
    "sourceId": "TKG-006",
    "originalId": "TKG-006",
    "name": "城北中央公園",
    "japanese": "城北中央公園",
    "area": "west",
    "district": "板橋區、練馬區",
    "coords": [
      35.7564,
      139.673
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "avenue",
      "free"
    ],
    "description": "跨越板橋與練馬的綠地，櫻川地區的高大銀杏是秋日散步的線索。",
    "highlights": [
      "櫻川地區銀杏；並木精確位置待確認"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "板橋区桜川一丁目、小茂根五丁目、練馬区氷川台一丁目、羽沢三丁目",
    "rules": "有收費停車場；植物介紹支持銀杏存在，沒有當季逐株葉況。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "上板橋站：步行約 15 分鐘；冰川台站：步行約 20 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/johoku-chuo/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "bccd0c8ecb70f8c6.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      }
    ],
    "coordinateNote": "東京都公園協會頁面寫「秋にはイチョウ並木が綺麗に色付きます」，但未說並木在哪裡；約26公頃。",
    "coordinateSource": "https://www.openstreetmap.org/relation/17981647",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-006",
      "source_id": "TKG-006",
      "name_ja": "城北中央公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.7564,
      "lng": 139.673,
      "basis": "公園整體的代表點（平均）",
      "sources": [
        "https://www.openstreetmap.org/relation/17981647",
        "https://ja.wikipedia.org/wiki/城北中央公園",
        "https://weathernews.jp/s/koyo/spot/24482/",
        "https://sp.jorudan.co.jp/leaf/spot_J0226.html"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 104,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7556,
          "lng": 139.6736,
          "desc": "Nominatim 公園 relation",
          "url": "https://www.openstreetmap.org/relation/17981647"
        },
        {
          "kind": "wiki",
          "lat": 35.7567,
          "lng": 139.6728,
          "desc": "ja.wikipedia「城北中央公園」座標",
          "url": "https://ja.wikipedia.org/wiki/城北中央公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.7567,
          "lng": 139.6728,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24482/"
        },
        {
          "kind": "jorudan",
          "lat": 35.7566,
          "lng": 139.6729,
          "desc": "Jorudan 座標",
          "url": "https://sp.jorudan.co.jp/leaf/spot_J0226.html"
        }
      ],
      "note": "東京都公園協會頁面寫「秋にはイチョウ並木が綺麗に色付きます」，但未說並木在哪裡；約26公頃。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "城北中央公園",
      "城北中央公園"
    ]
  },
  {
    "id": "zempuku",
    "sourceId": "TKG-007",
    "originalId": "TKG-007",
    "name": "善福寺川綠地",
    "japanese": "善福寺川緑地",
    "area": "west",
    "district": "杉並區",
    "coords": [
      35.692,
      139.6305
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "沿善福寺川蜿蜒散步，從河岸綠地認識銀杏與季節變化。",
    "highlights": [
      "沿川園區銀杏；未取得單株位置"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "杉並区成田東二・三・四丁目、成田西一・三・四丁目、荻窪一丁目",
    "rules": "景點是善福寺川綠地，不是善福寺公園；沿川不同區段距車站不同。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "西永福站：步行約 15 分鐘；濱田山站：步行約 15 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/zempukujigawa-ryokuchi/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "8c4f6f6e119a6209.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      }
    ],
    "coordinateNote": "線狀公園（成田東～荻窪），兩個座標相距約450 m，只能當概略位置；銀杏地點未載明。",
    "coordinateSource": "https://www.openstreetmap.org/relation/17376005",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-007",
      "source_id": "TKG-007",
      "name_ja": "善福寺川緑地",
      "point_label": "公園中心（概略；沿河線狀公園）",
      "role": "site",
      "lat": 35.692,
      "lng": 139.6305,
      "basis": "沿善福寺川的線狀公園，取兩來源平均",
      "sources": [
        "https://www.openstreetmap.org/relation/17376005",
        "https://weathernews.jp/s/koyo/spot/24444/"
      ],
      "confidence": "low",
      "site_position_agreement": "medium",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 226,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6928,
          "lng": 139.6283,
          "desc": "Nominatim 公園 relation",
          "url": "https://www.openstreetmap.org/relation/17376005"
        },
        {
          "kind": "weathernews",
          "lat": 35.6912,
          "lng": 139.6328,
          "desc": "Weathernews 座標（善福寺川緑地・和田堀公園合併頁）",
          "url": "https://weathernews.jp/s/koyo/spot/24444/"
        }
      ],
      "note": "線狀公園（成田東～荻窪），兩個座標相距約450 m，只能當概略位置；銀杏地點未載明。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "善福寺川綠地",
      "善福寺川緑地"
    ]
  },
  {
    "id": "wadabori",
    "sourceId": "TKG-008",
    "originalId": "TKG-008",
    "name": "和田堀公園",
    "japanese": "和田堀公園",
    "area": "west",
    "district": "杉並區",
    "coords": [
      35.6855,
      139.6395
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "沿河岸與寬敞園路行走，在和田堀公園尋找銀杏秋色。",
    "highlights": [
      "園內銀杏；具體觀賞位置待確認"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "杉並区大宮一・二丁目、成田東一・二丁目、成田西一丁目、堀ノ内一・二丁目、松ノ木一丁目",
    "rules": "有收費停車場；園區的紅葉消息涵蓋多樹種，不能全部套用到銀杏。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "西永福站：步行約 15 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/wadabori/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5ed96f46eb903bec.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      }
    ],
    "coordinateNote": "只有OSM來源，無第二種來源核對；公園頁面提到鄰接的大宮八幡宮「神門の夫婦銀杏」，另列副點。",
    "coordinateSource": "https://www.openstreetmap.org/relation/3974046",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-008",
      "source_id": "TKG-008",
      "name_ja": "和田堀公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.6855,
      "lng": 139.6395,
      "basis": "公園整體的代表點（平均，僅OSM來源）",
      "sources": [
        "https://www.openstreetmap.org/relation/3974046",
        "https://www.openstreetmap.org/way/40294887",
        "https://www.openstreetmap.org/way/577458755"
      ],
      "confidence": "low",
      "site_position_agreement": "medium",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 196,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6843,
          "lng": 139.6411,
          "desc": "Nominatim 公園 relation",
          "url": "https://www.openstreetmap.org/relation/3974046"
        },
        {
          "kind": "osm",
          "lat": 35.6853,
          "lng": 139.6386,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/40294887"
        },
        {
          "kind": "osm",
          "lat": 35.6868,
          "lng": 139.6389,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/577458755"
        }
      ],
      "note": "只有OSM來源，無第二種來源核對；公園頁面提到鄰接的大宮八幡宮「神門の夫婦銀杏」，另列副點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "和田堀公園",
      "和田堀公園"
    ]
  },
  {
    "id": "toyama",
    "sourceId": "TKG-009",
    "originalId": "TKG-009",
    "name": "戶山公園",
    "japanese": "戸山公園",
    "area": "central",
    "district": "新宿區",
    "coords": [
      35.7037,
      139.7135
    ],
    "grade": "S",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "在戶山公園的大久保與箱根山地區，尋找都心裡的銀杏散步角落。",
    "highlights": [
      "園內銀杏；尚未確認位於哪個區段"
    ],
    "details": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "address": "新宿区戸山一・二・三丁目、新宿区大久保三丁目",
    "rules": "大久保、箱根山兩區的步行時間不同；無專用停車場。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "西早稻田站：大久保地區約 6 分鐘；箱根山地區約 8 分鐘；新大久保站／高田馬場站：大久保地區約 10 分鐘；箱根山地區約 25 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/toyama/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "4ddacee005802e48.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/toyama/assets/files/toyama_eng.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "ac3c71ecbf2df4f1.pdf"
      }
    ],
    "coordinateNote": "公園分兩處，另列大久保地區副點；官方頁面只寫「イチョウ」，無具體地點。",
    "coordinateSource": "https://www.openstreetmap.org/way/209465552",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-009",
      "source_id": "TKG-009",
      "name_ja": "戸山公園",
      "point_label": "戸山（箱根山）地区（概略）",
      "role": "site",
      "lat": 35.7037,
      "lng": 139.7135,
      "basis": "戸山公園分為東側戸山（箱根山）地區與西側大久保地區，此點為東側",
      "sources": [
        "https://www.openstreetmap.org/way/209465552",
        "https://ja.wikipedia.org/wiki/箱根山_(新宿区)",
        "https://weathernews.jp/s/koyo/spot/24462/"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 14,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7038,
          "lng": 139.7135,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/209465552"
        },
        {
          "kind": "wiki",
          "lat": 35.7036,
          "lng": 139.7136,
          "desc": "ja.wikipedia「箱根山 (新宿区)」座標",
          "url": "https://ja.wikipedia.org/wiki/箱根山_(新宿区)"
        },
        {
          "kind": "weathernews",
          "lat": 35.7037,
          "lng": 139.7134,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24462/"
        }
      ],
      "note": "公園分兩處，另列大久保地區副點；官方頁面只寫「イチョウ」，無具體地點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "戶山公園",
      "戸山公園"
    ]
  },
  {
    "id": "hikari",
    "name": "光丘公園",
    "japanese": "光が丘公園",
    "area": "west",
    "district": "練馬區、板橋區",
    "coords": [
      35.7663002,
      139.6296614
    ],
    "tags": [
      "avenue",
      "free"
    ],
    "description": "中央銀杏並木與寬敞綠地，適合安排一段悠閒的秋日散步。",
    "highlights": [
      "中央賣店與觀賞池之間的銀杏並木"
    ],
    "details": "官方介紹記載，中央並木由原格蘭特高地的 28 株銀杏移植而成；此為歷史說明，不代表當年樹木盤點。",
    "typical": null,
    "current": null,
    "observations": [],
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；設施開放時間另行公告",
    "access": "光丘站：步行約 8 分鐘；地下鐵成增站：步行約 15 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/hikarigaoka/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "555f6d612024c7d2.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%85%89%E3%81%8C%E4%B8%98%E5%85%AC%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-010",
    "originalId": "TKG-010",
    "grade": "S",
    "address": "練馬区光が丘二・四丁目、旭町二丁目、板橋区赤塚新町三丁目",
    "rules": "中央賣店至觀賞池之間有銀杏並木；28 株為官方移植史記載，非 2026 年盤點。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "池塘位置確定；官方所稱「売店」被推定為緊鄰池塘的パークス光が丘（官方未明示建物名）。精度約±100 m；僅OSM物件，無第二座標來源。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-010-ichounamiki",
      "source_id": "TKG-010",
      "name_ja": "光が丘公園 いちょう並木",
      "point_label": "観賞池與売店之間（概略）",
      "role": "feature",
      "lat": 35.7648,
      "lng": 139.6295,
      "basis": "官方文字「公園中央（売店と観賞池の間）」＋OSM池塘與園內商店建築的位置推算",
      "sources": [
        "https://www.openstreetmap.org/way/57018838",
        "https://www.openstreetmap.org/way/57404792",
        "https://www.tokyo-park.or.jp/park/hikarigaoka/"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 21,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7649,
          "lng": 139.6293,
          "desc": "OSM 観賞池（natural=water）",
          "url": "https://www.openstreetmap.org/way/57018838"
        },
        {
          "kind": "osm",
          "lat": 35.7648,
          "lng": 139.6297,
          "desc": "OSM パークス光が丘（retail，推定為官方所稱売店）",
          "url": "https://www.openstreetmap.org/way/57404792"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方「いちょう並木：公園中央（売店と観賞池の間）…移植28本」",
          "url": "https://www.tokyo-park.or.jp/park/hikarigaoka/"
        }
      ],
      "note": "池塘位置確定；官方所稱「売店」被推定為緊鄰池塘的パークス光が丘（官方未明示建物名）。精度約±100 m；僅OSM物件，無第二座標來源。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "光之丘公園",
      "光が丘公園"
    ]
  },
  {
    "id": "hibiya",
    "name": "日比谷公園",
    "japanese": "日比谷公園",
    "area": "central",
    "district": "千代田區",
    "coords": [
      35.674041,
      139.7563205
    ],
    "tags": [
      "tree",
      "free"
    ],
    "description": "城市中心的秋日綠地，尋訪園內著名的「首賭けイチョウ」。",
    "highlights": [
      "首賭けイチョウ"
    ],
    "details": "官方介紹園內代表性銀杏。園內工程及通行限制請以出發前的公告為準。",
    "typical": null,
    "current": null,
    "observations": [],
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "日比谷站：A10／A14 出口即達公園附近；霞關站：B2 出口即達公園附近；有樂町站：步行約 8 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/hibiya/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "25642cb4914e68a3.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/hibiya/assets/files/hibiyapark_map_english.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5c0c4627dc544f31.pdf"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E6%97%A5%E6%AF%94%E8%B0%B7%E5%85%AC%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-011",
    "originalId": "TKG-011",
    "grade": "S",
    "address": "千代田区日比谷公園",
    "rules": "大噴水及小音樂堂周邊有整備工程；通行範圍依出發前公告。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "OSM只標導覽牌，未直接標出該樹；「在松本楼附近」僅出自搜尋結果摘要，未逐頁核實。精度約±50–100 m；無第二座標來源。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-011-kubikake",
      "source_id": "TKG-011",
      "name_ja": "日比谷公園 首賭けイチョウ",
      "point_label": "首賭けイチョウ（松本楼付近・概略）",
      "role": "feature",
      "lat": 35.6737,
      "lng": 139.7559,
      "basis": "OSM的イチョウ導覽牌與松本楼位置（網路搜尋摘要稱該樹在松本楼附近）",
      "sources": [
        "https://www.openstreetmap.org/node/5500138998",
        "https://www.openstreetmap.org/node/469818509",
        "https://www.tokyo-park.or.jp/park/hibiya/"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 21,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6736,
          "lng": 139.7561,
          "desc": "OSM 導覽牌「東京都の木 (イチョウ)」",
          "url": "https://www.openstreetmap.org/node/5500138998"
        },
        {
          "kind": "osm",
          "lat": 35.6738,
          "lng": 139.7558,
          "desc": "OSM 日比谷 松本楼",
          "url": "https://www.openstreetmap.org/node/469818509"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方「首賭けイチョウ：園内でもひときわ大きなこのイチョウ…推定樹齢400～500年」",
          "url": "https://www.tokyo-park.or.jp/park/hibiya/"
        }
      ],
      "note": "OSM只標導覽牌，未直接標出該樹；「在松本楼附近」僅出自搜尋結果摘要，未逐頁核實。精度約±50–100 m；無第二座標來源。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "日比谷公園",
      "日比谷公園"
    ]
  },
  {
    "id": "yoyogi",
    "name": "代代木公園",
    "japanese": "代々木公園",
    "area": "central",
    "district": "澀谷區",
    "coords": [
      35.6714052,
      139.6951716
    ],
    "tags": [
      "free"
    ],
    "description": "在都心的大面積綠地裡，找一段屬於自己的銀杏散步時光。",
    "highlights": [
      "園內銀杏，觀賞位置以園區地圖為準"
    ],
    "details": "園方列出銀杏等植物與秋季景觀。活動、工程和使用限制請另看當年度公告。",
    "typical": null,
    "current": null,
    "observations": [],
    "fee": "免費；部分設施另收費",
    "hours": "常時開園；部分設施另有開放時間",
    "access": "原宿站：步行約 3 分鐘；代代木公園站：步行約 3 分鐘；明治神宮前站：步行約 3 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/yoyogi/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "431ea8c533ee796d.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/yoyogi/assets/files/yoyogi-kinshi20230919.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "02732e5b0c67befa.pdf"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E4%BB%A3%E3%80%85%E6%9C%A8%E5%85%AC%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-012",
    "originalId": "TKG-012",
    "grade": "S",
    "address": "渋谷区代々木神園町(A地区)、神南一丁目・神南二丁目(B地区)",
    "rules": "個別活動及工程另有限制；神南一丁目部分區域由不同單位管理。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "約54公頃；官方頁面僅列「秋：イチョウ」，無具體地點。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-012",
      "source_id": "TKG-012",
      "name_ja": "代々木公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.6717,
      "lng": 139.6965,
      "basis": "公園整體的代表點（平均）",
      "sources": [
        "https://www.openstreetmap.org/relation/19862716",
        "https://ja.wikipedia.org/wiki/代々木公園",
        "https://weathernews.jp/s/koyo/spot/24409/"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 122,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6714,
          "lng": 139.6952,
          "desc": "Nominatim 公園 relation",
          "url": "https://www.openstreetmap.org/relation/19862716"
        },
        {
          "kind": "wiki",
          "lat": 35.672,
          "lng": 139.6977,
          "desc": "ja.wikipedia「代々木公園」座標",
          "url": "https://ja.wikipedia.org/wiki/代々木公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.6716,
          "lng": 139.6967,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24409/"
        }
      ],
      "note": "約54公頃；官方頁面僅列「秋：イチョウ」，無具體地點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "代代木公園",
      "代々木公園"
    ]
  },
  {
    "id": "iwasaki",
    "name": "舊岩崎邸庭園",
    "japanese": "旧岩崎邸庭園",
    "area": "central",
    "district": "台東區（入口）",
    "coords": [
      35.7096207,
      139.7676028
    ],
    "tags": [],
    "description": "歷史建築與庭園植物交織，適合以慢步調尋找銀杏秋色。",
    "highlights": [
      "庭園內銀杏"
    ],
    "details": "官方庭園資訊列有銀杏。觀賞時請遵守建築與庭園的攝影、入館及參觀規則。",
    "typical": null,
    "current": null,
    "observations": [],
    "fee": "一般 400 日圓；65 歲以上 200 日圓；小學生以下及東京都內居住／就學中學生免費",
    "hours": "09:00–17:00，最後入園 16:30；12/29–1/1 休園，活動期間另確認",
    "access": "湯島站：1 號出口步行約 3 分鐘；輪椅及嬰兒車使用 3 號出口電梯；上野廣小路站：步行約 10 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.tokyo-park.or.jp/park/kyu-iwasaki-tei/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a87b16c105df8e6c.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b00cb27eb2dc183c.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/kyu-iwasaki-tei/news/2025/park_info_1.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "4b08e988d7e32ea1.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.tokyo-park.or.jp/park/kyu-iwasaki-tei/assets/files/kyuiwasaki_eng.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "4f7026acc294446a.pdf"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E6%97%A7%E5%B2%A9%E5%B4%8E%E9%82%B8%E5%BA%AD%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-013",
    "originalId": "TKG-013",
    "grade": "S",
    "address": "台東区池之端1-3-45（アクセスマップ項の所在地：東京都台東区池之端一丁目、文京区湯島四丁目）",
    "rules": "12/29–1/1 休園；建築內攝影、特殊活動與優惠資格請查園方。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "OSM正門節點與Weathernews座標相距約50 m，一致。庭園約2公頃，官方頁面列「イチョウ」但無具體位置。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-013",
      "source_id": "TKG-013",
      "name_ja": "旧岩崎邸庭園",
      "point_label": "庭園正門（入口）",
      "role": "site",
      "lat": 35.7092,
      "lng": 139.7683,
      "basis": "庭園正門（入口）；庭園中心約在 35.7097,139.7677（Nominatim/Wikipedia）",
      "sources": [
        "https://www.openstreetmap.org/node/4653514711",
        "https://weathernews.jp/s/koyo/spot/24457/"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 24,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7094,
          "lng": 139.7684,
          "desc": "OSM 節點「旧岩崎邸庭園正門」",
          "url": "https://www.openstreetmap.org/node/4653514711"
        },
        {
          "kind": "weathernews",
          "lat": 35.709,
          "lng": 139.7683,
          "desc": "Weathernews 座標（池之端1-3-45）",
          "url": "https://weathernews.jp/s/koyo/spot/24457/"
        }
      ],
      "note": "OSM正門節點與Weathernews座標相距約50 m，一致。庭園約2公頃，官方頁面列「イチョウ」但無具體位置。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "舊岩崎邸庭園",
      "旧岩崎邸庭園"
    ]
  },
  {
    "id": "showa",
    "name": "昭和紀念公園",
    "japanese": "国営昭和記念公園",
    "area": "tama",
    "district": "立川市、昭島市",
    "coords": [
      35.7122591,
      139.3943216
    ],
    "coordinateNote": "公園代表位置，並非卡納爾或語らい銀杏並木的精確定位。",
    "tags": [
      "avenue"
    ],
    "description": "兩條風格不同的銀杏並木，讓金色秋天延伸成長長的步道。",
    "highlights": [
      "卡納爾銀杏並木",
      "かたらいの銀杏並木",
      "自行車道與兒童之森附近"
    ],
    "details": "卡納爾、かたらい兩條銀杏並木可分區觀賞。官方植物頁與夜間活動頁對卡納爾長度分別寫 200／150 公尺，基準未釐清，不用其中一個數值當定論。",
    "typical": {
      "label": "10月下旬～11月下旬",
      "start": "10-21",
      "end": "11-30",
      "source": "https://www.showakinen-koen.jp/flower-information/",
      "kind": "official"
    },
    "current": {
      "date": "2026-10-07",
      "publishedAt": "2026-10-08",
      "stage": "turning",
      "status": "部分區域開始轉黃",
      "description": "園方 10/8 花訊配合 10/7 照片，記載立川入口前（免費區）與原野南賣店開始轉黃；卡納爾等其他區域尚未開始。此階段僅適用上述局部位置，不代表全園或兩條銀杏並木。",
      "scope": "立川入口前、原野南賣店；非全園",
      "url": "https://www.showakinen-koen.jp/hanadayori/75730/"
    },
    "observations": [
      {
        "date": "2026-10-07",
        "publishedAt": "2026-10-08",
        "stage": "turning",
        "status": "部分區域開始轉黃",
        "description": "園方 10/8 花訊配合 10/7 照片，記載立川入口前（免費區）與原野南賣店開始轉黃；卡納爾等其他區域尚未開始。此階段僅適用上述局部位置，不代表全園或兩條銀杏並木。",
        "scope": "立川入口前、原野南賣店；非全園",
        "url": "https://www.showakinen-koen.jp/hanadayori/75730/"
      }
    ],
    "fee": "一日券：高中以上 450 日圓；65 歲以上 210 日圓；中學生以下免費",
    "hours": "10 月 09:30–17:00；11–2 月 09:30–16:30。12/31、1/1 與 1 月第三週一至週五休園；特殊活動另確認",
    "access": "西立川站：公園口至西立川入口約 2 分鐘；立川站：北口至立川入口約 18 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/hanadayori/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "3b05c3643a046bba.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.showakinen-koen.jp/hanadayori/page/3/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "05ca43b83c99a507.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "cf26ade99546fa56.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/flower-information/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "adac55b3cc1e4b74.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/autumn-night-walk/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "35d6d42015041243.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/park-information/schedule/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "ba397bf78ce24f58.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/park-information/price/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "98c7f54de86dd240.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.showakinen-koen.jp/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "6eb0eefe2c09a5f4.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.showakinen-koen.jp/park-information/park-rules/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "51cd924affd6fd03.txt"
      },
      {
        "label": "2026/10/7 局部銀杏觀測（10/8 發布）",
        "url": "https://www.showakinen-koen.jp/hanadayori/75730/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "4ce127a2771ca969.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%9B%BD%E5%96%B6%E6%98%AD%E5%92%8C%E8%A8%98%E5%BF%B5%E5%85%AC%E5%9C%92&format=jsonv2&limit=5&countrycodes=jp",
    "sourceId": "TKG-014",
    "originalId": "TKG-014",
    "grade": "A",
    "address": "〒190-0014 東京都立川市緑町3173",
    "rules": "2026/10/24、10/25 免費入園，停車另付費；昭和天皇記念館 6/1–11/27 工程休館，不是整座公園休園。",
    "reviewedAt": "2026-10-08",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-014-canal",
      "source_id": "TKG-014",
      "name_ja": "国営昭和記念公園 カナール",
      "point_label": "カナール（銀杏並木沿水路）",
      "role": "feature",
      "lat": 35.7028,
      "lng": 139.4022,
      "basis": "OSM標有Ginkgo biloba的樹列夾著水路，且與官方「立川口徒步約1分」相符（OSM立川口節點 35.7022,139.4036，約120 m）",
      "sources": [
        "https://www.openstreetmap.org/way/1455348813",
        "https://www.openstreetmap.org/way/1455348814",
        "https://www.openstreetmap.org/way/766598267",
        "https://www.showakinen-koen.jp/facility/facility-305/"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 36,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.703,
          "lng": 139.4022,
          "desc": "OSM tree_row genus=Ginkgo（水路北側，139.4014-139.4030）",
          "url": "https://www.openstreetmap.org/way/1455348813"
        },
        {
          "kind": "osm",
          "lat": 35.7026,
          "lng": 139.4022,
          "desc": "OSM tree_row genus=Ginkgo（水路南側）",
          "url": "https://www.openstreetmap.org/way/1455348814"
        },
        {
          "kind": "osm",
          "lat": 35.7028,
          "lng": 139.4018,
          "desc": "OSM 水路 waterway=ditch（139.4010-139.4027）",
          "url": "https://www.openstreetmap.org/way/766598267"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方：カナール為全長200 m水路，兩側イチョウ並木；立川口徒步約1分",
          "url": "https://www.showakinen-koen.jp/facility/facility-305/"
        }
      ],
      "note": "三個OSM物件互相一致，並與官方頁面的位置敘述吻合，故判定high；東端另有兩段銀杏樹列（139.4041-139.4052）靠近立川口。"
    },
    "missingData": [
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "只有局部有 10/7 紀錄，未取得逐株或全園階段資料"
    ],
    "aliases": [
      "國營昭和紀念公園",
      "国営昭和記念公園"
    ]
  },
  {
    "id": "shinjuku",
    "name": "新宿御苑",
    "japanese": "新宿御苑",
    "area": "central",
    "district": "新宿區、澀谷區",
    "coords": [
      35.6850716,
      139.7095466
    ],
    "tags": [],
    "description": "庭園散步與溫室周邊的銀杏，適合慢慢尋找不同角落的秋色。",
    "highlights": [
      "溫室附近銀杏"
    ],
    "details": "園方季節文章提供明確日期與觀賞位置。2025 年的見頃記錄不能直接套用到今年。",
    "typical": null,
    "current": null,
    "observations": [
      {
        "date": "2025-11-28",
        "publishedAt": "2025-11-28",
        "status": "黃葉見頃",
        "description": "園方記載銀杏見頃，並介紹溫室附近的銀杏。",
        "url": "https://fng.or.jp/shinjuku/2025/11/28/20251128_03/",
        "stage": "gold"
      }
    ],
    "fee": "一般 500 日圓；65 歲以上及高中以上學生 250 日圓；中學生以下免費",
    "hours": "10/1–3/14：09:00–16:30，最後入園 16:00；週一休園，遇假日順延至下一平日。11/1–15 特別開園；12/29–1/3 休園",
    "access": "新宿御苑前站：1 號出口至新宿門約 5 分鐘；2 號出口至大木戶門約 5 分鐘；新宿三丁目站：E5 或 C1／C5 出口至新宿門約 5 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/news/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "bfd486c0bcaa133a.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://fng.or.jp/shinjuku/2025/11/28/20251128_03/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "7bb163876e554b67.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/guide/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "38ad8b7439253c11.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "765e0c8970b4068a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/2026/09/30/20260930-01/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "6dcac057a470377a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/2026/10/01/20261001-01/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "41dd2a5852bb9ad0.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/2026/09/25/20260925-03/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a0f28b93f3775e5a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/shinjuku/place/season",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "46fd4bea3f43dc9a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://policies.env.go.jp/national-garden/shinjukugyoen/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2f5db4fcd405741e.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://policies.env.go.jp/national-garden/shinjukugyoen/guide/rule/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "c3d52369c2a3ce18.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://fng.or.jp/shinjuku/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": null
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=Shinjuku+Gyoen&format=jsonv2&limit=5&countrycodes=jp",
    "sourceId": "TKG-015",
    "originalId": "TKG-015",
    "grade": "A",
    "address": "〒160-0014 東京都新宿区内藤町11",
    "rules": "禁止攜入酒類與吸菸；遊具、寵物及攝影規則請查官方。特殊公告可能改時或限制通行。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "座標僅OSM（建築物輪廓，位置精確），無第二座標來源；銀杏位於溫室附近而非溫室內，實際樹位誤差約數十公尺。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-015-greenhouse",
      "source_id": "TKG-015",
      "name_ja": "新宿御苑 大温室",
      "point_label": "大温室（銀杏拍攝熱點）",
      "role": "feature",
      "lat": 35.6867,
      "lng": 139.7126,
      "basis": "大温室建築物位置；官方稱銀杏在「温室近く」",
      "sources": [
        "https://www.openstreetmap.org/way/228926578",
        "https://www.openstreetmap.org/node/2375692281",
        "https://fng.or.jp/shinjuku/2025/11/28/20251128_03/"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 49,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6867,
          "lng": 139.7126,
          "desc": "OSM building=conservatory「大温室」",
          "url": "https://www.openstreetmap.org/way/228926578"
        },
        {
          "kind": "osm",
          "lat": 35.687,
          "lng": 139.7122,
          "desc": "OSM「温室の遺構」節點（相鄰）",
          "url": "https://www.openstreetmap.org/node/2375692281"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方：「温室近くは枝が近くにあり、人気の撮影スポット」（イチョウ）",
          "url": "https://fng.or.jp/shinjuku/2025/11/28/20251128_03/"
        }
      ],
      "note": "座標僅OSM（建築物輪廓，位置精確），無第二座標來源；銀杏位於溫室附近而非溫室內，實際樹位誤差約數十公尺。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "新宿御苑",
      "新宿御苑"
    ]
  },
  {
    "id": "hachioji",
    "sourceId": "TKG-016",
    "originalId": "TKG-016",
    "name": "八王子銀杏祭／甲州街道銀杏大道",
    "japanese": "八王子いちょう祭り／甲州街道いちょう並木",
    "area": "tama",
    "district": "八王子市・甲州街道",
    "coords": [
      35.652,
      139.3004
    ],
    "grade": "A",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "avenue"
    ],
    "description": "甲州街道沿線的銀杏形成長形城市散步路線，可由高尾方向分段探索。",
    "highlights": [
      "追分町交叉口至高尾站入口的甲州街道沿線"
    ],
    "details": "市府與祭典單位都確認沿道銀杏。歷史資料的樹木數量不同，不當作 2026 盤點；9/22 照片有日期但無明確文字葉況，未推定階段。",
    "address": "八王子市追分町交差点から高尾駅入口までの甲州街道（国道20号）沿い。祭典委員会事務局：〒193-0834 東京都八王子市東浅川町120番地",
    "rules": "依人行道、路口及祭典交通管制通行；不把活動時間當街道開放時間。",
    "reviewedAt": "2026-10-08",
    "fee": "一般沿道參觀費用未確認；付費活動請另查",
    "hours": "沿道通行時段未確認；2026 祭典 11/21 09:00–16:30、11/22 09:00–16:00，僅代表活動時間",
    "access": "高尾站附近：並木延伸至高尾站入口；欲觀賞區段步行分鐘未確認",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.ichou-festa.org/ichounews/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "c88f18a86a6b23b6.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.ichou-festa.org/notice/post-3629/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "62dfd4dcc6369f8a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.ichou-festa.org/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a13a8b6f83131cbe.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.ichou-festa.org/about",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "70f4568c680a5489.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.ichou-festa.org/event",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "f69745baf9ff7c5b.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.ichou-festa.org/faq",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2320740d72f28c0a.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.city.hachioji.tokyo.jp/kankobunka/001/006/p003400.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "826c25024206ecd4.txt"
      }
    ],
    "coordinateNote": "並木長約4 km（約760棵，出自搜尋結果摘要），單點僅供總覽；請用兩端與兩個官方攝影點。",
    "coordinateSource": "https://weathernews.jp/s/koyo/spot/24433/",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-016",
      "source_id": "TKG-016",
      "name_ja": "八王子 甲州街道いちょう並木",
      "point_label": "並木代表點（全長約4 km的中段）",
      "role": "avenue_midpoint",
      "lat": 35.652,
      "lng": 139.3004,
      "basis": "追分町到高尾駅付近之間的代表點",
      "sources": [
        "https://weathernews.jp/s/koyo/spot/24433/",
        "https://www.ichou-festa.org/ichounews/"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 64,
      "source_points": [
        {
          "kind": "weathernews",
          "lat": 35.6521,
          "lng": 139.3011,
          "desc": "Weathernews 座標（追分町〜高尾町）",
          "url": "https://weathernews.jp/s/koyo/spot/24433/"
        },
        {
          "kind": "derived",
          "lat": 35.6516,
          "lng": 139.3001,
          "desc": "兩端點（追分町・高尾駅付近）的中點",
          "url": "https://www.ichou-festa.org/ichounews/"
        }
      ],
      "note": "並木長約4 km（約760棵，出自搜尋結果摘要），單點僅供總覽；請用兩端與兩個官方攝影點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認",
      "一般開放時段未確認"
    ],
    "datedReferences": [
      {
        "date": "2026-09-22",
        "note": "官方黃葉頁提供現地照片日期；本輪未逐張判讀或取得轉載授權，階段未確認",
        "url": "https://www.ichou-festa.org/ichounews/"
      }
    ],
    "aliases": [
      "八王子銀杏祭／甲州街道銀杏大道",
      "八王子いちょう祭り／甲州街道いちょう並木"
    ]
  },
  {
    "id": "eastgardens",
    "sourceId": "TKG-017",
    "originalId": "TKG-017",
    "name": "皇居東御苑",
    "japanese": "皇居東御苑",
    "area": "central",
    "district": "千代田區・皇居東御苑",
    "coords": [
      35.6857,
      139.7581
    ],
    "grade": "A",
    "current": null,
    "observations": [
      {
        "date": "2025-11-28",
        "publishedAt": "2025-11-28",
        "stage": "unknown",
        "status": "銀杏紅葉（程度未描述）",
        "description": "宮內廳花訊記載多處銀杏與楓樹紅葉，照片包含百人番所前銀杏。沒有明確判定轉黃比例或見頃，不填成滿黃。",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/20251128.html"
      }
    ],
    "typical": null,
    "tags": [
      "free"
    ],
    "description": "走入皇居東御苑的歷史園路，在百人番所周邊尋找有紀錄的銀杏。",
    "highlights": [
      "百人番所前；官方 2025 植物消息的銀杏照片位置"
    ],
    "details": "由宮內廳管理，與皇居外苑及北之丸公園分開。2025/11/28 記錄銀杏紅葉，但未明確判定黃葉見頃。",
    "address": "東京都千代田区千代田1",
    "rules": "入口有管制；休園及皇室行事例外以宮內廳當年度公告為準，不自行推算假日。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；一般入園不需事先預約",
    "hours": "10 月 09:00–16:30，最後入園 16:00；11–2 月 09:00–16:00，最後入園 15:30。週一、週五及年末年初等休園，假日例外請查宮內廳",
    "access": "大手町站：C13a 出口至大手門約 5 分鐘；竹橋站：1a 出口至平川門／北桔橋門約 5 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "e7b649771a795561.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/20251128.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "778d46a05b301a7e.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "caf535336c2de4d5.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/pdf/koukaiyouryou.pdf",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "4625f9f21efb87ed.pdf"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/gyoen-close.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "cb9503c3477e9050.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/info/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "b30c09f3a33aefec.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.kunaicho.go.jp/visit/higashigyoen/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": null
      }
    ],
    "coordinateNote": "三個OSM物件一致（<50 m），但僅OSM；銀杏位於建築前方，與建築位置差約數十公尺。",
    "coordinateSource": "https://www.openstreetmap.org/way/176109786",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-017-hyakunin",
      "source_id": "TKG-017",
      "name_ja": "皇居東御苑 百人番所",
      "point_label": "百人番所（前のイチョウ）",
      "role": "feature",
      "lat": 35.6857,
      "lng": 139.7581,
      "basis": "建築物位置；官方照片標示銀杏在百人番所前",
      "sources": [
        "https://www.openstreetmap.org/way/176109786",
        "https://www.openstreetmap.org/node/5833843701",
        "https://www.openstreetmap.org/node/5247182004",
        "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/20251128.html"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 34,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6857,
          "lng": 139.7581,
          "desc": "OSM 建築「百人番所」",
          "url": "https://www.openstreetmap.org/way/176109786"
        },
        {
          "kind": "osm",
          "lat": 35.6854,
          "lng": 139.758,
          "desc": "OSM 史蹟標誌「百人番所」",
          "url": "https://www.openstreetmap.org/node/5833843701"
        },
        {
          "kind": "osm",
          "lat": 35.6859,
          "lng": 139.7581,
          "desc": "OSM 導覽牌「百人番所」",
          "url": "https://www.openstreetmap.org/node/5247182004"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "宮內廳花だより（令和7年11月28日）照片標題「百人番所前のイチョウ」",
          "url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/20251128.html"
        }
      ],
      "note": "三個OSM物件一致（<50 m），但僅OSM；銀杏位於建築前方，與建築位置差約數十公尺。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "皇居東御苑",
      "皇居東御苑"
    ]
  },
  {
    "id": "koishikawa",
    "name": "小石川植物園",
    "japanese": "小石川植物園",
    "area": "central",
    "district": "文京區",
    "coords": [
      35.7202246,
      139.7441565
    ],
    "tags": [
      "tree"
    ],
    "description": "沿植物園的觀察路線散步，了解銀杏與其他樹木的季節變化。",
    "highlights": [
      "精子發現的銀杏；園內導覽位置請確認官方地圖"
    ],
    "details": "園方開花與紅葉資訊提供有日期的植物記錄。此處為小石川植物園，與小石川後樂園不同。",
    "typical": null,
    "current": null,
    "observations": [
      {
        "date": "2025-11-19",
        "publishedAt": "2025-11-19",
        "status": "正在黃葉",
        "description": "園方記錄銀杏等樹木正在紅葉或黃葉，未明確宣稱全園銀杏見頃。",
        "url": "https://koishikawa-bg.jp/kaika/5013/",
        "stage": "turning"
      }
    ],
    "fee": "高中以上 500 日圓；小、中學生 150 日圓；未滿 6 歲免費",
    "hours": "1/4–12/28：09:00–16:30，最後入園 16:00；週一休園，遇假日翌平日休園，連續假日另依公告",
    "access": "白山站：A1 出口步行約 10 分鐘；茗荷谷站：1 號出口步行約 15 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://koishikawa-bg.jp/kaikainfo/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "d0fc8a2b4670ad73.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://koishikawa-bg.jp/kaika/5013/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a19cbbe553d683a7.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://koishikawa-bg.jp/overview/guide/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "93a761941d8fceba.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://koishikawa-bg.jp/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "6ca65e09e5791ff3.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://koishikawa-bg.jp/ennai/ginkgo/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "d449454f39798fa8.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://koishikawa-bg.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5deeb9b2d541c99c.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%B0%8F%E7%9F%B3%E5%B7%9D%E6%A4%8D%E7%89%A9%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-018",
    "originalId": "TKG-018",
    "grade": "A",
    "address": "〒112-0001 東京都文京区白山3丁目7番1号",
    "rules": "離園後不可重新入園；禁止帶寵物、採集植物（含落葉）；這是研究植物園。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "補充副點（任務未要求）；僅OSM座標。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-018-sperm",
      "source_id": "TKG-018",
      "name_ja": "小石川植物園 精子発見のイチョウ",
      "point_label": "精子発見のイチョウ（補充副點）",
      "role": "feature",
      "lat": 35.7202,
      "lng": 139.7452,
      "basis": "園內名木（OSM樹木節點）",
      "sources": [
        "https://www.openstreetmap.org/node/4683343152",
        "https://koishikawa-bg.jp/kaika/5013/"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 0,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7202,
          "lng": 139.7452,
          "desc": "OSM natural=tree「精子発見のイチョウ」",
          "url": "https://www.openstreetmap.org/node/4683343152"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方園內案內選單列有「精子発見のイチョウ」",
          "url": "https://koishikawa-bg.jp/kaika/5013/"
        }
      ],
      "note": "補充副點（任務未要求）；僅OSM座標。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "小石川植物園（東京大學附屬植物園）",
      "小石川植物園"
    ]
  },
  {
    "id": "kotokuji",
    "name": "廣德寺",
    "japanese": "広徳寺",
    "area": "tama",
    "district": "秋留野市・廣德寺周邊",
    "coords": [
      35.7218124,
      139.2174234
    ],
    "tags": [
      "tree"
    ],
    "description": "秋川一帶的古寺，觀光協會曾以照片記錄銀杏轉黃的過程。",
    "highlights": [
      "寺院銀杏"
    ],
    "details": "2025 年秋川溪谷報導將廣德寺銀杏與其他地點楓葉分開介紹。這裡只採用銀杏段落。",
    "typical": null,
    "current": null,
    "observations": [
      {
        "date": "2025-11-06",
        "publishedAt": "2025-11-08",
        "status": "接近黃葉見頃",
        "description": "觀光協會 11 月 8 日文章使用 11 月 6 日照片，描述銀杏正在轉黃、距見頃還差一些。",
        "url": "https://www.akirunokanko.com/?p=8712",
        "stage": "turning"
      }
    ],
    "fee": "參拜及活動規則請向當地確認",
    "hours": "參拜時間與通行規則請向當地確認",
    "access": "武藏五日市站：市府介紹步行約 30 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.akirunokanko.com/?cat=53",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "c33129461fd26e12.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.akirunokanko.com/?p=8712",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "70910711e0fdb185.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.city.akiruno.tokyo.jp/0000001442.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "c28e286188483cc7.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.akirunokanko.com/?p=8731",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "68a894c1c1649d19.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.akirunokanko.com/",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "e05790389bacc887.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%BA%83%E5%BE%B3%E5%AF%BA+%E3%81%82%E3%81%8D%E3%82%8B%E9%87%8E%E5%B8%82&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-019",
    "originalId": "TKG-019",
    "grade": "A",
    "address": "あきる野市小和田234（あきる野市公式『あきる野百景 31.広徳寺』の所在地表記。郵便番号は未取得）",
    "rules": "寺院參拜時間、費用及休日未查得明確官方記載；遵守現場指示，勿以免費公園規則套用。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "兩來源相差<20 m；銀杏位於寺內（官方文章稱廣徳寺のイチョウ），未找到銀杏的獨立座標，與寺院位置差應在數十公尺內。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-019",
      "source_id": "TKG-019",
      "name_ja": "広徳寺（あきる野市小和田）",
      "point_label": "廣徳寺寺院位置",
      "role": "site",
      "lat": 35.7218,
      "lng": 139.2174,
      "basis": "寺院本體位置",
      "sources": [
        "https://www.openstreetmap.org/way/232257234",
        "https://ja.wikipedia.org/wiki/広徳寺"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 11,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7218,
          "lng": 139.2174,
          "desc": "Nominatim 寺院 way「廣徳寺, 小和田, あきる野市」",
          "url": "https://www.openstreetmap.org/way/232257234"
        },
        {
          "kind": "wiki",
          "lat": 35.7217,
          "lng": 139.2174,
          "desc": "ja.wikipedia「広徳寺 (あきる野市)」座標",
          "url": "https://ja.wikipedia.org/wiki/広徳寺"
        }
      ],
      "note": "兩來源相差<20 m；銀杏位於寺內（官方文章稱廣徳寺のイチョウ），未找到銀杏的獨立座標，與寺院位置差應在數十公尺內。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認",
      "一般開放時段未確認"
    ],
    "aliases": [
      "廣德寺（龍角山廣德寺）",
      "広徳寺（龍角山広徳寺）"
    ]
  },
  {
    "id": "gaien",
    "name": "明治神宮外苑",
    "japanese": "明治神宮外苑",
    "area": "central",
    "district": "新宿・港區",
    "coords": [
      35.676288,
      139.7183406
    ],
    "coordinateNote": "外苑園區代表位置，銀杏並木位置請參考官方導覽。",
    "tags": [
      "avenue"
    ],
    "description": "通往聖德記念繪畫館的銀杏並木，是東京秋日散步的代表風景。",
    "highlights": [
      "銀杏並木與繪畫館方向的街景"
    ],
    "details": "官方季節介紹記載約 300 公尺的銀杏並木。樹木數量等靜態記載不作為當年度盤點。",
    "typical": {
      "label": "11月中旬～12月上旬",
      "start": "11-11",
      "end": "12-10",
      "source": "https://www.gotokyo.org/jp/story/guide/autumn-leaves-forecast/index.html",
      "kind": "tourism"
    },
    "current": null,
    "observations": [
      {
        "date": "2022-11-17",
        "publishedAt": "2022-11-17",
        "stage": "gold",
        "status": "黃葉見頃",
        "description": "外苑官方便り明示銀杏並木見頃，觀賞方向為青山通入口至聖德記念繪畫館。此為 2022 歷史紀錄。",
        "url": "https://www.meijijingugaien.jp/gaien-news/2022/111734.html"
      }
    ],
    "fee": "入場及活動規則請查看官方公告",
    "hours": "不同設施的開放時間不同，請確認官方資訊",
    "access": "青山一丁目站：入口與步行時間依目的設施確認；外苑前站：入口與步行時間請查看園區導覽",
    "sources": [
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.meijijingugaien.jp/walk/sight/season.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "bd6e74f797a8757f.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.meijijingugaien.jp/walk/sight/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "04fa0366ed500eac.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.meijijingugaien.jp/information/access-map.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "f03e56b1061fba50.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.meijijingugaien.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "ee77f2e18420a652.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.meijijingugaien.jp/gaien-news/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "df4dd87f7b2ac2c4.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.gotokyo.org/jp/story/guide/autumn-leaves-forecast/index.html",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "49e374bc53bdaf46.txt"
      },
      {
        "label": "外苑 2022/11/17 銀杏並木見頃原文",
        "url": "https://www.meijijingugaien.jp/gaien-news/2022/111734.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "15e67f3a287907a9.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E6%98%8E%E6%B2%BB%E7%A5%9E%E5%AE%AE%E5%A4%96%E8%8B%91&format=jsonv2&limit=5&countrycodes=jp",
    "sourceId": "TKG-023",
    "originalId": "TKG-023",
    "grade": "C",
    "address": "〒160-0013 東京都新宿区霞ヶ丘町1番1号（明治神宮外苑の所在地）",
    "rules": "人行道與各設施、活動管理範圍不同；2026 銀杏祭日程尚未確認。",
    "reviewedAt": "2026-10-08",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-023",
      "source_id": "TKG-023",
      "name_ja": "明治神宮外苑 いちょう並木",
      "point_label": "並木中點",
      "role": "avenue_midpoint",
      "lat": 35.6739,
      "lng": 139.7199,
      "basis": "並木本身的中點",
      "sources": [
        "https://www.openstreetmap.org/way/499552710",
        "https://weathernews.jp/s/koyo/spot/24408/",
        "https://sp.jorudan.co.jp/leaf/spot_55006.html"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 69,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6734,
          "lng": 139.72,
          "desc": "OSM 8段 natural=tree_row genus=Ginkgo 平均",
          "url": "https://www.openstreetmap.org/way/499552710"
        },
        {
          "kind": "weathernews",
          "lat": 35.6745,
          "lng": 139.7197,
          "desc": "Weathernews 座標（港区北青山2丁目付近）",
          "url": "https://weathernews.jp/s/koyo/spot/24408/"
        },
        {
          "kind": "jorudan",
          "lat": 35.6738,
          "lng": 139.7201,
          "desc": "Jorudan 座標",
          "url": "https://sp.jorudan.co.jp/leaf/spot_55006.html"
        }
      ],
      "note": "官方：青山口から円周道路まで約300 m、146本。三來源相差<150 m。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "一般入園費用或當年度活動票價待確認",
      "一般開放時段未確認"
    ],
    "aliases": [
      "明治神宮外苑 銀杏大道",
      "明治神宮外苑 いちょう並木"
    ]
  },
  {
    "id": "otaguro",
    "name": "大田黑公園",
    "japanese": "大田黒公園",
    "area": "west",
    "district": "杉並區",
    "coords": [
      35.7008853,
      139.6246843
    ],
    "tags": [
      "avenue",
      "tree"
    ],
    "description": "沿石板路走入回遊式庭園，欣賞百年以上銀杏並木的沉靜氣氛。",
    "highlights": [
      "正門至園內的銀杏並木"
    ],
    "details": "杉並區官方介紹記載約 70 公尺石板路與兩側大銀杏。楓樹和銀杏的葉況不可混用。",
    "typical": null,
    "current": null,
    "observations": [],
    "fee": "活動票價與入園規則請查看當年度公告",
    "hours": "09:00–17:00，最後入園 16:30；週三及 12/29–1/1 休園，特殊活動另確認",
    "access": "荻窪站：步行約 10 分鐘",
    "sources": [
      {
        "label": "官方交通／參觀資訊",
        "url": "https://ogikubo3gardens.jp/ootaguro/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "edcef1131f25a53c.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.city.suginami.tokyo.jp/s100/shisetsu/14632.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "1793b1c3ff75d54c.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%A4%A7%E7%94%B0%E9%BB%92%E5%85%AC%E5%9C%92&format=jsonv2&limit=1&countrycodes=jp",
    "sourceId": "TKG-024",
    "originalId": "TKG-024",
    "grade": "B",
    "address": "〒167-0051 東京都杉並区荻窪3丁目33番12号",
    "rules": "一般週三及 12/29–1/1 休園；無停車場。2026 夜間點燈日程與票價未確認，2024 活動票價不得當現價。",
    "reviewedAt": "2026-10-08",
    "coordinateNote": "三來源相差<40 m。管理者2024年起已非箱根植木（見TKG-039）。",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-024",
      "source_id": "TKG-024",
      "name_ja": "大田黒公園",
      "point_label": "公園位置",
      "role": "site",
      "lat": 35.7007,
      "lng": 139.6248,
      "basis": "公園（約0.9公頃，整園即為標的）",
      "sources": [
        "https://www.openstreetmap.org/way/100013319",
        "https://ja.wikipedia.org/wiki/大田黒公園",
        "https://weathernews.jp/s/koyo/spot/24458/"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 24,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7009,
          "lng": 139.6247,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/100013319"
        },
        {
          "kind": "wiki",
          "lat": 35.7006,
          "lng": 139.6248,
          "desc": "ja.wikipedia「大田黒公園」座標",
          "url": "https://ja.wikipedia.org/wiki/大田黒公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.7006,
          "lng": 139.6248,
          "desc": "Weathernews 座標（荻窪3-33-12）",
          "url": "https://weathernews.jp/s/koyo/spot/24458/"
        }
      ],
      "note": "三來源相差<40 m。管理者2024年起已非箱根植木（見TKG-039）。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認"
    ],
    "aliases": [
      "大田黑公園",
      "大田黒公園"
    ]
  },
  {
    "id": "ookunitama",
    "sourceId": "TKG-025",
    "originalId": "TKG-025",
    "name": "大國魂神社",
    "japanese": "大國魂神社",
    "area": "tama",
    "district": "府中市",
    "coords": [
      35.6676,
      139.479
    ],
    "grade": "C",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "tree"
    ],
    "description": "在府中的神社境內，尋訪本殿後方的大銀杏。",
    "highlights": [
      "本殿後方的大銀杏"
    ],
    "details": "官方介紹大銀杏；千年樹齡為傳說，不是本輪量測。馬場大門的櫸樹並木不是銀杏。",
    "address": "〒183-0023 東京都府中市宮町3-1",
    "rules": "境內參拜費用未確認；參拜與攝影依神社指示，不採用涉及食用銀杏的民間療效說法。",
    "reviewedAt": "2026-10-08",
    "hours": "9/15–3/31：06:30–17:00；4/1–9/14：06:00–17:00，祭典另確認",
    "fee": "官方已讀頁未明列一般參觀費用；不列為已確認免費",
    "access": "府中站：南口步行約 5 分鐘；府中本町站：步行約 5 分鐘",
    "sources": [
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.ookunitamajinja.or.jp/mame/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2a5044ffe539f2d8.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.ookunitamajinja.or.jp/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "ab3293aa5c794caa.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.ookunitamajinja.or.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "d2c441ceb80ccdfe.txt"
      }
    ],
    "coordinateNote": "OSM與Wikipedia相差<20 m；大銀杏本身無獨立座標，實際樹位在此點後方數十公尺內。馬場大門的欅並木不是銀杏。",
    "coordinateSource": "https://www.openstreetmap.org/way/172007556",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-025",
      "source_id": "TKG-025",
      "name_ja": "大國魂神社",
      "point_label": "本殿・拝殿一帯（大銀杏在本殿の裏）",
      "role": "site",
      "lat": 35.6676,
      "lng": 139.479,
      "basis": "神社本殿・拝殿位置；官方稱大銀杏在其後方（南側）",
      "sources": [
        "https://www.openstreetmap.org/way/172007556",
        "https://ja.wikipedia.org/wiki/大國魂神社",
        "https://www.openstreetmap.org/way/443035348",
        "https://www.ookunitamajinja.or.jp/mame/"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 22,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6675,
          "lng": 139.479,
          "desc": "Nominatim 神社建築 way",
          "url": "https://www.openstreetmap.org/way/172007556"
        },
        {
          "kind": "wiki",
          "lat": 35.6675,
          "lng": 139.4789,
          "desc": "ja.wikipedia「大國魂神社」座標",
          "url": "https://ja.wikipedia.org/wiki/大國魂神社"
        },
        {
          "kind": "osm",
          "lat": 35.6678,
          "lng": 139.479,
          "desc": "OSM 中雀門（參道軸線，在本殿北側）",
          "url": "https://www.openstreetmap.org/way/443035348"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "官方：大銀杏は「本殿裏」；住所 府中市宮町3-1",
          "url": "https://www.ookunitamajinja.or.jp/mame/"
        }
      ],
      "note": "OSM與Wikipedia相差<20 m；大銀杏本身無獨立座標，實際樹位在此點後方數十公尺內。馬場大門的欅並木不是銀杏。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認"
    ],
    "aliases": [
      "大國魂神社",
      "大國魂神社"
    ]
  },
  {
    "id": "yasukuni",
    "sourceId": "TKG-026",
    "originalId": "TKG-026",
    "name": "靖國神社",
    "japanese": "靖國神社",
    "area": "central",
    "district": "千代田區",
    "coords": [
      35.6941,
      139.7431
    ],
    "grade": "C",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": ["avenue"],
    "description": "在神社外苑銀杏並木散步，保留對祭祀空間的尊重。",
    "highlights": [
      "外苑銀杏並木（官方整備頁照片標題）"
    ],
    "details": "官網整備頁明確標示銀杏並木；宣傳影片上線日不能當拍攝日，也未將直播推定為銀杏即時鏡頭。",
    "address": "〒102-8246 東京都千代田区九段北3-1-1",
    "rules": "祭祀場域，參拜、拍攝與特殊活動依官方／現場規則。費用未確認。",
    "reviewedAt": "2026-10-08",
    "hours": "全年 06:00 開門；11–2 月 17:00 關門、3–10 月 18:00 關門，祭典另確認",
    "fee": "官方已讀頁未明列一般參觀費用；不列為已確認免費",
    "access": "九段下站：1 號出口約 5 分鐘；飯田橋站：西口約 10 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.yasukuni.or.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "864c6ff5a056260e.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.yasukuni.or.jp/news_detail.html?id=492",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "9d92007fa51464e3.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.yasukuni.or.jp/access.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "05fe45e1bb7d56e2.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.yasukuni.or.jp/hope.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "c15708cbee13bce3.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.yasukuni.or.jp/150th/project03.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "bd8ac7d111f26f98.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.yasukuni.or.jp/schedule/photo.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "edb6b6552488f67f.txt"
      }
    ],
    "coordinateNote": "神門 35.6943,139.7442；Jorudan稱「銀杏の並木道」（参道），但並木確切範圍與官方日期資料未核實。",
    "coordinateSource": "https://www.openstreetmap.org/way/144379616",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-026",
      "source_id": "TKG-026",
      "name_ja": "靖國神社",
      "point_label": "境內主要區域（拝殿）",
      "role": "site",
      "lat": 35.6941,
      "lng": 139.7431,
      "basis": "主殿拝殿位置（境內中心）",
      "sources": [
        "https://www.openstreetmap.org/way/144379616",
        "https://www.openstreetmap.org/way/144379617",
        "https://ja.wikipedia.org/wiki/靖国神社",
        "https://sp.jorudan.co.jp/leaf/spot_J0200.html",
        "https://www.openstreetmap.org/relation/21067209"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 46,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6941,
          "lng": 139.7431,
          "desc": "OSM 拝殿",
          "url": "https://www.openstreetmap.org/way/144379616"
        },
        {
          "kind": "osm",
          "lat": 35.694,
          "lng": 139.7427,
          "desc": "OSM 本殿",
          "url": "https://www.openstreetmap.org/way/144379617"
        },
        {
          "kind": "wiki",
          "lat": 35.694,
          "lng": 139.7427,
          "desc": "ja.wikipedia「靖国神社」座標",
          "url": "https://ja.wikipedia.org/wiki/靖国神社"
        },
        {
          "kind": "jorudan",
          "lat": 35.694,
          "lng": 139.7426,
          "desc": "Jorudan 座標",
          "url": "https://sp.jorudan.co.jp/leaf/spot_J0200.html"
        },
        {
          "kind": "osm",
          "lat": 35.6943,
          "lng": 139.7433,
          "desc": "Nominatim 境內 landuse",
          "url": "https://www.openstreetmap.org/relation/21067209"
        }
      ],
      "note": "神門 35.6943,139.7442；Jorudan稱「銀杏の並木道」（参道），但並木確切範圍與官方日期資料未核實。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認"
    ],
    "aliases": [
      "靖國神社",
      "靖國神社"
    ]
  },
  {
    "id": "kitanomaru",
    "sourceId": "TKG-030",
    "originalId": "TKG-030-kitanomaru",
    "name": "北之丸公園",
    "japanese": "北の丸公園",
    "area": "central",
    "district": "千代田區",
    "coords": [
      35.6915,
      139.7511
    ],
    "grade": "B",
    "current": null,
    "observations": [
      {
        "date": "2024-11-13",
        "publishedAt": "2024-11-13",
        "status": "開始轉黃",
        "stage": "turning",
        "description": "管理單位文字記載銀杏剛開始著色、逐漸黃葉；不是滿黃見頃。",
        "url": "https://fng.or.jp/koukyo/2024/11/13/irodukukitanomarukouen/"
      }
    ],
    "typical": {
      "label": "12 月上旬（2023 管理單位介紹）",
      "start": "12-01",
      "end": "12-10",
      "source": "https://fng.or.jp/koukyo/2023/11/24/kitanomarukouennnokouyou/",
      "kind": "historical-intro"
    },
    "tags": [
      "tree",
      "free"
    ],
    "description": "在日本武道館周邊尋訪北之丸的大銀杏與園內秋色。",
    "highlights": [
      "日本武道館前的大銀杏；園內其他區域也有銀杏"
    ],
    "details": "2023 管理單位文章介紹大銀杏，並將 12 月上旬作見頃參考；不是當日實測。2024/11/13 另有銀杏開始轉黃的歷史紀錄。",
    "address": "北之丸公園園區；本輪未確認可用的官方完整街址",
    "rules": "全面禁菸、禁止無人機與未經許可採集；園內道路禁止駐停車，付費停車場另確認。",
    "reviewedAt": "2026-10-08",
    "fee": "免費；園內個別設施另計",
    "hours": "常時開放；22:00 左右熄燈至日出期間請避免使用。國家行事／特別警備可能限制入園",
    "access": "九段下站：2 號出口約 5 分鐘；竹橋站：1a／1b 出口約 8 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/koukyo/news/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "939d4e035ccef886.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://fng.or.jp/koukyo/2023/11/24/kitanomarukouennnokouyou/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "95cf634c51947f1e.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/koukyo/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5391c79edb7959ae.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://fng.or.jp/koukyo/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a9a015c55b488657.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.env.go.jp/garden/kokyogaien/2_guide/kitanomarukoen_00001.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "58106491f9ceb227.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.env.go.jp/garden/kokyogaien/news/2017/03/post_220_00002.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "76c1673ada00453b.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.env.go.jp/garden/kokyogaien/news/autumn_leaves/index_4.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "9dc3613bdf5f59f7.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://fng.or.jp/koukyo/2024/11/13/irodukukitanomarukouen/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "7d5dad5e951b7285.txt"
      }
    ],
    "coordinateNote": "約19公頃；國民公園協會頁面未核得銀杏專項地點。",
    "coordinateSource": "https://www.openstreetmap.org/relation/3551876",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-030-kitanomaru",
      "source_id": "TKG-030",
      "name_ja": "北の丸公園",
      "point_label": "公園中心（概略）",
      "role": "site",
      "lat": 35.6915,
      "lng": 139.7511,
      "basis": "公園整體代表點",
      "sources": [
        "https://www.openstreetmap.org/relation/3551876",
        "https://www.openstreetmap.org/way/624081603",
        "https://ja.wikipedia.org/wiki/北の丸公園",
        "https://weathernews.jp/s/koyo/spot/24452/"
      ],
      "confidence": "low",
      "site_position_agreement": "high",
      "approximate": true,
      "ginkgo_spot_known": false,
      "max_source_distance_m": 130,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6918,
          "lng": 139.751,
          "desc": "Nominatim 行政邊界 relation",
          "url": "https://www.openstreetmap.org/relation/3551876"
        },
        {
          "kind": "osm",
          "lat": 35.6922,
          "lng": 139.7507,
          "desc": "Nominatim 公園 way",
          "url": "https://www.openstreetmap.org/way/624081603"
        },
        {
          "kind": "wiki",
          "lat": 35.6915,
          "lng": 139.7511,
          "desc": "ja.wikipedia「北の丸公園」座標",
          "url": "https://ja.wikipedia.org/wiki/北の丸公園"
        },
        {
          "kind": "weathernews",
          "lat": 35.6904,
          "lng": 139.7516,
          "desc": "Weathernews 座標",
          "url": "https://weathernews.jp/s/koyo/spot/24452/"
        }
      ],
      "note": "約19公頃；國民公園協會頁面未核得銀杏專項地點。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "園內銀杏精確座標未確認",
      "官方銀杏例年觀賞區間未確認"
    ],
    "aliases": [
      "北之丸公園",
      "北の丸公園"
    ],
    "datedReferences": [
      {
        "date": "2023-11-24",
        "note": "管理單位文章發布日，介紹大銀杏與 12 月上旬的見頃參考；不是此日見頃實測",
        "url": "https://fng.or.jp/koukyo/2023/11/24/kitanomarukouennnokouyou/"
      }
    ]
  },
  {
    "id": "hongo",
    "sourceId": "TKG-040",
    "originalId": "TKG-040-hongo",
    "name": "東京大學 本鄉校區",
    "japanese": "東京大学 本郷キャンパス 銀杏並木（正門～安田講堂）",
    "area": "central",
    "district": "文京區",
    "coords": [
      35.7131,
      139.7606
    ],
    "grade": "C",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "avenue"
    ],
    "description": "沿本鄉校區的銀杏並木散步，感受校園秋色與歷史建築。",
    "highlights": [
      "校內銀杏並木；代表點不是單株或開放入口保證"
    ],
    "details": "東京大學校園介紹明確提到本鄉銀杏並木；這是教育研究場域，須依校方參觀規則。",
    "address": "本郷：〒113-8654 東京都文京区本郷7-3-1",
    "rules": "保持安靜，不進入未開放教室／建築；無參觀停車場。照片限個人用途，禁止刊物與 SNS 等發布；15 人以上團體需提前 7 日登記。赤門工程預計至 2027/9，非保證完工日。",
    "reviewedAt": "2026-10-08",
    "hours": "自由參觀建議 07:00–18:00；各門時段不同，考試、工程、活動可能限制入構",
    "fee": "官方已讀頁未明列一般參觀費用；不列為已確認免費",
    "access": "本鄉三丁目站：丸之內線約 8 分鐘；大江戶線約 6 分鐘；東大前站：步行約 1 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "3e988fe3cbcd7751.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/1km_of_campus.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "37aa8b5317a7b6bb.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/public02_05.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "f10a998f196d8ce2.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/map01_02.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "8f2b12ade897f3b4.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/map02_02.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2d059fac28ba0eb5.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/list.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "8068cb3eb2b3862d.txt"
      }
    ],
    "coordinateNote": "OSM以兩段名為「銀杏並木」的步道標出；安田講堂另有Wikipedia座標核對。",
    "coordinateSource": "https://www.openstreetmap.org/way/33050411",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-040-hongo",
      "source_id": "TKG-040",
      "name_ja": "東京大学 本郷キャンパス 銀杏並木（正門～安田講堂）",
      "point_label": "並木中點",
      "role": "avenue_midpoint",
      "lat": 35.7131,
      "lng": 139.7606,
      "basis": "OSM名為「銀杏並木」的步道，並與正門、安田講堂位置吻合",
      "sources": [
        "https://www.openstreetmap.org/way/33050411",
        "https://www.openstreetmap.org/way/643102413",
        "https://ja.wikipedia.org/wiki/東京大学"
      ],
      "confidence": "high",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 146,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.7131,
          "lng": 139.7603,
          "desc": "OSM pedestrian「銀杏並木」(35.7129,139.7594→35.7132,139.7609)",
          "url": "https://www.openstreetmap.org/way/33050411"
        },
        {
          "kind": "osm",
          "lat": 35.7133,
          "lng": 139.7613,
          "desc": "OSM pedestrian「銀杏並木」(35.7132,139.7609→35.7133,139.7617)",
          "url": "https://www.openstreetmap.org/way/643102413"
        },
        {
          "kind": "wiki",
          "lat": 35.7133,
          "lng": 139.7622,
          "desc": "ja.wikipedia「東京大学」座標（校區中心偏講堂）",
          "url": "https://ja.wikipedia.org/wiki/東京大学"
        }
      ],
      "note": "OSM以兩段名為「銀杏並木」的步道標出；安田講堂另有Wikipedia座標核對。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認"
    ],
    "aliases": [
      "東京大學 本鄉校區",
      "東京大学 本郷キャンパス 銀杏並木（正門～安田講堂）"
    ]
  },
  {
    "id": "komaba",
    "sourceId": "TKG-040",
    "originalId": "TKG-040-komaba",
    "name": "東京大學 駒場校區",
    "japanese": "東京大学 駒場キャンパス 銀杏並木",
    "area": "central",
    "district": "目黑區",
    "coords": [
      35.6604,
      139.6852
    ],
    "grade": "C",
    "current": null,
    "observations": [],
    "typical": null,
    "tags": [
      "avenue"
    ],
    "description": "沿駒場第一校區主街的銀杏並木，觀察研究校園裡的秋日風景。",
    "highlights": [
      "駒場第一校區主街銀杏並木"
    ],
    "details": "東京大學 KIMINO 的 2021/4/7 校園介紹明確記載秋季黃色銀杏主街；不當作 2026 葉況。",
    "address": "駒場：〒153-8902 東京都目黒区駒場3-8-1",
    "rules": "個人／少量見學不需申請，15 人以上團體需提前 2 週申請；禁止商業攝影、未許可採訪；照片限個人用途，不公開至 SNS。無參觀停車場。駒場第二校區不套用此規則。",
    "reviewedAt": "2026-10-08",
    "hours": "見學時段 07:00–18:00；校內活動、考試等可能限制入構",
    "fee": "官方已讀頁未明列一般參觀費用；不列為已確認免費",
    "access": "駒場東大前站：東口約 0 分鐘（校方公布）；通往正門；代代木上原站：步行約 12 分鐘",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "3e988fe3cbcd7751.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://kimino.ct.u-tokyo.ac.jp/kotohajime/komaba-campus/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "748cffc2a962ca26.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/public02_05.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "f10a998f196d8ce2.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/map01_02.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "8f2b12ade897f3b4.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/map02_02.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2d059fac28ba0eb5.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/list.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "8068cb3eb2b3862d.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.c.u-tokyo.ac.jp/info/about/contact/contact2/index.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "e3a6b5ff43a02590.txt"
      }
    ],
    "coordinateNote": "【注意】銀杏並木不是「正門～1号館」軸線，而是1号館北側的東西向道路。位置由官方文字＋OSM樹列推定，OSM樹木沒有樹種標籤，精度約±80 m。",
    "coordinateSource": "https://www.openstreetmap.org/way/695889364",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-040-komaba",
      "source_id": "TKG-040",
      "name_ja": "東京大学 駒場キャンパス 銀杏並木",
      "point_label": "並木中段（概略）",
      "role": "avenue_midpoint",
      "lat": 35.6604,
      "lng": 139.6852,
      "basis": "東大官方文章描述的東西向幹線道路（1号館北側～コミュニケーションプラザ），依OSM樹列/樹木點與1号館(35.6600,139.6846)、101号館(35.6600,139.6856)的相對位置推定",
      "sources": [
        "https://www.openstreetmap.org/way/695889364",
        "https://www.openstreetmap.org/node/2332994271",
        "https://ja.wikipedia.org/wiki/東京大学駒場地区キャンパス",
        "https://www.u-tokyo.ac.jp/focus/ja/features/z1304_00053.html"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 102,
      "source_points": [
        {
          "kind": "osm",
          "lat": 35.6606,
          "lng": 139.6841,
          "desc": "OSM 樹列（東西向幹線道路旁，無樹種標籤）",
          "url": "https://www.openstreetmap.org/way/695889364"
        },
        {
          "kind": "osm",
          "lat": 35.6605,
          "lng": 139.685,
          "desc": "OSM 一列natural=tree（35.6603-35.6605, 139.6848-139.6854）",
          "url": "https://www.openstreetmap.org/node/2332994271"
        },
        {
          "kind": "wiki",
          "lat": 35.6601,
          "lng": 139.6847,
          "desc": "ja.wikipedia 校區座標",
          "url": "https://ja.wikipedia.org/wiki/東京大学駒場地区キャンパス"
        },
        {
          "kind": "official",
          "lat": null,
          "lng": null,
          "desc": "東大官方「キャンパス散歩」：1号館西側の道を北へ行くと銀杏並木、東端はコミュニケーションプラザ側、101号館は並木の南側に並行する道沿い",
          "url": "https://www.u-tokyo.ac.jp/focus/ja/features/z1304_00053.html"
        }
      ],
      "note": "【注意】銀杏並木不是「正門～1号館」軸線，而是1号館北側的東西向道路。位置由官方文字＋OSM樹列推定，OSM樹木沒有樹種標籤，精度約±80 m。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "官方銀杏例年觀賞區間未確認",
      "一般入園費用或當年度活動票價待確認"
    ],
    "aliases": [
      "東京大學 駒場校區",
      "東京大学 駒場キャンパス 銀杏並木"
    ]
  },
  {
    "id": "kunitachi",
    "name": "國立大學通",
    "japanese": "国立 大学通り",
    "area": "tama",
    "district": "國立市・大學通沿線",
    "coords": [
      35.698702,
      139.4463045
    ],
    "coordinateNote": "標記為國立站南側附近的交通起點，並非整條大學通的中心。",
    "tags": [
      "avenue"
    ],
    "description": "從國立站周邊沿大學通散步，欣賞秋季街道的銀杏景觀。",
    "highlights": [
      "大學通沿線銀杏"
    ],
    "details": "觀光協會介紹春季櫻花與秋季銀杏。樹木數量的歷史記載不能當成當年盤點。",
    "typical": {
      "label": "11月下旬",
      "start": "11-21",
      "end": "11-30",
      "source": "https://sp.jorudan.co.jp/leaf/spot_J0193.html",
      "kind": "tourism"
    },
    "current": null,
    "observations": [],
    "fee": "街道與活動參觀規則請確認官方資訊",
    "hours": "街道通行及當年度活動資訊請查看公告",
    "access": "國立站：南口起步；步行距離依大學通的觀賞段落而異",
    "sources": [
      {
        "label": "補充內容來源",
        "url": "https://kunimachi.jp/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "9791781756563d45.txt"
      },
      {
        "label": "銀杏存在／位置依據",
        "url": "https://kunimachi.jp/spot/daigakustreet/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "726c5c02d9f2ef02.txt"
      },
      {
        "label": "官方交通／參觀資訊",
        "url": "https://kunimachi.jp/access/",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "2685c725a54b7d04.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://www.city.kunitachi.tokyo.jp/bunka/kanko/1/8270.html",
        "kind": "official",
        "checkedAt": "2026-10-08",
        "evidenceFile": "a10f12c5f09e0705.txt"
      },
      {
        "label": "補充內容來源",
        "url": "https://sp.jorudan.co.jp/leaf/spot_J0193.html",
        "kind": "tourism",
        "checkedAt": "2026-10-08",
        "evidenceFile": "5de71f4e551b05b6.txt"
      }
    ],
    "coordinateSource": "https://nominatim.openstreetmap.org/search?q=%E5%9B%BD%E7%AB%8B%E9%A7%85&format=jsonv2&limit=5&countrycodes=jp",
    "sourceId": "TKG-041",
    "originalId": "TKG-041",
    "grade": "C",
    "address": "東京都国立市東2丁目（くにたちNAVI『大学通り』スポット表記の店舗所在地欄）。国立駅から真っすぐ南に伸びる通り",
    "rules": "以國立站南口沿線人行道參觀；未查得 2026 點燈日程。觀光頁的約 200 棵是櫻花數，不是銀杏。",
    "reviewedAt": "2026-10-08",
    "coordinateCheckedAt": "2026-10-02",
    "coordinateRole": "園區／街道代表位置，非單株",
    "coordinateEvidence": {
      "id": "TKG-041",
      "source_id": "TKG-041",
      "name_ja": "国立市 大学通り",
      "point_label": "国立駅南側の並木（代表點）",
      "role": "avenue_midpoint",
      "lat": 35.6945,
      "lng": 139.4468,
      "basis": "國立駅南口前的大學通り並木（約1.2 km，OSM樹列35.6982～35.6872）的代表點",
      "sources": [
        "https://sp.jorudan.co.jp/leaf/spot_J0193.html",
        "https://www.openstreetmap.org/way/1158057700",
        "https://ja.wikipedia.org/wiki/国立駅"
      ],
      "confidence": "medium",
      "site_position_agreement": null,
      "approximate": false,
      "ginkgo_spot_known": true,
      "max_source_distance_m": 501,
      "source_points": [
        {
          "kind": "jorudan",
          "lat": 35.6943,
          "lng": 139.4468,
          "desc": "Jorudan「国立駅前 大学通り」座標",
          "url": "https://sp.jorudan.co.jp/leaf/spot_J0193.html"
        },
        {
          "kind": "osm",
          "lat": 35.6956,
          "lng": 139.4467,
          "desc": "OSM 大学通り沿いtree_row（國立駅南，35.6982→35.6872，無樹種標籤）",
          "url": "https://www.openstreetmap.org/way/1158057700"
        },
        {
          "kind": "wiki",
          "lat": 35.699,
          "lng": 139.4464,
          "desc": "ja.wikipedia 国立駅座標（並木起點參照）",
          "url": "https://ja.wikipedia.org/wiki/国立駅"
        }
      ],
      "note": "Jorudan稱此為イチョウ並木，但OSM樹列沒有樹種標籤，且大學通り也有櫻樹，無法由座標資料區分銀杏列與櫻列；公開頁面也未標出銀杏段的起訖。"
    },
    "missingData": [
      "2026 當季銀杏階段未確認",
      "逐株葉片形狀、大小、葉脈／完整度、樹上葉量與地面覆蓋未取得實測",
      "即時交通、電梯狀況與臨時通行限制未串接",
      "一般入園費用或當年度活動票價待確認",
      "一般開放時段未確認"
    ],
    "aliases": [
      "國立 大學通",
      "国立市 大学通り"
    ]
  }
];
export const areaNames = {
  "central": "東京中心",
  "west": "杉並・練馬・板橋",
  "tama": "多摩地區"
};
export const sourceRegistry = [
  {
    "source_id": "TKG-001",
    "group_id": "TOKYO_PARK",
    "name": "東京都公園協會｜紅葉情報入口",
    "area": "東京都內都立公園、庭園",
    "grade": "S",
    "operator": "東京都建設局／公益財團法人東京都公園協會",
    "role": "年度葉況整合公告與當年網址發現",
    "url": "https://www.tokyo-park.or.jp/",
    "extra_url": "https://www.tokyo-park.or.jp/park_list/",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度公告提供37處公園／庭園紅葉情報；其中11列含銀杏，合計12個具名園區。",
    "cadence": "2025年度：11/10–12/22；週一、週四傍晚更新，假日順延；最後更新12/18。",
    "suggested_poll": "季前每週檢查；季內公告更新後檢查一次（建議，非授權）",
    "caveat": "2026年度沿用日期及網址尚未確認。37處不是37處銀杏。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 2,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "5d4e93127e48c2bd.txt",
    "adoptedBy": [],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-002",
    "group_id": "TOKYO_PARK",
    "name": "上野恩賜公園",
    "area": "台東區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/ueno/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "可列為銀杏專項季節觀測候選。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 3,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "d957025ec7452667.txt",
    "adoptedBy": [
      "上野恩賜公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-003",
    "group_id": "TOKYO_PARK",
    "name": "木場公園",
    "area": "江東區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/kiba/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "保留園區原文所指子地點。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 4,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "5a7dba7a1cb4fdb6.txt",
    "adoptedBy": [
      "木場公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-004",
    "group_id": "TOKYO_PARK",
    "name": "小金井公園",
    "area": "小金井市等",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/koganei/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "園區跨行政區；不以服務中心地址代表全部觀測點。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 5,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "89008c9abfda8e10.txt",
    "adoptedBy": [
      "小金井公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-005",
    "group_id": "TOKYO_PARK",
    "name": "芝公園",
    "area": "港區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/siba/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "銀杏與もみじ谷分開。正確網址使用siba，不是shiba。",
    "access": "已讀取頁面",
    "species": "楓樹、銀杏",
    "audited_at": "2026-09-29",
    "row_number": 6,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "9f1fa70bf3512639.txt",
    "adoptedBy": [
      "芝公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-006",
    "group_id": "TOKYO_PARK",
    "name": "城北中央公園",
    "area": "板橋區、練馬區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/johoku-chuo/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "必須按物種取值，不把櫸樹葉況套用銀杏。",
    "access": "已讀取頁面",
    "species": "銀杏、櫸樹",
    "audited_at": "2026-09-29",
    "row_number": 7,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "bccd0c8ecb70f8c6.txt",
    "adoptedBy": [
      "城北中央公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-007",
    "group_id": "TOKYO_PARK",
    "name": "善福寺川緑地",
    "area": "杉並區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/zempukujigawa-ryokuchi/index.html",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "2025表與和田堀公園合併一列，不能假設各有獨立觀測。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 8,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "8c4f6f6e119a6209.txt",
    "adoptedBy": [
      "善福寺川綠地"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-008",
    "group_id": "TOKYO_PARK",
    "name": "和田堀公園",
    "area": "杉並區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/wadabori/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "2025表與善福寺川緑地合併一列，保留共同來源關係。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 9,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "5ed96f46eb903bec.txt",
    "adoptedBy": [
      "和田堀公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-009",
    "group_id": "TOKYO_PARK",
    "name": "戸山公園",
    "area": "新宿區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/toyama/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "須擷取銀杏段落／欄位，不直接使用全園紅葉狀態。",
    "access": "已讀取頁面",
    "species": "楓樹、銀杏",
    "audited_at": "2026-09-29",
    "row_number": 10,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "4ddacee005802e48.txt",
    "adoptedBy": [
      "戶山公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-010",
    "group_id": "TOKYO_PARK",
    "name": "光が丘公園",
    "area": "練馬區、板橋區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/hikarigaoka/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "銀杏並木與ふれあいの径宜設為不同子地點。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 11,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "555f6d612024c7d2.txt",
    "adoptedBy": [
      "光丘公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-011",
    "group_id": "TOKYO_PARK",
    "name": "日比谷公園",
    "area": "千代田區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/hibiya/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "葉況與施工、通行公告分開管理。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 12,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "25642cb4914e68a3.txt",
    "adoptedBy": [
      "日比谷公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-012",
    "group_id": "TOKYO_PARK",
    "name": "代々木公園",
    "area": "澀谷區",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/yoyogi/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "黃葉公告須限定原文明示區域，不擴張為全園。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 13,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "431ea8c533ee796d.txt",
    "adoptedBy": [
      "代代木公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-013",
    "group_id": "TOKYO_PARK",
    "name": "旧岩崎邸庭園",
    "area": "台東區（入口）",
    "grade": "S",
    "operator": "公益財團法人東京都公園協會",
    "role": "園區入口／公告；銀杏觀測資格由2025年度名單證實",
    "url": "https://www.tokyo-park.or.jp/park/kyu-iwasaki-tei/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "2025年度官方紅葉情報名單明列本園區之銀杏；本次不宣稱已取得2026銀杏現況。",
    "cadence": "中央整合頁2025季內每週兩次；園區個別公告頻率未承諾。",
    "suggested_poll": "季內每日檢查入口；依當年公告調整（建議）",
    "caveat": "活動或集章日期不是見頃日；注意官網改版後網址。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 14,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "a87b16c105df8e6c.txt",
    "adoptedBy": [
      "舊岩崎邸庭園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-014",
    "group_id": "SHOWA",
    "name": "國營昭和記念公園｜花だより",
    "area": "立川市、昭島市",
    "grade": "A",
    "operator": "國營昭和記念公園官方網站",
    "role": "附日期的植物／黃葉現地快訊",
    "url": "https://www.showakinen-koen.jp/hanadayori/",
    "extra_url": "https://www.showakinen-koen.jp/flower-information/",
    "evidence_url": "https://www.showakinen-koen.jp/hanadayori/page/3/",
    "evidence_date": "2025-10-23至2025-12-04",
    "finding": "歷史列表有連續多期イチョウ情報；植物指南明列イチョウ（黄葉）。",
    "cadence": "歷史季內約每週一篇；並非官網保證的更新頻率。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "カナール、かたらいのイチョウ並木分開；page/3分頁位置會隨新增文章變動，不可當永久存檔ID。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 15,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "3b05c3643a046bba.txt",
    "adoptedBy": [
      "昭和紀念公園"
    ],
    "auditNote": "本輪取得 10/8 花訊：10/7 立川入口前、原野南賣店局部開始轉黃；其他區域未開始，不能當全園滿黃。票價已核對一日券欄。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-015",
    "group_id": "FNG_SHINJUKU",
    "name": "新宿御苑｜國民公園協會自然情報",
    "area": "新宿區、澀谷區",
    "grade": "A",
    "operator": "一般財團法人國民公園協會 新宿御苑",
    "role": "みどころ／紅葉／植物公告",
    "url": "https://fng.or.jp/shinjuku/news/",
    "extra_url": "https://policies.env.go.jp/national-garden/shinjukugyoen/index.html",
    "evidence_url": "https://fng.or.jp/shinjuku/2025/11/28/20251128_03/",
    "evidence_date": "2025-11-28",
    "finding": "日期文章明確敘述銀杏黃葉見頃，包含溫室附近照片及園內植物地圖。",
    "cadence": "已見每週みどころ及其他不定期文章；不是保證頻率。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "舊文只當歷史樣本。環境省管理資訊與協會自然情報各有用途；不可混入同期其他樹種狀態。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 16,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "bfd486c0bcaa133a.txt",
    "adoptedBy": [
      "新宿御苑"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-016",
    "group_id": "HACHIOJI",
    "name": "八王子いちょう祭り｜黄葉情報",
    "area": "八王子市・甲州街道",
    "grade": "A",
    "operator": "八王子いちょう祭り祭典委員會",
    "role": "沿道路多觀景點、附拍攝日期的黃葉照片",
    "url": "https://www.ichou-festa.org/ichounews/",
    "extra_url": "https://www.ichou-festa.org/",
    "evidence_url": "https://www.ichou-festa.org/notice/post-3629/",
    "evidence_date": "2026-09-24（更新公告）",
    "finding": "黄葉情報頁可見2026-09-22拍攝日期，分中央圖書館、多摩御陵入口及觀看方向。",
    "cadence": "官方明示不定期更新。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "已確認2026季內內容，但不能只看照片日期就自動判定見頃。祭典日期與葉況分離。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 17,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "c88f18a86a6b23b6.txt",
    "adoptedBy": [
      "八王子銀杏祭／甲州街道銀杏大道"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-017",
    "group_id": "KUNAICHO",
    "name": "宮內廳｜皇居東御苑 花だより",
    "area": "千代田區・皇居東御苑",
    "grade": "A",
    "operator": "宮內廳",
    "role": "附日期的園內植物與黃葉記錄",
    "url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/index.html",
    "extra_url": "https://www.kunaicho.go.jp/visit/higashigyoen/index.html",
    "evidence_url": "https://www.kunaicho.go.jp/visit/higashigyoen/hanadayori/20251128.html",
    "evidence_date": "2025-11-28",
    "finding": "日期文記錄銀杏等樹木變色，照片標示百人番所前のイチョウ。",
    "cadence": "列表可見近每週更新；未將其視為保證頻率。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "東御苑不是皇居外苑或北之丸公園。全園葉落描述不可自動套用銀杏。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 18,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "e7b649771a795561.txt",
    "adoptedBy": [
      "皇居東御苑"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-018",
    "group_id": "UTOKYO_BOT",
    "name": "小石川植物園｜見ごろの植物",
    "area": "文京區",
    "grade": "A",
    "operator": "東京大學大學院理學系研究科附屬植物園",
    "role": "附日期的物種級植物觀察",
    "url": "https://koishikawa-bg.jp/kaikainfo/",
    "extra_url": "https://koishikawa-bg.jp/kaika/",
    "evidence_url": "https://koishikawa-bg.jp/kaika/5013/",
    "evidence_date": "2025-11-19",
    "finding": "當日文章將イチョウ明列於正在紅葉／黃葉的植物清單。",
    "cadence": "不定期，已有多篇日期文章。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "見到黃葉不等於已到見頃。小石川植物園與小石川後樂園是不同地點。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 19,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "d0fc8a2b4670ad73.txt",
    "adoptedBy": [
      "小石川植物園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-019",
    "group_id": "AKIRUNO",
    "name": "あきる野市觀光協會｜のらぼう日記",
    "area": "秋留野市・廣德寺周邊",
    "grade": "A",
    "operator": "あきる野市觀光協會",
    "role": "秋川溪谷分地點紅葉巡查，含廣德寺銀杏",
    "url": "https://www.akirunokanko.com/?cat=53",
    "extra_url": "https://www.akirunokanko.com/",
    "evidence_url": "https://www.akirunokanko.com/?p=8712",
    "evidence_date": "2025-11-08（發文）；2025-11-06（拍照）",
    "finding": "廣德寺段落明寫銀杏變色進展、尚差一些到見頃；原文另給照片拍攝日期。",
    "cadence": "原文說隨時更新；2025季內有多期，非固定每週承諾。",
    "suggested_poll": "季內每日一次（建議）",
    "caveat": "石舟橋段落是楓樹，不能套用到廣德寺銀杏。發文日與拍摄日分開。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 20,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "c33129461fd26e12.txt",
    "adoptedBy": [
      "廣德寺"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-020",
    "group_id": "JMA",
    "name": "氣象廳｜いちょうの黄葉日",
    "area": "東京觀測站（標本木尺度）",
    "grade": "O",
    "operator": "日本氣象廳",
    "role": "依統一基準記錄黃葉日",
    "url": "https://www.data.jma.go.jp/sakura/data/phn_012.html",
    "extra_url": "",
    "evidence_url": "https://www.data.jma.go.jp/sakura/data/",
    "evidence_date": "最近資料頁2025–2026",
    "finding": "有東京及其他站的銀杏黃葉日期表；官網说明觀測以標本木進行。",
    "cadence": "最近資料每日約08:35（日本時間）更新。",
    "suggested_poll": "每日09:00日本時間一次（建議）",
    "caveat": "觀測站日期不能充當每處公園最佳觀賞日；未報告不等於青葉。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 21,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "e3edd57e5dc1669f.txt",
    "adoptedBy": [],
    "auditNote": "東京觀測站黃葉日，2026 欄尚未有報告；不能分配給 26 處。",
    "classification": "觀測站／累年統計"
  },
  {
    "source_id": "TKG-021",
    "group_id": "JMA",
    "name": "氣象廳｜いちょうの落葉日",
    "area": "東京觀測站（標本木尺度）",
    "grade": "O",
    "operator": "日本氣象廳",
    "role": "標本木落葉日期",
    "url": "https://www.data.jma.go.jp/sakura/data/phn_013.html",
    "extra_url": "",
    "evidence_url": "https://www.data.jma.go.jp/sakura/data/",
    "evidence_date": "最近資料頁2025–2026",
    "finding": "有銀杏落葉日期表，與黃葉日分開。",
    "cadence": "最近資料每日約08:35（日本時間）更新。",
    "suggested_poll": "每日09:00日本時間一次（建議）",
    "caveat": "不是全東京銀杏落葉完成日；保留站點和觀測現象定義。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 22,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "45c039af39bf44f3.txt",
    "adoptedBy": [],
    "auditNote": "東京觀測站落葉日，與黃葉日分開；不能當全東京落葉完成日。",
    "classification": "觀測站／累年統計"
  },
  {
    "source_id": "TKG-022",
    "group_id": "JMA",
    "name": "氣象廳｜生物季節累年值CSV入口",
    "area": "東京及全國站點歷史",
    "grade": "O",
    "operator": "日本氣象廳",
    "role": "官方歷史資料下載索引",
    "url": "https://www.data.jma.go.jp/sakura/data/download_ruinenchi.html",
    "extra_url": "",
    "evidence_url": "https://www.data.jma.go.jp/sakura/data/",
    "evidence_date": "累年表主頁標記2026-03-19",
    "finding": "下載索引提供いちょう黄葉與いちょう落葉CSV連結。",
    "cadence": "累年資料不應當作每日即時資料。",
    "suggested_poll": "開發建檔及年度更新時檢查（建議）",
    "caveat": "已驗證下載入口；本次未成功取得CSV檔位元組，也未驗證CSV欄位。不可宣稱API已測通。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 23,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "d0405abae34bcd99.txt",
    "adoptedBy": [],
    "auditNote": "已取得兩份 CSV 位元內容並以 CP932 解碼；662 東京平年黃葉 1123、落葉 1203，保留原始欄位證據。",
    "classification": "觀測站／累年統計"
  },
  {
    "source_id": "TKG-023",
    "group_id": "MEIJI_GAIEN",
    "name": "明治神宮外苑｜いちょう並木",
    "area": "明治神宮外苑・銀杏並木",
    "grade": "C",
    "operator": "明治神宮外苑",
    "role": "第一方景點及四季介紹；監看公告的入口",
    "url": "https://www.meijijingugaien.jp/walk/sight/season.html",
    "extra_url": "https://www.meijijingugaien.jp/news/",
    "evidence_url": "https://www.meijijingugaien.jp/walk/sight/season.html",
    "evidence_date": "未見可當現況的日期",
    "finding": "官網明確介紹銀杏並木與四季景觀；本次未確認穩定的逐日銀杏葉況專頁。",
    "cadence": "未確認。",
    "suggested_poll": "季內檢查官網公告；不得由靜態頁生成現況（建議）",
    "caveat": "不是明治神宮內苑。頁內老樹齡／株數含歷史基準，勿當2026現況。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 24,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "bd6e74f797a8757f.txt",
    "adoptedBy": [
      "明治神宮外苑"
    ],
    "auditNote": "銀杏季節介紹與 2022/11/17 見頃文章已核對；未取得 2026 當季階段。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-024",
    "group_id": "OGIKUBO_GARDENS",
    "name": "大田黑公園｜荻窪三庭園",
    "area": "杉並區",
    "grade": "B",
    "operator": "杉並區官方指向之公園網站（荻窪三庭園）",
    "role": "現行官方入口，待人工／瀏覽器核對季內葉況",
    "url": "https://ogikubo3gardens.jp/ootaguro/",
    "extra_url": "https://ogikubo3gardens.jp/",
    "evidence_url": "https://www.city.suginami.tokyo.jp/s100/shisetsu/14632.html",
    "evidence_date": "區公所頁更新2025-09-09",
    "finding": "杉並區官網證明銀杏並木及現行官方網址；本次自動讀取公園頁未取得正文。",
    "cadence": "尚未確認黃葉更新頻率。",
    "suggested_poll": "先完成人工開站與樣本文核對，再設定排程（建議）",
    "caveat": "不得沿用已於2024年3月結束管理的箱根植木舊頁作現任營運來源。",
    "access": "官方身分已確認；公園頁正文讀取不足",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 25,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "edcef1131f25a53c.txt",
    "adoptedBy": [
      "大田黑公園"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-025",
    "group_id": "OOKUNITAMA",
    "name": "大國魂神社｜大銀杏／公告",
    "area": "府中市",
    "grade": "C",
    "operator": "大國魂神社",
    "role": "第一方大銀杏地點資訊及公告入口",
    "url": "https://www.ookunitamajinja.or.jp/mame/",
    "extra_url": "https://www.ookunitamajinja.or.jp/",
    "evidence_url": "https://www.ookunitamajinja.or.jp/mame/",
    "evidence_date": "靜態資料",
    "finding": "神社官網確認本殿後方的大銀杏；未確認定期黃葉觀測文章。",
    "cadence": "未確認。",
    "suggested_poll": "保留景點資料；季內監看公告（建議）",
    "caveat": "不要把附近馬場大門的櫸樹並木視為銀杏。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 26,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "2a5044ffe539f2d8.txt",
    "adoptedBy": [
      "大國魂神社"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-026",
    "group_id": "YASUKUNI",
    "name": "靖國神社｜官方公告、境內照片",
    "area": "千代田區",
    "grade": "C",
    "operator": "靖國神社",
    "role": "公告與影像入口；銀杏日期觀測仍待核對",
    "url": "https://www.yasukuni.or.jp/",
    "extra_url": "https://www.yasukuni.or.jp/schedule/photo.html",
    "evidence_url": "https://www.yasukuni.or.jp/schedule/photo.html",
    "evidence_date": "本次可讀2026公告",
    "finding": "官網和照片入口存在；本次未核得可直接當銀杏現況的日期觀測文章。",
    "cadence": "未確認。",
    "suggested_poll": "季內監看；照片須先核拍攝日期（建議）",
    "caveat": "宣傳影片上線日不等於拍攝日。不可將未核視角的LIVE影片宣稱銀杏即時鏡頭。",
    "access": "已讀取頁面",
    "species": "銀杏專項現況待確認",
    "audited_at": "2026-09-29",
    "row_number": 27,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "864c6ff5a056260e.txt",
    "adoptedBy": [
      "靖國神社"
    ],
    "auditNote": "官方園區／銀杏存在證據及參觀資訊已核對；本輪未採用為 2026 銀杏實測。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-027",
    "group_id": "GOTOKYO",
    "name": "GO TOKYO｜秋季紅葉指南",
    "area": "東京都全域",
    "grade": "C",
    "operator": "東京官方旅遊網站 GO TOKYO",
    "role": "景點發現、地址與官方外連",
    "url": "https://www.gotokyo.org/jp/story/guide/autumn-leaves-forecast/index.html",
    "extra_url": "",
    "evidence_url": "https://www.gotokyo.org/jp/story/guide/autumn-leaves-forecast/index.html",
    "evidence_date": "2026-09-01",
    "finding": "指南明確介紹明治神宮外苑銀杏等秋季地點。",
    "cadence": "編輯型更新，非每景點每日觀測。",
    "suggested_poll": "每週或每月檢查基本資料（建議）",
    "caveat": "網址含forecast不等於有當日銀杏觀測；文章更新日不能代表照片日期。",
    "access": "已讀取頁面",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 28,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "49e374bc53bdaf46.txt",
    "adoptedBy": [],
    "auditNote": "旅遊季節指南；外苑例年區間可參考，更新日不是葉況觀測日。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-028",
    "group_id": "CHIYODA_TOURISM",
    "name": "千代田區觀光協會｜景點／專題",
    "area": "千代田區",
    "grade": "C",
    "operator": "千代田區觀光協會",
    "role": "區域景點及來源發現入口",
    "url": "https://visit-chiyoda.tokyo/app/spot",
    "extra_url": "https://visit-chiyoda.tokyo/app/feature",
    "evidence_url": "https://visit-chiyoda.tokyo/app/spot",
    "evidence_date": "本次讀取2026-09-29",
    "finding": "景點列表有紅葉名所分類；可用來查區內候選地點。",
    "cadence": "未確認銀杏葉況頻率。",
    "suggested_poll": "僅供景點資料維護；發現日期文章後再升級（建議）",
    "caveat": "尚未證實它對行幸通り等逐點提供定期銀杏觀測。",
    "access": "已讀取頁面",
    "species": "紅葉混合分類",
    "audited_at": "2026-09-29",
    "row_number": 29,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "b54398ed47a5a5b6.txt",
    "adoptedBy": [],
    "auditNote": "區域景點分類入口；沒有採用為任何地點當季觀測。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-029",
    "group_id": "SHINJUKU_TOURISM",
    "name": "新宿觀光振興協會｜官方入口",
    "area": "新宿區",
    "grade": "C",
    "operator": "新宿觀光振興協會",
    "role": "景點、活動與公告發現",
    "url": "https://www.kanko-shinjuku.jp/",
    "extra_url": "",
    "evidence_url": "https://www.kanko-shinjuku.jp/",
    "evidence_date": "本次讀取2026-09-29",
    "finding": "官方觀光入口可讀；銀杏日期快訊本次未確認。",
    "cadence": "未確認。",
    "suggested_poll": "低頻景點資料維護；不直接用作葉況（建議）",
    "caveat": "不能取代新宿御苑管理相關單位的實際植物報告。",
    "access": "已讀取頁面",
    "species": "銀杏專項現況待確認",
    "audited_at": "2026-09-29",
    "row_number": 30,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "0eba79e928eb84cd.txt",
    "adoptedBy": [],
    "auditNote": "區域旅遊入口；未代替新宿御苑實際植物報告。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-030",
    "group_id": "FNG_KOUKYO",
    "name": "皇居外苑・北之丸公園｜國民公園協會",
    "area": "千代田區",
    "grade": "B",
    "operator": "一般財團法人國民公園協會 皇居外苑",
    "role": "四季景觀、植物公告入口",
    "url": "https://fng.or.jp/koukyo/news/",
    "extra_url": "",
    "evidence_url": "https://fng.or.jp/koukyo/",
    "evidence_date": "本次可見2026-09-19季節文章入口",
    "finding": "有持續更新的自然／四季消息；本次未核得銀杏專项葉況。",
    "cadence": "不定期；銀杏頻率待查。",
    "suggested_poll": "季內每日檢查標題；先人工確認物種（建議）",
    "caveat": "與宮內廳東御苑不同來源、不同地理範圍。",
    "access": "已讀取頁面",
    "species": "銀杏專項現況待確認",
    "audited_at": "2026-09-29",
    "row_number": 31,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "939d4e035ccef886.txt",
    "adoptedBy": [
      "北之丸公園"
    ],
    "auditNote": "本輪新增北之丸 2024/11/13 銀杏開始黃葉歷史紀錄；不是東御苑。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-031",
    "group_id": "TOKYO_PARK",
    "name": "神代植物公園｜園區植物公告",
    "area": "調布市",
    "grade": "B",
    "operator": "公益財團法人東京都公園協會",
    "role": "多物種植物公告入口",
    "url": "https://www.tokyo-park.or.jp/park/jindai/",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04",
    "finding": "有植物園官方入口；中央紅葉名單對本園記錄的是モミジ。",
    "cadence": "園區植物公告頻率未確認。",
    "suggested_poll": "先補銀杏日期樣本，不啟用銀杏自動狀態（建議）",
    "caveat": "不可把中央名單的楓樹狀態當作銀杏。",
    "access": "已讀取頁面",
    "species": "2025中央項目是楓樹",
    "audited_at": "2026-09-29",
    "row_number": 32,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "053f0fbbce8cab67.txt",
    "adoptedBy": [],
    "auditNote": "2025 中央名單為楓樹；未據此增列銀杏景點。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-032",
    "group_id": "FUCHU_MUSEUM",
    "name": "府中市鄉土之森博物館｜花ごよみ",
    "area": "府中市",
    "grade": "B",
    "operator": "府中市鄉土之森博物館官方營運網站",
    "role": "園內花曆／植物動態",
    "url": "https://www.fuchu-cpf.or.jp/museum/hanagoyomi/index.html",
    "extra_url": "https://www.fuchu-cpf.or.jp/museum/",
    "evidence_url": "https://www.fuchu-cpf.or.jp/museum/hanagoyomi/index.html",
    "evidence_date": "2026-09-28",
    "finding": "植物狀況頁持續更新，但本次所讀內容不足以證實銀杏專項發布。",
    "cadence": "有日期更新；银杏頻率未確認。",
    "suggested_poll": "先補銀杏物種與日期樣本（建議）",
    "caveat": "不要把彼岸花／萩等花況轉成銀杏；照片需獨立核日期。",
    "access": "已讀取頁面",
    "species": "銀杏物種／現況均待補證",
    "audited_at": "2026-09-29",
    "row_number": 33,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "24d0de13063091d1.txt",
    "adoptedBy": [],
    "auditNote": "花曆入口沒有本輪採用的明確銀杏日期觀測；未轉成葉況。",
    "classification": "補充／未採為景點現況"
  },
  {
    "source_id": "TKG-033",
    "group_id": "TENKI",
    "name": "tenki.jp｜東京都紅葉情報",
    "area": "東京都多景點",
    "grade": "T",
    "operator": "tenki.jp（非景點管理機關）",
    "role": "第三方整合葉況／五階段狀態",
    "url": "https://tenki.jp/kouyou/3/16/",
    "extra_url": "https://tenki.jp/kouyou/3/16/30688.html",
    "evidence_url": "https://tenki.jp/kouyou/3/16/",
    "evidence_date": "2026-09-29",
    "finding": "東京都列表顯示2026季資訊；來源說明每日綜合各景點回報。含明治外苑、大田黑、廣德寺等。",
    "cadence": "網站說明每日更新／回報。",
    "suggested_poll": "許可及條款確認後每日一次（建議）",
    "caveat": "多樹種混合；示意照片不等於當日照片。38個東京都紅葉點不等於38個銀杏點。",
    "access": "已讀取頁面",
    "species": "銀杏與其他紅葉物種混合",
    "audited_at": "2026-09-29",
    "row_number": 34,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "0ea8d2727cc8e924.txt",
    "adoptedBy": [],
    "auditNote": "商業紅葉指南，混合樹種；本輪未採其預報為實測。",
    "classification": "預報／第三方指南"
  },
  {
    "source_id": "TKG-034",
    "group_id": "WEATHERNEWS",
    "name": "Weathernews｜東京都紅葉情報",
    "area": "東京都多景點",
    "grade": "T",
    "operator": "Weathernews（民間氣象平台）",
    "role": "第三方紅葉平台",
    "url": "https://weathernews.jp/koyo/area/tokyo/",
    "extra_url": "",
    "evidence_url": "https://weathernews.jp/koyo/area/tokyo/",
    "evidence_date": "2026版頁面",
    "finding": "確認2026東京專頁存在；本次解析結果不足以核對所有景點及銀杏專屬欄位。",
    "cadence": "本次未核定固定頻率。",
    "suggested_poll": "先核欄位、來源及條款，再設排程（建議）",
    "caveat": "勿宣稱其所有預報／回報均為官方實測。動態渲染內容需另做實測。",
    "access": "頁面可開啟；細項自動解析不足",
    "species": "多物種紅葉",
    "audited_at": "2026-09-29",
    "row_number": 35,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "977ce47753e9a274.txt",
    "adoptedBy": [],
    "auditNote": "動態紅葉列表；本輪未完整核對逐點動態狀態，沒有匯入當季葉況。",
    "classification": "預報／第三方指南"
  },
  {
    "source_id": "TKG-035",
    "group_id": "WALKER",
    "name": "WalkerPlus｜東京 黃色に色づく",
    "area": "東京都多景點",
    "grade": "T",
    "operator": "KADOKAWA／WalkerPlus",
    "role": "第三方景點目錄及色づき狀態",
    "url": "https://koyo.walkerplus.com/yellow/ar0313/",
    "extra_url": "https://koyo.walkerplus.com/list/ar0313/",
    "evidence_url": "https://koyo.walkerplus.com/detail/ar0313e154517/",
    "evidence_date": "2026-09-28（芝公園狀態）",
    "finding": "黃色分類列56項（含其他黃葉樹種）；芝公園頁色づき來源標示JRシステム。",
    "cadence": "平台標示每日更新色づき資訊。",
    "suggested_poll": "許可及條款確認後每日一次（建議）",
    "caveat": "56項不是56處銀杏確證；2026葉況旁可並列2025活動。圖片二次使用受限。",
    "access": "已讀取頁面",
    "species": "銀杏等黃色樹種；混合",
    "audited_at": "2026-09-29",
    "row_number": 36,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "cd2837d122fdc306.txt",
    "adoptedBy": [],
    "auditNote": "本輪黃色分類頁為 57 項（非原快照 56）；包含其他黃葉樹種，不等於銀杏確證。",
    "classification": "預報／第三方指南"
  },
  {
    "source_id": "TKG-036",
    "group_id": "JORUDAN",
    "name": "Jorudan｜東京都 紅葉情報",
    "area": "東京都多景點",
    "grade": "T",
    "operator": "ジョルダン（民間平台）",
    "role": "第三方景點、見頃與交通資訊",
    "url": "https://sp.jorudan.co.jp/leaf/tokyo.html",
    "extra_url": "",
    "evidence_url": "https://sp.jorudan.co.jp/leaf/spot_J0193.html",
    "evidence_date": "2026版列表",
    "finding": "東京紅葉列表及國立大學通り等景點入口，可作地點查漏。",
    "cadence": "個別點現況更新頻率需另核。",
    "suggested_poll": "先作候選地點索引（建議）",
    "caveat": "歷年通常見頃不等於今年現況；不要假設所有點均有當日觀測。",
    "access": "已讀取頁面",
    "species": "紅葉混合",
    "audited_at": "2026-09-29",
    "row_number": 37,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "9b7348f05c032aa3.txt",
    "adoptedBy": [],
    "auditNote": "旅遊季節參考；國立大學通的例年區間保留第三方標籤。",
    "classification": "預報／第三方指南"
  },
  {
    "source_id": "TKG-037",
    "group_id": "N_KISHOU",
    "name": "日本氣象株式會社｜紅葉・黃葉見頃預想",
    "area": "東京城市尺度及其他地點",
    "grade": "T",
    "operator": "日本氣象株式會社（不是氣象廳）",
    "role": "預報產品／黃葉模型結果",
    "url": "https://n-kishou.com/corp/news-contents/autumn/",
    "extra_url": "",
    "evidence_url": "https://n-kishou.com/corp/news-contents/autumn/",
    "evidence_date": "2026-09-02（第一回）",
    "finding": "2026第一回預報明確區分銀杏黃葉與楓樹紅葉。",
    "cadence": "公告按回次更新；本次頁標記下次預定10月上旬。",
    "suggested_poll": "公告更新時檢查（建議）",
    "caveat": "必須標forecast，保留發布日、預測對象和尺度；不得覆寫公園實際觀測。",
    "access": "已讀取頁面",
    "species": "黃葉=銀杏；紅葉主要=楓樹",
    "audited_at": "2026-09-29",
    "row_number": 38,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "84fd998e45e912e6.txt",
    "adoptedBy": [],
    "auditNote": "最新可讀為 2026/10/1 第 2 回預報，原清冊第 1 回已過時；城市／區域預測不分配給園區。",
    "classification": "預報／第三方指南"
  },
  {
    "source_id": "TKG-038",
    "group_id": "TOKYO_PARK",
    "name": "東京都公園協會｜2025紅葉季舊專頁",
    "area": "東京都內",
    "grade": "X",
    "operator": "公益財團法人東京都公園協會",
    "role": "歷史入口／網址失效監測",
    "url": "https://www.tokyo-park.or.jp/special/kouyou/index.html",
    "extra_url": "",
    "evidence_url": "https://www.tokyo-park.or.jp/association/assets/20251104_2025autumnleaves_pressrelease.pdf",
    "evidence_date": "2025-11-04（公告中的連結）",
    "finding": "2025公告指向此頁；本次查核回傳404。",
    "cadence": "當年季內每週兩次；目前不可當作工作中端點。",
    "suggested_poll": "季前由主站重新發現當年網址（建議）",
    "caveat": "此列保留作失效紀錄，不計入可立即使用的現況來源。",
    "access": "本次回傳404",
    "species": "銀杏",
    "audited_at": "2026-09-29",
    "row_number": 39,
    "checkedAt": "2026-10-08",
    "httpStatus": 404,
    "evidenceFile": null,
    "adoptedBy": [],
    "auditNote": "本輪再次得到 HTTP 404；排除為可用現況來源，保留 2025 PDF 證據。",
    "classification": "排除／失效或舊管理"
  },
  {
    "source_id": "TKG-039",
    "group_id": "HAKONE_OLD",
    "name": "箱根植木｜大田黑公園舊管理案例",
    "area": "杉並區",
    "grade": "X",
    "operator": "箱根植木（舊管理公司）",
    "role": "歷史管理身分核對／排除來源",
    "url": "https://hakone-ueki.com/casestudy/case1/",
    "extra_url": "",
    "evidence_url": "https://hakone-ueki.com/",
    "evidence_date": "管理期2011-04至2024-03",
    "finding": "公司首頁明寫大田黑公園管理已於2024年3月結束。",
    "cadence": "不是現任管理單位季內更新來源。",
    "suggested_poll": "不排程抓取葉況。",
    "caveat": "只保留遷移／排除理由；現行入口由杉並區官方指向荻窪三庭園。",
    "access": "已讀取頁面",
    "species": "不適用",
    "audited_at": "2026-09-29",
    "row_number": 40,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "a1b9231b8362b657.txt",
    "adoptedBy": [],
    "auditNote": "舊管理案例，2024/3 結束管理；排除為大田黑現任管理資訊。",
    "classification": "排除／失效或舊管理"
  },
  {
    "source_id": "TKG-040",
    "group_id": "UTOKYO_CAMPUS",
    "name": "東京大學｜本鄉・駒場校區官方入口",
    "area": "文京區、目黑區",
    "grade": "C",
    "operator": "東京大學",
    "role": "校區地圖、參觀規則及公告發現",
    "url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/index.html",
    "extra_url": "",
    "evidence_url": "https://www.u-tokyo.ac.jp/ja/about/campus-guide/index.html",
    "evidence_date": "2026-04-01（地圖頁）",
    "finding": "確認本鄉及駒場的官方地圖／參觀入口；尚未確認穩定的銀杏日期觀測來源。",
    "cadence": "銀杏更新頻率未確認。",
    "suggested_poll": "先人工查廣報／官方社群及參觀規則；不以地圖生成葉況（建議）",
    "caveat": "本鄉、駒場、小石川植物園是不同地點。此頁未證實各校區的當季銀杏觀測。",
    "access": "已讀取頁面",
    "species": "銀杏專項現況待確認",
    "audited_at": "2026-09-29",
    "row_number": 41,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "3e988fe3cbcd7751.txt",
    "adoptedBy": [
      "東京大學 本鄉校區",
      "東京大學 駒場校區"
    ],
    "auditNote": "官方另頁分別確認本鄉／駒場銀杏；參觀規則與交通分開，不共用本鄉政策。",
    "classification": "景點主要來源"
  },
  {
    "source_id": "TKG-041",
    "group_id": "KUNITACHI",
    "name": "くにたちNAVI｜國立市觀光まちづくり協會",
    "area": "國立市・大學通り候選",
    "grade": "C",
    "operator": "NPO法人國立市觀光まちづくり協會",
    "role": "地方觀光／活動入口，供來源拓展",
    "url": "https://kunimachi.jp/",
    "extra_url": "https://sp.jorudan.co.jp/leaf/spot_J0193.html",
    "evidence_url": "https://kunimachi.jp/",
    "evidence_date": "本次可見2026-09-25更新",
    "finding": "頁尾確認營運者為國立市觀光まちづくり協會；本次未確認定期銀杏葉況文章。",
    "cadence": "銀杏更新頻率未確認。",
    "suggested_poll": "季內查公告與官方社群；先補日期觀測樣本（建議）",
    "caveat": "區域旅遊更新不等於大學通り銀杏現況；可與Jorudan地點目錄交叉尋源。",
    "access": "已讀取頁面",
    "species": "銀杏專項現況待確認",
    "audited_at": "2026-09-29",
    "row_number": 42,
    "checkedAt": "2026-10-08",
    "httpStatus": 200,
    "evidenceFile": "9791781756563d45.txt",
    "adoptedBy": [
      "國立大學通"
    ],
    "auditNote": "觀光協會大學通介紹確認銀杏；另補市府介紹，沒有採用無年份點燈當 2026 活動。",
    "classification": "景點主要來源"
  }
];
export const imageReferences = [
  {
    "place": "明治神宮外苑 いちょう並木",
    "mode": "ginkgo",
    "file_page": "https://commons.wikimedia.org/wiki/File:Jingu_Gaien_Ginkgo_Street_in_Autumn.jpg",
    "thumburl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/67/Jingu_Gaien_Ginkgo_Street_in_Autumn.jpg/960px-Jingu_Gaien_Ginkgo_Street_in_Autumn.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "width": 960,
    "height": 619,
    "original_width": 2056,
    "original_height": 1326,
    "author": "Kakidai",
    "license_short": "CC BY-SA 4.0",
    "license_url": "https://creativecommons.org/licenses/by-sa/4.0",
    "date_taken": "2016-11-22",
    "verified_http": 200,
    "content_type": "image/jpeg",
    "note": "Gaien ginkgo avenue in autumn",
    "usedOnSite": false
  }
];
