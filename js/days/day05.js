window.DAYS = window.DAYS || {};
DAYS[5] = {
  day: 5, unit: 1, type: "review",
  title: "Review: Starting to study", titleAr: "مراجعة: بداية الدراسة",
  goal: "I can introduce myself, talk about my study routine, and ask and answer simple questions.",
  goalAr: "أستطيع أن أعرّف بنفسي، وأتحدث عن روتين دراستي، وأطرح أسئلة بسيطة وأجيب عنها.",
  plan: { read: 4, listen: 4, speak: 4, write: 6, quiz: 5, recap: 3 },
  recap: {
    title: "Unit 1 at a glance",
    titleAr: "لمحة عن الوحدة 1",
    points: [
      { en: "Use am, is, are. Never leave them out: <b>I am</b> a student. <b>She is</b> kind. <b>They are</b> late.",
        ar: "استخدم am وis وare ولا تحذفها، فالجملة الإنجليزية تحتاج فعلًا دائمًا: I am a student. She is kind." },
      { en: "Present simple is for routines. Add -s or -es after he, she and it: I study, <b>she studies</b>.",
        ar: "المضارع البسيط للعادات والروتين. أضف -s أو -es بعد he وshe وit: I study، she studies." },
      { en: "Make a negative with don't or doesn't plus the base verb: I <b>don't</b> work. He <b>doesn't</b> work.",
        ar: "للنفي استخدم don't أو doesn't مع الفعل في صورته الأساسية بدون -s: He doesn't work (وليس doesn't works)." },
      { en: "Questions: <b>Do</b> you study at night? <b>Does</b> she live here? With wh-words: What time does class start?",
        ar: "في الأسئلة ضع Do أو Does قبل الفاعل، وبعد كلمة السؤال (what, where, when, what time) يأتي do أو does: Where do you live?" },
      { en: "Use <b>a</b> before a consonant sound and <b>an</b> before a vowel sound: a book, an apple, an hour (the h is silent). Use <b>the</b> for a known thing: the teacher.",
        ar: "استخدم a قبل صوت ساكن (consonant) وan قبل صوت صائت (vowel): a book, an apple, an hour (حرف h لا يُنطق). واستخدم the لشيء معروف للطرفين: the teacher." },
      { en: "Say times with at: at 9:30 (nine thirty), at a quarter past seven, at half past four. Say numbers clearly: 13 or 30?",
        ar: "قل الوقت مع at: at 9:30، وa quarter past seven تعني 7:15، وhalf past four تعني 4:30. انتبه للفرق بين 13 وهو thirteen و30 وهو thirty." }
    ]
  },
  reading: {
    title: "Lina's week",
    level: "A2",
    text: "My name is Lina. I am a student at a language center. My week is busy, but I like it.\n\nI study English on Mondays, Wednesdays and Thursdays. My class starts at 9:30 and finishes at 12:00. My teacher is Mr. Adams. He is kind and he speaks slowly.\n\nAfter class, I eat lunch with my friend Sara. She studies science. She has a different schedule. We don't have class together, but we meet at the library on Friday. The library opens at 8:00 and closes at 6:00.\n\nIn the evening, I do my homework. I don't watch TV before I finish. Do I like my routine? Yes, I do! What about you?",
    gloss: {
      busy: { en: "having a lot to do", ar: "مشغول" },
      finishes: { en: "ends", ar: "ينتهي" },
      kind: { en: "nice and friendly to people", ar: "لطيف" },
      slowly: { en: "not fast", ar: "ببطء" },
      lunch: { en: "the meal in the middle of the day", ar: "وجبة الغداء" },
      schedule: { en: "a plan of days and times", ar: "جدول" },
      library: { en: "a place with books to read and borrow", ar: "مكتبة" },
      homework: { en: "school work you do at home", ar: "واجب منزلي" },
      routine: { en: "the things you do every day or week", ar: "روتين" }
    }
  },
  listening: {
    items: [
      { text: "I am a student at the university.", hintAr: "جملة بفعل to be مع المهنة." },
      { text: "She studies English every morning.", hintAr: "انتبه إلى -ies مع she." },
      { text: "We don't have class on Friday.", hintAr: "نفي المضارع البسيط." },
      { text: "What time does the library open?", hintAr: "سؤال بكلمة what time وdoes." },
      { text: "Class starts at a quarter past nine.", hintAr: "الوقت: 9:15. اكتب الأرقام بالحروف." }
    ]
  },
  speaking: {
    script: "Hello! My name is Omar. I am a student, and I am from Jordan. I study English at a language center. My class starts at 10:00 and finishes at 12:30. I don't study on Friday. Do you study at night? What time does your class start?",
    checklist: [
      "I said am, is or are in every sentence about who I am.",
      "I said the -s in starts and finishes.",
      "I used don't or doesn't in my negative sentences.",
      "My yes/no question went up at the end; my what-time question went down.",
      "I said the times slowly: 10:00, 12:30."
    ]
  },
  writing: {
    prompt: "Write about your study week. Say who you are, what you study, what days and times you study, and one thing you don't do. End with one question for a friend.",
    promptAr: "اكتب عن أسبوعك الدراسي: من أنت، وماذا تدرس، وفي أي أيام وساعات، وشيئًا واحدًا لا تفعله. اختم بسؤال لصديق.",
    targetWords: 60,
    checklist: [
      "Every sentence has a verb (am, is, are or an action verb).",
      "I used study or studies correctly with I, he and she.",
      "I wrote at least one negative sentence with don't or doesn't.",
      "I wrote at least two times with at, such as at 8:30.",
      "I ended with a question using do, does or a wh-word."
    ],
    model: "My name is Hana. I am a student at a city college. I study biology on Sundays, Tuesdays and Wednesdays. My first class starts at 8:30, and it finishes at 10:00. My friend Noor studies art. She has a different schedule. I don't study on Thursday, but I read at the library. The library opens at 9:00. What time do you start class, and do you study at night?",
    aiPrompt: "I am learning English at A2 level. Please check this paragraph about my study week. Correct my grammar (am/is/are, present simple, don't/doesn't, do/does questions, a/an/the, times). Show each correction and explain it in one short sentence. Here is my text: [paste your text here]"
  },
  quiz: [
    {
      q: "My sister ___ a nurse.",
      o: ["am", "are", "is", "be"], a: 2,
      why: "Use <b>is</b> with he, she, it and one person: My sister is a nurse.",
      whyAr: "مع المفرد الغائب (he, she, it) نستخدم is، وكلمة sister مفرد."
    },
    {
      q: "They ___ students at the same school.",
      o: ["are", "is", "am", "does"], a: 0,
      why: "Use <b>are</b> with they, we and you.",
      whyAr: "مع they وwe وyou نستخدم are."
    },
    {
      q: "He ___ English every day.",
      o: ["study", "studying", "studys", "studies"], a: 3,
      why: "After he, she or it, add -s. When a verb ends in consonant + y, change y to -ies: studies.",
      whyAr: "بعد he وshe وit نضيف -s، وإذا انتهى الفعل بحرف ساكن ثم y نحوّلها إلى ies: studies."
    },
    {
      q: "I ___ like coffee in the evening.",
      o: ["doesn't", "don't", "not", "am not"], a: 1,
      why: "Make a negative with <b>don't</b> + the base verb after I, you, we and they.",
      whyAr: "مع I وyou وwe وthey نستخدم don't قبل الفعل الأساسي."
    },
    {
      q: "___ she live near the university?",
      o: ["Do", "Does", "Is", "Are"], a: 1,
      why: "Use <b>Does</b> with she, he and it, and keep the main verb in its base form: live.",
      whyAr: "مع she نستخدم Does في السؤال، ويبقى الفعل الأساسي بلا -s."
    },
    {
      q: "___ does the class start? – At 9:00.",
      o: ["Where", "Who", "What", "What time"], a: 3,
      why: "The answer gives a time, so ask <b>What time</b> does the class start?",
      whyAr: "الجواب وقت، لذلك نسأل بـ What time."
    },
    {
      q: "I have ___ umbrella in my bag.",
      o: ["an", "a", "any", "some"], a: 0,
      why: "Umbrella starts with a vowel sound, so use <b>an</b>.",
      whyAr: "كلمة umbrella تبدأ بصوت صائت، لذلك نستخدم an قبلها."
    },
    {
      q: "My brother has a car. ___ car is red.",
      o: ["A", "An", "The", "Some"], a: 2,
      why: "We already know which car, so use <b>the</b>.",
      whyAr: "السيارة معروفة وسبق ذكرها، لذلك نستخدم the."
    },
    {
      q: "Which time is 7:45?",
      o: ["a quarter past seven", "a quarter to eight", "half past seven", "a quarter to seven"], a: 1,
      why: "7:45 is 15 minutes before 8:00, so we say <b>a quarter to eight</b>.",
      whyAr: "الساعة 7:45 تسبق الثامنة بربع ساعة، فنقول a quarter to eight."
    },
    {
      q: "We ___ not study on Friday.",
      o: ["do", "does", "am", "is"], a: 0,
      why: "Use <b>do</b> + not with we. Does is for he, she and it.",
      whyAr: "مع we نستخدم do not، أما does فمع he وshe وit."
    }
  ]
};
