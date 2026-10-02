/* Page renderers that need every day file: review (spaced repetition), glossary, unit summary. */
(function () {
  "use strict";
  var E = window.ENG, C = window.CURRICULUM, esc = E.esc, rich = E.rich, ar = E.ar, audio = E.speech.audioBtn;
  var page = document.body.getAttribute("data-page");
  E.renderChrome(page);

  function loadDays(cb) {
    var left = C.ready.length;
    if (!left) return cb();
    C.ready.forEach(function (n) {
      var s = document.createElement("script");
      s.src = "js/days/day" + String(n).padStart(2, "0") + ".js";
      s.onload = s.onerror = function () { if (--left === 0) cb(); };
      document.head.appendChild(s);
    });
  }
  function meta(n) { return C.days.filter(function (d) { return d.d === n; })[0]; }
  var keepAr = function (t) { return t ? '<span class="ar ar-block ar-keep" lang="ar" dir="rtl">' + rich(t) + "</span>" : ""; };

  loadDays(function () {
    if (page === "review") review();
    if (page === "glossary") glossary();
    if (page === "summary") summary();
  });

  // ---------- review ----------
  function review() {
    var root = document.getElementById("review"), S = E.state;
    var ids = Object.keys(S.cards);
    var queue = E.dueCards().filter(function (id) { return word(id); });
    var total = ids.filter(function (id) { return word(id); }).length;
    var seen = 0, knew = 0, current = null;
    function word(id) { var p = id.split(":"); return window.DAYS && DAYS[p[0]] && DAYS[p[0]].words && DAYS[p[0]].words[+p[1]]; }

    function boxes() {
      var c = [0, 0, 0, 0, 0, 0];
      ids.forEach(function (id) { if (word(id)) c[S.cards[id].box]++; });
      return '<div class="stats" aria-label="Cards per box">' + [1, 2, 3, 4, 5].map(function (b) { return '<div class="stat"><div class="v">' + c[b] + '</div><div class="l">Box ' + b + (b === 5 ? " (known)" : "") + "</div></div>"; }).join("") + "</div>";
    }
    function show() {
      if (!total) {
        root.innerHTML = '<h1>Review cards</h1>' + ar("بطاقات المراجعة") + '<div class="panel"><p>You have no cards yet. Finish a lesson, and its new words become review cards.</p>' + ar("لا توجد بطاقات بعد. أنهِ درسًا لتتحوّل كلماته الجديدة إلى بطاقات مراجعة.") + '<a class="btn btn-primary" href="index.html">Go to the course map</a></div>';
        return;
      }
      if (!queue.length) {
        root.innerHTML = '<h1>Review cards</h1>' + ar("بطاقات المراجعة") + '<div class="panel" role="status"><p><b>' + (seen ? "Session done: " + knew + " of " + seen + " remembered." : "Nothing is due today.") + "</b> Come back tomorrow.</p>" + ar(seen ? "انتهت الجلسة: تذكّرت " + knew + " من " + seen + ". عُد غدًا." : "لا توجد بطاقات مستحقة اليوم. عُد غدًا.") + '<a class="btn btn-primary" href="index.html">Course map</a></div>' + boxes() +
          '<p class="muted">Cards come back after 1, 2, 4, 8 and 16 days when you remember them, and tomorrow when you do not.</p>' + ar("تعود البطاقة بعد 1 و2 و4 و8 و16 يومًا إذا تذكّرتها، وغدًا إذا لم تتذكّرها.");
        return;
      }
      current = queue[0]; var w = word(current), d = +current.split(":")[0];
      root.innerHTML = '<h1>Review cards</h1>' + ar("بطاقات المراجعة") + '<p class="muted" id="rcount">' + queue.length + " card" + (queue.length === 1 ? "" : "s") + " left today. From Day " + d + ".</p>" +
        '<div class="panel review-card"><p class="muted">What does this mean? Arabic meanings always show on this page.</p><p class="rc-q" lang="en"><b style="font-size:1.6rem">' + esc(w.en) + "</b> " + audio(w.en) + '</p><button type="button" class="btn btn-soft" id="reveal">Show the answer <span class="ar" lang="ar" dir="rtl">أظهر الإجابة</span></button>' +
        '<div id="answer" hidden><hr><p class="rc-a">' + keepAr(w.ar) + '<span lang="en">' + esc(w.pos) + ": " + esc(w.ex) + "</span> " + audio(w.ex) + '</p><div class="btn-row"><button type="button" class="btn btn-primary" id="yes">I knew it <span class="ar" lang="ar" dir="rtl">عرفتها</span></button><button type="button" class="btn btn-ghost" id="no">Not yet <span class="ar" lang="ar" dir="rtl">ليس بعد</span></button></div></div></div>' + boxes();
      root.querySelector("#reveal").onclick = function () { root.querySelector("#answer").hidden = false; this.hidden = true; root.querySelector("#yes").focus(); };
      function grade(k) { E.gradeCard(current, k); seen++; if (k) knew++; queue.shift(); show(); var h = root.querySelector("h1"); if (h) { h.tabIndex = -1; h.focus(); } }
      root.querySelector("#yes").onclick = function () { grade(true); };
      root.querySelector("#no").onclick = function () { grade(false); };
    }
    show();
  }

  // ---------- glossary ----------
  function glossary() {
    var root = document.getElementById("glossary");
    var items = [];
    C.ready.forEach(function (n) {
      var D = window.DAYS && DAYS[n]; if (!D || !D.words) return;
      D.words.forEach(function (w) { items.push({ w: w, d: n }); });
    });
    items.sort(function (a, b) { return a.w.en.toLowerCase().localeCompare(b.w.en.toLowerCase()); });
    var letters = {}; items.forEach(function (x) { letters[x.w.en[0].toUpperCase()] = 1; });
    root.innerHTML = '<h1>Glossary</h1>' + ar("المسرد") + '<p class="muted">' + items.length + ' words from the lessons so far. Search in English or Arabic. Arabic meanings always show on this page.</p>' +
      '<label class="sr-only" for="gq">Search words</label><input id="gq" type="search" class="search" placeholder="Search words" style="width:100%;font:16px var(--font-body);padding:12px;border:1px solid var(--line);border-radius:12px;background:var(--surface);color:var(--ink);min-height:44px">' +
      '<div class="seg" id="letters" role="group" aria-label="Filter by letter" style="margin:12px 0"><button type="button" data-l="" aria-pressed="true">All</button>' + Object.keys(letters).sort().map(function (l) { return '<button type="button" data-l="' + l + '" aria-pressed="false">' + l + "</button>"; }).join("") + "</div>" +
      '<p id="gcount" class="muted" role="status"></p><div id="glist"></div>';
    var q = "", L = "";
    function draw() {
      var rows = items.filter(function (x) {
        var hit = !q || x.w.en.toLowerCase().indexOf(q) > -1 || x.w.ar.indexOf(q) > -1;
        return hit && (!L || x.w.en[0].toUpperCase() === L);
      });
      root.querySelector("#gcount").textContent = rows.length + " word" + (rows.length === 1 ? "" : "s") + " shown.";
      root.querySelector("#glist").innerHTML = rows.map(function (x) {
        return '<div class="word" style="margin-bottom:10px"><div class="en"><b lang="en">' + esc(x.w.en) + '</b><span class="pos">' + esc(x.w.pos) + "</span>" + audio(x.w.en) + '<span class="chip" style="margin-inline-start:auto">Day ' + x.d + "</span></div>" +
          '<div class="ex"><span lang="en">' + esc(x.w.ex) + "</span>" + audio(x.w.ex) + "</div>" + keepAr(x.w.ar) + "</div>";
      }).join("") || '<p class="muted">No words match.</p>';
    }
    root.querySelector("#gq").oninput = function (e) { q = e.target.value.trim().toLowerCase(); draw(); };
    root.querySelector("#letters").onclick = function (e) {
      var b = e.target.closest("button"); if (!b) return; L = b.dataset.l;
      this.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); }); draw();
    };
    draw();
  }

  // ---------- printable unit summary ----------
  function summary() {
    var root = document.getElementById("summary");
    var u = parseInt(new URLSearchParams(location.search).get("u"), 10), unit = C.units[u - 1];
    if (!unit) { root.innerHTML = '<div class="panel"><h1>Unit not found</h1><a class="btn btn-primary" href="index.html">Course map</a></div>'; return; }
    document.title = "Unit " + u + " summary | English in 30 Days";
    var days = C.days.filter(function (d) { return d.unit === u && C.ready.indexOf(d.d) >= 0 && window.DAYS && DAYS[d.d]; });
    var h = '<div class="btn-row no-print"><a class="btn btn-ghost btn-sm" href="index.html">&larr; Course map</a><button type="button" class="btn btn-primary btn-sm" onclick="window.print()">Print or save as PDF</button></div>' +
      "<h1>Unit " + u + ": " + esc(unit.title) + "</h1>" + ar(unit.ar) + '<p><b>Level:</b> ' + esc(unit.level) + ". <b>I can:</b> " + esc(unit.can) + "</p>";
    days.forEach(function (m) {
      var D = DAYS[m.d];
      h += '<section class="panel" style="break-inside:avoid-page"><h2>Day ' + m.d + ": " + esc(D.title) + "</h2>" + ar(D.titleAr) + "<p><b>Goal:</b> " + rich(D.goal) + "</p>";
      if (D.words && D.words.length) h += '<div class="table-wrap" role="region" tabindex="0" aria-label="Words for Day ' + m.d + '"><table class="tbl"><thead><tr><th scope="col">Word</th><th scope="col">Example</th><th scope="col">Arabic</th></tr></thead><tbody>' +
        D.words.map(function (w) { return "<tr><td><b>" + esc(w.en) + '</b> <span class="muted">' + esc(w.pos) + "</span></td><td>" + esc(w.ex) + '</td><td lang="ar" dir="rtl">' + esc(w.ar) + "</td></tr>"; }).join("") + "</tbody></table></div>";
      if (D.focus) h += "<h3>" + esc(D.focus.title) + "</h3>" + D.focus.explain.split(/\n\n+/).map(function (p) { return "<p>" + rich(p) + "</p>"; }).join("") +
        "<ul>" + D.focus.examples.map(function (x) { return "<li>" + rich(x.en) + "</li>"; }).join("") + "</ul>" + '<p><b>Watch out:</b> ' + rich(D.focus.watchOut.en) + "</p>";
      if (D.recap) h += "<h3>" + esc(D.recap.title) + "</h3><ul>" + D.recap.points.map(function (p) { return "<li>" + rich(p.en) + "</li>"; }).join("") + "</ul>";
      h += "</section>";
    });
    if (!days.length) h += "<p>No lessons in this unit are available yet.</p>";
    root.innerHTML = h;
  }
})();
