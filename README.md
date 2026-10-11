# 東京銀杏地圖｜41577002 H

純 HTML、CSS、JavaScript 網站，使用原生 WebGL 顯示黑金風格立體銀杏與建築。本儲存庫包含完整網站程式、圖片及所有正式靜態資料，未因 20 MB 限制刪減任何建築分區。

## 開啟與部署

網站入口為根目錄 `index.html`。此交付版將原專案 `dist/` 內容放於根目錄，所有相對模組與素材路徑保持一致。

GitHub Pages 發布設定：以 `main` 分支、根目錄 `/` 發布。`.nojekyll` 停用 Jekyll，直接提供靜態網站檔案。無需 npm、框架或建置步驟。

本機可使用 VS Code 的靜態預覽／Live Server 開啟 `index.html`。請使用 HTTP／HTTPS，直接雙擊 HTML 的 file:// 模式無法初始化地圖。原啟動提示提及的 `啟動網站.command` 屬原本機專案，此儲存庫改用靜態預覽方式。

## 功能與資料

- 26 處銀杏景點、搜尋與篩選、葉片階段教學、景點詳情與來源。
- 平面／立體銀杏 3D、26 棵代表位置樹模型、每處周邊 1 公里建築分區。
- 全部 172,140 棟去重建築；26 分區共 196,263 筆紀錄。
- 附近交通摘要、完整建築清單、來源高度／估算／缺失區分。
- 收藏與散步清單保存在使用者瀏覽器，不提供跨裝置帳號同步。
- 步行道路規劃依外部服務回應，不是全東京最優路線保證。

資料快照與程式版本：`20261009-smooth-v2`。網站不會自動更新當季葉況，沒有即時交通功能。代表座標不是單株測繪；金色銀杏是位置模型，不能當作已觀測黃葉。官方建築快照不等於現地每棟建物的完整普查。

## 網路依賴

OpenStreetMap 圖磚、FOSSGIS／OSRM 步行服務與 Google Fonts 需要網路。網路或供應商服務中斷時，網站會揭露資料載入失敗；不同裝置的 3D 效能可能不同。桌面和手機均有平面地圖備援。

## 資料來源與授權

此專案僅供教學使用，非營利用途。此用途說明不取代任何來源授權。

- 建築：東京都／PLATEAU 官方 LOD1 模型加工；保留來源年度、URL、屬性、估算方式及 CC BY 4.0 聲明於各分區與 `assets/data/ginkgo-building-index.json`。地面平坦化，範圍邊緣裁切。
- 地圖：[OpenStreetMap contributors](https://www.openstreetmap.org/copyright)，依其[圖磚使用政策](https://operations.osmfoundation.org/policies/tiles/)請求，未打包或大量預抓圖磚。
- 步行：[FOSSGIS／OSRM](https://routing.openstreetmap.de/about.html)。使用者按產生路線後才送出起終點座標；定位需使用者主動同意。
- 幾何：[Mapbox Earcut](https://github.com/mapbox/earcut)，ISC；授權檔保留在 `vendor/earcut.LICENSE`。
- 景點、葉況及交通：網站「資料來源」頁與資訊卡保留各官方或指南來源、年份與查閱日期；不確定欄位會明示。
- 圖片：既有生成背景與飄葉示意，非當季實拍。

本次僅上傳網站及其靜態資料，不包含帳號密碼、金鑰、瀏覽器收藏、定位紀錄、原查核網頁全文或舊版 ZIP 備份。所有官方來源揭露仍保存在網站與資料內。
