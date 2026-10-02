window.DAYS = window.DAYS || {};
DAYS[30] = {
  day: 30, unit: 6, type: "final",
  title: "Final review and test",
  titleAr: "المراجعة النهائية والاختبار",
  goal: "I can show what I learned in this course by passing the final test and writing a short paragraph.",
  goalAr: "أستطيع أن أُظهر ما تعلّمته في هذه الدورة بالنجاح في الاختبار النهائي وكتابة فقرة قصيرة.",
  plan: { recap: 5, dialogue: 4, write: 10, quiz: 11 },
  recap: {
    title: "Your 30-day course in six steps",
    titleAr: "دورتك التي استمرّت 30 يومًا في ست خطوات",
    points: [
      { en: "Unit 1: use am, is and are (never leave them out), the present simple with -s for he, she and it, do and does in questions, a and the, and times with at.", ar: "الوحدة 1: استخدم am وis وare (ولا تحذفها أبدًا)، والمضارع البسيط مع -s للمفرد الغائب، وdo وdoes في الأسئلة، وa وthe، وat مع الأوقات." },
      { en: "Unit 2: use there is and there are, prepositions of place, can and can't, some and any, how much and how many, and the imperative for directions.", ar: "الوحدة 2: استخدم there is وthere are، وحروف الجر المكانية، وcan وcan't، وsome وany، وhow much وhow many، وفعل الأمر للاتجاهات." },
      { en: "Unit 3: use was and were, the past simple with -ed or an irregular form, did and the base verb in questions, and the linking words and, but, because and so.", ar: "الوحدة 3: استخدم was وwere، والماضي البسيط بـ -ed أو بصيغة شاذّة، وdid مع الفعل الأساسي في الأسئلة، وأدوات الربط and وbut وbecause وso." },
      { en: "Unit 4: use the present continuous for now and the present simple for habits, compare with -er or more, and use the -est or the most for superlatives, and use first, then and finally to organize ideas.", ar: "الوحدة 4: استخدم المضارع المستمر لما يحدث الآن والمضارع البسيط للعادات، وقارن بـ -er أو more، واستخدم -est أو the most لصيغة التفضيل، واستخدم first وthen وfinally لتنظيم الأفكار." },
      { en: "Unit 5: talk about plans with will and going to, give advice with should, use the first conditional (if + present, will + verb), and give reasons and opinions politely.", ar: "الوحدة 5: تحدّث عن الخطط بـ will وgoing to، وقدّم النصيحة بـ should، واستخدم الجملة الشرطية الأولى (if + مضارع، will + فعل)، وأعطِ الأسباب والآراء بأدب." },
      { en: "Unit 6: use the present perfect (have or has + past participle), connectors such as however, for example and in addition, a paragraph with a topic sentence, and a talk with an opening, main points and a closing.", ar: "الوحدة 6: استخدم المضارع التام (have أو has + التصريف الثالث)، وأدوات الربط مثل however وfor example وin addition، والفقرة ذات الجملة الرئيسية، والحديث الذي يتضمّن افتتاحًا ونقاطًا وخاتمة." },
      { en: "Study advice: practice a little every day, say new words aloud, write short paragraphs and check them with your checklist, review old cards often, and do not be afraid of mistakes.", ar: "نصيحة للدراسة: تدرّب قليلًا كل يوم، وانطق الكلمات الجديدة بصوت عالٍ، واكتب فقرات قصيرة وراجعها بقائمتك، وراجع البطاقات القديمة كثيرًا، ولا تخف من الأخطاء." }
    ]
  },
  writing: {
    prompt: "Write a final paragraph: My English learning journey and my next goals. Say what was difficult for you before and what you can do now. Use the present perfect once, at least two connectors (however, for example, in addition), and end with your next goals.",
    promptAr: "اكتب فقرة ختامية بعنوان: رحلتي في تعلّم الإنجليزية وأهدافي القادمة. اذكر ما كان صعبًا عليك سابقًا وما تستطيع فعله الآن. استخدم المضارع التام مرة واحدة، وأداتَي ربط على الأقل (however أو for example أو in addition)، وأنهِ الفقرة بأهدافك القادمة.",
    targetWords: 120,
    checklist: [
      "My first sentence is a clear topic sentence.",
      "I used the present perfect once, for example I have learned.",
      "I used at least two connectors such as however, for example or in addition.",
      "I ended with my next goals, using will or going to."
    ],
    model: "My English learning journey has been exciting. Thirty days ago, I knew only a few simple sentences about myself. Now I can tell a short story, give directions and write a paragraph. For example, I have learned to use the past simple and to give my opinion politely. However, my listening is still slow, and I make mistakes with some verbs. In addition, I sometimes feel nervous when I speak. My next goals are clear. I am going to review my cards every day, and I will practice speaking with a friend every week. In three months, I will give a short talk in English.",
    aiPrompt: "I am learning English at level B1. Please check my final paragraph about my English learning journey and my next goals. Correct the grammar, check the connectors and the present perfect, explain each mistake in simple words, and show me a better version. My text: [paste your text here]"
  },
  dialogue: {
    "title": "Thirty days later",
    "titleAr": "بعد ثلاثين يومًا",
    "setting": "Three students talk about their progress and their next steps.",
    "settingAr": "ثلاثة طلاب يتحدثون عن تقدّمهم وعن خطواتهم القادمة.",
    "lines": [
      {
        "speaker": "Sara",
        "text": "We've finished thirty days. How do you feel now?"
      },
      {
        "speaker": "Omar",
        "text": "Better than before. Last month I could not write a full paragraph."
      },
      {
        "speaker": "Huda",
        "text": "I've learned many academic words, so now I read much faster."
      },
      {
        "speaker": "Sara",
        "text": "That is real progress. What are you going to do next?"
      },
      {
        "speaker": "Omar",
        "text": "I'm going to give a short talk at the club. I've already rehearsed it twice."
      },
      {
        "speaker": "Huda",
        "text": "If you practice every week, your English will improve quickly."
      },
      {
        "speaker": "Sara",
        "text": "I agree. In my opinion, speaking is harder than reading."
      },
      {
        "speaker": "Omar",
        "text": "Yes, but it is the most useful skill for work."
      },
      {
        "speaker": "Huda",
        "text": "Let's meet on Sunday. We'll review the final unit together."
      },
      {
        "speaker": "Sara",
        "text": "Perfect. I'll bring my notes and my vocabulary cards."
      }
    ],
    "gloss": {
      "paragraph": {
        "en": "a group of sentences about one idea",
        "ar": "فقرة"
      },
      "academic": {
        "en": "connected with study at a college",
        "ar": "أكاديمي"
      },
      "progress": {
        "en": "movement forward, improvement",
        "ar": "تقدّم"
      },
      "rehearsed": {
        "en": "practiced a talk before the real time",
        "ar": "تدرّب / تمرّن"
      },
      "improve": {
        "en": "to become better",
        "ar": "يتحسّن"
      },
      "opinion": {
        "en": "what a person thinks about something",
        "ar": "رأي"
      },
      "skill": {
        "en": "something you can do well after practice",
        "ar": "مهارة"
      },
      "vocabulary": {
        "en": "the words of a language",
        "ar": "مفردات"
      }
    },
    "questions": [
      {
        "q": "What is Omar going to do at the club?",
        "o": [
          "Read a long article",
          "Teach a new unit",
          "Review his notes",
          "Give a short talk"
        ],
        "a": 3,
        "why": "He says <b>I'm going to give a short talk at the club</b>.",
        "whyAr": "يقول إنه سيقدّم عرضًا قصيرًا في النادي."
      },
      {
        "q": "Why does Huda think weekly practice is important?",
        "o": [
          "Because regular practice improves English quickly",
          "Because the course is only thirty days",
          "Because reading is harder than speaking",
          "Because the club meets on Sunday"
        ],
        "a": 0,
        "why": "She says <b>If you practice every week, your English will improve quickly</b>.",
        "whyAr": "تقول إن التدرّب كل أسبوع يُحسّن الإنجليزية بسرعة."
      },
      {
        "q": "<i>We've finished thirty days.</i> Which tense is this?",
        "o": [
          "past simple",
          "present perfect",
          "present continuous",
          "future with will"
        ],
        "a": 1,
        "why": "<b>Have</b> or <b>has</b> plus the past participle is the present perfect.",
        "whyAr": "تركيب have أو has مع التصريف الثالث هو المضارع التام."
      }
    ],
    "roleplay": {
      "prompt": "Practice the dialogue in groups of three. Say what you have learned and what you will do next.",
      "promptAr": "تدرّبوا على الحوار في مجموعات من ثلاثة، واذكروا ما تعلمتموه وما ستفعلونه بعد ذلك."
    }
  },
  quiz: [
    {
      q: "Omar ___ a student at the university.",
      o: ["am", "are", "is", "be"],
      a: 2,
      why: "Use <b>is</b> with he, she, it and one person. Never leave out the verb to be.",
      whyAr: "نستخدم <b>is</b> مع he وshe وit والمفرد. ولا نحذف فعل الكينونة أبدًا."
    },
    {
      q: "My brother usually ___ to bed early.",
      o: ["goes", "go", "going", "is go"],
      a: 0,
      why: "With he, she and it, add <b>-s</b> or <b>-es</b>: <i>go</i> becomes <i>goes</i>.",
      whyAr: "مع he وshe وit نضيف <b>-s</b> أو <b>-es</b>: <i>go</i> تصبح <i>goes</i>."
    },
    {
      q: "___ she live near the campus?",
      o: ["Do", "Is", "Are", "Does"],
      a: 3,
      why: "Use <b>does</b> with she in present simple questions, then the base verb <i>live</i>.",
      whyAr: "نستخدم <b>does</b> مع she في أسئلة المضارع البسيط، ثم الفعل الأساسي <i>live</i>."
    },
    {
      q: "The lecture starts ___ nine thirty.",
      o: ["in", "at", "on", "by"],
      a: 1,
      why: "Use <b>at</b> with clock times: <i>at nine thirty</i>.",
      whyAr: "نستخدم <b>at</b> مع أوقات الساعة: <i>at nine thirty</i>."
    },
    {
      q: "There ___ three labs in the new building.",
      o: ["is", "be", "are", "has"],
      a: 2,
      why: "Use <b>there are</b> with plural nouns such as labs.",
      whyAr: "نستخدم <b>there are</b> مع الأسماء الجمع مثل labs."
    },
    {
      q: "How ___ is the rice? It is 12 riyals.",
      o: ["many", "much", "far", "old"],
      a: 1,
      why: "<b>How much</b> asks about price. <i>How many</i> asks about the number of countable things.",
      whyAr: "السؤال بـ <b>How much</b> يكون عن السعر. أمّا <i>How many</i> فعن عدد الأشياء المعدودة."
    },
    {
      q: "Go straight, then ___ left at the gate.",
      o: ["turning", "turns", "to turn", "turn"],
      a: 3,
      why: "Directions use the imperative, which is the base verb: <b>turn</b>.",
      whyAr: "تُعطى الاتجاهات بفعل الأمر، وهو الفعل الأساسي: <b>turn</b>."
    },
    {
      q: "There isn't ___ bread at home.",
      o: ["any", "some", "a", "many"],
      a: 0,
      why: "Use <b>any</b> in negative sentences. Bread is uncountable, so we do not use <i>a</i> or <i>many</i>.",
      whyAr: "نستخدم <b>any</b> في الجمل المنفية. والخبز اسم غير معدود، فلا نستخدم <i>a</i> أو <i>many</i>."
    },
    {
      q: "She wanted to study abroad, so she ___ for a scholarship.",
      o: ["borrowed", "applied", "forgot", "canceled"],
      a: 1,
      why: "We <b>apply for</b> a scholarship. The other verbs do not fit the meaning.",
      whyAr: "نقول <b>apply for</b> منحة دراسية. أمّا الأفعال الأخرى فلا تناسب المعنى."
    },
    {
      q: "Did you ___ the exam last year?",
      o: ["passed", "passes", "passing", "pass"],
      a: 3,
      why: "After <b>did</b>, use the base verb: <b>pass</b>.",
      whyAr: "بعد <b>did</b> نستخدم الفعل الأساسي: <b>pass</b>."
    },
    {
      q: "I stayed home ___ it was cold.",
      o: ["because", "so", "but", "and"],
      a: 0,
      why: "<b>Because</b> gives the reason. <b>So</b> gives the result.",
      whyAr: "كلمة <b>because</b> تعطي السبب، أمّا <b>so</b> فتعطي النتيجة."
    },
    {
      q: "It was cold, ___ I stayed home.",
      o: ["because", "but", "so", "or"],
      a: 2,
      why: "<b>So</b> shows the result of the cold weather. Put a comma before it.",
      whyAr: "كلمة <b>so</b> تُظهر نتيجة البرد. ونضع فاصلة قبلها."
    },
    {
      q: "Right now, she ___ to a lecture.",
      o: ["listens", "listen", "listened", "is listening"],
      a: 3,
      why: "<b>Right now</b> needs the present continuous: <b>is listening</b>.",
      whyAr: "عبارة <b>right now</b> تحتاج إلى المضارع المستمر: <b>is listening</b>."
    },
    {
      q: "This bag is ___ than that one.",
      o: ["more cheap", "cheaper", "cheapest", "the cheaper"],
      a: 1,
      why: "Add <b>-er</b> to short adjectives to compare two things: <i>cheaper than</i>.",
      whyAr: "نضيف <b>-er</b> إلى الصفات القصيرة للمقارنة بين شيئين: <i>cheaper than</i>."
    },
    {
      q: "It is the ___ building on campus.",
      o: ["tall", "taller", "tallest", "most tall"],
      a: 2,
      why: "Use <b>the + -est</b> for the superlative of a short adjective.",
      whyAr: "نستخدم <b>the + -est</b> للتفضيل مع الصفات القصيرة."
    },
    {
      q: "___, we read the text. Then we answered the questions.",
      o: ["First", "Finally", "To sum up", "Because"],
      a: 0,
      why: "<b>First</b> starts the order of ideas. <b>Then</b> comes next.",
      whyAr: "كلمة <b>First</b> تبدأ ترتيب الأفكار، وتأتي <b>Then</b> بعدها."
    },
    {
      q: "I ___ visit my uncle tomorrow.",
      o: ["going to", "am going to", "go to", "will going to"],
      a: 1,
      why: "For a plan, use <b>am/is/are going to</b> + base verb.",
      whyAr: "للتعبير عن خطة نستخدم <b>am/is/are going to</b> + الفعل الأساسي."
    },
    {
      q: "You look tired. You ___ sleep more.",
      o: ["should", "can to", "are should", "should to"],
      a: 0,
      why: "<b>Should</b> gives advice and is followed by the base verb without <i>to</i>.",
      whyAr: "تُستخدم <b>should</b> لتقديم النصيحة، ويأتي بعدها الفعل الأساسي دون <i>to</i>."
    },
    {
      q: "If it rains tomorrow, we ___ at home.",
      o: ["stay", "stayed", "will stay", "staying"],
      a: 2,
      why: "First conditional: <b>if</b> + present simple, then <b>will</b> + base verb.",
      whyAr: "الجملة الشرطية الأولى: <b>if</b> + مضارع بسيط، ثم <b>will</b> + الفعل الأساسي."
    },
    {
      q: "A: I think the exam is too long. Which answer disagrees politely?",
      o: ["You are wrong.", "That is silly.", "No, never.", "I see your point, but I think it is fair."],
      a: 3,
      why: "A polite disagreement first accepts the idea (<b>I see your point</b>) and then gives your opinion.",
      whyAr: "يبدأ الاختلاف المهذّب بقبول الفكرة (<b>I see your point</b>) ثم يعرض رأيك."
    },
    {
      q: "She ___ already finished her homework.",
      o: ["have", "is", "has", "did"],
      a: 2,
      why: "The present perfect is <b>has</b> + past participle with she: <i>has finished</i>.",
      whyAr: "المضارع التام هو <b>has</b> + التصريف الثالث مع she: <i>has finished</i>."
    },
    {
      q: "The test was difficult. ___, most students passed.",
      o: ["However", "Because", "In addition", "For example"],
      a: 0,
      why: "<b>However</b> shows a contrast between the difficult test and the good result.",
      whyAr: "كلمة <b>However</b> تُظهر التعارض بين صعوبة الاختبار والنتيجة الجيدة."
    },
    {
      q: "She speaks English well. ___, she speaks French.",
      o: ["However", "Because", "Then", "In addition"],
      a: 3,
      why: "<b>In addition</b> adds one more similar idea.",
      whyAr: "كلمة <b>In addition</b> تضيف فكرة أخرى مشابهة."
    },
    {
      q: "Which sentence is the best topic sentence for a paragraph?",
      o: ["I studied for two hours on Monday.", "Good study habits help students succeed.", "The library closes at eight.", "My friend uses a blue notebook."],
      a: 1,
      why: "A topic sentence states the main idea of the whole paragraph. The others are small details.",
      whyAr: "تعرض الجملة الرئيسية الفكرة الأساسية للفقرة كلها. أمّا الجمل الأخرى فتفاصيل صغيرة."
    },
    {
      q: "Which sentence is the best opening for a one-minute talk?",
      o: ["Thank you, goodbye.", "Hello, everyone. Today I'd like to talk about healthy food.", "Finally, I drink water.", "Does anyone have questions?"],
      a: 1,
      why: "An opening greets the audience and names the topic. The other sentences belong later in a talk.",
      whyAr: "يحيّي الافتتاح الجمهور ويذكر الموضوع. أمّا الجمل الأخرى فمكانها لاحقًا في الحديث."
    }
  ]
};
