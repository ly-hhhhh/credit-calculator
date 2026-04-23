const data = {
  general: {
    "校核心必修": [ { name: "中文閱讀與書寫", credit: 2 }, { name: "英文", credit: 2 }, { name: "體育", credit: 2 } ],
    "文史哲藝術領域": [ { name: "休閒地理", credit: 2 }, { name: "日治期的臺日經典文學", credit: 2 }, { name: "從近代史看東亞思維", credit: 2 }, { name: "攝影藝術", credit: 2 }, { name: "美感與生活", credit: 2 }, { name: "運動的藝術與實踐", credit: 2 }, { name: "文學與現代生活", credit: 2 }, { name: "旅遊英文", credit: 2 }, { name: "歌唱治療", credit: 2 }, { name: "影像藝術思維", credit: 2 }, { name: "職場英文", credit: 2 }, { name: "時事英文", credit: 2 }, { name: "運動知能與欣賞", credit: 2 }, { name: "英文小品文賞析", credit: 2 }, { name: "兒童文學與閱讀", credit: 2 }, { name: "14~17世紀歐洲文明史", credit: 2 }, { name: "民俗與藝術", credit: 2 }, { name: "禪學與人生", credit: 2 }, { name: "小說與社會關懷", credit: 2 }, { name: "臺灣女性散文選讀", credit: 2 } ],
    "社會脈動領域": [ { name: "財經時事分析與投資實務", credit: 2 }, { name: "世界經濟趨勢與發展", credit: 2 }, { name: "全球化與兩岸經貿關係", credit: 2 }, { name: "全球化與公民素養", credit: 2 }, { name: "國防政策", credit: 2 }, { name: "領導藝術", credit: 2 }, { name: "國際關係發展與理論", credit: 2 }, { name: "國際體系變遷與臺灣安全", credit: 2 }, { name: "法律素養", credit: 2 }, { name: "犯罪、法律與人權", credit: 2 }, { name: "性別與社會", credit: 2 }, { name: "亞太地區地緣政治與中國", credit: 2 }, { name: "政治學概要", credit: 2 }, { name: "理財規劃", credit: 2 }, { name: "金融創新-ETF投資", credit: 2 }, { name: "全民國防", credit: 2 }, { name: "實用法律與思辨", credit: 2 }, { name: "愛情與法律", credit: 2 }, { name: "在地文創與社區", credit: 2 }, { name: "電影中的法律", credit: 2 } ],
    "生命科學領域": [ { name: "醫學與保健", credit: 2 }, { name: "微生物與生活", credit: 2 }, { name: "生態與文明", credit: 2 }, { name: "環境污染與健康", credit: 2 }, { name: "國家公園概論", credit: 2 }, { name: "生態旅遊與保育", credit: 2 }, { name: "疾病徵兆及認識", credit: 2 }, { name: "環境教育概論", credit: 2 }, { name: "鳥類生態與保育", credit: 2 }, { name: "水資源利用與保育", credit: 2 }, { name: "生命教育", credit: 2 }, { name: "直排輪入門", credit: 2 }, { name: "競技飛盤", credit: 2 }, { name: "植物與人生", credit: 2 }, { name: "運動與人生", credit: 2 }, { name: "海洋生命科學導論", credit: 2 }, { name: "大學生的幸福學", credit: 2 }, { name: "尋找安平追想曲中的海洋", credit: 2 }, { name: "癌症預防與生活", credit: 2 }, { name: "生命實踐的對話", credit: 2 }, { name: "生死學", credit: 2 }, { name: "運動與體重控制", credit: 2 }, { name: "樂活人生規劃", credit: 2 } ],
    "科技探索領域": [ { name: "能源科技與生活", credit: 2 }, { name: "綠能與電動車", credit: 2 }, { name: "物聯網應用", credit: 2 }, { name: "科技與管理", credit: 2 }, { name: "科技創新與知識管理", credit: 2 }, { name: "氣象與生活", credit: 2 }, { name: "節能減碳", credit: 2 }, { name: "儲能科技與生活", credit: 2 }, { name: "國防科技", credit: 2 }, { name: "生物科技的應用", credit: 2 }, { name: "太陽能初探", credit: 2 }, { name: "股市預測與機器學習", credit: 2 } ]
  },
  major: {
    "院核心必修": [ { name: "藝術鑑賞", credit: 2 }, { name: "運算思維與程式設計", credit: 2 } ],
    "系必修": [ { name: "即興創作", credit: 2 }, { name: "劇場管理", credit: 3 }, { name: "戲劇教育實作", credit: 1 }, { name: "口述歷史劇場", credit: 2 }, { name: "劇本導讀", credit: 3 }, { name: "教習劇場TiE", credit: 2 }, { name: "戲劇製作演出", credit: 2 }, { name: "西洋戲劇及劇場史", credit: 3 }, { name: "兒童青少年名劇選讀", credit: 2 } ],
    "系選修": [ { name: "表演", credit: 2 }, { name: "創造性舞蹈", credit: 2 }, { name: "音樂與舞蹈", credit: 2 }, { name: "說故事劇場", credit: 2 }, { name: "肢體劇場表演", credit: 2 }, { name: "當代兒童劇場", credit: 2 }, { name: "亞洲現當代劇場", credit: 2 }, { name: "劇場與永續實務", credit: 2 }, { name: "台灣現代戲劇史", credit: 3 }, { name: "創造性戲劇", credit: 4 }, { name: "教育戲劇DIE", credit: 4 }, { name: "臺灣的戲曲傳統與創新", credit: 2 }, { name: "畢業專題實作-戲劇教育", credit: 4 }, { name: "畢業專題實作-應用劇場", credit: 4 }, { name: "畢業專題實作-劇場展演", credit: 4 } ]
  }
};

let selected = [];

window.onload = function () { load(); render(); };

function updateSecond() {
  const mainVal = document.getElementById("mainSelect").value;
  const subSelect = document.getElementById("subSelect");
  subSelect.innerHTML = '<option value="">請選擇領域</option>';
  if (!mainVal) return;
  Object.keys(data[mainVal]).forEach(cat => {
    const opt = document.createElement("option");
    opt.value = cat; opt.textContent = cat; subSelect.appendChild(opt);
  });
}

function updateCourse() {
  const mainVal = document.getElementById("mainSelect").value;
  const subVal = document.getElementById("subSelect").value;
  const courseSelect = document.getElementById("courseSelect");
  courseSelect.innerHTML = '<option value="">請選擇課程</option>';
  if (!mainVal || !subVal) return;
  data[mainVal][subVal].forEach(c => {
    const opt = document.createElement("option");
    opt.value = JSON.stringify({ ...c, category: subVal, main: mainVal });
    opt.textContent = c.name;
    courseSelect.appendChild(opt);
  });
}

function addCourse() {
  const courseVal = document.getElementById("courseSelect").value;
  if (!courseVal) return alert("請選擇課程");
  const courseObj = JSON.parse(courseVal);
  if (selected.some(item => item.name === courseObj.name)) return alert("重複加囉");
  selected.push(courseObj);
  save(); render();
}

function addCustomCourse() {
  const name = prompt("課程名稱："); if (!name) return;
  const credit = parseInt(prompt("學分：", "2"));
  const type = prompt("歸類：(1)通識 (2)專業必修 (3)專業選修 (4)自由選修", "4");
  let main = "free", category = "自由選修";
  if (type === "1") { main = "general"; category = "自定義通識"; }
  else if (type === "2") { main = "major"; category = "系必修"; }
  else if (type === "3") { main = "major"; category = "系選修"; }
  selected.push({ name, credit, main, category });
  save(); render();
}

function remove(i) { selected.splice(i, 1); save(); render(); }

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";
  let stats = { gen: 0, major: 0, free: 0, total: 0 };
  let genDomains = new Set();
  let majorElectiveScore = 0;

  selected.forEach((c, i) => {
    const li = document.createElement("li");
    li.innerHTML = `<span><small>[${c.category.substring(0,2)}]</small> ${c.name} (${c.credit})</span><button onclick="remove(${i})">刪除</button>`;
    list.appendChild(li);

    if (c.main === "general") {
      stats.gen += c.credit;
      if (c.category.includes("領域")) genDomains.add(c.category);
    } else if (c.main === "major") {
      if (c.category === "系選修") {
        majorElectiveScore += c.credit;
      } else {
        stats.major += c.credit; // 院必與系必
      }
    } else {
      stats.free += c.credit;
    }
  });

  // 計算專業選修超出的部分
  if (majorElectiveScore > 22) {
    stats.major += 22;
    stats.free += (majorElectiveScore - 22);
  } else {
    stats.major += majorElectiveScore;
  }

  stats.total = stats.gen + stats.major + stats.free;

  document.getElementById("score-gen").textContent = stats.gen;
  document.getElementById("score-major").textContent = stats.major;
  document.getElementById("score-free").textContent = stats.free;
  document.getElementById("total").textContent = stats.total;

  // 門檻檢查
  const genCheck = document.getElementById("gen-check");
  if (genDomains.size >= 3) {
    genCheck.textContent = `✅ 已跨 ${genDomains.size} 領域`;
    genCheck.style.color = "green";
  } else {
    genCheck.textContent = `❌ 還差 ${3 - genDomains.size} 領域`;
    genCheck.style.color = "red";
  }
}

function save() { localStorage.setItem("nua_data", JSON.stringify(selected)); }
function load() { const d = localStorage.getItem("nua_data"); if (d) selected = JSON.parse(d); }
