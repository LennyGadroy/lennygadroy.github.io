const GoonHTML = `
<div class="ProjectBlock" data-category="creation" id="GOON">
    <div class="Projects">
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Deuxième Projet</h1>
                </div>
            </div>
        </div>
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>GOON : Blindtests</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="ProjectMeta">
        <span class="ProjectTag UI">UI</span>
        <span class="ProjectTag UX">UX</span>
        <span class="ProjectTag Refonte">Refonte complète</span>
        <span class="ProjectTag NI">Nouvelle identité</span>
    </div>
    <h2>Création d'une application web multi-synchronisé & Redesign global de l'identité de la marque comprenant :</h2>
    <div class="ProjectShowcase">
        <div class="ShowcaseMenu">
            <div class="MenuTab active" data-target="p2-tab1">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    <h3>Améliorations</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
            <div class="MenuTab" data-target="p2-tab2">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie visuelle</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
            <div class="MenuTab" data-target="p2-tab3">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie technique</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
        </div>
        <div class="ShowcaseContent">
            <div class="ContentPanel active" id="p2-tab1">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>3 niveaux de difficultés</h4>
                        <p>Facile, Normal, Difficile pour s'adapter à tous les joueurs</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Événements aléatoires</h4>
                        <p>Mécaniques surprises qui relancent la partie</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Bonus stratégiques</h4>
                        <p>Sabotages et aides pour intensifier la compétition</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Rapidité des réponses</h4>
                        <p>Système de score pondéré par le temps de réponse</p>
                    </div>
                </div>
            </div>
            <div class="ContentPanel" id="p2-tab2">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>Identité visuelle</h4>
                        <p>Nouvelle palette, logo et charte graphique complète</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Wireframe et Maquettes</h4>
                        <p>Designs finaux et rendu haute fidélité.</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Designs</h4>
                        <p>Figma, Canva</p>
                    </div>
                </div>
            </div>
            <div class="ContentPanel" id="p2-tab3">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>Front-End</h4>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Back-End</h4>
                        <p>SQL, Node.js, Socket.io</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Déploiement</h4>
                        <p>GitHub, Render</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul class="InlineMenu">
        <li><button class="InlineTab active" data-target="p2-comp1">Menu principal</button></li>
        <li><button class="InlineTab" data-target="p2-comp2">Écran de jeu</button></li>
        <li><button class="InlineTab" data-target="p2-comp3">Espace de connexion</button></li>
        <li><button class="InlineTab" data-target="p2-comp4">Logo</button></li>
    </ul>
    <div class="Comparaisons" id="p2-comp1"><img src="img/Projects/Goon/new_menu.png" alt="Nouveau menu principal GOON" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Goon/old_menu.png" alt="Ancien menu principal GOON" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p2-comp2"><img src="img/Projects/Goon/new_game.png" alt="Nouvel écran de jeu GOON" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Goon/old_game.png" alt="Ancien écran de jeu GOON" class="OldImage">
        </div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p2-comp3"><img src="img/Projects/Goon/new_login.png" alt="Nouvel espace de connexion GOON" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Goon/old_login.png" alt="Ancien espace de connexion GOON" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p2-comp4"><img src="img/Projects/Goon/new_logo.svg" alt="Nouveau logo GOON" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Goon/old_logo.svg" alt="Ancien logo GOON" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
</div>
`;

document.getElementById('GoonPlaceHolder').innerHTML = GoonHTML;