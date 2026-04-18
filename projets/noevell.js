const NoevellHTML = `
<div class="ProjectBlock" data-category="creation" data-tags="creation ui ux" id="Noevell">
    <div class="Projects">
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Sixième Projet</h1>
                </div>
            </div>
        </div>
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Noevell</h1>
                </div>
            </div>
        </div>
    </div>
    <div class="ProjectMeta">
        <span class="ProjectTag UI">UI</span>
        <span class="ProjectTag UX">UX</span>
        <span class="ProjectTag Creation">Création</span>
        <span class="ProjectTag WIP">En cours</span>
    </div>
    <h2>Création intégrale de site web de l'entreprise</h2>
    <div class="ProjectShowcase">
        <div class="ShowcaseMenu">
            <div class="MenuTab active" data-target="p6-tab1">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie visuelle</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
        </div>
        <div class="ShowcaseContent">
            <div class="ContentPanel active" id="p6-tab1">
                <div class="ContentGrid">
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
        </div>
    </div>
    <ul class="InlineMenu">
        <li><button class="InlineTab active" data-target="p6-comp1">Aperçu</button></li>
    </ul>
    <div class="Comparaisons" id="p6-comp1"><img src="img/Projects/Noevell/" alt="Aperçu Noevell" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Noevell/" alt="Aperçu Noevell" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
</div>
`;

document.getElementById('NoevellPlaceHolder').innerHTML = NoevellHTML;