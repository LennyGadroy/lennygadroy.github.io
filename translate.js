(function () {
  'use strict';

  var T = {
    fr: {
      ribbon_exp:      '+2 Années d\'Expériences ✦ ',
      ribbon_proj:     '+20 Projets réalisés \u00A0➔\u00A0 98% retours positifs \u00A0➔\u00A0',
      text_reveal:     'Bienvenue dans mon univers créatif. Je suis Lenny Gadroy, étudiant passionné par l\'UI et l\'UX Design. Mon objectif ? Transformer des concepts complexes en expériences digitales fluides, intuitives et mémorables. Explorez mon portfolio pour découvrir ma vision du design, où l\'esthétisme rencontre la fonctionnalité à chaque interaction.',
      merge_label:     'Ma méthode :',
      cta_projects:    'Voir mes projets',
      cta_cv:          'Mon CV',
      cta_contact:     'Me contacter',
      btn_download_cv: '⬇ Télécharger le CV',
      nav_contact:     'Me contacter',
    },
    en: {
      ribbon_exp:      '+2 Years of Experience ✦ ',
      ribbon_proj:     '+20 Projects completed \u00A0➔\u00A0 98% positive feedback \u00A0➔\u00A0',
      text_reveal:     'Welcome to my creative universe. I am Lenny Gadroy, a student passionate about UI and UX Design. My goal? Transforming complex concepts into smooth, intuitive and memorable digital experiences. Explore my portfolio to discover my vision of design, where aesthetics meet functionality at every interaction.',
      merge_label:     'My approach:',
      cta_projects:    'See my projects',
      cta_cv:          'My Resume',
      cta_contact:     'Contact me',
      btn_download_cv: '⬇ Download Resume',
      nav_contact:     'Contact me',
    },
  };

  var savedLang = localStorage.getItem('lg-lang') || 'fr';

  if (savedLang === 'en') {
    var tr = document.getElementById('TextReveal');
    if (tr) tr.textContent = T.en.text_reveal;
  }

  document.addEventListener('DOMContentLoaded', function () {
    
    var langWrap = document.createElement('div');
    langWrap.className = 'LangToggle';
    
    var btnFR = document.createElement('button');
    btnFR.className = 'LangBtn' + (savedLang === 'fr' ? ' active' : '');
    btnFR.dataset.lang = 'fr'; btnFR.textContent = 'FR';
    
    var btnEN = document.createElement('button');
    btnEN.className = 'LangBtn' + (savedLang === 'en' ? ' active' : '');
    btnEN.dataset.lang = 'en'; btnEN.textContent = 'EN';
    
    langWrap.appendChild(btnFR); 
    langWrap.appendChild(btnEN);
    document.body.appendChild(langWrap);

    langWrap.addEventListener('click', function (e) {
      var btn = e.target.closest('.LangBtn');
      if (!btn) return;
      var lang = btn.dataset.lang;
      
      localStorage.setItem('lg-lang', lang);
      
      langWrap.querySelectorAll('.LangBtn').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      
      applyLang(lang);
    });

    applyLang(savedLang);
  });

  function applyLang(lang) {
    var t = T[lang] || T.fr;
    document.documentElement.lang = lang === 'fr' ? 'fr' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.dataset.i18n; 
      if (t[k] !== undefined) el.textContent = t[k];
    });
    
    document.querySelectorAll('[data-fr]').forEach(function (el) {
      var v = lang === 'fr' ? el.dataset.fr : (el.dataset.en || el.dataset.fr);
      if (v !== undefined) el.textContent = v;
    });
    
    document.querySelectorAll('.RibbonExp').forEach(function (el) { el.textContent = t.ribbon_exp; });
    document.querySelectorAll('.RibbonProj').forEach(function (el) { el.textContent = t.ribbon_proj; });

    var textReveal = document.getElementById('TextReveal');
    if (textReveal) {
      var words = textReveal.querySelectorAll('.Word');
      if (words.length > 0) {
        var newWords = t.text_reveal.split(' ');
        words.forEach(function (sp, i) { if (newWords[i] !== undefined) sp.textContent = newWords[i]; });
      } else {
        textReveal.textContent = t.text_reveal;
      }
    }

    var ml = document.querySelector('.ListText');
    if (ml) ml.textContent = t.merge_label;

    var fp = document.querySelector('.FooterBottom p');
    if (fp) fp.textContent = lang === 'en' ? '\u00A9 2026 Lenny Gadroy. All rights reserved.' : '\u00A9 2026 Lenny Gadroy. Tous droits réservés.';

    document.querySelectorAll('.NavBtn .BtnSolid').forEach(function (el) { el.textContent = t.nav_contact; });
    
    var mc = document.querySelector('.MobileNavCTA .BtnSolid');
    if (mc) mc.textContent = t.nav_contact;
  }

})();