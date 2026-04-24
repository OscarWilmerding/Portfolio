// Robust dropdown — uses a hide delay to bridge the gap between trigger and menu
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.nav-dropdown-wrap').forEach(function (wrap) {
    var menu = wrap.querySelector('.nav-dropdown-menu');
    var hideTimer = null;

    function show() {
      clearTimeout(hideTimer);
      menu.style.opacity = '1';
      menu.style.pointerEvents = 'all';
      menu.style.transform = 'translateY(0)';
    }

    function hide() {
      hideTimer = setTimeout(function () {
        menu.style.opacity = '0';
        menu.style.pointerEvents = 'none';
        menu.style.transform = 'translateY(-6px)';
      }, 120);
    }

    wrap.addEventListener('mouseenter', show);
    wrap.addEventListener('mouseleave', hide);
    menu.addEventListener('mouseenter', show);
    menu.addEventListener('mouseleave', hide);
  });
});
