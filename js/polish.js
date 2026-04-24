// ─── 1. Page fade-in ────────────────────────────────────────────
document.documentElement.style.opacity = '0';
document.documentElement.style.transition = 'opacity 0.35s ease';
window.addEventListener('load', function () {
  document.documentElement.style.opacity = '1';
});

// ─── 2. Active nav link ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
  var path = window.location.pathname;
  document.querySelectorAll('.nav-links > a').forEach(function (a) {
    var href = a.getAttribute('href') || '';
    // Normalize both to compare
    var aPath = new URL(a.href, window.location.href).pathname.replace(/\/index\.html$/, '/');
    var curPath = path.replace(/\/index\.html$/, '/');
    if (aPath === curPath || (curPath.endsWith('/contact/') && href.includes('contact'))) {
      a.style.color = 'var(--text)';
    }
  });
});

// ─── 3. Project thumbnail subtle zoom on hover ──────────────────
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.project-thumb').forEach(function (img) {
    var wrap = document.createElement('div');
    wrap.style.cssText = 'overflow:hidden;width:360px;height:260px;flex-shrink:0;';
    img.style.cssText += 'width:100%;height:100%;object-fit:cover;transition:transform 0.5s ease;';
    img.parentNode.insertBefore(wrap, img);
    wrap.appendChild(img);
    var row = img.closest('.project-row');
    if (row) {
      row.addEventListener('mouseenter', function () { img.style.transform = 'scale(1.04)'; });
      row.addEventListener('mouseleave', function () { img.style.transform = 'scale(1)'; });
    }
  });
});

// ─── 5. Year grouping in project list ───────────────────────────
(function () {
  var rows = Array.from(document.querySelectorAll('.project-row'));
  if (!rows.length) return;
  var lastYear = null;

  function makeLine(top, bottom) {
    var d = document.createElement('div');
    d.style.cssText = 'position:absolute;left:31.5px;width:1px;background:var(--border);pointer-events:none;top:' + top + ';bottom:' + bottom + ';';
    return d;
  }

  rows.forEach(function (row, i) {
    var yearEl = row.querySelector('.project-year');
    if (!yearEl) return;
    var year = yearEl.textContent.trim();
    var nextSame = rows[i + 1] && rows[i + 1].querySelector('.project-year') &&
                   rows[i + 1].querySelector('.project-year').textContent.trim() === year;

    if (year === lastYear) {
      // full-height line through this row
      row.classList.add('year-same');
      row.appendChild(makeLine('0', '0'));
    } else if (nextSame) {
      // line from below the year text to the bottom of the row
      row.classList.add('year-first');
      requestAnimationFrame(function () {
        var top = yearEl.offsetTop + yearEl.offsetHeight + 6;
        row.appendChild(makeLine(top + 'px', '0'));
      });
    }
    lastYear = year;
  });
})();

// ─── 6. Click-to-copy on email addresses
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="mailto:"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var email = a.getAttribute('href').replace('mailto:', '');
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(function () {
          showCopied(a);
        }).catch(function () {});
      }
      // still opens mail client
    });
  });

  function showCopied(el) {
    var tip = document.createElement('span');
    tip.textContent = 'Copied!';
    tip.style.cssText = [
      'position:absolute',
      'background:#0d0d0d',
      'color:#fff',
      'font-size:12px',
      'padding:3px 8px',
      'pointer-events:none',
      'white-space:nowrap',
      'opacity:1',
      'transition:opacity 0.4s ease',
      'margin-left:8px',
      'top:50%',
      'transform:translateY(-50%)',
    ].join(';');
    el.style.position = 'relative';
    el.appendChild(tip);
    setTimeout(function () { tip.style.opacity = '0'; }, 1200);
    setTimeout(function () { tip.remove(); el.style.position = ''; }, 1700);
  }
});
