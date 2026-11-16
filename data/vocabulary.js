
const vocabularyData = [
    // ===== JLPT N5 =====
    { word: "学校", reading: "がっこう", meaning: "學校", example: "毎日学校へ行きます。", exampleMeaning: "我每天去學校。", level: "N5" },
    { word: "友達", reading: "ともだち", meaning: "朋友", example: "友達と映画を見ます。", exampleMeaning: "和朋友看電影。", level: "N5" },
    { word: "食べる", reading: "たべる", meaning: "吃", example: "朝ご飯を食べます。", exampleMeaning: "吃早餐。", level: "N5" },
    { word: "飲む", reading: "のむ", meaning: "喝", example: "水を飲みます。", exampleMeaning: "喝水。", level: "N5" },
    { word: "家族", reading: "かぞく", meaning: "家人、家庭", example: "家族と住んでいます。", exampleMeaning: "和家人住在一起。", level: "N5" },
    { word: "時間", reading: "じかん", meaning: "時間", example: "今は何時ですか。", exampleMeaning: "現在幾點？", level: "N5" },
    { word: "天気", reading: "てんき", meaning: "天氣", example: "今日はいい天気です。", exampleMeaning: "今天天氣很好。", level: "N5" },
    { word: "買う", reading: "かう", meaning: "買", example: "スーパーで野菜を買います。", exampleMeaning: "在超市買蔬菜。", level: "N5" },
    { word: "大きい", reading: "おおきい", meaning: "大的", example: "大きい犬がいます。", exampleMeaning: "有一隻大狗。", level: "N5" },
    { word: "新しい", reading: "あたらしい", meaning: "新的", example: "新しい本を買いました。", exampleMeaning: "買了新書。", level: "N5" },

    // ===== JLPT N4 =====
    { word: "経験", reading: "けいけん", meaning: "經驗", example: "日本へ行った経験があります。", exampleMeaning: "我有去過日本的經驗。", level: "N4" },
    { word: "必要", reading: "ひつよう", meaning: "必要", example: "パスポートが必要です。", exampleMeaning: "需要護照。", level: "N4" },
    { word: "準備", reading: "じゅんび", meaning: "準備", example: "旅行の準備をします。", exampleMeaning: "準備旅行。", level: "N4" },
    { word: "連絡", reading: "れんらく", meaning: "聯絡", example: "後で友達に連絡します。", exampleMeaning: "等一下聯絡朋友。", level: "N4" },
    { word: "約束", reading: "やくそく", meaning: "約定、約會", example: "友達と約束があります。", exampleMeaning: "和朋友有約。", level: "N4" },
    { word: "安心", reading: "あんしん", meaning: "安心、放心", example: "無事だと聞いて安心しました。", exampleMeaning: "聽說平安無事後放心了。", level: "N4" },
    { word: "運転", reading: "うんてん", meaning: "駕駛", example: "父は車を運転します。", exampleMeaning: "爸爸開車。", level: "N4" },
    { word: "特別", reading: "とくべつ", meaning: "特別", example: "今日は特別な日です。", exampleMeaning: "今天是特別的一天。", level: "N4" },
    { word: "遅れる", reading: "おくれる", meaning: "遲到、延遲", example: "電車が遅れています。", exampleMeaning: "電車誤點了。", level: "N4" },
    { word: "続ける", reading: "つづける", meaning: "繼續", example: "日本語の勉強を続けます。", exampleMeaning: "繼續學習日文。", level: "N4" },

    // ===== JLPT N3 =====
    { word: "影響", reading: "えいきょう", meaning: "影響", example: "天気は気分に影響します。", exampleMeaning: "天氣會影響心情。", level: "N3" },
    { word: "確認", reading: "かくにん", meaning: "確認", example: "もう一度予定を確認します。", exampleMeaning: "再確認一次行程。", level: "N3" },
    { word: "努力", reading: "どりょく", meaning: "努力", example: "毎日努力することが大切です。", exampleMeaning: "每天努力是很重要的。", level: "N3" },
    { word: "原因", reading: "げんいん", meaning: "原因", example: "事故の原因を調べています。", exampleMeaning: "正在調查事故的原因。", level: "N3" },
    { word: "関係", reading: "かんけい", meaning: "關係", example: "彼とは長い関係があります。", exampleMeaning: "我和他有長久的關係。", level: "N3" },
    { word: "状況", reading: "じょうきょう", meaning: "狀況", example: "現在の状況を説明してください。", exampleMeaning: "請說明現在的狀況。", level: "N3" },
    { word: "判断", reading: "はんだん", meaning: "判斷", example: "自分で判断してください。", exampleMeaning: "請自己判斷。", level: "N3" },
    { word: "解決", reading: "かいけつ", meaning: "解決", example: "問題を解決したいです。", exampleMeaning: "我想解決問題。", level: "N3" },
    { word: "増える", reading: "ふえる", meaning: "增加", example: "外国人の観光客が増えています。", exampleMeaning: "外國觀光客正在增加。", level: "N3" },
    { word: "減らす", reading: "へらす", meaning: "減少、減少某物", example: "ごみを減らしましょう。", exampleMeaning: "讓我們減少垃圾吧。", level: "N3" },

    // ===== JLPT N2 =====
    { word: "維持", reading: "いじ", meaning: "維持", example: "健康を維持するために運動しています。", exampleMeaning: "為了維持健康而運動。", level: "N2" },
    { word: "傾向", reading: "けいこう", meaning: "傾向、趨勢", example: "最近、物価が上がる傾向にあります。", exampleMeaning: "最近物價有上漲的趨勢。", level: "N2" },
    { word: "主張", reading: "しゅちょう", meaning: "主張", example: "自分の意見を主張しました。", exampleMeaning: "提出了自己的主張。", level: "N2" },
    { word: "状態", reading: "じょうたい", meaning: "狀態", example: "機械は正常な状態です。", exampleMeaning: "機器處於正常狀態。", level: "N2" },
    { word: "責任", reading: "せきにん", meaning: "責任", example: "自分の行動に責任を持ちます。", exampleMeaning: "對自己的行為負責。", level: "N2" },
    { word: "適切", reading: "てきせつ", meaning: "適當、恰當", example: "適切な方法を選びましょう。", exampleMeaning: "選擇適當的方法吧。", level: "N2" },
    { word: "把握", reading: "はあく", meaning: "掌握、理解", example: "現状を正確に把握する必要があります。", exampleMeaning: "有必要正確掌握現狀。", level: "N2" },
    { word: "比較", reading: "ひかく", meaning: "比較", example: "二つの商品を比較しました。", exampleMeaning: "比較了兩件商品。", level: "N2" },
    { word: "防ぐ", reading: "ふせぐ", meaning: "防止、防範", example: "事故を防ぐために注意します。", exampleMeaning: "為了防止事故而提高警覺。", level: "N2" },
    { word: "認める", reading: "みとめる", meaning: "承認、認可", example: "彼の努力を認めています。", exampleMeaning: "認可他的努力。", level: "N2" },

    // ===== JLPT N1 =====
    { word: "曖昧", reading: "あいまい", meaning: "曖昧、不明確", example: "曖昧な返事は避けてください。", exampleMeaning: "請避免含糊不清的回答。", level: "N1" },
    { word: "著しい", reading: "いちじるしい", meaning: "顯著的、明顯的", example: "技術の進歩は著しいです。", exampleMeaning: "技術的進步十分顯著。", level: "N1" },
    { word: "促進", reading: "そくしん", meaning: "促進", example: "地域の発展を促進します。", exampleMeaning: "促進地方的發展。", level: "N1" },
    { word: "妥協", reading: "だきょう", meaning: "妥協", example: "簡単には妥協できません。", exampleMeaning: "不能輕易妥協。", level: "N1" },
    { word: "徹底", reading: "てってい", meaning: "徹底", example: "安全管理を徹底します。", exampleMeaning: "徹底做好安全管理。", level: "N1" },
    { word: "把握", reading: "はあく", meaning: "掌握、理解", example: "問題の本質を把握することが重要です。", exampleMeaning: "掌握問題的本質很重要。", level: "N1" },
    { word: "膨大", reading: "ぼうだい", meaning: "龐大、巨大", example: "膨大な資料を整理しました。", exampleMeaning: "整理了大量資料。", level: "N1" },
    { word: "緩和", reading: "かんわ", meaning: "緩和、緩解", example: "緊張を緩和する方法を考えます。", exampleMeaning: "思考緩解緊張的方法。", level: "N1" },
    { word: "遂げる", reading: "とげる", meaning: "完成、達成", example: "彼は大きな成功を遂げました。", exampleMeaning: "他取得了巨大的成功。", level: "N1" },
    { word: "懸念", reading: "けねん", meaning: "擔憂、顧慮", example: "将来への懸念があります。", exampleMeaning: "對未來有所擔憂。", level: "N1" }
];
