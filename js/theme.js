// Theme switcher — shared across pages
(function () {
  const THEMES = ['default', 'dark', 'warm', 'ocean', 'clay'];
  const LABELS = ['Default', 'Dark', 'Warm', 'Ocean', 'Clay'];
  const SWATCHES = ['#ffffff', '#111111', '#faf7f2', '#f0f4ff', '#fdf6f0'];
  const ACCENTS  = ['#0d0d0d', '#eeeeee', '#5c4a32', '#1a55cc', '#c4533a'];

  const saved = localStorage.getItem('ow-theme') || 'default';

  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    localStorage.setItem('ow-theme', t);
    document.querySelectorAll('.theme-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.theme === t);
    });
  }

  function buildSwitcher() {
    const panel = document.createElement('div');
    panel.id = 'theme-switcher';
    panel.innerHTML = THEMES.map((t, i) => `
      <button class="theme-btn${t === saved ? ' active' : ''}" data-theme="${t}" title="${LABELS[i]}">
        <span class="theme-swatch" style="background:${SWATCHES[i]};border-color:${ACCENTS[i]}"></span>
        <span class="theme-label">${LABELS[i]}</span>
      </button>
    `).join('');
    document.body.appendChild(panel);

    panel.querySelectorAll('.theme-btn').forEach(b => {
      b.addEventListener('click', () => applyTheme(b.dataset.theme));
    });
  }

  // Apply immediately to avoid flash
  document.documentElement.setAttribute('data-theme', saved);

  document.addEventListener('DOMContentLoaded', buildSwitcher);
})();
