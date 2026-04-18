const PrimaireHTML = `
<div class="ProjectBlock" data-category="creation" id="Primaire">
    <div class="Projects">
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Quatrième Projet</h1>
                </div>
            </div>
        </div>
        <div class="Container">
            <div class="Project">
                <div class="Item">
                    <h1>Primaire</h1>
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
            <div class="MenuTab active" data-target="p5-tab1">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie visuelle</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
            <div class="MenuTab" data-target="p5-tab2">
                <div class="TabHeader">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                    <h3>Partie technique</h3>
                    <span class="Chevron">›</span>
                </div>
            </div>
        </div>
        <div class="ShowcaseContent">
            <div class="ContentPanel active" id="p5-tab1">
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
            <div class="ContentPanel" id="p5-tab2">
                <div class="ContentGrid">
                    <div class="ContentCard">
                        <h4>CMS</h4>
                        <p>WordPress, WooCommerce</p>
                    </div>
                    <div class="ContentCard">
                        <h4>Front-End</h4>
                        <p>CSS, JavaScript</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ul class="InlineMenu">
        <li><button class="InlineTab active" data-target="p5-comp1">Section Hero</button></li>
        <li><button class="InlineTab" data-target="p5-comp2">Page de contact</button></li>
        <li><button class="InlineTab" data-target="p5-comp3">Articles de blog</button></li>
        <li><button class="InlineTab" data-target="p5-comp4">Espace compte</button></li>
        <li><button class="InlineTab" data-target="p5-comp5">Footer</button></li>
    </ul>
    <div class="Comparaisons" id="p5-comp1"><img src="img/Projects/Primaire/old_hero.png" alt="Section hero Primaire" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Primaire/old_hero.png" alt="Section hero Primaire" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p5-comp2"><img src="img/Projects/Primaire/old_contact.png" alt="Page contact Primaire" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Primaire/old_contact.png" alt="Page contact Primaire" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p5-comp3"><img src="img/Projects/Primaire/old_blog.png" alt="Articles de blog Primaire" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Primaire/old_blog.png" alt="Articles de blog Primaire" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p5-comp4"><img src="img/Projects/Primaire/old_account.png" alt="Espace compte Primaire" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Primaire/old_account.png" alt="Espace compte Primaire" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
    <div class="Comparaisons" id="p5-comp5"><img src="img/Projects/Primaire/old_footer.png" alt="Footer Primaire" class="NewImage">
        <div class="Overlay"><img src="img/Projects/Primaire/old_footer.png" alt="Footer Primaire" class="OldImage"></div>
        <div class="Slider"></div>
    </div>
</div>
`;

document.getElementById('PrimairePlaceHolder').innerHTML = PrimaireHTML;