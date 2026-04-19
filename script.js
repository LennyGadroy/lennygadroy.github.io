(function () {
  'use strict';

  var savedTheme = localStorage.getItem('lg-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  document.addEventListener('DOMContentLoaded', function () {

    var themeBtn = document.createElement('button');
    themeBtn.className = 'ThemeToggle';
    themeBtn.setAttribute('aria-label', 'Basculer le mode sombre / clair');
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lg-theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    initHamburger();
    initScrollReveal();
  });

  function initHamburger() {
    var navbar = document.querySelector('.NavBar');
    if (!navbar) return;

    var btn = document.createElement('button');
    btn.className = 'HamburgerBtn';
    btn.setAttribute('aria-label', 'Ouvrir le menu navigation');
    btn.setAttribute('aria-expanded', 'false');
    btn.innerHTML = '<span class="HamburgerLine"></span><span class="HamburgerLine"></span><span class="HamburgerLine"></span>';
    navbar.appendChild(btn);

    var nav = document.createElement('nav');
    nav.className = 'MobileNav';
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navigation mobile');
    nav.innerHTML =
      '<a href="index.html">Accueil</a>' +
      '<div class="MobileNavDivider"></div>' +
      '<span style="padding:6px 16px;font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Réalisations</span>' +
      '<div class="MobileNavSub">' +
        '<a href="projets.html">Projets</a>' +
        '<a href="designs.html">Designs</a>' +
        '<a href="albums.html">Albums</a>' +
      '</div>' +
      '<div class="MobileNavDivider"></div>' +
      '<a href="skills.html">Compétences</a>' +
      '<a href="cv.html">Curriculum</a>' +
      '<div class="MobileNavDivider"></div>' +
      '<div class="MobileNavCTA"><a href="contact.html" class="BtnSolid">Me contacter</a></div>';
    document.body.appendChild(nav);

    function toggle(force) {
      var open = (force !== undefined) ? force : !nav.classList.contains('open');
      nav.classList.toggle('open', open);
      btn.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    }

    btn.addEventListener('click', function (e) { e.stopPropagation(); toggle(); });

    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target) && !nav.contains(e.target)) toggle(false);
    });

    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { toggle(false); });
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 950) toggle(false);
    });
  }

  function initScrollReveal() {
    var sels = ['.ContentCard','.Panel','.CvSection','.AlbumSection','.ContactCol','.ContactFormPanel','.SkillCard','.LogoItem','.AlbumGrid'];
    sels.forEach(function (s) {
      document.querySelectorAll(s).forEach(function (el) {
        if (!el.classList.contains('reveal')) el.classList.add('reveal');
      });
    });
    var els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { obs.observe(el); });
  }

})();