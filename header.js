const headerHTML = `
<header class="MainHeader">
    <nav class="NavBar">
        <a class="NavLogo" href="index.html" aria-label="Retour à l'accueil"><img src="assets/icon.svg" alt="Logo de Lenny Gadroy" /></a>
        <ul class="NavLinks">
            <li><a href="index.html">Accueil</a></li>
            <li class="Dropdown">
                <a href="#!">Réalisations <span class="Chevron">▼</span></a>
                <ul class="DropdownMenu">
                    <li><a href="projets.html">Projets</a></li>
                    <li><a href="designs.html">Designs</a></li>
                    <li><a href="code.html">Code</a></li>
                    <li><a href="albums.html">Albums</a></li>
                </ul>
            </li>
            <li><a href="skills.html">Compétences</a></li>
            <li><a href="cv.html">Curriculum</a></li>
        </ul>
        <div class="NavBtn"><a href="contact.html" class="BtnSolid">Me contacter</a></div>
    </nav>
</header>
`;

document.getElementById('HeaderPlaceHolder').innerHTML = headerHTML;