/* Page renderers: home (course map) and settings. */
(function () {
  "use strict";
  var E = window.ENG, C = window.CURRICULUM, esc = E.esc, ar = E.ar;
  var page = document.body.getAttribute("data-page");
  E.renderChrome(page);
  if (page === "home") home();
  if (page === "settings") settings();

  function home() {
    var root = document.getElementById("home"), S = E.state;
    var done = E.doneCount(), pct = Math.round((done / C.days.length) * 100);
    var nextDay = C.days.filter(function (d) { return !(S.days[d.d] && S.days[d.d].done) && C.ready.indexOf(d.d) >= 0; })[0];
    var due = E.dueCards().length;
    var h = '<section class="hero"><h1>English in 30 Days</h1>' + ar("الإنجليزية في 30 يومًا") +
      '<p class="lead">A free course in academic English for Arabic speakers, from A2 to B1. About 20 to 30 minutes a day. No account. Your progress stays in this browser.</p>' +
      '<div class="btn-row">' + (nextDay ? '<a class="btn btn-primary" href="lesson.html?d=' + nextDay.d + '">' + (done ? "Continue: Day " : "Start: Day ") + nextDay.d + " &middot; " + esc(nextDay.title) + "</a>" : '<span class="chip ok">All available lessons are done</span>') + "</div>" +
      '<div class="stats" aria-label="Your progress"><div class="stat"><div class="v">' + done + "/" + C.days.length + '</div><div class="l">Days done</div></div>' +
      '<div class="stat"><div class="v">' + pct + '%</div><div class="l">Course complete</div></div>' +
      '<div class="stat"><div class="v">' + E.streakNow() + '</div><div class="l">Day streak</div></div>' +
      '<div class="stat"><div class="v">' + due + '</div><div class="l">Cards due</div></div></div></section>';
    h += C.units.map(function (u) {
      var days = C.days.filter(function (d) { return d.unit === u.n; });
      return '<section class="unit" aria-labelledby="u' + u.n + '"><div class="unit-head"><h2 id="u' + u.n + '">Unit ' + u.n + ": " + esc(u.title) + '</h2><span class="chip">' + esc(u.level) + "</span>" + ar(u.ar, true) + (days.some(function (d) { return C.ready.indexOf(d.d) >= 0; }) ? ' <a href="summary.html?u=' + u.n + '">Printable summary</a>' : "") + "</div>" +
        '<p class="muted">I can: ' + esc(u.can) + '</p><ol class="days">' + days.map(function (d) {
          var ds = S.days[d.d], isDone = ds && ds.done, ready = C.ready.indexOf(d.d) >= 0, cur = nextDay && nextDay.d === d.d;
          var cls = "day" + (d.type !== "lesson" ? " review" : "") + (isDone ? " done" : "") + (cur ? " current" : "") + (ready ? "" : " na");
          var status = isDone ? "Done" : ready ? (cur ? "Up next" : "Ready") : "Not available yet";
          var inner = '<span class="dn">Day ' + d.d + (d.type === "review" ? " &middot; Review" : d.type === "final" ? " &middot; Final" : "") + '</span><span class="dt">' + esc(d.title) + "</span>" + ar(d.ar) + '<span class="ds">' + status + "</span>";
          return "<li>" + (ready ? '<a class="' + cls + '" href="lesson.html?d=' + d.d + '">' + inner + "</a>" : '<div class="' + cls + '">' + inner + "</div>") + "</li>";
        }).join("") + "</ol></section>";
    }).join("");
    root.innerHTML = h;
  }

  function settings() {
    var root = document.getElementById("settings"), S = E.state.settings;
    var voices = E.speech.voices();
    root.innerHTML =
      '<h1>Settings</h1>' + ar("الإعدادات") +
      '<div class="panel"><div class="field"><span class="lbl" id="l-ar">Arabic support <span class="ar" lang="ar" dir="rtl">الدعم باللغة العربية</span></span>' +
      '<label class="switch"><input type="checkbox" id="s-ar"' + (S.arabic ? " checked" : "") + '> Show Arabic hints and translations in lessons</label><p class="muted">Arabic meanings on review cards, in the glossary and in summary tables always stay visible, because the meaning is the point of those pages.</p></div>' +
      '<div class="field"><span class="lbl" id="l-th">Theme <span class="ar" lang="ar" dir="rtl">المظهر</span></span><div class="seg" role="group" aria-labelledby="l-th" id="s-th">' +
      [["auto", "Automatic"], ["light", "Light"], ["dark", "Dark"]].map(function (t) { return '<button type="button" data-v="' + t[0] + '" aria-pressed="' + (S.theme === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</div></div>" +
      '<div class="field"><span class="lbl" id="l-sz">Text size <span class="ar" lang="ar" dir="rtl">حجم الخط</span></span><div class="seg" role="group" aria-labelledby="l-sz" id="s-sz">' +
      [["s", "Small"], ["m", "Medium"], ["l", "Large"]].map(function (t) { return '<button type="button" data-v="' + t[0] + '" aria-pressed="' + (S.size === t[0]) + '">' + t[1] + "</button>"; }).join("") + "</div></div></div>" +
      '<div class="panel"><h2>Voice <span class="ar" lang="ar" dir="rtl">الصوت</span></h2>' +
      (E.speech.supported
        ? '<div class="notice voice-note">No English speech voice was found yet on this device. The Play buttons may stay silent. You can still read every sentence.</div><div class="field"><label for="s-voice">English voice</label><select id="s-voice"><option value="">Automatic (US English if available)</option>' +
          voices.map(function (v) { return '<option value="' + esc(v.voiceURI) + '"' + (S.voice === v.voiceURI ? " selected" : "") + ">" + esc(v.name + " (" + v.lang + ")") + "</option>"; }).join("") + "</select></div>" +
          '<div class="field"><label for="s-rate">Speaking speed: <span id="rate-v">' + Number(S.rate).toFixed(2) + '</span></label><input type="range" id="s-rate" min="0.6" max="1.1" step="0.05" value="' + S.rate + '"></div>' +
          '<div class="btn-row"><button type="button" class="audio" data-say="Hello! This is how I sound. Welcome to the course." aria-label="Test the voice">Test voice</button></div>'
        : '<div class="notice">This browser has no speech synthesis. Every sentence in the course is also shown as text, so you can still study.</div>') + "</div>" +
      '<div class="panel"><h2>Your progress <span class="ar" lang="ar" dir="rtl">تقدّمك</span></h2><p class="muted">Progress is stored only in this browser. Export a backup file to keep it safe or to move to another device.' + (E.state.backup ? " Last backup: " + esc(E.state.backup) + "." : " You have not made a backup yet.") + "</p>" +
      '<div class="btn-row"><button type="button" class="btn btn-soft" id="s-exp">Export backup</button><label class="btn btn-soft" for="s-imp" style="cursor:pointer">Import backup</label><input type="file" id="s-imp" accept="application/json,.json" class="sr-only"><button type="button" class="btn btn-ghost" id="s-reset">Delete all my progress</button></div><p id="s-msg" role="status"></p></div>';

    root.querySelector("#s-ar").onchange = function (e) { E.setSetting("arabic", e.target.checked); };
    function seg(id, key) {
      var el = root.querySelector(id);
      el.onclick = function (e) {
        var b = e.target.closest("button"); if (!b) return;
        E.setSetting(key, b.dataset.v);
        el.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
      };
    }
    seg("#s-th", "theme"); seg("#s-sz", "size");
    var v = root.querySelector("#s-voice");
    if (v) {
      v.onchange = function () { E.setSetting("voice", v.value); };
      var r = root.querySelector("#s-rate");
      r.oninput = function () { root.querySelector("#rate-v").textContent = Number(r.value).toFixed(2); };
      r.onchange = function () { E.setSetting("rate", parseFloat(r.value)); };
      if (voices.length) root.querySelector(".voice-note").style.display = "none";
    }
    var msg = root.querySelector("#s-msg");
    root.querySelector("#s-exp").onclick = function () { E.download("english-30-progress-" + E.today() + ".json", E.exportData(), "application/json"); msg.textContent = "Backup file created."; };
    root.querySelector("#s-imp").onchange = function (e) {
      var f = e.target.files[0]; if (!f) return;
      var rd = new FileReader();
      rd.onload = function () {
        try { E.importData(String(rd.result)); msg.textContent = "Backup restored."; setTimeout(function () { location.reload(); }, 600); }
        catch (x) { msg.textContent = "That file is not a valid backup."; }
      };
      rd.readAsText(f);
    };
    root.querySelector("#s-reset").onclick = function () {
      if (confirm("Delete all your progress in this browser? This cannot be undone.")) { E.reset(); location.reload(); }
    };
  }
})();
