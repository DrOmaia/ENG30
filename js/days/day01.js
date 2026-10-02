window.DAYS = window.DAYS || {};
DAYS[1] = {
  day: 1, unit: 1, type: "lesson",
  title: "Introducing yourself",
  titleAr: "التعريف بالنفس",
  goal: "I can greet people, say my name and where I am from, and introduce a classmate.",
  goalAr: "أستطيع أن ألقي التحية، وأذكر اسمي وبلدي، وأقدّم زميلًا لي.",
  plan: { words: 3, read: 4, focus: 5, listen: 4, speak: 3, write: 5, quiz: 3 },
  words: [
    { en: "hello", pos: "interjection", ex: "Hello! My name is Omar.", ar: "مرحبًا" },
    { en: "name", pos: "noun", ex: "What is your name?", ar: "اسم" },
    { en: "student", pos: "noun", ex: "I am a student at the university.", ar: "طالب / طالبة" },
    { en: "teacher", pos: "noun", ex: "Our teacher is very kind.", ar: "معلّم / معلّمة" },
    { en: "classmate", pos: "noun", ex: "Lina is my classmate.", ar: "زميل / زميلة في الصف" },
    { en: "friend", pos: "noun", ex: "Ahmed is my friend.", ar: "صديق / صديقة" },
    { en: "from", pos: "preposition", ex: "I am from Amman.", ar: "من (بلد أو مدينة)" },
    { en: "country", pos: "noun", ex: "My country is Jordan.", ar: "بلد" },
    { en: "neighbor", pos: "noun", ex: "My neighbor is a doctor.", ar: "جار / جارة" },
    { en: "welcome", pos: "interjection", ex: "Welcome to our class!", ar: "أهلًا وسهلًا" }
  ],
  reading: {
    title: "The first day",
    level: "A2",
    text: `Today is the first day of English class. I am Omar. I am from Amman. My classroom is on the second floor.

A student sits next to me. She says, "Hello! I'm Lina." I say, "Nice to meet you." She is from Cairo. She is a nurse.

Two men are near the door. They are Ahmed and John. Ahmed is my neighbor. John is from Canada. He is not a teacher. He is my new friend.

The teacher says, "Welcome, everyone! You are classmates now." We are happy. We are ready.`,
    gloss: {
      student: { en: "a person who studies at a school or university", ar: "طالب" },
      nurse: { en: "a person who helps sick people in a hospital", ar: "ممرّضة / ممرّض" },
      neighbor: { en: "a person who lives near you", ar: "جار" },
      teacher: { en: "a person who teaches students", ar: "معلّم" },
      Welcome: { en: "a friendly word when someone arrives", ar: "أهلًا وسهلًا" },
      classmates: { en: "students in the same class", ar: "زملاء الصف" },
      friend: { en: "a person you like and know well", ar: "صديق" },
      from: { en: "shows the place where a person is born or lives", ar: "من" },
      ready: { en: "prepared; you can start now", ar: "جاهزون" }
    }
  },
  focus: {
    title: "To be: am, is, are",
    titleAr: "الفعل to be: am / is / are",
    explain: "Use <b>am</b>, <b>is</b> and <b>are</b> to say who you are, where you are from, and what you do. Each subject pronoun has its own form: <b>I am</b>, <b>you are</b>, <b>he is</b>, <b>she is</b>, <b>we are</b>, <b>they are</b>.\n\nIn speaking, we usually use short forms: <b>I'm</b>, <b>he's</b>, <b>she's</b>, <b>we're</b>, <b>you're</b>, <b>they're</b>. For the negative, add <b>not</b>: <b>I am not</b>, <b>he is not</b> (<b>he isn't</b>), <b>we are not</b> (<b>we aren't</b>).\n\nUse <b>my</b> and <b>your</b> before a noun: <b>my name</b>, <b>your friend</b>.",
    explainAr: "نستخدم am وis وare لنقول من نحن ومن أين نحن وماذا نعمل. لكل ضمير فاعل صيغة: I am، you are، he is، she is، we are، they are.\n\nفي الكلام نستخدم غالبًا الصيغ المختصرة: I'm وhe's وshe's وwe're. وللنفي نضيف not بعد الفعل: I am not، he isn't، we aren't.\n\nونستخدم my وyour قبل الاسم: my name (اسمي)، your friend (صديقك).",
    examples: [
      { en: "I am Omar. I'm from Amman.", ar: "أنا عمر. أنا من عمّان." },
      { en: "She is a nurse. She's from Cairo.", ar: "هي ممرّضة. هي من القاهرة." },
      { en: "He is not a teacher. He's a student.", ar: "هو ليس معلّمًا. هو طالب." },
      { en: "We are classmates. We're happy.", ar: "نحن زملاء في الصف. نحن سعداء." },
      { en: "Your name is Lina. My name is Omar.", ar: "اسمكِ لينا. اسمي عمر." }
    ],
    watchOut: {
      en: "In Arabic we do not use a verb for 'to be' in the present. In English you must say the verb: <b>I am a student</b>, not <i>I a student</i>. Also, do not drop <b>is</b> or <b>are</b>: say <b>She is from Cairo</b>, not <i>She from Cairo</i>.",
      ar: "في العربية لا نستخدم فعلًا للكينونة في المضارع، فنقول «أنا طالب». أما في الإنجليزية فلا بدّ من الفعل: I am a student وليس I a student. ولا تحذف is أو are: قل She is from Cairo وليس She from Cairo."
    }
  },
  listening: {
    items: [
      { text: "Hello, my name is Sara.", hintAr: "تحية وتعريف بالاسم." },
      { text: "I am from Riyadh.", hintAr: "ذكر المدينة التي أنت منها." },
      { text: "She is my classmate.", hintAr: "تقديم زميلة." },
      { text: "We are not teachers.", hintAr: "جملة منفية مع we are." },
      { text: "Nice to meet you, Ahmed.", hintAr: "عبارة تُقال عند اللقاء الأول." }
    ]
  },
  speaking: {
    script: "Hello! My name is Omar. I'm from Amman. I'm a student. This is Lina. She's my classmate. She's from Cairo. Nice to meet you!",
    checklist: [
      "I said am, is or are in every sentence.",
      "I used the short forms I'm and she's.",
      "I said the names clearly and slowly.",
      "I smiled and ended with 'Nice to meet you.'"
    ]
  },
  writing: {
    prompt: "Write a short introduction. Say your name, where you are from, and what you do. Then introduce one friend or classmate.",
    promptAr: "اكتب تعريفًا قصيرًا بنفسك: اسمك، ومن أين أنت، وماذا تعمل أو تدرس. ثم قدّم صديقًا أو زميلًا.",
    targetWords: 40,
    checklist: [
      "I used am, is or are in every sentence.",
      "I wrote my name and my country or city.",
      "I introduced one other person with he or she.",
      "I used capital letters for names and for I."
    ],
    model: "Hello! My name is Huda. I am from Muscat. I am a student, and I am in this class to learn English. This is my friend Karim. He is from Cairo. He is not a student. He is an engineer. We are neighbors. Karim is very kind.",
    aiPrompt: "I am an A2 English learner. Please check this short introduction for mistakes with am, is and are, and explain each correction simply: [paste your text here]"
  },
  quiz: [
    {
      q: "Complete: I ___ from Amman.",
      o: ["is", "am", "are", "be"],
      a: 1,
      why: "Use <b>am</b> with <b>I</b>. 'Is' is for he, she or it; 'are' is for you, we and they.",
      whyAr: "نستخدم am مع الضمير I فقط. أما is فمع he وshe وit، وare مع you وwe وthey."
    },
    {
      q: "Choose the correct sentence.",
      o: ["She from Cairo.", "She are from Cairo.", "She is from Cairo.", "She am from Cairo."],
      a: 2,
      why: "English needs the verb <b>is</b> after <b>she</b>. We cannot leave out 'to be' as in Arabic.",
      whyAr: "الإنجليزية تحتاج الفعل is بعد she، ولا يجوز حذفه كما في العربية."
    },
    {
      q: "Complete: We ___ classmates.",
      o: ["are", "am", "is", "be"],
      a: 0,
      why: "Use <b>are</b> with <b>we</b>, <b>you</b> and <b>they</b>.",
      whyAr: "نستخدم are مع we وyou وthey."
    },
    {
      q: "What is the negative of 'He is a teacher'?",
      o: ["He not is a teacher.", "He is not a teacher.", "He no is a teacher.", "He does not a teacher."],
      a: 1,
      why: "Put <b>not</b> after <b>is</b>: <b>He is not</b> (or <b>He isn't</b>) a teacher.",
      whyAr: "نضع not بعد is: He is not a teacher، أو بالاختصار He isn't."
    },
    {
      q: "Which short form means 'we are'?",
      o: ["we's", "wer", "we're", "we'm"],
      a: 2,
      why: "<b>We're</b> = we + are. The apostrophe replaces the letter <b>a</b>.",
      whyAr: "We're = we + are. وتحلّ الفاصلة العليا محل الحرف a."
    }
  ]
};
