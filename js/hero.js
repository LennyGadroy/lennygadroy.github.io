const heroHTML = `
  <div class="Hero" id="Hero">
    <svg class="Highlights" viewBox="0 0 900 700" preserveAspectRatio="xMidYMid meet">
      <rect class="HighlightShape" x="15" y="315" width="470" height="70" rx="35" data-word="Lenny" />
      <rect class="HighlightShape" x="211.5" y="365" width="777" height="70" rx="35" transform="rotate(45 600 400)" data-word="Gadroy" />
      <rect class="HighlightShape" x="15" y="15" width="870" height="70" rx="35" data-word="Portfolio" />
      <rect class="HighlightShape" x="115" y="515" width="170" height="70" rx="35" data-word="UI" />
      <rect class="HighlightShape" x="415" y="515" width="170" height="70" rx="35" data-word="UX" />
      <rect class="HighlightShape" x="15" y="615" width="770" height="70" rx="35" data-word="Designer" />
    </svg>
    <div class="LetterGrid" id="LetterGrid">
      <span data-word="Portfolio">P</span><span data-word="Portfolio">O</span><span data-word="Portfolio">R</span><span data-word="Portfolio">T</span><span data-word="Portfolio">F</span><span data-word="Portfolio">O</span><span data-word="Portfolio">L</span><span data-word="Portfolio">I</span><span data-word="Portfolio">O</span>
      <span>S</span><span>E</span><span>O</span><span data-word="Gadroy">G</span><span>P</span><span>R</span><span>O</span><span>S</span><span>C</span>
      <span>C</span><span>O</span><span>O</span><span>L</span><span data-word="Gadroy">A</span><span>G</span><span>O</span><span>A</span><span>L</span>
      <span data-word="Lenny">L</span><span data-word="Lenny">E</span><span data-word="Lenny">N</span><span data-word="Lenny">N</span><span data-word="Lenny">Y</span><span data-word="Gadroy">D</span><span>A</span><span>T</span><span>A</span>
      <span>O</span><span>C</span><span>L</span><span>E</span><span>V</span><span>E</span><span data-word="Gadroy">R</span><span>U</span><span>S</span>
      <span>U</span><span data-word="UI">U</span><span data-word="UI">I</span><span>T</span><span data-word="UX">U</span><span data-word="UX">X</span><span>C</span><span data-word="Gadroy">O</span><span>S</span>
      <span data-word="Designer">D</span><span data-word="Designer">E</span><span data-word="Designer">S</span><span data-word="Designer">I</span><span data-word="Designer">G</span><span data-word="Designer">N</span><span data-word="Designer">E</span><span data-word="Designer">R</span><span data-word="Gadroy">Y</span>
    </div>
  </div>
`;

document.getElementById('HeroPlaceHolder').innerHTML = heroHTML;