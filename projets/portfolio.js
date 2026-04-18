const PortfolioHTML = `
<div class="ProjectBlock" data-category="refonte" id="Portfolio">
  <div class="Projects">
    <div class="Container">
      <div class="Project">
        <div class="Item">
          <h1>Premier Projet</h1>
        </div>
      </div>
    </div>
    <div class="Container">
      <div class="Project">
        <div class="Item">
          <h1>Portfolio v3</h1>
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
  <h2>Refonte visuelle complète et création d'une troisième version comprenant :</h2>
  <div class="ProjectShowcase">
    <div class="ShowcaseMenu">
      <div class="MenuTab active" data-target="p1-tab1">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="M5 12h14"/></svg>
          <h3>Nouvelle identité</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p1-tab2">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          <h3>Partie visuelle</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p1-tab3">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          <h3>Partie technique</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
    </div>
    <div class="ShowcaseContent">
      <div class="ContentPanel active" id="p1-tab1">
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
      <div class="ContentPanel" id="p1-tab2">
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
      <div class="ContentPanel" id="p1-tab3">
        <div class="ContentGrid">
          <div class="ContentCard">
            <h4>Front-End</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>
          <div class="ContentCard">
            <h4>Déploiement</h4>
            <p>GitHub, Formspree</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul class="InlineMenu">
    <li><button class="InlineTab active" data-target="p1-comp1">Home</button></li>
    <li><button class="InlineTab" data-target="p1-comp2">Page des projets</button></li>
    <li><button class="InlineTab" data-target="p1-comp3">Skills shop</button></li>
    <li><button class="InlineTab" data-target="p1-comp4">Page CV</button></li>
    <li><button class="InlineTab" data-target="p1-comp5">Page de contact</button></li>
    <li><button class="InlineTab" data-target="p1-comp6">Logo</button></li>
  </ul>
  <div class="Comparaisons" id="p1-comp1"><img src="img/Projects/Portfolio/new_home.png" alt="Nouvelle version de la page d'accueil du portfolio" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_home.png" alt="Ancienne version de la page d'accueil" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p1-comp2"><img src="img/Projects/Portfolio/new_projets.png" alt="Nouvelle version de la page projets" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_projets.png" alt="Ancienne version de la page projets" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p1-comp3"><img src="img/Projects/Portfolio/new_skills.png" alt="Nouvelle version du skills shop" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_skills.png" alt="Ancienne version du skills shop" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p1-comp4"><img src="img/Projects/Portfolio/new_cv.png" alt="Nouvelle version de la page CV" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_cv.png" alt="Ancienne version de la page CV" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p1-comp5"><img src="img/Projects/Portfolio/new_contact.png" alt="Nouvelle version de la page contact" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_contact.png" alt="Ancienne version de la page contact" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p1-comp6"><img src="img/Projects/Portfolio/new_logo.svg" alt="Nouveau logo GL" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Portfolio/old_logo.svg" alt="Ancien logo GL" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
</div>
`;

document.getElementById('PortfolioPlaceHolder').innerHTML = PortfolioHTML;