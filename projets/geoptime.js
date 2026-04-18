const GeoptimeHTML = `
<div class="ProjectBlock" data-category="creation" id="GeopTime">
    <div class="Projects">
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Cinquième Projet</h1>
                </div>
            </div>
        </div>
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>GeopTime</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="ProjectMeta">
        <span class="ProjectTag UI">UI</span>
        <span class="ProjectTag UX">UX</span>
        <span class="ProjectTag Creation">Création</span>
    </div>
    <h2>Création intégrale de site web de l'entreprise</h2>
    <div class="ProjectShowcase">
        <div class="ShowcaseMenu">
            <div class="MenuTab active" data-target="p4-tab1">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
                    <h3>Nouvelle identité</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
            <div class="MenuTab" data-target="p4-tab2">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie visuelle</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
            <div class="MenuTab" data-target="p4-tab3">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie technique</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
        </div>
        <div class="ShowcaseContent">
            <div class="ContentPanel active" id="p4-tab1">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>Identité visuelle</h4>
                        <p>Nouvelle palette de couleurs, nouveau logo, nouvelle bannière</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Designs</h4>
                        <p>Figma, Affinity, Canva</p>
                    </div>
                </div>
            </div>
            <div class="ContentPanel" id="p4-tab2">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>Zoning</h4>
                        <p>Hiérarchisation et structure globale de l'interface.</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Wireframe</h4>
                        <p>Ergonomie et maquettes basse fidélité.</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Maquettes</h4>
                        <p>Design final et rendu haute fidélité.</p>
                    </div>
                </div>
            </div>
            <div class="ContentPanel" id="p4-tab3">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>Front-End</h4>
                        <p>HTML, CSS, JavaScript</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Back-End</h4>
                        <p>PHP, SQL</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul class="InlineMenu">
        <li><button class="InlineTab active" data-target="p4-comp1">Hero</button></li>
        <li><button class="InlineTab" data-target="p4-comp2">Fonctionnalités</button></li>
        <li><button class="InlineTab" data-target="p4-comp3">Footer</button></li>
        <li><button class="InlineTab" data-target="p4-comp4">Logo</button></li>
    </ul>
    <div class="Comparaisons" id="p4-comp1"><img src="img/Projects/GeopTime/new_hero.png" alt="Hero GeopTime" class="NewImage">
        <div class="Overlay"><img src="img/Projects/GeopTime/old_hero.png" alt="Ancien hero GeopTime" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p4-comp2"><img src="img/Projects/GeopTime/new_features.png" alt="Fonctionnalités GeopTime" class="NewImage">
        <div class="Overlay"><img src="img/Projects/GeopTime/old_features.png" alt="Anciennes fonctionnalités GeopTime" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p4-comp3"><img src="img/Projects/GeopTime/new_footer.png" alt="Footer GeopTime" class="NewImage">
        <div class="Overlay"><img src="img/Projects/GeopTime/old_footer.png" alt="Ancien footer GeopTime" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p4-comp4"><img src="img/Projects/GeopTime/new_logo.svg" alt="Nouveau logo GeopTime" class="NewImage">
        <div class="Overlay"><img src="img/Projects/GeopTime/old_logo.svg" alt="Ancien logo GeopTime" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
</div>
`;

document.getElementById('GeoptimePlaceHolder').innerHTML = GeoptimeHTML;