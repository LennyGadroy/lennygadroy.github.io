(function () {
  'use strict';
  const savedTheme = localStorage.getItem('lg-theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  document.addEventListener('DOMContentLoaded', () => {

    const themeBtn = document.createElement('button');
    themeBtn.className = 'ThemeToggle';
    themeBtn.setAttribute('aria-label', 'Basculer le mode sombre');
    themeBtn.title = 'Changer le thème';
    themeBtn.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
    document.body.appendChild(themeBtn);

    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('lg-theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    const savedLang = localStorage.getItem('lg-lang') || 'fr';
    const langWrap = document.createElement('div');
    langWrap.className = 'LangToggle';
    langWrap.setAttribute('aria-label', 'Changer la langue');
    const btnFR = document.createElement('button');
    btnFR.className = 'LangBtn' + (savedLang === 'fr' ? ' active' : '');
    btnFR.dataset.lang = 'fr';
    btnFR.textContent = 'FR';
    const btnEN = document.createElement('button');
    btnEN.className = 'LangBtn' + (savedLang === 'en' ? ' active' : '');
    btnEN.dataset.lang = 'en';
    btnEN.textContent = 'EN';
    langWrap.appendChild(btnFR);
    langWrap.appendChild(btnEN);
    document.body.appendChild(langWrap);

    langWrap.addEventListener('click', (e) => {
      const btn = e.target.closest('.LangBtn');
      if (!btn) return;
      const lang = btn.dataset.lang;
      localStorage.setItem('lg-lang', lang);
      langWrap.querySelectorAll('.LangBtn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyLang(lang);
    });

    if (savedLang === 'en') applyLang('en');

    initScrollReveal();
  });

  function initScrollReveal() {
    const selectors = [
      '.ContentCard',
      '.Panel',
      '.CvSection',
      '.AlbumSection',
      '.ContactCol',
      '.ContactFormPanel',
      '.SkillCard',
      '.LogoItem',
      '.AlbumGrid',
    ];

    selectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
        }
      });
    });

    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: '0px 0px -40px 0px',
    });

    revealEls.forEach(el => observer.observe(el));
  }

  const translations = {
    fr: {
      nav_home:       'Accueil',
      nav_projects:   'Projets',
      nav_skills:     'Compétences',
      nav_cv:         'CV',
      nav_contact:    'Contact',
      nav_designs:    'Réalisations',
      nav_albums:     'Albums',
      btn_download_cv: '⬇ Télécharger le CV',
      btn_contact:    'Me contacter',
      btn_projects:   'Voir mes projets',
      footer_rights:  'Tous droits réservés.',
    },
    en: {
      nav_home:       'Home',
      nav_projects:   'Projects',
      nav_skills:     'Skills',
      nav_cv:         'Resume',
      nav_contact:    'Contact',
      nav_designs:    'Designs',
      nav_albums:     'Albums',
      btn_download_cv: '⬇ Download Resume',
      btn_contact:    'Contact me',
      btn_projects:   'See my projects',
      footer_rights:  'All rights reserved.',
    },
  };

  function applyLang(lang) {
    document.querySelectorAll('[data-fr]').forEach(el => {
      const text = lang === 'fr' ? el.dataset.fr : el.dataset.en;
      if (text !== undefined) el.textContent = text;
    });

    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const t = translations[lang];
      if (t && t[key]) el.textContent = t[key];
    });
  }

})();