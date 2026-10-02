/* Lesson engine: loads js/days/dayNN.js and renders it as a step-by-step lesson. */
(function () {
  "use strict";
  var E = window.ENG, C = window.CURRICULUM, esc = E.esc, rich = E.rich, ar = E.ar, audio = E.speech.audioBtn;
  var root = document.getElementById("lesson");

  var STEPS = [
    { id: "words", en: "Words", ar: "الكلمات", key: "words" },
    { id: "read", en: "Reading", ar: "القراءة", key: "reading" },
    { id: "focus", en: "Language focus", ar: "القاعدة اللغوية", key: "focus" },
    { id: "recap", en: "Recap", ar: "الملخّص", key: "recap" },
    { id: "dialogue", en: "Dialogue", ar: "الحوار", key: "dialogue" },
    { id: "listen", en: "Listening", ar: "الاستماع", key: "listening" },
    { id: "speak", en: "Speaking", ar: "التحدّث", key: "speaking" },
    { id: "write", en: "Writing", ar: "الكتابة", key: "writing" },
    { id: "quiz", en: "Quiz", ar: "الاختبار", key: "quiz" }
  ];

  var n = parseInt(new URLSearchParams(location.search).get("d"), 10);
  var meta = C.days.filter(function (x) { return x.d === n; })[0];
  if (!meta) return fail("This lesson does not exist.", "هذا الدرس غير موجود.");
  if (C.ready.indexOf(n) < 0) return fail("This lesson is not available yet.", "هذا الدرس غير متاح بعد.");
  document.title = "Day " + n + ": " + meta.title + " | English in 30 Days";

  var s = document.createElement("script");
  s.src = "js/days/day" + String(n).padStart(2, "0") + ".js";
  s.onload = function () { if (window.DAYS && window.DAYS[n]) render(window.DAYS[n]); else fail("The lesson file could not be read.", "تعذّرت قراءة ملف الدرس."); };
  s.onerror = function () { fail("The lesson file could not be loaded.", "تعذّر تحميل ملف الدرس."); };
  document.head.appendChild(s);

  function fail(en, a) {
    root.innerHTML = '<div class="panel"><h1>' + esc(en) + "</h1>" + ar(a) + '<p><a class="btn btn-primary" href="index.html">Back to the course map</a></p></div>';
  }

  // ---------- render ----------
  function render(D) {
    var st = E.day(n);
    var steps = STEPS.filter(function (x) { return D[x.key] && (x.key !== "words" || D.words.length); });
    var unit = C.units[meta.unit - 1];
    var cur = Math.min(st.step || 0, steps.length - 1);
    var plan = D.plan || {};
    var total = Object.keys(plan).reduce(function (a, k) { return a + plan[k]; }, 0);

    root.innerHTML =
      '<div class="lesson-hero">' +
      '<div class="meta"><span class="chip">Unit ' + unit.n + " &middot; " + esc(unit.title) + '</span><span class="chip">' + esc(unit.level) + '</span><span class="chip">About ' + total + " min</span>" +
      (st.done ? '<span class="chip ok">Done</span>' : "") + "</div>" +
      "<h1>Day " + n + ": " + esc(D.title) + "</h1>" + ar(D.titleAr) +
      '<p class="goal"><b>Goal:</b> ' + rich(D.goal) + "</p>" + ar(D.goalAr) +
      '<div class="progress-wrap no-print"><div class="progress" role="progressbar" aria-label="Lesson progress" aria-valuemin="0" aria-valuemax="' + steps.length + '" aria-valuenow="0"><i style="width:0"></i></div><div class="progress-label" id="plabel"></div></div>' +
      '<ol class="stepper no-print" id="stepper"></ol></div>' +
      '<div id="steps"></div><div class="step-nav no-print"><button type="button" class="btn btn-ghost" id="back">&larr; Back <span class="ar" lang="ar" dir="rtl">السابق</span></button><button type="button" class="btn btn-primary" id="next"></button></div><div id="finish"></div>';

    var stepsEl = root.querySelector("#steps");
    steps.forEach(function (x, i) {
      var sec = document.createElement("section");
      sec.className = "step"; sec.id = "step-" + x.id; sec.setAttribute("aria-labelledby", "h-" + x.id);
      sec.innerHTML = '<h2 id="h-' + x.id + '">' + esc(x.en) + ' <span class="ar" lang="ar" dir="rtl">' + esc(x.ar) + "</span></h2>" + body(x.id, D);
      stepsEl.appendChild(sec);
    });

    var stepper = root.querySelector("#stepper");
    steps.forEach(function (x, i) {
      var li = document.createElement("li");
      li.innerHTML = '<button type="button" data-i="' + i + '">' + (i + 1) + "<small>" + esc(x.en) + "</small></button>";
      stepper.appendChild(li);
    });
    stepper.onclick = function (e) { var b = e.target.closest("button[data-i]"); if (b) go(+b.dataset.i, true); };
    root.querySelector("#back").onclick = function () { go(cur - 1, true); };
    root.querySelector("#next").onclick = function () {
      if (cur < steps.length - 1) go(cur + 1, true); else finish(D, steps);
    };

    wire(D, steps);
    go(cur, false);

    function go(i, focus) {
      if (i < 0 || i >= steps.length) return;
      cur = i; st.step = i; E.save();
      stepsEl.querySelectorAll(".step").forEach(function (el, k) { el.classList.toggle("on", k === i); });
      stepper.querySelectorAll("button").forEach(function (b, k) {
        if (k === i) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
        b.classList.toggle("seen", k < i);
      });
      var pr = root.querySelector(".progress");
      pr.setAttribute("aria-valuenow", i + 1);
      pr.firstChild.style.width = Math.round(((i + 1) / steps.length) * 100) + "%";
      root.querySelector("#plabel").textContent = "Step " + (i + 1) + " of " + steps.length + ": " + steps[i].en;
      root.querySelector("#back").disabled = i === 0;
      var last = i === steps.length - 1;
      root.querySelector("#next").innerHTML = last ? 'Finish day <span class="ar" lang="ar" dir="rtl">إنهاء اليوم</span>' : 'Next <span class="ar" lang="ar" dir="rtl">التالي</span> &rarr;';
      E.speech.stop();
      if (focus) { var h = stepsEl.querySelector("#h-" + steps[i].id); if (h) { h.tabIndex = -1; h.focus({ preventScroll: false }); } }
    }
  }

  // ---------- section bodies ----------
  function body(id, D) {
    if (id === "words") return wordsHtml(D);
    if (id === "read") return readHtml(D);
    if (id === "focus") return focusHtml(D);
    if (id === "recap") return recapHtml(D);
    if (id === "dialogue") return dialogueHtml(D);
    if (id === "listen") return listenHtml(D);
    if (id === "speak") return speakHtml(D);
    if (id === "write") return writeHtml(D);
    if (id === "quiz") return quizHtml(D);
    return "";
  }
  var speechNote = '<div class="notice speech-note" role="note">Your browser has no speech voice, so the Play buttons are hidden. You can still read every sentence on the page. ' + ar("لا يتوفّر في متصفحك صوت للنطق، لذلك أُخفيت أزرار التشغيل. لا يزال بإمكانك قراءة كل جملة.") + "</div>";

  function wordsHtml(D) {
    return speechNote + '<div class="words">' + D.words.map(function (w) {
      return '<div class="word"><div class="en"><b>' + esc(w.en) + '</b><span class="pos">' + esc(w.pos) + "</span>" + audio(w.en) + "</div>" +
        '<div class="ex"><span>' + esc(w.ex) + "</span>" + audio(w.ex, false) + "</div>" + ar(w.ar) + "</div>";
    }).join("") + "</div>";
  }

  function readHtml(D) {
    var R = D.reading, gloss = {};
    Object.keys(R.gloss || {}).forEach(function (k) { gloss[k.toLowerCase()] = R.gloss[k]; });
    var paras = R.text.split(/\n\n+/).map(function (p) {
      var html = p.replace(/([A-Za-z]+(?:'[A-Za-z]+)?)|([^A-Za-z]+)/g, function (m, w, o) {
        if (o) return esc(o);
        return gloss[w.toLowerCase()] ? '<button type="button" class="gw" data-w="' + esc(w.toLowerCase()) + '" aria-expanded="false">' + esc(w) + "</button>" : esc(w);
      });
      return "<p>" + html + "</p>";
    }).join("");
    return speechNote + '<div class="btn-row no-print"><span class="chip">' + esc(R.level) + "</span>" + audio(R.text.replace(/\n+/g, " "), false) + audio(R.text.replace(/\n+/g, " "), true) + "</div>" +
      "<h3>" + esc(R.title) + '</h3><div class="reading" id="reading" lang="en">' + paras + "</div>" +
      '<div class="gloss-panel no-print" id="gloss" aria-live="polite"><span class="muted">Tap a highlighted word to see its meaning.</span>' + ar("اضغط على كلمة مظلّلة لترى معناها.") + "</div>";
  }

  function focusHtml(D) {
    var F = D.focus;
    var paras = F.explain.split(/\n\n+/).map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("");
    var parasAr = (F.explainAr || "").split(/\n\n+/).map(function (p) { return p ? ar(p) : ""; }).join("");
    return "<h3>" + esc(F.title) + "</h3>" + ar(F.titleAr) + paras + parasAr + "<h3>Examples</h3>" +
      '<div class="panel">' + F.examples.map(function (x) {
        return '<div class="ex-row"><div><span lang="en">' + rich(x.en) + "</span>" + ar(x.ar) + "</div>" + audio(x.en.replace(/<[^>]+>/g, "")) + "</div>";
      }).join("") + "</div>" +
      (F.watchOut ? '<div class="callout watch"><div class="ttl">Watch out</div><p>' + rich(F.watchOut.en) + "</p>" + ar(F.watchOut.ar) + "</div>" : "");
  }

  function recapHtml(D) {
    var R = D.recap;
    return "<h3>" + esc(R.title) + "</h3>" + ar(R.titleAr) + '<div class="panel">' + R.points.map(function (p) {
      return '<div class="ex-row"><div><span lang="en">' + rich(p.en) + "</span>" + ar(p.ar) + "</div></div>";
    }).join("") + "</div>";
  }

  function dialogueHtml(D) {
    var L = D.dialogue, gloss = {};
    Object.keys(L.gloss || {}).forEach(function (k) { gloss[k.toLowerCase()] = L.gloss[k]; });
    var speakers = []; L.lines.forEach(function (l) { if (speakers.indexOf(l.speaker) < 0) speakers.push(l.speaker); });
    var lines = L.lines.map(function (l, i) {
      var html = l.text.replace(/([A-Za-z]+(?:'[A-Za-z]+)?)|([^A-Za-z]+)/g, function (m, w, o) {
        if (o) return esc(o);
        return gloss[w.toLowerCase()] ? '<button type="button" class="gw" data-w="' + esc(w.toLowerCase()) + '" aria-expanded="false">' + esc(w) + "</button>" : esc(w);
      });
      return '<li class="dl" data-i="' + i + '" data-who="' + speakers.indexOf(l.speaker) + '"><b class="spk">' + esc(l.speaker) + ":</b> <span class=\"dlg-text\">" + html + "</span> " + audio(l.text, false) + "</li>";
    }).join("");
    return speechNote + "<h3>" + esc(L.title) + "</h3>" + ar(L.titleAr) + "<p>" + esc(L.setting) + "</p>" + ar(L.settingAr) +
      '<div class="btn-row no-print"><button type="button" class="btn btn-soft btn-sm" id="dlg-all">Play the whole dialogue</button><button type="button" class="btn btn-ghost btn-sm" id="dlg-hide" aria-pressed="false">Hide the text and just listen</button></div>' +
      '<ol class="dlg reading" id="dlg-lines" lang="en">' + lines + "</ol>" +
      '<div class="gloss-panel no-print" id="dgloss" aria-live="polite"><span class="muted">Tap a highlighted word to see its meaning.</span>' + ar("اضغط على كلمة مظلّلة لترى معناها.") + "</div>" +
      "<h3>Check your understanding</h3>" + '<div id="dq">' + L.questions.map(function (q, i) {
        return '<fieldset class="q" data-i="' + i + '"><legend>' + (i + 1) + ". " + rich(q.q) + '</legend><div class="opts">' + q.o.map(function (o, j) { return '<button type="button" class="opt" data-j="' + j + '">' + rich(o) + "</button>"; }).join("") + '</div><div class="explain" aria-live="polite"></div></fieldset>';
      }).join("") + '</div><div class="score-bar" id="dscore" aria-live="polite"></div>' +
      (L.roleplay ? '<div class="callout"><div class="ttl">Role-play</div><p>' + rich(L.roleplay.prompt) + "</p>" + ar(L.roleplay.promptAr) + "</div>" : "");
  }

  function listenHtml(D) {
    return speechNote + '<p>Listen, then type what you hear. Use the slow button if you need it. You can listen as many times as you like.</p>' + ar("استمع ثم اكتب ما تسمعه. استخدم زر التشغيل البطيء إذا احتجت إليه.") +
      D.listening.items.map(function (it, i) {
        return '<div class="dict-item" data-i="' + i + '"><div class="btn-row">' + "<b>" + (i + 1) + ".</b> " + audio(it.text, false) + audio(it.text, true) + "</div>" +
          '<label class="sr-only" for="dic-' + i + '">Type sentence ' + (i + 1) + '</label><textarea id="dic-' + i + '" rows="2" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type what you hear"></textarea>' +
          '<div class="btn-row"><button type="button" class="btn btn-soft btn-sm" data-check="' + i + '">Check</button><button type="button" class="btn btn-ghost btn-sm" data-show="' + i + '">Show the sentence</button></div>' +
          '<div class="dict-out" id="out-' + i + '" aria-live="polite"></div>' + "</div>";
      }).join("");
  }

  function speakHtml(D) {
    var S = D.speaking;
    var rec = E.speech.recognition;
    return speechNote + "<p>Read the script aloud. Then listen to the model and say it again, trying to match the rhythm.</p>" + ar("اقرأ النص بصوت عالٍ، ثم استمع إلى النموذج وكرّره محاولًا مطابقة الإيقاع.") +
      '<div class="reading" lang="en"><p>' + esc(S.script) + '</p></div><div class="btn-row no-print">' + audio(S.script, false) + audio(S.script, true) + "</div>" +
      "<h3>Self-check</h3>" + checklist("speak", S.checklist) +
      (rec ? '<div class="panel no-print" id="rec-box"><h3>Optional: see what your browser hears</h3><p class="muted">Off by default. In many browsers, speech recognition sends your voice to the browser maker\'s servers. Turn it on only if you accept that.</p>' +
        '<label class="switch"><input type="checkbox" id="rec-on"' + (E.state.settings.recog ? " checked" : "") + '> Allow speech recognition</label>' +
        '<div class="btn-row"><button type="button" class="btn btn-soft btn-sm" id="rec-go" disabled>Start speaking</button></div><p id="rec-out" aria-live="polite"></p>' +
        '<p class="muted">The text below is only what the browser heard. It is not a score. Compare it with the script yourself.</p></div>'
        : '<div class="notice no-print">Speech recognition is not available in this browser. That is fine: the self-check list above is all you need.</div>');
  }

  function writeHtml(D) {
    var W = D.writing;
    return "<p>" + rich(W.prompt) + "</p>" + (W.promptAr ? ar(W.promptAr) : "") +
      '<p class="counter" id="wcount" aria-live="polite"></p>' +
      '<label class="sr-only" for="draft">Your writing</label><textarea class="write-area" id="draft" lang="en" spellcheck="true"></textarea>' +
      "<h3>Checklist</h3>" + checklist("write", W.checklist) +
      '<details class="fold"><summary>Model answer</summary><div class="fold-body" lang="en"><p>' + esc(W.model).replace(/\n\n+/g, "</p><p>") + "</p></div></details>" +
      '<h3>Practice with an AI tutor (optional)</h3><p class="muted">Copy this prompt into any AI tool you like, and paste your writing where it says. This site does not send your text anywhere.</p>' +
      '<div class="prompt-box"><div class="pb-bar"><span class="pb-title">Prompt for an AI tutor</span><button type="button" class="btn btn-soft btn-sm" id="copy-ai">Copy</button></div><pre id="ai-text" lang="en">' + esc(W.aiPrompt) + "</pre></div>";
  }

  function checklist(group, items) {
    return '<ul class="checklist">' + items.map(function (t, i) {
      return '<li><label><input type="checkbox" data-group="' + group + '" data-i="' + i + '"><span>' + esc(t) + "</span></label></li>";
    }).join("") + "</ul>";
  }

  function quizHtml(D) {
    return '<p>Choose the best answer. You will see the explanation right away.</p>' + ar("اختر أفضل إجابة، وسيظهر الشرح فورًا.") +
      '<div id="quiz">' + D.quiz.map(function (q, i) {
        return '<fieldset class="q" data-i="' + i + '"><legend>' + (i + 1) + ". " + rich(q.q) + '</legend><div class="opts">' +
          q.o.map(function (o, j) { return '<button type="button" class="opt" data-j="' + j + '">' + rich(o) + "</button>"; }).join("") +
          '</div><div class="explain" aria-live="polite"></div></fieldset>';
      }).join("") + '</div><div class="score-bar" id="score" aria-live="polite"></div>';
  }

  // ---------- behaviour ----------
  function wire(D, steps) {
    var st = E.day(n);
    // glossary
    var rd = root.querySelector("#reading");
    if (rd) {
      var gloss = {}; Object.keys(D.reading.gloss || {}).forEach(function (k) { gloss[k.toLowerCase()] = D.reading.gloss[k]; });
      rd.addEventListener("click", function (e) {
        var b = e.target.closest(".gw"); if (!b) return;
        rd.querySelectorAll(".gw[aria-expanded=true]").forEach(function (x) { x.setAttribute("aria-expanded", "false"); });
        b.setAttribute("aria-expanded", "true");
        var g = gloss[b.dataset.w];
        root.querySelector("#gloss").innerHTML = '<span class="gw-word" lang="en">' + esc(b.textContent) + "</span> " + audio(b.textContent, false) +
          "<div>" + rich(g.en) + "</div>" + ar(g.ar);
      });
    }
    // dialogue
    var dl = root.querySelector("#dlg-lines");
    if (dl) {
      var DG = {}; Object.keys(D.dialogue.gloss || {}).forEach(function (k) { DG[k.toLowerCase()] = D.dialogue.gloss[k]; });
      dl.addEventListener("click", function (e) {
        var b = e.target.closest(".gw"); if (!b) return;
        dl.querySelectorAll(".gw[aria-expanded=true]").forEach(function (x) { x.setAttribute("aria-expanded", "false"); });
        b.setAttribute("aria-expanded", "true");
        var g = DG[b.dataset.w];
        root.querySelector("#dgloss").innerHTML = '<span class="gw-word" lang="en">' + esc(b.textContent) + "</span> " + audio(b.textContent, false) + "<div>" + rich(g.en) + "</div>" + ar(g.ar);
      });
      var allBtn = root.querySelector("#dlg-all"), hideBtn = root.querySelector("#dlg-hide");
      var items = D.dialogue.lines.map(function (l, i) { return { text: l.text, who: +dl.children[i].dataset.who }; });
      var clear = function () { dl.querySelectorAll(".dl.now").forEach(function (x) { x.classList.remove("now"); }); allBtn.textContent = "Play the whole dialogue"; allBtn.setAttribute("aria-pressed", "false"); };
      allBtn.onclick = function () {
        if (allBtn.getAttribute("aria-pressed") === "true") { E.speech.stop(); clear(); return; }
        allBtn.setAttribute("aria-pressed", "true"); allBtn.textContent = "Stop";
        E.speech.speakSeq(items, false, { line: function (i) { dl.querySelectorAll(".dl.now").forEach(function (x) { x.classList.remove("now"); }); dl.children[i].classList.add("now"); }, done: clear });
      };
      hideBtn.onclick = function () {
        var on = hideBtn.getAttribute("aria-pressed") !== "true";
        hideBtn.setAttribute("aria-pressed", on ? "true" : "false"); dl.classList.toggle("dlg-hidden", on);
        hideBtn.textContent = on ? "Show the text" : "Hide the text and just listen";
      };
      var dq = root.querySelector("#dq"), dans = {}, dright = 0, dsc = root.querySelector("#dscore"), dQ = D.dialogue.questions;
      var dshow = function () {
        var c = Object.keys(dans).length;
        if (c < dQ.length) { dsc.textContent = c + " of " + dQ.length + " answered."; return; }
        dsc.innerHTML = "Score: " + dright + " of " + dQ.length + ' <button type="button" class="btn btn-soft btn-sm" id="dretry">Try again</button>';
        root.querySelector("#dretry").onclick = function () {
          dans = {}; dright = 0;
          dq.querySelectorAll(".opt").forEach(function (o) { o.disabled = false; o.classList.remove("right", "wrong"); var sr = o.querySelector(".sr-only"); if (sr) sr.remove(); });
          dq.querySelectorAll(".explain").forEach(function (x) { x.innerHTML = ""; });
          dshow(); var f1 = dq.querySelector(".opt"); if (f1) f1.focus();
        };
      };
      dshow();
      dq.addEventListener("click", function (e) {
        var o = e.target.closest(".opt"); if (!o || o.disabled) return;
        var f = o.closest(".q"), i = +f.dataset.i, q = dQ[i], j = +o.dataset.j;
        dans[i] = j; if (j === q.a) dright++;
        f.querySelectorAll(".opt").forEach(function (b, k) {
          b.disabled = true;
          if (k === q.a) { b.classList.add("right"); b.insertAdjacentHTML("afterbegin", '<span class="sr-only">Correct answer: </span>'); }
          else if (k === j) { b.classList.add("wrong"); b.insertAdjacentHTML("afterbegin", '<span class="sr-only">Your answer, not correct: </span>'); }
        });
        f.querySelector(".explain").innerHTML = "<p><b>" + (j === q.a ? "Correct." : "Not quite.") + "</b> " + rich(q.why) + "</p>" + ar(q.whyAr);
        dshow();
      });
    }
    // dictation
    root.querySelectorAll("[data-check]").forEach(function (b) {
      b.onclick = function () {
        var i = +b.dataset.check, target = D.listening.items[i];
        var val = root.querySelector("#dic-" + i).value;
        root.querySelector("#out-" + i).innerHTML = diffHtml(target.text, val) + (target.hintAr ? ar(target.hintAr) : "");
      };
    });
    root.querySelectorAll("[data-show]").forEach(function (b) {
      b.onclick = function () {
        var i = +b.dataset.show;
        root.querySelector("#out-" + i).innerHTML = '<p lang="en"><b>' + esc(D.listening.items[i].text) + "</b></p>" + (D.listening.items[i].hintAr ? ar(D.listening.items[i].hintAr) : "");
      };
    });
    // checklists
    root.querySelectorAll("input[data-group]").forEach(function (cb) {
      var key = cb.dataset.group + ":" + cb.dataset.i;
      cb.checked = !!st.checks[key]; cb.closest("label").classList.toggle("on", cb.checked);
      cb.onchange = function () { st.checks[key] = cb.checked; cb.closest("label").classList.toggle("on", cb.checked); E.save(); };
    });
    // writing
    var dr = root.querySelector("#draft");
    if (dr) {
      dr.value = st.draft || "";
      var target = D.writing.targetWords, cnt = root.querySelector("#wcount");
      var upd = function () {
        var w = (dr.value.trim().match(/\S+/g) || []).length;
        cnt.textContent = w + (w === 1 ? " word" : " words") + ". Target: about " + target + ".";
        cnt.classList.toggle("good", w >= target * 0.8);
      };
      dr.oninput = function () { st.draft = dr.value; E.save(); upd(); };
      upd();
      root.querySelector("#copy-ai").onclick = function () { E.copy(D.writing.aiPrompt, "Prompt copied. Paste it into your AI tool."); };
    }
    // speech recognition (optional, opt-in)
    var recOn = root.querySelector("#rec-on");
    if (recOn) {
      var go = root.querySelector("#rec-go"), out = root.querySelector("#rec-out");
      var sync = function () { go.disabled = !recOn.checked; };
      recOn.onchange = function () { E.setSetting("recog", recOn.checked); sync(); };
      sync();
      go.onclick = function () {
        var R = new E.speech.recognition();
        R.lang = "en-US"; R.interimResults = false; R.maxAlternatives = 1;
        out.textContent = "Listening..."; go.disabled = true;
        R.onresult = function (ev) { out.innerHTML = 'Your browser heard: <b lang="en">' + esc(ev.results[0][0].transcript) + "</b>"; };
        R.onerror = function () { out.textContent = "Could not use the microphone. That is fine: use the self-check list instead."; };
        R.onend = function () { go.disabled = !recOn.checked; if (out.textContent === "Listening...") out.textContent = "Nothing was heard. Try again."; };
        try { R.start(); } catch (e) { out.textContent = "Speech recognition could not start."; go.disabled = false; }
      };
    }
    // quiz
    var quiz = root.querySelector("#quiz");
    if (quiz) {
      var answered = {}, right = 0;
      var scoreEl = root.querySelector("#score");
      var showScore = function () {
        var cnt = Object.keys(answered).length, tot = D.quiz.length;
        if (cnt < tot) { scoreEl.textContent = cnt + " of " + tot + " answered."; return; }
        var pct = Math.round((right / tot) * 100);
        st.quiz = { score: right, total: tot, best: Math.max(right, st.quiz ? st.quiz.best : 0) }; E.save();
        scoreEl.innerHTML = "Score: " + right + " of " + tot + " (" + pct + "%). Best: " + st.quiz.best + ' <button type="button" class="btn btn-soft btn-sm" id="retry">Try again</button>';
        root.querySelector("#retry").onclick = function () {
          answered = {}; right = 0;
          quiz.querySelectorAll(".opt").forEach(function (o) { o.disabled = false; o.classList.remove("right", "wrong"); var sr = o.querySelector(".sr-only"); if (sr) sr.remove(); });
          quiz.querySelectorAll(".explain").forEach(function (x) { x.innerHTML = ""; });
          showScore();
          var first = quiz.querySelector(".opt"); if (first) first.focus();
        };
      };
      showScore();
      quiz.addEventListener("click", function (e) {
        var o = e.target.closest(".opt"); if (!o || o.disabled) return;
        var f = o.closest(".q"), i = +f.dataset.i, q = D.quiz[i], j = +o.dataset.j;
        answered[i] = j; if (j === q.a) right++;
        f.querySelectorAll(".opt").forEach(function (b, k) {
          b.disabled = true;
          if (k === q.a) { b.classList.add("right"); b.insertAdjacentHTML("afterbegin", '<span class="sr-only">Correct answer: </span>'); }
          else if (k === j) { b.classList.add("wrong"); b.insertAdjacentHTML("afterbegin", '<span class="sr-only">Your answer, not correct: </span>'); }
        });
        f.querySelector(".explain").innerHTML = "<p><b>" + (j === q.a ? "Correct." : "Not quite.") + "</b> " + rich(q.why) + "</p>" + ar(q.whyAr);
        showScore();
      });
    }
  }

  var diffHtml = E.diffHtml;

  function finish(D, steps) {
    var st = E.day(n), box = root.querySelector("#finish");
    if (D.quiz && !st.quiz) {
      box.innerHTML = '<div class="callout err" role="alert">Please answer all the quiz questions first. <span class="ar" lang="ar" dir="rtl">أجب عن جميع أسئلة الاختبار أولًا.</span></div>';
      return;
    }
    if (meta.type === "final" && st.quiz.best / st.quiz.total < 0.7) {
      box.innerHTML = '<div class="callout err" role="alert">You need at least 70% to pass the final test. Go back to the quiz and try again. <span class="ar" lang="ar" dir="rtl">تحتاج إلى 70% على الأقل لاجتياز الاختبار النهائي. عُد إلى الاختبار وحاول مرة أخرى.</span></div>';
      return;
    }
    var first = !st.done;
    st.done = true; st.doneOn = st.doneOn || E.today();
    if (first) { E.touchStreak(); E.addCards(n, D.words || []); }
    E.save();
    var next = C.days.filter(function (x) { return x.d > n && C.ready.indexOf(x.d) >= 0; })[0];
    var msg = D.words && D.words.length ? D.words.length + " words were added to your review cards." : "Well done.";
    box.innerHTML = '<div class="panel" role="status"><h2>Day ' + n + " complete</h2><p>" + esc(msg) + " Streak: " + E.streakNow() + " day(s).</p>" + ar("أحسنت! أنهيت اليوم " + n + ".") +
      '<div class="btn-row">' + (next ? '<a class="btn btn-primary" href="lesson.html?d=' + next.d + '">Next lesson: Day ' + next.d + "</a>" : "") + '<a class="btn btn-ghost" href="index.html">Course map</a><button type="button" class="btn btn-ghost" onclick="window.print()">Print this lesson</button></div></div>';
    box.scrollIntoView({ block: "center" });
  }

  // print: open every <details> so the model answer is printed
  window.addEventListener("beforeprint", function () { root.querySelectorAll("details").forEach(function (d) { d.dataset.was = d.open ? "1" : "0"; d.open = true; }); });
  window.addEventListener("afterprint", function () { root.querySelectorAll("details").forEach(function (d) { d.open = d.dataset.was === "1"; }); });

  window.__lessonTest = { diffHtml: diffHtml };
})();
