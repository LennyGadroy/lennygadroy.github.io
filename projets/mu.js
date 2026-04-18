const MuHTML = `
<div class="ProjectBlock" data-category="refonte" data-tags="refonte ni ui ux"id="Mü">
  <div class="Projects">
    <div class="Container">
      <div class="Project">
        <div class="Item">
          <h1>Troisième Projet</h1>
        </div>
      </div>
    </div>
    <div class="Container">
      <div class="Project">
        <div class="Item">
          <h1>Mü-Être</h1>
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
  <h2>Refonte visuelle complète et optimisation de l'UI et l'UX :</h2>
  <div class="ProjectShowcase">
    <div class="ShowcaseMenu">
      <div class="MenuTab active" data-target="p3-tab1">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.062 12.349a12.24 12.24 0 0 1 19.876 0"/><circle cx="12" cy="12" r="3"/></svg>
          <h3>Partie visuelle</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p3-tab2">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          <h3>Partie technique</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
    </div>
    <div class="ShowcaseContent">
      <div class="ContentPanel active" id="p3-tab1">
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
      <div class="ContentPanel" id="p3-tab2">
        <div class="ContentGrid">
          <div class="ContentCard">
            <h4>CMS</h4>
            <p>WordPress</p>
          </div>
          <div class="ContentCard">
            <h4>Illustrations</h4>
            <p>Figma, Suite Adobe</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul class="InlineMenu">
    <li><button class="InlineTab active" data-target="p3-comp1">Section Hero</button></li>
    <li><button class="InlineTab" data-target="p3-comp2">Bloc impacts</button></li>
    <li><button class="InlineTab" data-target="p3-comp3">Bloc étapes</button></li>
    <li><button class="InlineTab" data-target="p3-comp4">Page de contact</button></li>
    <li><button class="InlineTab" data-target="p3-comp5">Articles de blog</button></li>
    <li><button class="InlineTab" data-target="p3-comp6">Bannière</button></li>
    <li><button class="InlineTab" data-target="p3-comp7">FAQ</button></li>
    <li><button class="InlineTab" data-target="p3-comp8">Footer</button></li>
  </ul>
  <div class="Comparaisons" id="p3-comp1"><img src="img/Projects/Mü/new_hero.png" alt="Nouveau hero Mü-Être" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_hero.png" alt="Ancien hero Mü-Être" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp2"><img src="img/Projects/Mü/new_impact.png" alt="Nouveau bloc impacts" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_impact.png" alt="Ancien bloc impacts" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp3"><img src="img/Projects/Mü/new_etapes.png" alt="Nouveau bloc étapes" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_etapes.png" alt="Ancien bloc étapes" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp4"><img src="img/Projects/Mü/new_contact.png" alt="Nouvelle page contact" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_contact.png" alt="Ancienne page contact" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp5"><img src="img/Projects/Mü/new_blog.png" alt="Nouveaux articles de blog" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_blog.png" alt="Anciens articles de blog" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp6"><img src="img/Projects/Mü/new_banner.png" alt="Nouvelle bannière" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_banner.png" alt="Ancienne bannière" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp7"><img src="img/Projects/Mü/new_faq.png" alt="Nouvelle FAQ" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_faq.png" alt="Ancienne FAQ" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
  <div class="Comparaisons" id="p3-comp8"><img src="img/Projects/Mü/new_footer.png" alt="Nouveau footer" class="NewImage">
    <div class="Overlay"><img src="img/Projects/Mü/old_footer.png" alt="Ancien footer" class="OldImage"></div>
    <div class="Slider"></div>
  </div>
</div>
`;

document.getElementById('MuPlaceHolder').innerHTML = MuHTML;