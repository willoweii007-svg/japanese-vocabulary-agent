
const STORAGE_KEY = "japaneseGardenData";

let currentList = [];
let currentIndex = 0;
let isFlipped = false;

let savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
    learned: [],
    favorites: [],
    dailyCounts: {},
    dailyGoal: 10
};

// 取得今天的日期
function getToday() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

// 儲存學習紀錄
function saveData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

// 顯示不同頁面
function showPage(pageName) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageName).classList.remove("hidden");

    if (pageName === "records") {
        updateRecords();
    }

    if (pageName === "home") {
        updateHome();
    }
}

// 取得目前選擇的等級
function getSelectedLevel() {
    return document.getElementById("levelSelect").value;
}

// 載入指定等級的單字
function loadVocabulary() {
    const level = getSelectedLevel();

    currentList = vocabularyData.filter(word => word.level === level);

    currentIndex = 0;
    isFlipped = false;
    displayCard();
}

// 顯示單字卡
function displayCard() {
    const card = document.getElementById("cardContent");
    const progress = document.getElementById("cardProgress");

    if (currentList.length === 0) {
        card.innerHTML = `
            <h2>找不到單字 🌱</h2>
            <p>試試其他搜尋方式吧！</p>
        `;
        progress.textContent = "0 / 0";
        return;
    }

    const word = currentList[currentIndex];

    if (!isFlipped) {
        card.innerHTML = `
            <h2>${word.word}</h2>
            <p>點擊卡片翻面查看答案 ♡</p>
        `;
    } else {
        card.innerHTML = `
            <h2>${word.word}</h2>
            <p>🌸 平假名：${word.reading}</p>
            <p>💗 中文意思：${word.meaning}</p>
            <p>📝 例句：${word.example}</p>
            <p>📖 翻譯：${word.exampleMeaning}</p>
            <p>🏅 JLPT：${word.level}</p>
        `;
    }

    progress.textContent = `${currentIndex + 1} / ${currentList.length}`;
}

// 翻轉單字卡
function flipCard() {
    if (currentList.length === 0) return;

    isFlipped = !isFlipped;
    displayCard();
}

// 下一張單字
function nextCard() {
    if (currentList.length === 0) return;

    currentIndex = (currentIndex + 1) % currentList.length;
    isFlipped = false;
    displayCard();
}

// 上一張單字
function previousCard() {
    if (currentList.length === 0) return;

    currentIndex =
        (currentIndex - 1 + currentList.length) % currentList.length;

    isFlipped = false;
    displayCard();
}

// 隨機抽取單字
function randomVocabulary() {
    if (currentList.length === 0) {
        loadVocabulary();
    }

    if (currentList.length === 0) return;

    currentIndex = Math.floor(Math.random() * currentList.length);
    isFlipped = false;
    displayCard();
}

// 搜尋單字
function searchVocabulary() {
    const keyword = document
        .getElementById("searchInput")
        .value.trim()
        .toLowerCase();

    const level = getSelectedLevel();

    currentList = vocabularyData.filter(word => {
        const matchesLevel = word.level === level;

        const matchesKeyword =
            word.word.toLowerCase().includes(keyword) ||
            word.reading.toLowerCase().includes(keyword) ||
            word.meaning.toLowerCase().includes(keyword);

        return matchesLevel && matchesKeyword;
    });

    currentIndex = 0;
    isFlipped = false;
    displayCard();
}

// 標記單字為已學會
function markAsLearned() {
    if (currentList.length === 0) return;

    const word = currentList[currentIndex];

    if (!savedData.learned.includes(word.word)) {
        savedData.learned.push(word.word);

        const today = getToday();
        savedData.dailyCounts[today] =
            (savedData.dailyCounts[today] || 0) + 1;

        saveData();
        alert("太棒了！已加入學習紀錄 ♡");
    } else {
        alert("這個單字已經學會囉！🌸");
    }

    updateHome();
    updateRecords();
}

// 收藏或取消收藏單字
function toggleFavorite() {
    if (currentList.length === 0) return;

    const word = currentList[currentIndex];
    const index = savedData.favorites.indexOf(word.word);

    if (index === -1) {
        savedData.favorites.push(word.word);
        alert("已加入收藏清單 ♡");
    } else {
        savedData.favorites.splice(index, 1);
        alert("已取消收藏！");
    }

    saveData();
    updateRecords();
}

// 更新首頁統計
function updateHome() {
    const today = getToday();
    const count = savedData.dailyCounts[today] || 0;

    document.getElementById("todayCount").textContent = `${count} 個`;

    document.getElementById("dailyGoal").value =
        savedData.dailyGoal || 10;
}

// 更新學習紀錄
function updateRecords() {
    const today = getToday();
    const todayCount = savedData.dailyCounts[today] || 0;

    document.getElementById("learnedCount").textContent =
        `${savedData.learned.length} 個`;

    document.getElementById("recordTodayCount").textContent =
        `${todayCount} 個`;

    document.getElementById("favoriteCount").textContent =
        `${savedData.favorites.length} 個`;

    const favoriteList = document.getElementById("favoriteList");

    if (savedData.favorites.length === 0) {
        favoriteList.textContent = "尚未收藏任何單字。";
        return;
    }

    favoriteList.innerHTML = "";

    savedData.favorites.forEach(favorite => {
        const word = vocabularyData.find(item => item.word === favorite);

        if (word) {
            const item = document.createElement("p");
            item.textContent =
                `${word.word}（${word.reading}）－${word.meaning}`;
            favoriteList.appendChild(item);
        }
    });
}

// 儲存每日學習目標
function saveDailyGoal() {
    const goal = Number(document.getElementById("dailyGoal").value);

    if (goal >= 1) {
        savedData.dailyGoal = goal;
        saveData();
    }
}

// 網頁載入完成後執行
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("levelSelect").addEventListener(
        "change",
        loadVocabulary
    );

    document.getElementById("dailyGoal").addEventListener(
        "change",
        saveDailyGoal
    );

    loadVocabulary();
    updateHome();
    updateRecords();
});
