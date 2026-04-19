(function () {'use strict';

  var dict = {
    /* ── Header ── */
    "Accueil": "Home",
    "Réalisations": "My Works",
    "Projets": "Projects",
    "Compétences": "Skills",
    "Curriculum": "Resume",
    "Me contacter": "Contact me",

    /* ── Create.JS ── */
    "Créez des": "Create",
    "Portfolios": "Portfolios",
    "Sites internets": "Websites",
    "Boutiques": "Online Shops",
    "avec moi !": "with me !",
    "Pas que des": "Not just",
    "mais aussi des photos !": "but also photos!",

    /* ── Merge.JS ── */
    "Ma méthode :": "My approach :",
    "Auditer": "Audit",
    "Observer": "Observe",
    "Comprendre": "Understand",
    "Esquisser": "Sketch",
    "Structurer": "Structure",
    "Concevoir": "Design",
    "Maquetter": "Mock-up",
    "Harmoniser": "Harmonize",
    "Sublimer": "Enhance",
    "Prototyper": "Prototype",
    "Animer": "Animate",
    "Tester": "Test",
    "Itérer": "Iterate",
    "Simplifier": "Simplify",
    "Adapter": "Adapt",
    "Accessibiliser": "Make Accessible",
    "Optimiser": "Optimize",
    "Intégrer": "Integrate",
    "Livrer": "Deliver",
    "Recommencer": "Restart",

    /* ── Footer ── */
    "Étudiant passionné par l'UI/UX Design, créant des expériences digitales fluides et mémorables.": "A student passionate about UI/UX Design, creating seamless and memorable digital experiences.",
    "Mes projets": "My projects",
    "Mes albums": "My albums",
    "Mon CV": "My Resume",
    "© 2026 Lenny Gadroy. Tous droits réservés.": "© 2026 Lenny Gadroy. All rights reserved.",

    /* ── WIP ── */
    "🚧 Portfolio en construction": "🚧 Portfolio under construction",
    "Je travaille actuellement sur cette nouvelle version. Mon ancien portfolio reste consultable !": "I'm currently working on this new version. My old portfolio is still available!",
    "Voir l'ancienne version": "See the old version",

    /* ── Index ── */
    "+2 Années d'Expériences ✦ ":"+2 Years of Experience ✦ ",
    "+20 Projets réalisés \u00a0➔\u00a0 98% retours positifs \u00a0➔\u00a0":"+20 Completed Projects \u00a0➔\u00a0 98% Positive Reviews \u00a0➔\u00a0",
    "Bienvenue dans mon univers créatif. Je suis Lenny Gadroy, étudiant passionné par l'UI et l'UX Design. Mon objectif ? Transformer des concepts complexes en expériences digitales fluides, intuitives et mémorables. Explorez mon portfolio pour découvrir ma vision du design, où l'esthétisme rencontre la fonctionnalité à chaque interaction.":"Welcome to my creative universe. I'm Lenny Gadroy, a student passionate about UI and UX Design. My goal? Transforming complex concepts into smooth, intuitive and memorable digital experiences. Explore my portfolio to discover my vision of design, where aesthetics meet functionality at every interaction.",
    "Designs": "Designs",
    "Uniques": "Unique",
    "+100": "+100",
    "Créations": "Creations",

    /* ── Projects ── */
    
    /* ── Albums ── */
    "Brûleurs de Gommes : Édition 2026": "Brûleurs de Gommes : 2026 Edition",
    "dimanche 5 avril 2026": "Sunday, April 5, 2026",
    "Exposition automobile":"Car exhibition",
    "Show Drift": "Drift Show",
    "Gala des Pièces Jaunes": "Pièces Jaunes Gala",
    "jeudi 22 janvier 2026": "Thursday, January 22, 2026",
    "vendredi 05 décembre 2025": "Friday, December 5, 2025",
    "jeudi 20 juillet 2025": "Thursday, July 20, 2025",
    "Cabaret Vert : édition 2025": "Cabaret Vert: 2025 Edition",
    "du jeudi 14 août au dimanche 18 août 2025": "from Thursday, August 14th to Sunday, August 18th, 2025",
    "Paysages": "Landscapes",
    "novembre 2025 → avril 2026": "November 2025 → April 2026",
    "décembre 2025 → avril 2026": "December 2025 → April 2026",
    "Château fort de Sedan": "Sedan Castle",
    "30 novembre 2025": "November 30, 2025",
    "Animaux": "Animals",
    "Autres": "Other",

    /* ── Designs ── */
    "Réalisations Graphiques, Logos et Affiches": "Graphic Work, Logos and Posters",
    "Affiches": "Posters",
    "Présentation, Recrutement et Nouveauté": "Presentation, Recruitment and News",
    "Promotions de biens": "Product Promotions",
    "Annonce de recrutement": "Recruitment Ad",
    "Semaine des Échecs": "Chess Week",
    "Affiche publicitaire": "Advertising Poster",
    "Rubrique décoration": "Decoration Section",
    "Affiche promotionnelle": "Promotional Poster",

    /* ── Skills ── */
    "Catalogue des compétences": "Skills Catalogue",
    "Tous": "All",
    "Développement": "Development",
    "Anglais B1": "English",
    "Maîtrise de la communication usuelle, orale et écrite, en contexte professionnel": "Mastery of everyday communication, both oral and written, in a professional context",
    "Structuration sémantique et accessibilité des documents web": "Semantic structuring and accessibility of web documents",
    "Mise en forme avancée et responsive design": "Advanced formatting and responsive design",
    "Programmation logique et manipulation": "Logical programming and manipulation",
    "Création de Design Systems, prototypage interactif et collaboration UI/UX": "Creation of Design Systems, interactive prototyping, and UI/UX collaboration",
    "Storytelling visuel et création de carrousels panoramiques pour Instagram": "Visual storytelling and creation of panoramic carousels for Instagram",
    "Utilisation d'un framework CSS utilitaire pour un développement UI rapide et cohérent": "Use of a utility CSS framework for rapid and consistent UI development",
    "Conception rapide de supports de communication visuelle et assets social media": "Rapid design of visual communication materials and social media assets",
    "Gestion de connaissances, modélisation de bases de données et espaces de travail collaboratifs": "Knowledge management, database modeling, and collaborative workspaces",
    "Montage vidéo vertical dynamique et post-production pour les réseaux sociaux": "Dynamic vertical video editing and post-production for social media",
    "Conception, modélisation et administration de bases de données relationnelles": "Design, modeling, and administration of relational databases",
    "Stratégies d'optimisation technique et sémantique pour les moteurs de recherche": "Technical and semantic optimization strategies for search engines",
    "Administration de canaux de communication et intégration d'outils productifs": "Administration of communication channels and integration of production tools",
    "Développement de fonctionnalités backend et interaction avec les bases de données": "Backend feature development and database interaction",
    "Développement d'applications côté serveur et gestion d'API scalables": "Server-side application development and management of scalable APIs",
    "Gestion de projet agile via la méthodologie Kanban et automatisation des workflows": "Agile project management using the Kanban methodology and workflow automation",
    "Pilotage de projets complexes via des cycles itératifs et gestion de backlog": "Managing complex projects through iterative cycles and backlog management",
    "Développement d'interfaces composants réutilisables et gestion d'état complexe": "Development of reusable component interfaces and complex state management",
    "Suite Adobe": "Adobe Suite",
    "Maîtrise avancée du flux de création graphique (Photoshop, Illustrator, InDesign)": "Advanced mastery of the graphic design workflow (Photoshop, Illustrator, InDesign)",
    "Panier d'installation": "Installation Cart",
    "Glissez les compétences ici": "Drag skills here",
    "Installer la sélection": "Install Selection",
    "Compétences acquises": "Acquired Skills",
    "Minage de Crédits": "Credit Mining",
    "Temps de travail alloué (Heures) :": "Allocated Work Time (Hours) :",
    "Lancer le Minage": "Start Mining",
    "Calcul en cours...": "Processing…",
    "Annuler": "Cancel",
    "Confirmer": "Confirm",
    "OPPORTUNITÉ DÉTECTÉE": "OPPORTUNITY DETECTED",
    "Cliquez rapidement sur les cibles bleues !": "Click quickly on the blue targets!",
    "Niveau insuffisant": "Level too low",
    "Dans le panier":"In cart",

    /* ── Contact ── */
    "Mes Coordonnées": "My Contact Details",
    "Quel est votre message ?": "What is your message?",
    "Nom": "Name",
    "Objet": "Subject",
    "Message": "Message",
    "Envoyer votre message": "Send your message",
    "Réinitialiser": "Reset",

    /* ── CV ── */
    "UI / UX Designer et Webdesigner": "UI / UX Designer & Web Developer",
    "Étudiant en troisième année de Licence CRRW à l'École d'Ingénieurs en Sciences Industrielles et Numérique. Passionné par le design d'expérience utilisateur et l'intégration web, je crée des interfaces digitales intuitives et esthétiques.":"Third-year CRRW Bachelor's student at the Engineering School. Passionate about user experience design and web integration, I create intuitive and aesthetically pleasing digital interfaces.",
    "Contact": "Contact",
    "Âge :": "Age :",
    "20 ans": "20 years old",
    "Téléphone :": "Phone :",
    "Localisation :": "Location :",
    "Reims (51100) et Charleville-Mézières (08000)": "Reims (51100) and Charleville-Mézières (08000)",
    "Permis B": "Driving Licence B",
    "et véhiculé": "and own a vehicle",
    "LinkedIn :": "LinkedIn :",
    "Figma, Suite Adobe": "Figma, Adobe Suite",
    "Intégration :": "Web Integration:",
    "Gestion de projet :": "Project Management:",
    "Dynamique": "Dynamic",
    "Rigoureux": "Rigorous",
    "Organisé": "Organized",
    "Autonome": "Autonomous",
    "Esprit d'équipe": "Team spirit",
    "Certification SEO HubSpot": "HubSpot SEO Certification",
    "Certification PIX (Score : 531)": "PIX Certification (Score: 531)",
    "Langues": "Languages",
    "Français : Langue maternelle": "French : Native",
    "Anglais : Niveau B1": "English : B1 Level",
    "Expériences Professionnelles": "Professional Experience",
    "UI / UX Designer & Intégrateur CMS": "UI / UX Designer & CMS Integrator",
    "avril 2026 à juin 2026": "April 2026 to June 2026",
    "Création intégrale d'un site web via WordPress, comprenant les optimisations d'UI, d'UX, et de SEO": "Complete website creation via WordPress, including UI, UX and SEO optimisations",
    "Création du site avec WordPress et WooCommerce": "Website creation with WordPress and WooCommerce",
    "Optimisation de l'interface utilisateur et de l'expérience utilisateur": "UI and UX optimisation",
    "Référencement SEO": "SEO Referencing",
    "Création d'illustrations et d'éléments graphiques.": "Creation of illustrations and graphic elements.",
    "UI / UX Designer & Animateur 2D": "UI / UX Designer & 2D Animator",
    "Mars 2026 à avril 2026": "March 2026 to April 2026",
    "Refonte intégrale du site web, avec optimisation de l'UI et de l'UX.": "Full website redesign with UI and UX optimisation.",
    "Redesign intégral du site web": "Complete website redesign",
    "Refonte des visuels, mascottes, et illustrations": "Redesign of visuals, mascots and illustrations",
    "Amélioration de l'interface de l'application mobile": "Mobile app interface improvement",
    "Conception de contenu pour réseaux sociaux.": "Social media content creation.",
    "Développeur Full Stack - Créateur de jeu web": "Full Stack Developer – Web Game Creator",
    "Depuis octobre 2025": "Since October 2025",
    "Conception et développement total d'un blindtest multijoueur, intégrant de nouvelles mécaniques.": "Full design and development of a multiplayer blindtest, integrating new game mechanics.",
    "Game Design et Expérience Utilisateur.": "Game Design and User Experience.",
    "Développement Full Stack et base de données : HTML, CSS, JS, PHP, SQL.": "Full Stack development and database: HTML, CSS, JS, PHP, SQL.",
    "Architecture technique temps réel : Node.js, Socket.io.": "Real-time technical architecture: Node.js, Socket.io.",
    "Intégration de fonctionnalités stratégiques et compétitives.": "Integration of strategic and competitive features.",
    "Assistant Stratégie de Vente": "Sales Strategy Assistant",
    "Janvier 2024 à décembre 2024": "January 2024 to December 2024",
    "Prospection omnicanale et négociation commerciale.": "Omnichannel prospecting and commercial negotiation.",
    "Conception de stratégie de communication digitale.": "Digital communication strategy design.",
    "Création de visuels et de contenus marketing.": "Creation of marketing visuals and content.",
    "Coach et Formateur aux jeux d'Échecs": "Chess Coach and Trainer",
    "Août 2023 à août 2024": "August 2023 to August 2024",
    "Organisation de stages d'initiation et d'apprentissage pour enfants et adolescents.": "Organisation of introductory learning courses for children and teenagers.",
    "Encadrement pédagogique.": "Educational supervision.",
    "Aménagement d'un club.": "Club setup.",
    "Bénévole": "Volunteer",
    "Février 2023 à juillet 2025": "February 2023 to July 2025",
    "Aide à l'organisation d'événements municipaux et logistique.": "Assistance with municipal event organisation and logistics.",
    "Diplômes et Formations": "Education & Training",
    "Licence CRRW": "CRRW Bachelor's Degree",
    "Formation axée sur le développement de projets numériques, visant à développer des compétences techniques et transversales pour les métiers du numérique.": "Training focused on digital project development, building technical and cross-disciplinary skills for digital careers.",
    "Maîtrise des languages de programmation : HTML, CSS, JS, PHP.": "Proficiency in programming languages: HTML, CSS, JS, PHP.",
    "Création de projets de développement web.": "Web development project creation.",
    "Réalisation de supports de communication visuelle.": "Visual communication material creation.",
    "Lycée Jean-Baptiste Colbert - Reims": "Jean-Baptiste Colbert High School – Reims",
    "Diplôme obtenu avec la mention Bien.": "Degree obtained with Merit.",
    "Prospection et négociation client en BtoC / BtoB.": "B2C / B2B customer prospecting and negotiation.",
    "Identifier de nouvelles opportunités de marché.": "Identifying new market opportunities.",
    "Fidéliser la clientèle existante.": "Building customer loyalty.",
    "Conception de contenus.": "Content creation.",
    "Animation de communauté.": "Community management.",
    "Bac Général": "General Baccalaureate",
    "Lycée Hugues Libergier - Reims": "Lycée Hugues Libergier – Reims",
    "Spécialités Mathématiques et SES.": "Specialties: Mathematics and Social Sciences.",
    "Centres d'intérêt": "Interests",
    "Musculation": "Weightlifting",
    "Cyclisme": "Cycling",
    "Sports mécaniques : F1, Moto GP": "Motorsports: F1, MotoGP",
    "Industrie automobile": "Automotive industry",
    "Musique": "Music",
    "Styles divers et variés": "Various styles",
    "⬇ Télécharger le CV": "⬇ Download Resume",
    "Voir mes réalisations": "View my work",
  };

  var revDict = {};
  Object.keys(dict).forEach(function (fr) { revDict[dict[fr]] = fr; });

  var STORAGE_KEY = 'lg-lang';
  var lang = localStorage.getItem(STORAGE_KEY) || 'fr';
  var btn;
  var busy = false;

  function translateTextNode(node) {
    var par = node.parentNode;
    if (!par) return;
    var tag = par.nodeName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;

    var raw     = node.textContent;
    var trimmed = raw.trim();
    if (!trimmed) return;

    var lookup = lang === 'en' ? dict[trimmed] : revDict[trimmed];
    if (!lookup) return;

    var leading  = raw.slice(0, raw.indexOf(trimmed));
    var trailing = raw.slice(raw.indexOf(trimmed) + trimmed.length);
    node.textContent = leading + lookup + trailing;
  }

  function translateSubtree(root) {
    var walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );
    var node;
    while ((node = walker.nextNode())) {
      translateTextNode(node);
    }
  }

  function applyLang(target) {
    lang = target;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute('lang', lang);

    busy = true;
    translateSubtree(document.body);
    busy = false;

    if (btn) btn.textContent = lang === 'fr' ? 'EN' : 'FR';
  }

  function createBtn() {
    btn = document.createElement('button');
    btn.className = 'LangToggle';
    btn.setAttribute('aria-label', 'Switch language / Changer de langue');
    btn.textContent = lang === 'fr' ? 'EN' : 'FR';

    btn.addEventListener('click', function () {
      applyLang(lang === 'fr' ? 'en' : 'fr');
    });

    document.body.appendChild(btn);
  }

  function watchMutations() {
    var observer = new MutationObserver(function (mutations) {
      if (busy || lang === 'fr') return;

      mutations.forEach(function (m) {
        m.addedNodes.forEach(function (n) {
          busy = true;
          if (n.nodeType === Node.ELEMENT_NODE) {
            translateSubtree(n);
          } else if (n.nodeType === Node.TEXT_NODE) {
            translateTextNode(n);
          }
          busy = false;
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }

  function injectStyles() {
    var style = document.createElement('style');
    style.textContent = [
      '.LangToggle {',
      '  position: fixed;',
      '  top: 20px;',
      '  right: 20px;',
      '  z-index: 9999;',
      '  width: 42px;',
      '  height: 42px;',
      '  border-radius: 50%;',
      '  border: 2px solid var(--One, #0050ff);',
      '  background: var(--Bg, #fff);',
      '  color: var(--One, #0050ff);',
      '  font-size: 0.75rem;',
      '  font-weight: 700;',
      '  letter-spacing: 0.04em;',
      '  cursor: pointer;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  box-shadow: 0 2px 8px rgba(0,0,0,.15);',
      '  transition: background .2s, color .2s, transform .15s;',
      '}',
      '.LangToggle:hover {',
      '  background: var(--One, #0050ff);',
      '  color: #fff;',
      '  transform: scale(1.08);',
      '}',
    ].join('\n');
    document.head.appendChild(style);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectStyles();
    createBtn();
    if (lang === 'en') applyLang('en');
    watchMutations();
  });

})();