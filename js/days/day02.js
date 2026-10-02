window.DAYS = window.DAYS || {};
DAYS[2] = {
  day: 2, unit: 1, type: "lesson",
  title: "My study day",
  titleAr: "يومي الدراسي",
  goal: "I can talk about my daily routine and say how often I do things.",
  goalAr: "أستطيع أن أتحدث عن روتيني اليومي وأقول كم مرة أفعل الأشياء.",
  plan: { words: 3, read: 4, focus: 4, listen: 4, dialogue: 4, speak: 3, write: 5, quiz: 3 },
  words: [
    { en: "breakfast", pos: "noun", ex: "I always eat breakfast at 7:00.", ar: "وجبة الإفطار" },
    { en: "morning", pos: "noun", ex: "I study in the morning.", ar: "الصباح" },
    { en: "evening", pos: "noun", ex: "My family eats dinner in the evening.", ar: "المساء" },
    { en: "lesson", pos: "noun", ex: "We have one lesson on Tuesday.", ar: "درس / حصة" },
    { en: "notebook", pos: "noun", ex: "She writes new words in her notebook.", ar: "دفتر" },
    { en: "bus", pos: "noun", ex: "I take the bus to class.", ar: "حافلة" },
    { en: "early", pos: "adverb", ex: "My brother wakes up early.", ar: "مبكرًا" },
    { en: "usually", pos: "adverb", ex: "I usually study after dinner.", ar: "عادةً" },
    { en: "sometimes", pos: "adverb", ex: "Sometimes we walk to school.", ar: "أحيانًا" },
    { en: "never", pos: "adverb", ex: "He never drinks coffee at night.", ar: "أبدًا" },
    { en: "alarm", pos: "noun", ex: "My alarm rings at five thirty.", ar: "منبّه" },
    { en: "routine", pos: "noun", ex: "A simple routine helps me study.", ar: "روتين" }
  ],
  reading: {
    title: "Huda's day",
    level: "A2",
    text: `My name is Huda. I am a student, and I study every day.

I wake up at 6:30. I always eat breakfast with my family. Then I take the bus to the university. The bus is usually late, so I leave early.

I have three lessons in the morning. At noon, my friend Rami and I eat lunch. He never drinks coffee. He drinks tea.

In the evening, I sometimes study at the library. I always write new words in my notebook. At night, I read for twenty minutes. Then I go to bed. I don't watch TV on school nights.`,
    gloss: {
      breakfast: { en: "the first meal of the day", ar: "الإفطار" },
      bus: { en: "a big vehicle that carries many people", ar: "حافلة" },
      usually: { en: "most of the time", ar: "عادةً" },
      early: { en: "before the normal time", ar: "مبكرًا" },
      lessons: { en: "classes where you learn something", ar: "دروس / حصص" },
      morning: { en: "the first part of the day", ar: "الصباح" },
      never: { en: "not at any time", ar: "أبدًا" },
      evening: { en: "the part of the day before night", ar: "المساء" },
      sometimes: { en: "not always; on some days", ar: "أحيانًا" },
      notebook: { en: "a small book for writing notes", ar: "دفتر" }
    }
  },
  focus: {
    title: "Present simple and how often",
    titleAr: "المضارع البسيط وعدد المرات",
    explain: "Use the <b>present simple</b> for habits and routines. With <b>I, you, we, they</b>, use the base verb: <b>I study</b>, <b>they walk</b>. With <b>he, she, it</b>, add <b>-s</b>: <b>he studies</b>, <b>she walks</b>. Add <b>-es</b> after -s, -sh, -ch, -x and -o: <b>watches</b>, <b>goes</b>. A verb with a consonant + y changes to <b>-ies</b>: study, <b>studies</b>. The verb have becomes <b>has</b>.\n\nFor the negative, use <b>don't</b> (I, you, we, they) or <b>doesn't</b> (he, she, it) and the base verb: <b>I don't study</b>, <b>he doesn't study</b>. Do not add -s after doesn't.\n\nAdverbs of frequency tell us how often: <b>always</b> (100%), <b>usually</b>, <b>sometimes</b>, <b>never</b> (0%). They go <b>before</b> the main verb: <b>I always eat breakfast</b>. They go <b>after</b> to be: <b>She is never late</b>.",
    explainAr: "نستخدم المضارع البسيط للعادات والروتين. مع I وyou وwe وthey نستخدم الفعل الأساسي: I study. ومع he وshe وit نضيف -s: he studies. ونضيف -es بعد الأفعال المنتهية بـ s وsh وch وx وo: watches, goes. وإذا انتهى الفعل بحرف ساكن + y نحوّلها إلى ies: studies. والفعل have يصبح has.\n\nللنفي نستخدم don't مع I وyou وwe وthey، وdoesn't مع he وshe وit، ثم الفعل الأساسي: he doesn't study. ولا نضيف -s بعد doesn't.\n\nظروف التكرار تبيّن عدد المرات: always (دائمًا)، usually (عادةً)، sometimes (أحيانًا)، never (أبدًا). وتأتي قبل الفعل الأساسي: I always eat breakfast. وبعد فعل to be: She is never late.",
    examples: [
      { en: "I study at night. She studies in the morning.", ar: "أنا أدرس في الليل. هي تدرس في الصباح." },
      { en: "He watches TV, but he doesn't watch it on Sunday.", ar: "هو يشاهد التلفاز، لكنه لا يشاهده يوم الأحد." },
      { en: "We always take the bus. They never walk.", ar: "نحن نركب الحافلة دائمًا. وهم لا يمشون أبدًا." },
      { en: "My brother usually goes to bed early.", ar: "أخي ينام عادةً مبكرًا." },
      { en: "She is sometimes late, and he is never late.", ar: "هي أحيانًا متأخرة، وهو ليس متأخرًا أبدًا." }
    ],
    watchOut: {
      en: "Arabic verbs change for every person, but English verbs change only for he, she and it. Do not forget the <b>-s</b>: <b>she studies</b>, not <i>she study</i>. After <b>doesn't</b>, remove it: <b>he doesn't study</b>, not <i>he doesn't studies</i>. Also, put the adverb before the verb: <b>I always study</b>, not <i>I study always</i>.",
      ar: "الفعل في العربية يتغيّر مع كل ضمير، أما في الإنجليزية فيتغيّر مع he وshe وit فقط. لا تنسَ -s: she studies وليس she study. وبعد doesn't نحذف -s: he doesn't study وليس he doesn't studies. وضع ظرف التكرار قبل الفعل: I always study وليس I study always."
    }
  },
  listening: {
    items: [
      { text: "I usually eat breakfast at seven.", hintAr: "عادة يومية مع ظرف التكرار usually. اكتب الأرقام بالحروف." },
      { text: "She takes the bus to class.", hintAr: "انتبه إلى -s في الفعل مع she." },
      { text: "He never drinks coffee in the evening.", hintAr: "ظرف never قبل الفعل في جملة عن هو." },
      { text: "We don't have a lesson on Friday.", hintAr: "نفي المضارع البسيط مع we." },
      { text: "My sister studies in the morning.", hintAr: "الفعل study يتحول إلى studies مع المفرد الغائب." }
    ]
  },
  speaking: {
    script: "Hello! I'm Huda. I wake up at 6:30. I always eat breakfast with my family. I usually take the bus to the university. I have three lessons in the morning. My friend Rami never drinks coffee. I don't watch TV at night.",
    checklist: [
      "I said always, usually or never before the verb.",
      "I said the -s sound in drinks when I talked about Rami.",
      "I used don't in my negative sentence.",
      "I said the time 6:30 slowly and clearly."
    ]
  },
  writing: {
    prompt: "Write about your study day. Say what time you wake up, what you do in the morning and evening, and what you never do. Use at least two words like always, usually, sometimes or never.",
    promptAr: "اكتب عن يومك الدراسي: متى تستيقظ، وماذا تفعل في الصباح والمساء، وما الذي لا تفعله أبدًا. استخدم كلمتين على الأقل من always وusually وsometimes وnever.",
    targetWords: 50,
    checklist: [
      "I used the base verb with I, and added -s or -es with he or she.",
      "I used at least two adverbs of frequency before the verb.",
      "I wrote one negative sentence with don't or doesn't.",
      "I wrote at least one time, such as at 7:00."
    ],
    model: "My name is Tariq. I wake up at 7:00. I usually eat breakfast with my sister. She studies medicine, and she always leaves early. I take the bus to the university. I have two lessons in the morning. I sometimes study in the evening. I never study at night, and I don't drink coffee after dinner.",
    aiPrompt: "I am an A2 English learner. Please check this text about my daily routine. Correct the present simple (-s and -es), don't and doesn't, and the place of always, usually, sometimes and never. Explain each correction simply: [paste your text here]"
  },
  dialogue: {
    "title": "What time do you get up?",
    "titleAr": "في أي ساعة تستيقظ؟",
    "setting": "Two classmates talk about their daily routine on the way to class.",
    "settingAr": "زميلتان تتحدثان عن روتينهما اليومي في الطريق إلى الصف.",
    "lines": [
      {
        "speaker": "Lina",
        "text": "What time do you get up, Sara?"
      },
      {
        "speaker": "Sara",
        "text": "I get up at six. My alarm is very loud."
      },
      {
        "speaker": "Lina",
        "text": "Do you eat breakfast at home?"
      },
      {
        "speaker": "Sara",
        "text": "Yes, I usually eat at home. I rarely skip it."
      },
      {
        "speaker": "Lina",
        "text": "How do you get to class?"
      },
      {
        "speaker": "Sara",
        "text": "I take the bus. It takes thirty minutes."
      },
      {
        "speaker": "Lina",
        "text": "Is your routine the same every day?"
      },
      {
        "speaker": "Sara",
        "text": "No. On Thursday I study in the library."
      }
    ],
    "gloss": {
      "alarm": {
        "en": "a clock that makes a sound to wake you",
        "ar": "منبّه"
      },
      "breakfast": {
        "en": "the first meal of the day",
        "ar": "فطور"
      },
      "usually": {
        "en": "most days, almost always",
        "ar": "عادةً"
      },
      "rarely": {
        "en": "almost never",
        "ar": "نادرًا"
      },
      "bus": {
        "en": "a big vehicle for many people",
        "ar": "حافلة"
      },
      "routine": {
        "en": "the things you do every day in the same order",
        "ar": "روتين"
      }
    },
    "questions": [
      {
        "q": "What time does Sara get up?",
        "o": [
          "At seven",
          "At eight",
          "At nine",
          "At six"
        ],
        "a": 3,
        "why": "Sara says <b>I get up at six</b>.",
        "whyAr": "تقول سارة إنها تستيقظ في السادسة."
      },
      {
        "q": "Why does Sara mention Thursday?",
        "o": [
          "Because her routine is different on that day",
          "Because she has no classes that week",
          "Because she gets up late every day",
          "Because the bus is free"
        ],
        "a": 0,
        "why": "On Thursday she studies in the library, so the day is not the same.",
        "whyAr": "في يوم الخميس تدرس في المكتبة، لذلك يختلف هذا اليوم عن بقية الأيام."
      },
      {
        "q": "Which question is correct?",
        "o": [
          "You eat breakfast at home?",
          "Do you eat breakfast at home?",
          "Do you eats breakfast at home?",
          "Does you eat breakfast at home?"
        ],
        "a": 1,
        "why": "With <b>you</b> we use <b>do</b> plus the base verb: <b>Do you eat</b>?",
        "whyAr": "مع you نستخدم do ثم الفعل الأساسي: Do you eat؟"
      }
    ],
    "roleplay": {
      "prompt": "Practice the dialogue with a partner or alone. Change the times and the days.",
      "promptAr": "تدرّب على الحوار مع زميل أو وحدك، وغيّر الأوقات والأيام."
    }
  },
  quiz: [
    {
      q: "He ___ breakfast at 7:00.",
      o: ["have", "haves", "has", "having"],
      a: 2,
      why: "With <b>he</b>, <b>she</b> and <b>it</b>, the verb <b>have</b> becomes <b>has</b>.",
      whyAr: "مع he وshe وit يصبح الفعل have هو has."
    },
    {
      q: "Choose the correct sentence.",
      o: ["I go always to class.", "I am always go to class.", "I always am go to class.", "I always go to class."],
      a: 3,
      why: "An adverb of frequency goes <b>before</b> the main verb: <b>I always go</b>.",
      whyAr: "يأتي ظرف التكرار قبل الفعل الأساسي: I always go."
    },
    {
      q: "My brother ___ the bus to work.",
      o: ["takes", "take", "taking", "is take"],
      a: 0,
      why: "Add <b>-s</b> to the verb after <b>my brother</b> (he): <b>takes</b>.",
      whyAr: "my brother بمعنى he، لذلك نضيف -s إلى الفعل: takes."
    },
    {
      q: "They ___ like early classes.",
      o: ["don't", "doesn't", "isn't", "not"],
      a: 0,
      why: "Use <b>don't</b> + base verb with <b>they</b>. <b>Doesn't</b> is for he, she and it.",
      whyAr: "مع they نستخدم don't والفعل الأساسي. أما doesn't فمع he وshe وit."
    },
    {
      q: "She ___ to the library on Sundays.",
      o: ["go", "goes", "gos", "going"],
      a: 1,
      why: "Verbs that end in <b>-o</b> take <b>-es</b> after he, she and it: <b>goes</b>.",
      whyAr: "الأفعال المنتهية بـ o تأخذ -es مع he وshe وit: goes."
    }
  ]
};
