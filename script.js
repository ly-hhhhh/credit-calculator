const courseDB = {
  "1-1": {
    "專業必修": [{n:"表演（一）",c:2},{n:"劇場導論",c:2},{n:"劇本導讀（一）",c:3},{n:"劇場技術（一）",c:2},{n:"藝術鑑賞",c:2},{n:"運算思維與程式設計",c:2}],
    "專業選修": []
  },
  "1-2": {
    "專業必修": [{n:"即興創作",c:2},{n:"劇本導讀（二）",c:3},{n:"戲劇製作演出（一）",c:2}],
    "專業選修": [{n:"表演（二）",c:2},{n:"肢體劇場表演",c:2},{n:"劇場技術（二）",c:2}]
  },
  "2-1": {
    "專業必修": [{n:"導演（一）",c:3},{n:"創造性戲劇（一）",c:2},{n:"應用戲劇編創方法",c:2},{n:"西洋戲劇及劇場史（一）",c:3}],
    "專業選修": [{n:"文本與表演",c:2},{n:"當代兒童劇場",c:2},{n:"服裝造型與設計",c:2},{n:"兒童青少年文學選讀",c:2},{n:"偶戲製作與操作（一）",c:2}]
  },
  "2-2": {
    "專業必修": [{n:"劇場管理",c:3},{n:"口述歷史劇場",c:2},{n:"教習劇場 TiE（一）",c:2},{n:"教育戲劇 DiE（一）",c:2},{n:"戲劇製作演出（二）",c:2},{n:"西洋戲劇及劇場史（二）",c:3}],
    "專業選修": [{n:"導演（二）",c:2},{n:"創造性舞蹈",c:2},{n:"劇場舞台設計",c:2},{n:"戲劇遊戲與策略",c:3},{n:"劇場音樂音效設計",c:2},{n:"傳統戲曲表演與賞析",c:2}]
  },
  "3-1": {
    "專業必修": [{n:"劇本創作基礎",c:3},{n:"應用劇場實作",c:2},{n:"劇場與表演理論",c:3}],
    "專業選修": [{n:"社區劇場",c:4},{n:"當代華文劇場",c:2},{n:"台灣現代戲劇史",c:3},{n:"教習劇場 TiE（二）",c:4},{n:"偶戲製作與操作（二）",c:2}]
  },
  "3-2": {
    "專業必修": [{n:"兒童青少年名劇選讀",c:2},{n:"戲劇教育實作",c:1}],
    "專業選修": [{n:"音樂與舞蹈",c:2},{n:"說故事劇場",c:2},{n:"亞洲傳統劇場",c:2},{n:"跨領域表演創作",c:2},{n:"創造性戲劇（二）",c:4},{n:"教育戲劇 DiE（二）",c:4},{n:"劇場燈光設計（一）",c:2},{n:"劇場燈光設計（二）",c:2},{n:"兒童青少年劇場編創",c:3},{n:"傳統戲曲表演與創作（一）",c:2}]
  },
  "4-1": {
    "專業必修": [{n:"中國戲劇與劇場史",c:3}],
    "專業選修": [{n:"多媒材劇場",c:2},{n:"劇本創作進階",c:2},{n:"跨領域劇場賞析",c:2},{n:"亞洲現當代劇場",c:2},{n:"當代兒童劇場作品評析",c:2},{n:"畢業專題實作（一）─戲劇教育",c:3},{n:"畢業專題實作（一）─應用劇場",c:3},{n:"畢業專題實作（一）─劇場展演",c:3}]
  },
  "4-2": {
    "專業必修": [],
    "專業選修": [{n:"英文戲劇與電影",c:2},{n:"臺灣的戲曲傳統與創新",c:2},{n:"傳統戲曲表演與創作（二）",c:2},{n:"畢業專題實作（二）─戲劇教育",c:4},{n:"畢業專題實作（二）─應用劇場",c:4},{n:"畢業專題實作（二）─劇場展演",c:4}]
  },
  "general": {
    "校核心必修": [{n:"體育",c:2},{n:"英文（一）",c:2},{n:"英文（二）",c:2},{n:"中文閱讀與書寫（一）",c:2},{n:"中文閱讀與書寫（二）",c:2}],
    "通識-文史哲藝術": [ {n:"休閒地理",c:2}, {n:"攝影藝術",c:2}, {n:"旅遊英文",c:2}, {n:"歌唱治療",c:2}, {n:"職場英文",c:2}, {n:"時事英文",c:2}, {n:"空間美學",c:2}, {n:"創意臺南",c:2}, {n:"療癒書法",c:2}, {n:"科幻文學",c:2}, {n:"美國文化",c:2}, {n:"法國文化",c:2}, {n:"法國文化",c:2}, {n:"美感與生活",c:2}, {n:"民俗與藝術",c:2}, {n:"禪學與人生",c:2}, {n:"舞蹈與藝術",c:2}, {n:"音樂與人生",c:2}, {n:"影像藝術思維",c:2}, {n:"經典文學導讀",c:2}, {n:"文學中的臺南",c:2}, {n:"表演藝術欣賞",c:2}, {n:"實用情境日文",c:2}, {n:"實用情境法文",c:2}, {n:"實用情境德文",c:2}, {n:"實用情境美語",c:2}, {n:"實用情境韓文",c:2}, {n:"文學與現代生活",c:2}, {n:"英文小品文賞析",c:2}, {n:"兒童文學與閱讀",c:2}, {n:"小說與社會關懷",c:2}, {n:"臺灣原住民文學",c:2}, {n:"臺灣歷史與文化",c:2}, {n:"鯤島的海洋戀歌",c:2}, {n:"臺灣女性散文選讀",c:2}, {n:"臺灣經典文獻選讀",c:2}, {n:"博物館導覽與應用",c:2}, {n:"旅遊史與經典選讀",c:2}, {n:"歐美史學名著選讀",c:2}, {n:"英語口語表達技巧",c:2}, {n:"英語口語表達技巧",c:2}, {n:"從近代史看東亞思維",c:2}, {n:"沿著海走的藝文教育",c:2}, {n:"海味人生的藝文創作",c:2}, {n:"日治期的臺日經典文學",c:2}, {n:"14～17世紀歐洲文明史",c:2} ],
    "通識-社會脈動": [ {n:"法律素養",c:2}, {n:"親子關係",c:2}, {n:"理財規劃",c:2}, {n:"領導藝術",c:2}, {n:"國際禮儀",c:2}, {n:"性別與社會",c:2}, {n:"性別與教育",c:2}, {n:"婚姻與家庭",c:2}, {n:"環境與經濟",c:2}, {n:"愛情與法律",c:2}, {n:"職場與法律",c:2}, {n:"管理學概論",c:2}, {n:"政治學概論",c:2}, {n:"電影中的法律",c:2}, {n:"財務管理概論",c:2}, {n:"行銷管理概論",c:2}, {n:"全球產業分析",c:2}, {n:"人際關係與發展",c:2}, {n:"實用法律與思辯",c:2}, {n:"在地文創與社區",c:2}, {n:"證券投資與管理",c:2}, {n:"犯罪、法律與人權",C:2}, {n:"人力資源管理概論",c:2}, {n:"全球化與公民素養",c:2}, {n:"服務學習與社會關懷",c:2}, {n:"性別演化與性別衝突",c:2}, {n:"生產與作業管理概論",c:2}, {n:"世界經濟趨勢與發展",c:2}, {n:"國際關係發展與理論",c:2}, {n:"臺灣原住民族文化概論",c:2}, {n:"全球化與兩岸經貿關係",c:2}, {n:"臺灣主權地位的國際觀",c:2}, {n:"中國國家戰略發展趨勢",c:2}, {n:"財經時事分析與投資實務",C:2}, {n:"當代國際組織類型與功能",c:2}, {n:"國際體系變遷與臺灣安全",c:2}, {n:"金融創新-指數化投資（ETF）",c:2}, {n:"南海爭端國家國防發展與區域安全",c:2}, {n:"全民國防教育軍事訓練課程（一）國際情勢",c:2}, {n:"全民國防教育軍事訓練課程（二）國防政策",c:2}, {n:"全民國防教育軍事訓練課程（三）全民國防",c:2}, {n:"全民國防教育軍事訓練課程（四）防衛動員",c:2} ],
    "通識-生命科學": [ {n:"生死學",C:2}, {n:"生命教育",c:2}, {n:"競技飛盤",c:2}, {n:"防身太極",c:2}, {n:"認識病毒",c:2}, {n:"環境與生態",c:2}, {n:"科學文明史",c:2}, {n:"運動與人生",c:2}, {n:"植物與人生",c:2}, {n:"生態與文明",c:2}, {n:"醫學與保健",c:2}, {n:"直排輪入門",c:2}, {n:"身心適能探索",c:2}, {n:"國家公園概論",c:2}, {n:"環境教育概論",c:2}, {n:"微生物與生活",c:2}, {n:"樂活人生規劃",c:2}, {n:"運動知能與欣賞",c:2}, {n:"信仰與生命成長",c:2}, {n:"鳥類生態與保育",c:2}, {n:"生態旅遊與保育",c:2}, {n:"運動與體重控制",c:2}, {n:"癌症預防與生活",c:2}, {n:"環境汙染與健康",c:2}, {n:"疾病徵兆及認識",c:2}, {n:"大學生的幸福學",c:2}, {n:"生命實踐的對話",C:2}, {n:"遺傳學與人類生活",c:2}, {n:"臺灣自然保育議題",c:2}, {n:"水資源利用與保育",c:2}, {n:"ESG與永續生活設計",c:2}, {n:"日常生活的社會心理學",c:2}, {n:"海洋人文社會科學導論",c:2}, {n:"尋找安平追想曲中的海洋",c:2} ],
    "通識-科技探索": [ {n:"能源科技與生活",c:2}, {n:"綠能與電動車",c:2}, {n:"物聯網應用",c:2}, {n:"科技與管理",c:2}, {n:"科技創新與知識管理",c:2}, {n:"氣象與生活",c:2}, {n:"節能減碳",c:2}, {n:"儲能科技與生活",c:2}, {n:"國防科技",c:2}, {n:"生物科技的應用",c:2}, {n:"太陽能初探",c:2}, {n:"股市預測與機器學習",c:2} ]
  }
};

let selected = [];
window.onload = function () { load(); render(); };

function updateMain() {
  const sem = document.getElementById("semesterSelect").value;
  const mainSelect = document.getElementById("mainSelect");
  mainSelect.innerHTML = '<option value="">2. 請選擇類別</option>';
  document.getElementById("courseSelect").innerHTML = '<option value="">3. 請選擇課程</option>';
  if (!sem) return;
  Object.keys(courseDB[sem]).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat; opt.textContent = cat;
    mainSelect.appendChild(opt);
  });
}

function updateCourse() {
  const sem = document.getElementById("semesterSelect").value;
  const cat = document.getElementById("mainSelect").value;
  const courseSelect = document.getElementById("courseSelect");
  courseSelect.innerHTML = '<option value="">3. 請選擇課程</option>';
  if (!sem || !cat) return;
  courseDB[sem][cat].forEach(c => {
    const opt = document.createElement("option");
    opt.value = JSON.stringify({ n: c.n, c: c.c, main: sem==='general'?'gen':'major', sub: cat, sem: sem });
    opt.textContent = c.n; 
    courseSelect.appendChild(opt);
  });
}

function addCourse() {
  const val = document.getElementById("courseSelect").value;
  if (!val) return alert("請先選擇課程");
  const obj = JSON.parse(val);
  if (selected.some(s => s.n === obj.n)) return alert("重複加課囉！");
  obj.id = Date.now();
  selected.push(obj);
  save(); render();
}

function addCustomCourse() {
  const n = prompt("課程名稱："); if(!n) return;
  const c = parseInt(prompt("學分：", "2"));
  const sem = document.getElementById("semesterSelect").value || "1-1";
  selected.push({ n, c, main: "free", sub: "自定義", sem: sem, id: Date.now() });
  save(); render();
}

function remove(id) {
  selected = selected.filter(c => c.id !== id);
  save(); render();
}

function render() {
  const container = document.getElementById("list-container");
  container.innerHTML = "";
  let stats = { gen:0, req:0, ele:0, free:0 };
  let genDomains = new Set();
  let eleOverflow = 0;

  const semNames = {"1-1":"大一上","1-2":"大一下","2-1":"大二上","2-2":"大二下","3-1":"大三上","3-2":"大三下","4-1":"大四上","4-2":"大四下","general":"通識/校核心"};

  Object.keys(semNames).forEach(semKey => {
    const semCourses = selected.filter(c => c.sem === semKey);
    if (semCourses.length > 0) {
      const block = document.createElement("div");
      block.className = "semester-block";
      block.innerHTML = `<div class="semester-title">${semNames[semKey]}</div><ul id="ul-${semKey}"></ul>`;
      container.appendChild(block);
      
      semCourses.forEach(c => {
        if (c.main === "gen") {
          stats.gen += c.c;
          if (c.sub.includes("通識")) genDomains.add(c.sub);
        } else if (c.main === "major") {
          if (c.sub === "專業必修") stats.req += c.c;
          else eleOverflow += c.c;
        } else {
          stats.free += c.c;
        }
        const li = document.createElement("li");
        li.innerHTML = `<span>${c.n} <small style="color:#888">(${c.c})</small></span><button class="delete-btn" onclick="remove(${c.id})">刪除</button>`;
        document.getElementById(`ul-${semKey}`).appendChild(li);
      });
    }
  });

  if (eleOverflow > 22) { stats.ele = 22; stats.free += (eleOverflow - 22); }
  else { stats.ele = eleOverflow; }

  document.getElementById("score-gen").textContent = stats.gen;
  document.getElementById("score-req").textContent = stats.req;
  document.getElementById("score-ele").textContent = stats.ele;
  document.getElementById("score-free").textContent = stats.free;
  document.getElementById("total").textContent = stats.gen + stats.req + stats.ele + stats.free;

  const gc = document.getElementById("gen-check");
  gc.innerHTML = genDomains.size >= 3 ? `✅ 已跨 ${genDomains.size} 領域` : `❌ 還差 ${3-genDomains.size} 領域`;
  gc.style.color = genDomains.size >= 3 ? "#10b981" : "#ef4444";
}

function save() { localStorage.setItem("nua_credit_final_v10", JSON.stringify(selected)); }
function load() { const d = localStorage.getItem("nua_credit_final_v10"); if(d) selected = JSON.parse(d); }
