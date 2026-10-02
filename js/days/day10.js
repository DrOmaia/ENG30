window.DAYS = window.DAYS || {};
DAYS[10] = {
  day: 10, unit: 2, type: "review",
  title: "Review: Campus and daily life", titleAr: "مراجعة: الجامعة والحياة اليومية",
  goal: "I can describe my campus, give simple directions, and ask for help politely.",
  goalAr: "أستطيع أن أصف حرمي الجامعي، وأعطي توجيهات بسيطة، وأطلب المساعدة بأدب.",
  plan: { read: 4, listen: 4, speak: 4, write: 6, quiz: 5, recap: 3 },
  recap: {
    title: "Unit 2 at a glance",
    titleAr: "لمحة عن الوحدة 2",
    points: [
      { en: "Use <b>there is</b> with one thing and <b>there are</b> with many: There is a library. There are two cafeterias.",
        ar: "نستخدم there is مع المفرد وthere are مع الجمع: There is a library. There are two cafeterias. وهما تقابلان «يوجد» في العربية." },
      { en: "Prepositions of place: <b>in, on, at, next to, near, between, behind</b>. The clinic is <b>between</b> the bank and the pharmacy.",
        ar: "حروف الجر للمكان: in وon وat وnext to وnear وbetween وbehind. مثال: The clinic is between the bank and the pharmacy." },
      { en: "Imperatives give directions. Use the base verb: <b>Go straight. Turn left. Don't turn right.</b> No subject is needed.",
        ar: "فعل الأمر يُستخدم للتوجيهات، ونستخدم الفعل الأساسي دون فاعل: Go straight. Turn left. وللنهي نضيف Don't." },
      { en: "Countable nouns have a plural (book, books). Uncountable nouns do not (water, money). Say <b>some</b> in statements and <b>any</b> in negatives and questions: There isn't <b>any</b> food. Is there <b>any</b> water?",
        ar: "الأسماء المعدودة لها جمع (book, books) وغير المعدودة ليس لها جمع (water, money). نستخدم some في الجملة المثبتة وany في النفي والسؤال." },
      { en: "Ask <b>How many</b> + plural (How many students?) and <b>How much</b> + uncountable (How much water?).",
        ar: "نسأل How many مع الاسم المعدود بصيغة الجمع، وHow much مع الاسم غير المعدود." },
      { en: "<b>Can</b> + base verb, with no to and no -s: She <b>can help</b>. I <b>can't come</b>. Ask politely: <b>Can I...? Can you...?</b>",
        ar: "can + الفعل الأساسي دون to ودون -s: She can help. وللطلب المهذب: Can I...? Can you...?" }
    ]
  },
  reading: {
    title: "My campus",
    level: "A2",
    text: "My campus is small, but it is nice. There is a library next to the main gate. There are two cafeterias near the library. The registration office is behind the science building.\n\nLet me give you directions. Go straight, then turn left at the bookstore. The clinic is on your right. It is between the bank and the pharmacy.\n\nHow many students are there? There are about two thousand. The library has some computers, but there aren't any printers. There is some free water, but there isn't any food.\n\nA new student asks, \"Can you help me?\" I say, \"Yes, I can. Please follow me!\"",
    gloss: {
      campus: { en: "the land and buildings of a university", ar: "الحرم الجامعي" },
      gate: { en: "the door in a wall or fence at the entrance", ar: "بوابة" },
      cafeterias: { en: "places in a school where you buy food", ar: "كافتيريات" },
      registration: { en: "the office where students sign up for classes", ar: "التسجيل" },
      directions: { en: "words that show how to get to a place", ar: "توجيهات / اتجاهات" },
      straight: { en: "not turning left or right", ar: "إلى الأمام مباشرة" },
      bookstore: { en: "a shop that sells books", ar: "مكتبة لبيع الكتب" },
      between: { en: "in the middle of two things", ar: "بين" },
      pharmacy: { en: "a shop where you get medicine", ar: "صيدلية" },
      printers: { en: "machines that print paper", ar: "طابعات" }
    }
  },
  listening: {
    items: [
      { text: "There are three computers in the library.", hintAr: "there are مع جمع معدود." },
      { text: "The clinic is next to the pharmacy.", hintAr: "حرف الجر next to يدل على المكان." },
      { text: "Go straight and turn left.", hintAr: "توجيه بأفعال أمر." },
      { text: "Is there any water in the room?", hintAr: "سؤال بـ any مع اسم غير معدود." },
      { text: "Can you help me, please?", hintAr: "طلب مهذب بـ Can you." }
    ]
  },
  speaking: {
    script: "Welcome to my campus. There is a library next to the main gate. There are two cafeterias near it. The clinic is between the bank and the pharmacy. Go straight, then turn left. How many students are there? About two thousand. Can I help you?",
    checklist: [
      "I used there is for one thing and there are for many things.",
      "I used a place word such as next to, near or between.",
      "I gave directions with go and turn, with no subject.",
      "My question went down at the end, and Can I help you went up."
    ]
  },
  writing: {
    prompt: "Describe your campus or your neighborhood. Say what there is and where it is. Give directions from the gate to one place. Ask one question with How many or How much, and end with a polite question with Can.",
    promptAr: "صف حرمك الجامعي أو حيّك: ماذا يوجد وأين. أعطِ توجيهات من البوابة إلى مكان واحد. اطرح سؤالًا بـ How many أو How much، واختم بسؤال مهذب بـ Can.",
    targetWords: 60,
    checklist: [
      "I used there is and there are correctly.",
      "I used at least two prepositions of place.",
      "I gave directions with imperatives, such as Go straight and Turn left.",
      "I used some or any, and one How many or How much question.",
      "I used can or can't with a base verb."
    ],
    model: "My campus is big. There is a library near the gate, and there are three cafeterias. There isn't any parking next to the library. To get to the clinic, go straight and turn right at the bank. It is between the bank and the pharmacy. How many students are there in your class? Can you tell me about your campus?",
    aiPrompt: "I am an A2 English learner. Please check my description of a campus. Correct my grammar (there is/are, prepositions of place, imperatives, some/any, how many/how much, can/can't). Show each correction and explain it in one short sentence. Here is my text: [paste your text here]"
  },
  quiz: [
    {
      q: "___ two cafeterias near the library.",
      o: ["There is", "There are", "It is", "They is"], a: 1,
      why: "Use <b>there are</b> with a plural noun: two cafeterias.",
      whyAr: "مع الجمع (two cafeterias) نستخدم there are."
    },
    {
      q: "The pharmacy is ___ the bank and the clinic.",
      o: ["in", "on", "at", "between"], a: 3,
      why: "<b>Between</b> means in the middle of two things.",
      whyAr: "كلمة between تعني «بين» شيئين."
    },
    {
      q: "Which sentence gives a direction?",
      o: ["You are going straight.", "They go left.", "Go straight and turn left.", "He is turning left."], a: 2,
      why: "Directions use an <b>imperative</b>: the base verb with no subject.",
      whyAr: "التوجيهات تستخدم فعل الأمر: الفعل الأساسي بدون فاعل."
    },
    {
      q: "There isn't ___ water in the bottle.",
      o: ["some", "any", "a", "many"], a: 1,
      why: "Use <b>any</b> in negative sentences. Water is uncountable.",
      whyAr: "نستخدم any في النفي، وكلمة water غير معدودة."
    },
    {
      q: "___ students are there in the class?",
      o: ["How much", "How", "How many", "What"], a: 2,
      why: "<b>How many</b> is for countable plural nouns, such as students.",
      whyAr: "How many للأسماء المعدودة بصيغة الجمع مثل students."
    },
    {
      q: "___ money do you need for the bus?",
      o: ["How many", "How much", "How old", "How long"], a: 1,
      why: "<b>Money</b> is uncountable, so use <b>How much</b>.",
      whyAr: "كلمة money غير معدودة، لذلك نستخدم How much."
    },
    {
      q: "Choose the correct sentence.",
      o: ["She can speak Arabic and English.", "She can speaks Arabic and English.", "She can to speak Arabic and English.", "She cans speak Arabic and English."], a: 0,
      why: "After <b>can</b>, use the base verb: no <b>to</b> and no <b>-s</b>.",
      whyAr: "بعد can نستخدم الفعل الأساسي، بدون to وبدون -s."
    },
    {
      q: "There are ___ chairs in the room.",
      o: ["any", "much", "a", "some"], a: 3,
      why: "Use <b>some</b> in a positive sentence with a plural noun.",
      whyAr: "نستخدم some في الجملة المثبتة مع الجمع."
    },
    {
      q: "Which question is the most polite?",
      o: ["Where library?", "Tell me the library.", "I want the library.", "Can you help me, please?"], a: 3,
      why: "<b>Can you...?</b> with <b>please</b> is a polite request.",
      whyAr: "Can you...? مع please صيغة طلب مهذبة."
    },
    {
      q: "The bookstore is on the left of the library, and they are side by side. Choose the best sentence.",
      o: ["The bookstore is next to the library.", "The bookstore is between the library.", "The bookstore is behind of the library.", "The bookstore is at the library on."], a: 0,
      why: "<b>Next to</b> means beside. <b>Between</b> needs two things, and <b>behind</b> needs no <b>of</b>.",
      whyAr: "next to تعني «بجانب». أما between فتحتاج شيئين، وbehind لا تأتي بعدها of."
    }
  ]
};
