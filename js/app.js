/* Core: storage, settings, progress, streak, spaced repetition, speech, shared page chrome. No network. */
(function () {
  "use strict";
  var KEY = "eng30.v1";
  var memoryOnly = false, memoryStore = null;

  function blank() {
    return {
      v: 1, name: "", days: {}, cards: {}, streak: { last: null, count: 0 }, backup: null,
      settings: { arabic: true, theme: "auto", size: "m", voice: "", rate: 0.9, recog: false }
    };
  }
  function merge(base, obj) {
    var out = blank();
    if (obj && typeof obj === "object") {
      Object.keys(out).forEach(function (k) { if (k in obj && k !== "settings") out[k] = obj[k]; });
      out.settings = Object.assign(out.settings, obj.settings || {});
    }
    return out;
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      return merge(null, raw ? JSON.parse(raw) : null);
    } catch (e) { memoryOnly = true; return merge(null, null); }
  }
  var state = load();
  function save() {
    if (memoryOnly) return;
    try { localStorage.setItem(KEY, JSON.stringify(state)); }
    catch (e) { memoryOnly = true; warnStorage(); }
  }

  // ---------- dates (local calendar, not UTC) ----------
  function iso(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function today() { return iso(new Date()); }
  function addDays(s, n) { var d = new Date(s + "T12:00:00"); d.setDate(d.getDate() + n); return iso(d); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  // Allow only <b>, <i>, <code> in authored strings; escape everything else.
  function rich(s) {
    return esc(s).replace(/&lt;(\/?)(b|i|code)&gt;/g, "<$1$2>");
  }
  // Arabic fragment, hidden by settings.arabic = false
  function ar(text, inline) {
    if (!text) return "";
    return '<span class="ar' + (inline ? "" : " ar-block") + '" lang="ar" dir="rtl">' + rich(text) + "</span>";
  }

  // ---------- settings: theme, size, Arabic ----------
  function applySettings() {
    var s = state.settings, root = document.documentElement;
    var theme = s.theme === "auto"
      ? (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      : s.theme;
    root.setAttribute("data-theme", theme);
    root.setAttribute("data-size", s.size || "m");
    root.setAttribute("data-ar", s.arabic ? "on" : "off");
  }
  function setSetting(k, v) { state.settings[k] = v; save(); applySettings(); }
  applySettings();
  if (window.matchMedia) {
    try { matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applySettings); } catch (e) {}
  }

  // ---------- progress ----------
  function day(n) {
    if (!state.days[n]) state.days[n] = { done: false, step: 0, quiz: null, checks: {}, draft: "", doneOn: null };
    return state.days[n];
  }
  function doneCount() { return Object.keys(state.days).filter(function (k) { return state.days[k].done; }).length; }
  function touchStreak() {
    var t = today(), s = state.streak;
    if (s.last === t) return;
    s.count = s.last === addDays(t, -1) ? s.count + 1 : 1;
    s.last = t; save();
  }
  function streakNow() {
    var s = state.streak, t = today();
    return (s.last === t || s.last === addDays(t, -1)) ? s.count : 0;
  }

  // ---------- spaced repetition (Leitner boxes 1..5) ----------
  var INTERVALS = [0, 1, 2, 4, 8, 16];
  function addCards(dayN, words) {
    (words || []).forEach(function (w, i) {
      var id = dayN + ":" + i;
      if (!state.cards[id]) state.cards[id] = { box: 1, due: addDays(today(), 1) };
    });
    save();
  }
  function dueCards() {
    var t = today();
    return Object.keys(state.cards).filter(function (k) { return state.cards[k].due <= t; });
  }
  function gradeCard(id, knew) {
    var c = state.cards[id]; if (!c) return;
    c.box = knew ? Math.min(5, c.box + 1) : 1;
    c.due = addDays(today(), INTERVALS[c.box]);
    save(); updateBadge();
  }
  function updateBadge() {
    var b = document.querySelector(".nav .badge"), due = dueCards().length;
    if (!b) return;
    if (!due) { b.remove(); return; }
    b.textContent = due; b.setAttribute("aria-label", due + " cards due");
  }

  // ---------- helpers ----------
  function toast(msg) {
    var t = document.createElement("div");
    t.className = "toast"; t.setAttribute("role", "status"); t.textContent = msg;
    document.body.appendChild(t); setTimeout(function () { t.remove(); }, 2600);
  }
  function copy(text, okMsg) {
    var done = function () { toast(okMsg || "Copied."); };
    function fallback() {
      var ta = document.createElement("textarea"); ta.value = text; ta.setAttribute("readonly", "");
      ta.style.position = "fixed"; ta.style.opacity = "0"; document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Could not copy. Select the text and copy it by hand."); }
      ta.remove();
    }
    if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, fallback);
    else fallback();
  }
  function download(filename, text, type) {
    var blob = new Blob([text], { type: type || "text/plain;charset=utf-8" });
    var a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function warnStorage() {
    if (document.getElementById("storageWarn")) return;
    var n = document.createElement("div");
    n.id = "storageWarn"; n.className = "notice"; n.setAttribute("role", "alert");
    n.innerHTML = 'Your browser is blocking storage, so progress will be lost when you close this page. Use Settings, then Export, to save a backup file. ' + ar("المتصفح يمنع حفظ التقدّم، لذلك سيضيع تقدّمك عند إغلاق الصفحة. استخدم الإعدادات ثم التصدير لحفظ نسخة احتياطية.");
    var m = document.getElementById("main"); if (m) m.prepend(n);
  }

  // ---------- speech synthesis ----------
  var voicesCache = [];
  var synth = ("speechSynthesis" in window) ? window.speechSynthesis : null;
  function refreshVoices() { if (synth) voicesCache = synth.getVoices() || []; }
  if (synth) { refreshVoices(); try { synth.addEventListener("voiceschanged", refreshVoices); } catch (e) { synth.onvoiceschanged = refreshVoices; } }
  function englishVoices() {
    return voicesCache.filter(function (v) { return /^en([-_]|$)/i.test(v.lang); });
  }
  function pickVoice() {
    var list = englishVoices(), want = state.settings.voice;
    if (want) { var f = list.filter(function (v) { return v.voiceURI === want; })[0]; if (f) return f; }
    return list.filter(function (v) { return /^en[-_]US$/i.test(v.lang); })[0] || list[0] || null;
  }
  var speakingBtn = null;
  function speak(text, slow, btn) {
    if (!synth) return;
    synth.cancel();
    if (speakingBtn) { speakingBtn.setAttribute("aria-pressed", "false"); speakingBtn = null; }
    var u = new SpeechSynthesisUtterance(text);
    var v = pickVoice(); if (v) u.voice = v;
    u.lang = v ? v.lang : "en-US";
    u.rate = Math.max(0.4, Math.min(1.3, (state.settings.rate || 0.9) * (slow ? 0.7 : 1)));
    if (btn) { btn.setAttribute("aria-pressed", "true"); speakingBtn = btn; }
    var end = function () { if (btn) btn.setAttribute("aria-pressed", "false"); if (speakingBtn === btn) speakingBtn = null; };
    u.onend = end; u.onerror = end;
    synth.speak(u);
  }
  function stopSpeaking() { if (synth) synth.cancel(); }
  // Delegated handler: any <button class="audio" data-say="..."> speaks.
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("button.audio[data-say]");
    if (!b) return;
    if (b.getAttribute("aria-pressed") === "true") { stopSpeaking(); b.setAttribute("aria-pressed", "false"); return; }
    speak(b.getAttribute("data-say"), b.hasAttribute("data-slow"), b);
  });
  function audioBtn(text, slow) {
    var label = (slow ? "Play slowly: " : "Play: ") + text;
    return '<button type="button" class="audio' + (slow ? " slow" : "") + '" data-say="' + esc(text) + '"' + (slow ? " data-slow" : "") +
      ' aria-pressed="false" aria-label="' + esc(label) + '"><span aria-hidden="true">' + (slow ? "▶ slow" : "▶") + "</span></button>";
  }
  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  if (!synth) document.documentElement.classList.add("no-speech");

  // ---------- page chrome ----------
  var NAV = [["home", "Home", "index.html"], ["review", "Review", "review.html"], ["practice", "Practice", "practice.html"], ["writing", "Writing", "writing.html"], ["settings", "Settings", "settings.html"]];
  function renderChrome(active) {
    var skip = document.createElement("a");
    skip.className = "skip"; skip.href = "#main"; skip.textContent = "Skip to main content";
    document.body.prepend(skip);
    var mainEl = document.getElementById("main"); if (mainEl) mainEl.setAttribute("tabindex", "-1");
    var bar = document.createElement("header");
    bar.className = "topbar no-print";
    var due = dueCards().length;
    bar.innerHTML = '<div class="wrap"><a class="logo" href="index.html" aria-label="English in 30 Days, home"><span class="mark" aria-hidden="true">EN</span>English in 30 Days</a>' +
      '<nav class="nav" aria-label="Main">' + NAV.map(function (n) {
        return '<a href="' + n[2] + '"' + (active === n[0] ? ' aria-current="page"' : "") + ">" + n[1] + (n[0] === "review" && due ? '<span class="badge" aria-label="' + due + ' cards due">' + due + "</span>" : "") + "</a>";
      }).join("") +
      '<button type="button" id="arBtn" aria-pressed="' + (state.settings.arabic ? "true" : "false") + '" title="Show or hide Arabic">ع Arabic</button>' +
      '<button type="button" id="themeBtn" aria-label="Switch between light and dark theme">Theme</button></nav></div>';
    skip.after(bar);
    bar.querySelector("#themeBtn").onclick = function () {
      var cur = document.documentElement.getAttribute("data-theme");
      setSetting("theme", cur === "dark" ? "light" : "dark");
    };
    bar.querySelector("#arBtn").onclick = function (e) {
      var on = !state.settings.arabic; setSetting("arabic", on);
      e.currentTarget.setAttribute("aria-pressed", on ? "true" : "false");
    };
    var f = document.createElement("footer");
    f.className = "footer no-print";
    f.innerHTML = '<div class="wrap"><p><a href="glossary.html">Glossary</a> &middot; <a href="pronunciation.html">Pronunciation</a> &middot; <a href="certificate.html">Certificate</a> &middot; <a href="settings.html">Settings and backup</a></p>Your progress is saved only in this browser. This site sends no data anywhere. ' + ar("يُحفظ تقدّمك في هذا المتصفح فقط، ولا يرسل الموقع أي بيانات.", true) + "</div>";
    document.body.appendChild(f);
    if (memoryOnly) warnStorage();
  }

  // ---------- word-level diff for dictation (ignores case and punctuation) ----------
  // word-level comparison (longest common subsequence), ignores case and punctuation
  function norm(s) { return s.toLowerCase().replace(/[‘’]/g, "'").replace(/[^a-z0-9'\s]/g, " ").split(/\s+/).filter(Boolean); }
  function diffHtml(expected, typed) {
    var a = norm(expected), b = norm(typed);
    if (!b.length) return '<p class="muted">Type what you hear first, then press Check.</p>';
    var m = a.length, k = b.length, L = [];
    for (var i = 0; i <= m; i++) { L[i] = []; for (var j = 0; j <= k; j++) L[i][j] = 0; }
    for (i = m - 1; i >= 0; i--) for (j = k - 1; j >= 0; j--) L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
    var exp = [], got = [], x = 0, y = 0;
    while (x < m && y < k) {
      if (a[x] === b[y]) { exp.push('<span class="ok">' + esc(a[x]) + "</span>"); got.push('<span class="ok">' + esc(b[y]) + "</span>"); x++; y++; }
      else if (L[x + 1][y] >= L[x][y + 1]) { exp.push('<span class="miss">' + esc(a[x]) + "</span>"); x++; }
      else { got.push('<span class="bad">' + esc(b[y]) + "</span>"); y++; }
    }
    while (x < m) exp.push('<span class="miss">' + esc(a[x++]) + "</span>");
    while (y < k) got.push('<span class="bad">' + esc(b[y++]) + "</span>");
    var perfect = exp.every(function (z) { return z.indexOf('class="ok"') === 0 || z.indexOf('<span class="ok">') === 0; }) &&
      got.every(function (z) { return z.indexOf('<span class="bad">') !== 0; });
    return (perfect ? '<p class="callout ok"><b>Perfect.</b> Every word is correct.</p>' : "") +
      '<p class="diff" lang="en"><b>Correct sentence:</b> ' + exp.join(" ") + '</p><p class="diff" lang="en"><b>You wrote:</b> ' + got.join(" ") + "</p>" +
      '<p class="muted">Green = correct. Yellow = a word you missed. Red = a word that does not match. Capital letters and punctuation are not checked.</p>';
  }

  window.ENG = {
    diffHtml: diffHtml,
    KEY: KEY,
    get state() { return state; },
    get memoryOnly() { return memoryOnly; },
    save: save, esc: esc, rich: rich, ar: ar, today: today, addDays: addDays, day: day,
    doneCount: doneCount, touchStreak: touchStreak, streakNow: streakNow,
    addCards: addCards, dueCards: dueCards, gradeCard: gradeCard,
    toast: toast, copy: copy, download: download, setSetting: setSetting, applySettings: applySettings,
    renderChrome: renderChrome,
    speech: { supported: !!synth, speak: speak, stop: stopSpeaking, voices: englishVoices, audioBtn: audioBtn, recognition: Recognition, refresh: refreshVoices },
    exportData: function () { state.backup = today(); save(); return JSON.stringify(state, null, 2); },
    importData: function (txt) {
      var obj = JSON.parse(txt);
      if (!obj || typeof obj !== "object" || obj.v !== 1 || typeof obj.days !== "object") throw new Error("bad");
      state = merge(null, obj); save(); applySettings();
    },
    reset: function () { try { localStorage.removeItem(KEY); } catch (e) {} state = blank(); memoryOnly = false; applySettings(); }
  };
})();
