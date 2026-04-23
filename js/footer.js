const footerHTML = `
<footer class="MainFooter">
    <div class="FooterContainer">
        <div class="FooterCol">
            <h3 class="FooterLogo">Lenny Gadroy</h3>
            <p class="FooterDesc">Étudiant passionné par l'UI/UX Design, créant des expériences digitales fluides et mémorables.</p>
        </div>
        <div class="FooterCol">
            <h4 class="FooterTitle">Navigation</h4>
            <ul class="FooterLinks">
                <li><a href="/index">Accueil</a></li>
                <li><a href="/projets">Mes projets</a></li>
                <li><a href="/albums">Mes albums</a></li>
                <li><a href="/skills">Compétences</a></li>
                <li><a href="/cv">Mon CV</a></li>
            </ul>
        </div>
        <div class="FooterCol">
            <h4 class="FooterTitle">Contact</h4>
            <ul class="FooterLinks">
                <li><a href="https://linkedin.com/in/lennygadroy/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://instagram.com/lennygdr19/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://github.com/LennyGadroy/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="/contact">Me contacter</a></li>
            </ul>
        </div>
    </div>
    <div class="FooterBottom"><p>&copy; 2026 Lenny Gadroy. Tous droits réservés.</p></div>
</footer>

<div class="WipPopup" id="wipPopup">
    <button class="CloseBtn" onclick="document.getElementById('wipPopup').style.display='none'" aria-label="Fermer la fenêtre">×</button>
    <div class="WipContent">
        <div class="WipTitle">🚧 Portfolio en construction</div>
        <div class="WipText">Je travaille actuellement sur cette nouvelle version. Mon ancien portfolio reste consultable !</div>
        <a href="/Archives/v2/index.html" class="BtnSolid WipBtn">Voir l'ancienne version</a>
    </div>
</div>
`;

document.getElementById('FooterPlaceHolder').innerHTML = footerHTML;