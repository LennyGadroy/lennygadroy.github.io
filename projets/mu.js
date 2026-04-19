const MuHTML = `
<div class="ProjectBlock" data-category="refonte" data-tags="refonte ni ui ux" id="Mü">
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
    <span class="ProjectTag UI-UX">UI / UX</span>
    <span class="ProjectTag Refonte">Refonte complète</span>
    <span class="ProjectTag NI">Nouvelle identité</span>
  </div>
  <h2>Refonte visuelle complète et optimisation de l'UI et l'UX :</h2>
  <div class="ProjectShowcase">
    <div class="ShowcaseMenu">
      <div class="MenuTab active" data-target="p3-tab1">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7.5"/><line x1="16.8" y1="16.8" x2="21.5" y2="21.5"/></svg>
          <h3>Contexte & Problématique</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p3-tab2">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="1.5" y="15.5" width="5.5" height="7" rx="1.5"/><rect x="9.25" y="9.5" width="5.5" height="13" rx="1.5"/><rect x="17" y="3.5" width="5.5" height="19" rx="1.5"/></svg>
          <h3>Ma démarche</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p3-tab3">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <h3>Résultats</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
      <div class="MenuTab" data-target="p3-tab4">
        <div class="TabHeader">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13 16 8 11 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
          <h3>Ce que ça m'a apporté</h3>
          <span class="Chevron">›</span>
        </div>
      </div>
    </div>
    <div class="ShowcaseContent">
      <div class="ContentPanel active" id="p3-tab1">
        <div class="ContentCard">
          <h4>Un bon forme mais une mauvaise forme</h4>
          <p>Mü-Être est une marque dans le bien-être et le développement personnel.</p>
          <p>Le site existant posait un problème fondamental : l'identité visuelle ne reflétait pas la douceur et la confiance que la marque cherchait à transmettre.</p>
          <p>Navigation confuse, hiérarchie de contenu absente, aucune cohérence typographique : le fond était bon, la forme sabotait tout.</p>
        </div>
      </div>
      <div class="ContentPanel" id="p3-tab2">
        <div class="ContentCard">
          <h4>La QVCT commence avant tout sur le site</h4>
          <p>Avant le moindre trait de crayon, j'ai passé du temps à comprendre la cible : qui consulte ce site, dans quel état d'esprit, avec quelle intention ?</p>
          <p>Les visiteurs cherchent de la réassurance, de la clarté, pas de la stimulation. Cette insight a orienté toutes les décisions de design : espaces généreux, typographie lisible, palette apaisante, parcours simple.</p>
          <p>Le zoning a d'abord cartographié les 8 zones clés à retravailler.</p>
          <p>Les wireframes ont testé plusieurs organisations pour la FAQ, les étapes d'accompagnement, et les articles de blog — des contenus denses qui nécessitaient une vraie réflexion sur la lisibilité.</p>
        </div>
      </div>
      <div class="ContentPanel" id="p3-tab3">
        <div class="ContentCard">
          <h4>Lorem</h4>
          <p>Lorem</p>
        </div>
      </div>
      <div class="ContentPanel" id="p3-tab4">
        <div class="ContentCard">
          <h4>Prise en compte du sujet</h4>
          <p>Ce projet m'a appris à designer pour une émotion précise plutôt que pour un effet visuel.</p>
          <p>Sur un site bien-être, la sobre efficacité vaut mieux qu'une mise en page spectaculaire.</p>
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