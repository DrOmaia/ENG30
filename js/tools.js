/* Practice tools: dictation drill, speaking drill, pronunciation helper, writing page, certificate. */
(function () {
  "use strict";
  var E = window.ENG, C = window.CURRICULUM, esc = E.esc, rich = E.rich, ar = E.ar, audio = E.speech.audioBtn;
  var page = document.body.getAttribute("data-page");
  E.renderChrome(page);
  var PASS = 0.7;

  function loadScripts(list, cb) {
    var left = list.length; if (!left) return cb();
    list.forEach(function (src) {
      var s = document.createElement("script"); s.src = src;
      s.onload = s.onerror = function () { if (--left === 0) cb(); };
      document.head.appendChild(s);
    });
  }
  var days = C.ready.map(function (n) { return "js/days/day" + String(n).padStart(2, "0") + ".js"; });
  var needs = page === "pronunciation" ? ["js/pronunciation.js"] : days;
  loadScripts(needs, function () {
    if (page === "practice") practice();
    if (page === "pronunciation") pronunciation();
    if (page === "writing") writing();
    if (page === "certificate") certificate();
  });
  function metaOf(n) { return C.days.filter(function (d) { return d.d === n; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  var speechNote = '<div class="notice speech-note" role="note">Your browser has no speech voice, so the Play buttons are hidden. You can still read every sentence. ' + ar("لا يتوفّر في متصفحك صوت للنطق، لذلك أُخفيت أزرار التشغيل.") + "</div>";

  // ---------- practice: dictation and speaking drills ----------
  function practice() {
    var root = document.getElementById("practice");
    var mode = "dictation", unit = 0, queue = [], idx = 0;
    root.innerHTML = '<h1>Practice</h1>' + ar("تدريب") + '<p class="muted">Extra listening and speaking practice from all the lessons. Nothing here is graded.</p>' + speechNote +
      '<div class="seg" role="group" aria-label="Practice type" id="pmode"><button type="button" data-m="dictation" aria-pressed="true">Dictation</button><button type="button" data-m="speaking" aria-pressed="false">Speaking</button><button type="button" data-m="dialogue" aria-pressed="false">Dialogues</button></div>' +
      '<div class="field"><label for="punit">Unit</label><select id="punit"><option value="0">All units</option>' + C.units.map(function (u) { return '<option value="' + u.n + '">Unit ' + u.n + ": " + esc(u.title) + "</option>"; }).join("") + "</select></div>" +
      '<div id="pbody"></div>';
    function pool() {
      var out = [];
      C.ready.forEach(function (n) {
        var D = window.DAYS && DAYS[n], m = metaOf(n); if (!D || (unit && m.unit !== unit)) return;
        if (mode === "dictation" && D.listening) D.listening.items.forEach(function (it) { out.push({ d: n, text: it.text, hint: it.hintAr }); });
        if (mode === "speaking" && D.speaking) out.push({ d: n, text: D.speaking.script, checklist: D.speaking.checklist });
        if (mode === "dialogue" && D.dialogue) out.push({ d: n, dlg: D.dialogue });
      });
      return out;
    }
    function reset() { queue = shuffle(pool()); idx = 0; draw(); }
    function draw() {
      var body = root.querySelector("#pbody");
      if (!queue.length) { body.innerHTML = '<p class="muted">No practice items for this choice yet.</p>'; return; }
      var it = queue[idx % queue.length];
      if (mode === "dialogue") {
        var L = it.dlg, sp = []; L.lines.forEach(function (l) { if (sp.indexOf(l.speaker) < 0) sp.push(l.speaker); });
        body.innerHTML = '<div class="dict-item"><p class="muted">Dialogue ' + (idx % queue.length + 1) + " of " + queue.length + " &middot; from Day " + it.d + "</p><h2>" + esc(L.title) + "</h2>" + ar(L.titleAr) + "<p>" + esc(L.setting) + "</p>" +
          '<div class="btn-row"><button type="button" class="btn btn-soft btn-sm" id="pplay">Play the whole dialogue</button><button type="button" class="btn btn-ghost btn-sm" id="phide" aria-pressed="false">Hide the text and just listen</button><button type="button" class="btn btn-primary btn-sm" id="pnext">Next dialogue</button></div>' +
          '<ol class="dlg reading" id="pdlg" lang="en">' + L.lines.map(function (l) { return '<li class="dl"><b class="spk">' + esc(l.speaker) + ":</b> <span class=\"dlg-text\">" + esc(l.text) + "</span></li>"; }).join("") + "</ol>" +
          (L.roleplay ? '<div class="callout"><div class="ttl">Role-play</div><p>' + esc(L.roleplay.prompt) + "</p>" + ar(L.roleplay.promptAr) + "</div>" : "") + "</div>";
        var pl = body.querySelector("#pplay"), ph = body.querySelector("#phide"), pd = body.querySelector("#pdlg");
        var pitems = L.lines.map(function (l) { return { text: l.text, who: sp.indexOf(l.speaker) }; });
        var pclear = function () { pd.querySelectorAll(".now").forEach(function (x) { x.classList.remove("now"); }); pl.textContent = "Play the whole dialogue"; pl.setAttribute("aria-pressed", "false"); };
        pl.onclick = function () {
          if (pl.getAttribute("aria-pressed") === "true") { E.speech.stop(); pclear(); return; }
          pl.setAttribute("aria-pressed", "true"); pl.textContent = "Stop";
          E.speech.speakSeq(pitems, false, { line: function (i) { pd.querySelectorAll(".now").forEach(function (x) { x.classList.remove("now"); }); pd.children[i].classList.add("now"); }, done: pclear });
        };
        ph.onclick = function () { var on = ph.getAttribute("aria-pressed") !== "true"; ph.setAttribute("aria-pressed", on ? "true" : "false"); pd.classList.toggle("dlg-hidden", on); ph.textContent = on ? "Show the text" : "Hide the text and just listen"; };
      } else if (mode === "dictation") {
        body.innerHTML = '<div class="dict-item"><p class="muted">Item ' + (idx % queue.length + 1) + " of " + queue.length + " &middot; from Day " + it.d + '</p><div class="btn-row">' + audio(it.text, false) + audio(it.text, true) + "</div>" +
          '<label class="sr-only" for="pd">Type what you hear</label><textarea id="pd" rows="2" lang="en" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Type what you hear"></textarea>' +
          '<div class="btn-row"><button type="button" class="btn btn-soft btn-sm" id="pcheck">Check</button><button type="button" class="btn btn-ghost btn-sm" id="pshow">Show the sentence</button><button type="button" class="btn btn-primary btn-sm" id="pnext">Next sentence</button></div><div id="pout" aria-live="polite"></div></div>';
        body.querySelector("#pcheck").onclick = function () { body.querySelector("#pout").innerHTML = E.diffHtml(it.text, body.querySelector("#pd").value) + (it.hint ? ar(it.hint) : ""); };
        body.querySelector("#pshow").onclick = function () { body.querySelector("#pout").innerHTML = '<p lang="en"><b>' + esc(it.text) + "</b></p>" + (it.hint ? ar(it.hint) : ""); };
      } else {
        body.innerHTML = '<div class="dict-item"><p class="muted">Script ' + (idx % queue.length + 1) + " of " + queue.length + " &middot; from Day " + it.d + '</p><div class="reading" lang="en"><p>' + esc(it.text) + '</p></div><div class="btn-row">' + audio(it.text, false) + audio(it.text, true) + "</div>" +
          '<h2>Self-check</h2><ul class="checklist">' + it.checklist.map(function (t) { return '<li><label><input type="checkbox"><span>' + esc(t) + "</span></label></li>"; }).join("") + '</ul><div class="btn-row"><button type="button" class="btn btn-primary btn-sm" id="pnext">Next script</button></div></div>';
        body.querySelectorAll(".checklist input").forEach(function (cb) { cb.onchange = function () { cb.closest("label").classList.toggle("on", cb.checked); }; });
      }
      body.querySelector("#pnext").onclick = function () { idx++; draw(); var f = root.querySelector("#pbody .dict-item"); if (f) { f.setAttribute("tabindex", "-1"); f.focus(); } };
    }
    root.querySelector("#pmode").onclick = function (e) {
      var b = e.target.closest("button"); if (!b) return; mode = b.dataset.m;
      this.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); reset();
    };
    root.querySelector("#punit").onchange = function (e) { unit = +e.target.value; reset(); };
    reset();
  }

  // ---------- pronunciation helper ----------
  function pronunciation() {
    var root = document.getElementById("pron"), P = window.PRON;
    if (!P) { root.innerHTML = "<p>The pronunciation data could not be loaded.</p>"; return; }
    root.innerHTML = '<h1>Pronunciation helper</h1>' + ar("مساعد النطق") + '<p class="muted">Sounds that are often difficult for Arabic speakers. Listen, then say each item aloud. American English.</p>' + speechNote +
      '<nav aria-label="Sections" class="seg" style="margin:12px 0">' + P.sections.map(function (s) { return '<a class="btn btn-ghost btn-sm" href="#' + esc(s.id) + '">' + esc(s.title) + "</a>"; }).join("") + "</nav>" +
      P.sections.map(function (s) {
        return '<section class="panel" id="' + esc(s.id) + '" aria-labelledby="h-' + esc(s.id) + '"><h2 id="h-' + esc(s.id) + '">' + esc(s.title) + "</h2>" + ar(s.titleAr) + "<p>" + esc(s.intro) + "</p>" + ar(s.introAr) +
          s.items.map(function (it) { return '<div class="ex-row"><div><b lang="en">' + esc(it.say) + "</b><div>" + esc(it.note) + "</div>" + ar(it.noteAr) + "</div>" + audio(it.say, false) + audio(it.say, true) + "</div>"; }).join("") +
          (s.tip ? '<div class="callout watch"><div class="ttl">Tip</div><p>' + esc(s.tip) + "</p>" + ar(s.tipAr) + "</div>" : "") + "</section>";
      }).join("");
  }

  // ---------- my writing ----------
  function writing() {
    var root = document.getElementById("writing"), S = E.state;
    var items = C.ready.filter(function (n) { return DAYS[n] && DAYS[n].writing; });
    root.innerHTML = '<h1>My writing</h1>' + ar("كتاباتي") + '<p class="muted">All your writing tasks in one place. Your drafts are saved in this browser. Use the AI-tutor prompt with any AI tool you choose: this site never sends your text anywhere.</p>' +
      '<div class="btn-row no-print"><button type="button" class="btn btn-soft" id="wcopyall">Copy all my writing</button><button type="button" class="btn btn-soft" id="wdl">Download as a text file</button><button type="button" class="btn btn-ghost" onclick="window.print()">Print</button></div>' +
      items.map(function (n) {
        var D = DAYS[n], W = D.writing, st = E.day(n);
        return '<section class="panel" aria-labelledby="w' + n + '"><h2 id="w' + n + '">Day ' + n + ": " + esc(D.title) + '</h2><p>' + rich(W.prompt) + '</p><p class="counter" id="c' + n + '"></p>' +
          '<label class="sr-only" for="t' + n + '">Your writing for Day ' + n + '</label><textarea class="write-area" id="t' + n + '" lang="en" style="min-height:120px"></textarea>' +
          '<div class="btn-row no-print"><button type="button" class="btn btn-soft btn-sm" data-ai="' + n + '">Copy AI-tutor prompt with my text</button><button type="button" class="btn btn-ghost btn-sm" data-ai0="' + n + '">Copy the empty prompt</button></div></section>';
      }).join("");
    function words(t) { return (t.trim().match(/\S+/g) || []).length; }
    items.forEach(function (n) {
      var ta = root.querySelector("#t" + n), c = root.querySelector("#c" + n), st = E.day(n), target = DAYS[n].writing.targetWords;
      ta.value = st.draft || "";
      var upd = function () { var w = words(ta.value); c.textContent = w + (w === 1 ? " word" : " words") + ". Target: about " + target + "."; c.classList.toggle("good", w >= target * 0.8); };
      ta.oninput = function () { st.draft = ta.value; E.save(); upd(); }; upd();
    });
    function fill(n, text) { return DAYS[n].writing.aiPrompt.replace(/\[[^\]]+\]/, text.trim() ? "\n\n" + text.trim() + "\n\n" : "[paste your text here]"); }
    root.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      if (b.dataset.ai) { E.copy(fill(+b.dataset.ai, E.day(+b.dataset.ai).draft || ""), "Prompt copied with your text. Paste it into your AI tool."); }
      if (b.dataset.ai0) { E.copy(DAYS[+b.dataset.ai0].writing.aiPrompt, "Empty prompt copied."); }
    });
    function allText() {
      return items.filter(function (n) { return (E.day(n).draft || "").trim(); }).map(function (n) { return "Day " + n + ": " + DAYS[n].title + "\n\n" + E.day(n).draft.trim(); }).join("\n\n----------\n\n");
    }
    root.querySelector("#wcopyall").onclick = function () { var t = allText(); if (!t) { E.toast("You have not written anything yet."); return; } E.copy(t, "All your writing was copied."); };
    root.querySelector("#wdl").onclick = function () { var t = allText(); if (!t) { E.toast("You have not written anything yet."); return; } E.download("my-english-writing-" + E.today() + ".txt", t); };
  }

  // ---------- certificate ----------
  function hash(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(16).toUpperCase().padStart(8, "0"); }
  function certificate() {
    var root = document.getElementById("certificate"), S = E.state, st = E.day(30);
    document.body.classList.add("cert-page");
    var pass = st.done && st.quiz && st.quiz.best / st.quiz.total >= PASS;
    if (!pass) {
      var pct = st.quiz ? Math.round((st.quiz.best / st.quiz.total) * 100) : 0;
      root.innerHTML = '<div class="panel" style="max-width:560px;margin:30px auto;text-align:center"><h1>Certificate</h1>' + ar("الشهادة") + '<p>Your certificate unlocks when you pass the Day 30 final test with at least 70%.</p>' + ar("تُفتح الشهادة عند اجتياز اختبار اليوم 30 بنسبة 70% على الأقل.") +
        "<p><b>Days finished:</b> " + E.doneCount() + " of 30" + (st.quiz ? ". <b>Best final score:</b> " + pct + "%" : "") + '.</p><a class="btn btn-primary" href="index.html">Back to the course map</a></div>';
      return;
    }
    var date = st.doneOn || E.today();
    root.innerHTML = '<div class="no-print panel"><div class="field"><label for="cname">Your name (as it should appear on the certificate)</label><input id="cname" type="text" maxlength="50" autocomplete="name" value="' + esc(S.name || "") + '"></div><div class="btn-row"><button type="button" class="btn btn-primary" onclick="window.print()">Print or save as PDF</button></div></div>' +
      '<div class="cert" id="cert" role="img" aria-label="Certificate of completion"><p class="cert-kicker">Certificate of completion</p><h1>English in 30 Days</h1><p>Academic English for Arabic speakers, levels A2 to B1</p><p>This certifies that</p><p class="cert-name" id="cname-out"></p>' +
      '<p>completed the 30-day course and passed the final test with <b>' + Math.round((st.quiz.best / st.quiz.total) * 100) + '%</b>.</p><p lang="ar" dir="rtl">شهادة إتمام دورة اللغة الإنجليزية الأكاديمية في 30 يومًا واجتياز الاختبار النهائي.</p>' +
      '<div class="cert-meta"><span>Date: ' + esc(date) + '</span><span>Days finished: ' + E.doneCount() + ' of 30</span><span>ID: <code id="cid"></code></span></div></div>';
    var inp = root.querySelector("#cname");
    function upd() {
      var n = inp.value.trim().replace(/[<>"\\{}]/g, "");
      root.querySelector("#cname-out").textContent = n || "Your name";
      root.querySelector("#cid").textContent = n ? hash(n.toLowerCase() + "|" + date) : "--------";
      S.name = n; E.save();
    }
    inp.oninput = upd; upd();
  }
})();
