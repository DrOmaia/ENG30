window.DAYS = window.DAYS || {};
DAYS[3] = {
  day: 3, unit: 1, type: "lesson",
  title: "Asking questions",
  titleAr: "طرح الأسئلة",
  goal: "I can ask and answer simple questions with do, does and question words.",
  goalAr: "أستطيع أن أطرح أسئلة بسيطة بـ do وdoes وكلمات الاستفهام وأجيب عنها.",
  plan: { words: 3, read: 4, focus: 6, listen: 4, speak: 3, write: 5, quiz: 3 },
  words: [
    { en: "question", pos: "noun", ex: "I have a question about the exam.", ar: "سؤال" },
    { en: "answer", pos: "noun", ex: "Your answer is correct.", ar: "إجابة" },
    { en: "ask", pos: "verb", ex: "Please ask your teacher.", ar: "يسأل" },
    { en: "language", pos: "noun", ex: "English is my second language.", ar: "لغة" },
    { en: "bookstore", pos: "noun", ex: "The bookstore is open on Saturday.", ar: "مكتبة لبيع الكتب" },
    { en: "dictionary", pos: "noun", ex: "I use a dictionary for new words.", ar: "قاموس" },
    { en: "lecture", pos: "noun", ex: "The lecture is in room 5.", ar: "محاضرة" },
    { en: "campus", pos: "noun", ex: "The campus is big and green.", ar: "الحرم الجامعي" },
    { en: "university", pos: "noun", ex: "My sister studies at a university in Dubai.", ar: "جامعة" },
    { en: "cafe", pos: "noun", ex: "We drink tea in the cafe.", ar: "مقهى" }
  ],
  reading: {
    title: "A new student",
    level: "A2",
    text: `Sara is new at the university. She has many questions, so she asks Mr. Khalid.

"Where is the bookstore?" she asks. "It is next to the cafe," he answers. "What time does it open?" she asks. He says, "At 8:00."

"Do you have a dictionary?" asks Mr. Khalid. "No, I don't," says Sara. "But my phone has one." He smiles. "Does your friend study here too?" "Yes, she does. She studies a new language, French."

Mr. Khalid says, "Good questions! Come to my lecture on Monday. It starts at 10:00." Sara says thank you. Now she knows her campus a little better.`,
    gloss: {
      university: { en: "a place where adults study after school", ar: "جامعة" },
      questions: { en: "things you ask to get information", ar: "أسئلة" },
      asks: { en: "says a question to get an answer", ar: "يسأل" },
      bookstore: { en: "a shop that sells books", ar: "مكتبة لبيع الكتب" },
      cafe: { en: "a small place where you drink tea or coffee", ar: "مقهى" },
      answers: { en: "replies to a question", ar: "يجيب" },
      dictionary: { en: "a book that explains words", ar: "قاموس" },
      language: { en: "English, Arabic or French, for example", ar: "لغة" },
      lecture: { en: "a long talk by a teacher at a university", ar: "محاضرة" },
      campus: { en: "the land and buildings of a university", ar: "الحرم الجامعي" }
    }
  },
  focus: {
    title: "Questions with do and does",
    titleAr: "الأسئلة بـ do وdoes",
    explain: "For a <b>yes/no question</b> in the present simple, put <b>Do</b> or <b>Does</b> first, then the subject, then the base verb: <b>Do you study at night?</b> <b>Does she live here?</b> Use <b>Does</b> with he, she and it, and do not add -s to the verb.\n\nFor a <b>short answer</b>, use do or does: <b>Yes, I do.</b> <b>No, she doesn't.</b> Do not repeat the main verb.\n\nFor <b>wh-questions</b>, put the question word first, then do or does: <b>What</b> do you study? <b>Where</b> does he live? <b>When</b> do they eat? <b>Who</b> do you meet? <b>Why</b> do you study English? <b>How</b> do you get to class? <b>What time</b> does class start?\n\nThe word order is: question word + do/does + subject + base verb.",
    explainAr: "في السؤال بنعم أو لا بالمضارع البسيط نضع Do أو Does أولًا، ثم الفاعل، ثم الفعل الأساسي: Do you study at night? Does she live here? نستخدم Does مع he وshe وit ولا نضيف -s إلى الفعل.\n\nللإجابة القصيرة نستخدم do أو does: Yes, I do. No, she doesn't. ولا نكرر الفعل الأساسي.\n\nفي الأسئلة بكلمات الاستفهام نضع الكلمة أولًا ثم do أو does: What do you study? Where does he live? When do they eat? Who do you meet? Why do you study English? How do you get to class? What time does class start?\n\nالترتيب: كلمة السؤال + do/does + الفاعل + الفعل الأساسي.",
    examples: [
      { en: "Do you like English? Yes, I do.", ar: "هل تحب الإنجليزية؟ نعم، أحبها." },
      { en: "Does he study here? No, he doesn't.", ar: "هل يدرس هنا؟ لا، لا يدرس هنا." },
      { en: "Where do you live? I live near the campus.", ar: "أين تسكن؟ أسكن قرب الحرم الجامعي." },
      { en: "What time does the lecture start?", ar: "في أي ساعة تبدأ المحاضرة؟" },
      { en: "Why do they study at night? Because it is quiet.", ar: "لماذا يدرسون في الليل؟ لأن الجو هادئ." }
    ],
    watchOut: {
      en: "In Arabic we ask with a rising voice or with a question word, and we do not need a helper verb. In English you must add <b>do</b> or <b>does</b>: <b>Do you work here?</b>, not <i>You work here?</i> and not <i>Where you live?</i>. After <b>does</b>, the verb stays simple: <b>Does she live here?</b>, not <i>Does she lives here?</i>.",
      ar: "في العربية نسأل بنبرة الصوت أو بكلمة «هل» ولا نحتاج فعلًا مساعدًا. أما في الإنجليزية فلا بدّ من do أو does: Do you work here? وليس You work here? ولا Where you live?. وبعد does يبقى الفعل بدون s: Does she live here? وليس Does she lives here?"
    }
  },
  listening: {
    items: [
      { text: "Do you have a dictionary?", hintAr: "سؤال بنعم أو لا مع do." },
      { text: "Where does she study?", hintAr: "سؤال بكلمة where مع does." },
      { text: "What time does the lecture start?", hintAr: "سؤال عن الوقت." },
      { text: "No, I don't.", hintAr: "إجابة قصيرة منفية." },
      { text: "Why do you study English?", hintAr: "سؤال عن السبب بكلمة why." }
    ]
  },
  speaking: {
    script: "Hello! Do you study English? Yes, I do. Where do you study? I study at the university. What time does your lecture start? It starts at 10:00. Does your friend study here too? No, she doesn't.",
    checklist: [
      "My yes/no questions went up at the end.",
      "My wh-questions went down at the end.",
      "I said do or does in every question.",
      "I gave short answers with do or doesn't."
    ]
  },
  writing: {
    prompt: "Write six questions for a new classmate. Use at least two yes/no questions and two wh-questions. Then write short answers to two of them.",
    promptAr: "اكتب ستة أسئلة لزميل جديد. استخدم سؤالين على الأقل بنعم أو لا وسؤالين بكلمات الاستفهام. ثم اكتب إجابات قصيرة عن سؤالين منها.",
    targetWords: 50,
    checklist: [
      "I used Do or Does at the start of my yes/no questions.",
      "I wrote the word order: question word, do/does, subject, verb.",
      "I did not add -s to the verb after does.",
      "I used a question mark at the end of every question."
    ],
    model: "Do you live near the campus? Yes, I do. Where do you study? What time does your first lecture start? Does your friend study here too? No, she doesn't. Why do you study English? How do you get to the university?",
    aiPrompt: "I am an A2 English learner. Please check these questions for mistakes with do, does and word order, and explain each correction simply: [paste your questions here]"
  },
  quiz: [
    {
      q: "___ your sister study here?",
      o: ["Do", "Does", "Is", "Are"],
      a: 1,
      why: "Use <b>Does</b> with he, she, it and one person: <b>Does your sister study here?</b>",
      whyAr: "مع المفرد الغائب (your sister = she) نبدأ السؤال بـ Does."
    },
    {
      q: "Choose the correct question.",
      o: ["Where you live?", "Where lives you?", "Where does you live?", "Where do you live?"],
      a: 3,
      why: "The order is question word + <b>do</b> + subject + base verb: <b>Where do you live?</b>",
      whyAr: "الترتيب: كلمة السؤال + do + الفاعل + الفعل الأساسي."
    },
    {
      q: "Does he work on Friday? No, ___.",
      o: ["he doesn't", "he don't", "he isn't", "he not"],
      a: 0,
      why: "Answer with the same helper verb: <b>No, he doesn't.</b>",
      whyAr: "نجيب بالفعل المساعد نفسه: No, he doesn't."
    },
    {
      q: "___ is the class? At 10:30.",
      o: ["Where", "Who", "What time", "Why"],
      a: 2,
      why: "The answer is a time, so ask <b>What time</b> is the class?",
      whyAr: "الجواب وقت، لذلك نسأل بـ What time."
    },
    {
      q: "Do they speak French? Yes, ___.",
      o: ["they speak", "they does", "they are", "they do"],
      a: 3,
      why: "A short answer uses <b>do</b>: <b>Yes, they do.</b> Do not repeat the main verb.",
      whyAr: "الإجابة القصيرة تستخدم do: Yes, they do. ولا نكرر الفعل الأساسي."
    }
  ]
};
