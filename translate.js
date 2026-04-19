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
    "auditer.": "audit.",
    "observer.": "observe.",
    "comprendre.": "understand.",
    "esquisser.": "sketch.",
    "structurer.": "structure.",
    "concevoir.": "design.",
    "maquetter.": "mock-up.",
    "harmoniser.": "harmonize.",
    "sublimer.": "enhance.",
    "prototyper.": "prototype.",
    "animer.": "animate.",
    "tester.": "test.",
    "itérer.": "iterate.",
    "simplifier.": "simplify.",
    "adapter.": "adapt.",
    "accessibiliser.": "make accessible.",
    "optimiser.": "optimize.",
    "intégrer.": "integrate.",
    "livrer.": "deliver.",
    "recommencer.": "restart.",

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
    "+2 Années d'expériences ✦":"+2 Years of Experience ✦ ",
    "+20 Projets réalisés ➔ 98% retours positifs ➔":"+20 Completed Projects ➔ 98% Positive Reviews ➔",
    "Bienvenue dans mon univers créatif. Je suis Lenny Gadroy, étudiant passionné par l'UI et l'UX Design. Mon objectif ? Transformer des concepts complexes en expériences digitales fluides, intuitives et mémorables. Explorez mon portfolio pour découvrir ma vision du design, où l'esthétisme rencontre la fonctionnalité à chaque interaction.":"Welcome to my creative universe. I'm Lenny Gadroy, a student passionate about UI and UX Design. My goal? Transforming complex concepts into smooth, intuitive and memorable digital experiences. Explore my portfolio to discover my vision of design, where aesthetics meet functionality at every interaction.",
    "Designs": "Designs",
    "Uniques": "Unique",
    "+100": "+100",
    "Créations": "Creations",

    /* ── Projects ── */
    "Contexte & Problématique": "Context & Problematic",
    "Ma démarche": "My approach",
    "Identité visuelle": "Visual Identity",
    "Résultats": "Results",
    "Ce que ça m'a apporté": "What it brought me",
    "Premier Projet": "First Project",
    "Vision des éléments": "Vision of the elements",
    "Un portfolio, c'est le projet le plus difficile à designer : tu es à la fois le client, l'utilisateur et le designer.": "A portfolio is the hardest project to design: you are simultaneously the client, the user, and the designer.",
    "La v2 souffrait d'une identité visuelle générique, d'une navigation peu intuitive et d'une hiérarchie de l'information bancale. Les projets noyaient le reste du contenu.": "The v2 suffered from a generic visual identity, unintuitive navigation, and a shaky information hierarchy. The projects drowned out the rest of the content.",
    "L'objectif de la v3 : transformer un simple catalogue en outil de conversion, capable de décrocher des entretiens.": "The goal of v3: to transform a simple catalog into a conversion tool, capable of landing interviews.",
    "Auditer la situation actuelle": "Auditing the current situation",
    "Avant de toucher à Figma, j'ai commencé par auditer la v2 : qu'est-ce qui marchait ? Qu'est-ce qui freinait ?": "Before touching Figma, I started by auditing v2: what worked? What was holding it back?",
    "J'ai listé les frictions utilisateur (chemin trop long vers les projets, absence de hiérarchie visuelle, identité trop neutre) et défini des objectifs clairs pour chaque page.": "I listed the user frictions (path to projects too long, lack of visual hierarchy, overly neutral identity) and defined clear objectives for each page.",
    "Le zoning m'a permis de prioriser l'information : la home devait convaincre en 5 secondes, la page projets devait donner envie d'explorer, le CV devait rassurer sur les compétences techniques.": "Zoning allowed me to prioritize information: the homepage had to convince in 5 seconds, the projects page had to make you want to explore, the resume had to reassure on technical skills.",
    "J'ai ensuite travaillé les wireframes pour valider l'ergonomie avant d'investir dans le design.": "I then worked on the wireframes to validate the ergonomics before investing in the design.",
    "M'auto challenger": "Challenging myself",
    "Ce projet m'a appris à me challenger moi-même sans client externe pour me pousser.": "This project taught me how to challenge myself without an external client to push me.",
    "C'est là que la discipline de méthode compte vraiment. J'ai aussi compris que designer pour soi est un exercice d'ego : il faut savoir se mettre à la place de l'autre (recruteur, client potentiel) et non pas de soi.": "This is where methodological discipline really counts. I also understood that designing for oneself is an exercise in ego: you have to know how to put yourself in the other person's shoes (recruiter, potential client) and not your own.",
    'La contrainte de "se vendre sans se survendre" a affiné mon sens de la hiérarchie visuelle.': 'The constraint of \"selling yourself without overselling yourself\" refined my sense of visual hierarchy.',
    "Deuxième Projet": "Second Project",
    "Améliorer l'expérience des joueurs": "Improving the player experience",
    "GOON existait déjà sous une première forme fonctionnelle mais visuellement datée et techniquement limitée : une seule session de jeu à la fois, pas de gestion des scores en temps réel, une identité visuelle qui ne reflétait pas l'énergie d'un blindtest multijoueur.": "GOON already existed in an initial functional form, but was visually dated and technically limited: only one game session at a time, no real-time score management, and a visual identity that didn't reflect the energy of a multiplayer blind test.",
    "Le défi : refonte complète de l'expérience des joueurs, identité, interface et architecture technique, pour que le produit soit à la hauteur de ce qu'il promettait.": "The challenge: a complete overhaul of the player experience, identity, interface, and technical architecture, so that the product lived up to its promise.",
    "Perspective utilisateur": "User perspective",
    "J'ai commencé par analyser les pain points utilisateurs identifiés lors de parties de test : désorientations pendant la partie, manque de feedback visuel sur les scores, absence de tension dramatique dans l'interface.": "I started by analyzing the user pain points identified during playtests: disorientation during the game, lack of visual feedback on scores, absence of dramatic tension in the interface.",
    "Ces observations ont directement alimenté les 4 améliorations clés : niveaux de difficulté, événements aléatoires, bonus stratégiques, et scoring pondéré par le temps.": "These observations directly fueled the 4 key improvements: difficulty levels, random events, strategic bonuses, and time-weighted scoring.",
    "Le wireframe m'a permis de tester plusieurs structures pour l'écran de jeu : l'enjeu était de rendre lisibles simultanément ; la question, le timer, les scores, les bonus actifs, sans surcharger l'écran.": "Wireframing allowed me to test several layouts for the game screen: the challenge was to make the question, timer, scores, and active bonuses readable simultaneously without overloading the screen.",
    "Coordination de l'interface utilisateur": "User interface coordination",
    "Ce projet m'a confronté pour la première fois à la complexité d'une interface temps réel : les états de l'UI (en attente, en jeu, fin de manche, bonus actif…) doivent tous être anticipés dès le wireframe.": "This project confronted me for the first time with the complexity of a real-time interface: UI states (waiting, playing, end of round, active bonus...) all need to be anticipated straight from the wireframe.",
    "J'ai également appris à coordonner le design avec des contraintes back-end concrètes (Socket.io, latence réseau), cela m'a rendu bien plus pragmatique dans mes choix UI.": "I also learned to coordinate design with concrete back-end constraints (Socket.io, network latency), which made me much more pragmatic in my UI choices.",
    "Troisième Projet": "Third Project",
    "Une bonne forme mais une mauvaise forme": "Good substance, bad form",
    "Mü-Être est une marque dans le bien-être et le développement personnel.": "Mü-Être is a brand in wellness and personal development.",
    "Le site existant posait un problème fondamental : l'identité visuelle ne reflétait pas la douceur et la confiance que la marque cherchait à transmettre.": "The existing website had a fundamental problem: the visual identity did not reflect the gentleness and confidence that the brand sought to convey.",
    "Navigation confuse, hiérarchie de contenu absente, aucune cohérence typographique : le fond était bon, la forme sabotait tout.": "Confusing navigation, absent content hierarchy, no typographic consistency: the substance was good, but the form undermined everything.",
    "La QVCT commence avant tout sur le site": "The QVCT starts with the website",
    "Avant le moindre trait de crayon, j'ai passé du temps à comprendre la cible : qui consulte ce site, dans quel état d'esprit, avec quelle intention ?": "Before drawing a single line, I spent time understanding the target audience: who visits this site, what is their state of mind, and with what intention?",
    "Les visiteurs cherchent de la réassurance, de la clarté, pas de la stimulation. Cette insight a orienté toutes les décisions de design : espaces généreux, typographie lisible, palette apaisante, parcours simple.": "Visitors seek reassurance and clarity, not stimulation. This insight guided all design decisions: generous spaces, readable typography, calming palette, simple journeys.",
    "Le zoning a d'abord cartographié les 8 zones clés à retravailler.": "Zoning first mapped out the 8 key areas to be reworked.",
    "Les wireframes ont testé plusieurs organisations pour la FAQ, les étapes d'accompagnement, et les articles de blog, des contenus denses qui nécessitaient une vraie réflexion sur la lisibilité.": "Wireframes tested several layouts for the FAQ, coaching steps, and blog articles—dense content that required real thought regarding readability.",
    "Prise en compte du sujet": "Taking the subject into account",
    "Ce projet m'a appris à designer pour une émotion précise plutôt que pour un effet visuel.": "This project taught me to design for a specific emotion rather than a visual effect.",
    "Sur un site bien-être, la sobre efficacité vaut mieux qu'une mise en page spectaculaire.": "On a wellness website, sober efficiency is better than a spectacular layout.",
    "Quatrième Projet": "Fourth Project",
    "Une base à revoir..": "A foundation to review..",
    "Primaire est un projet de création intégrale pour une marque e-commerce. Point de départ quasi nul : un site existant mais dépourvu d'identité établie.": "Primaire is an integral creation project for an e-commerce brand. The starting point was almost zero: an existing website but lacking an established identity.",
    "Le challenge d'une création from scratch, c'est l'absence de repères, tout est à inventer, ce qui est autant une liberté qu'une responsabilité.": "The challenge of creating from scratch is the lack of reference points; everything has to be invented, which is as much a freedom as it is a responsibility.",
    "Du benchmarking au zoning": "From benchmarking to zoning",
    "Le site existant ne reflétait pas leur expertise : identité visuelle vieillissante, structure de page sans logique de conversion, aucun storytelling produit.": "The existing site didn't reflect their expertise: an aging visual identity, a page structure with no conversion logic, and no product storytelling.",
    "J'ai donc commencé par un travail de positionnement : quelle est la cible, quelles sont ses habitudes d'achat en ligne, quels sites lui font confiance aujourd'hui ? Ce benchmark a nourri mes choix de structure et d'ergonomie.": "So I started with positioning work: who is the target, what are their online shopping habits, which sites do they trust today? This benchmark fueled my structural and ergonomic choices.",
    "Le zoning a posé les grandes zones prioritaires (hero, produits, blog, compte, contact, footer) et leur hiérarchie.": "The zoning laid out the main priority areas (hero, products, blog, account, contact, footer) and their hierarchy.",
    "Les wireframes ont ensuite été pensés avec les spécificités WooCommerce en tête, notamment les pages compte et panier, qui ont des contraintes UX propres au e-commerce.": "The wireframes were then designed with WooCommerce specificities in mind, notably the account and cart pages, which have UX constraints specific to e-commerce.",
    "Optimisation de ma méthode de travail": "Optimizing my workflow",
    "Travailler sur une création pure m'a obligé à structurer ma propre méthode de brief : quand il n'y a pas de client qui t'impose des contraintes, tu dois te les donner toi-même.": "Working on a pure creation forced me to structure my own briefing method: when there is no client imposing constraints on you, you have to set them for yourself.",
    "J'ai aussi approfondi les spécificités UX du e-commerce, les parcours d'achat ont leurs propres règles, distinctes d'un site vitrine.": "I also deepened my knowledge of e-commerce UX specificities; purchasing journeys have their own rules, distinct from a showcase website.",
    "Cinquième Projet": "Fifth Project",
    "Un site inexistant...": "A non-existent website...",
    "GeopTime est une entreprise spécialisée dans la gestion du temps et de la localisation.": "GeopTime is a company specialized in time and location management.",
    "L'objectif : créer un site qui inspire confiance d'emblée et positionne clairement leur offre.": "The goal: to create a website that immediately inspires trust and clearly positions their offer.",
    "Une création complète et moderne": "A complete and modern creation",
    "Sans véritable site à analyser, j'ai d'abord cartographié les objectifs métier : qu'est-ce que le site doit faire concrètement ? (Générer des contacts, rassurer sur l'expertise, expliquer les fonctionnalités).": "Without a real site to analyze, I first mapped the business objectives: what exactly should the site do? (Generate leads, reassure about expertise, explain features).",
    "Ces objectifs ont guidé la structure du zoning et la priorité des blocs d'information.": "These objectives guided the zoning structure and the priority of information blocks.",
    "Une nouvelle identité plus moderne": "A more modern identity",
    "Côté identité, j'ai travaillé sur une nouvelle palette et un nouveau logo qui évoquent à la fois la précision (géolocalisation) et la modernité : une refonte de l'image autant que du site.": "In terms of identity, I worked on a new palette and a new logo that evoke both precision (geolocation) and modernity: a refit of the image as much as the site.",
    "Du full-stack pour la première fois": "For the first time, full-stack",
    "C'est mon premier projet full-stack en autonomie :": "This is my first full-stack project done independently:",
    "Ça m'a appris à penser le design avec les contraintes du développement en tête dès la phase de maquette, certains effets visuels séduisants en Figma sont cauchemars à implémenter.": "It taught me to think about design with development constraints in mind from the mockup phase; some visually appealing effects in Figma are nightmares to implement.",
    "Cette double casquette m'a rendu plus pragmatique et plus crédible face aux développeurs.": "This dual role made me more pragmatic and more credible when dealing with developers.",
    "Sixième Projet": "Sixth Project",
    "Septième Projet": "Seventh Project",
    "Huitième Projet": "Eighth Project",
    "Neuvième Projet": "Ninth Project",
    "Une base à améliorer..": "A foundation to improve..",
    "YLIGEN avait un site sur Odoo — fonctionnel mais rigide, avec une identité visuelle générique et des limites importantes côté personnalisation.": "YLIGEN had a site on Odoo — functional but rigid, with a generic visual identity and significant limitations regarding customization.",
    "L'enjeu : refondre l'identité complète et migrer vers un site codé en HTML/CSS/JS pour gagner en liberté créative, tout en restant compatible avec leur écosystème Odoo.": "The challenge: to rebuild the complete identity and migrate to a website coded in HTML/CSS/JS to gain creative freedom, while remaining compatible with their Odoo ecosystem.",
    "Les limites du CMS / Les avantages du code": "The limitations of the CMS / The advantages of the code",
    "Ce projet avait une contrainte technique forte dès le départ : la migration CMS → code.": "This project had a strong technical constraint from the start: the migration from CMS → code.",
    "J'ai commencé par auditer ce qui existait sur Odoo : qu'est-ce qui était inutilement contraint par le CMS ? Qu'est-ce qui pouvait être repris, qu'est-ce qui devait être repensé ?": "I started by auditing what existed on Odoo: what was unnecessarily constrained by the CMS? What could be reused, what needed to be rethought?",
    "La refonte de l'identité visuelle a été menée en parallèle : nouveau logo, nouvelle palette, nouvelle charte - avec l'idée de projeter une image plus premium et plus professionnelle que le template Odoo d'origine.": "The visual identity refit was carried out in parallel: new logo, new palette, new brand guidelines - with the idea of projecting a more premium and professional image than the original Odoo template.",
    "Libération de ma créativité": "Freeing my creativity",
    "Ce projet m'a appris à gérer la tension entre liberté créative et contraintes d'intégration.": "This project taught me how to manage the tension between creative freedom and integration constraints.",
    "Travailler avec Odoo implique de comprendre son architecture — impossible de designer sans comprendre ce que le CMS peut ou ne peut pas accueillir.": "Working with Odoo means understanding its architecture — it's impossible to design without understanding what the CMS can or cannot accommodate.",
    "Ça m'a aussi confronté à la question de la maintenabilité : un design brillant qui est impossible à maintenir par le client n'est pas un bon design.": "It also confronted me with the issue of maintainability: a brilliant design that is impossible for the client to maintain is not a good design.",
    "Dixième Projet": "Tenth Project",
    "en cours...": "in progress...",

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