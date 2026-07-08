const musica = document.getElementById("musica");
const botao = document.getElementById("btnMusica");

botao.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botao.innerHTML = "🔇 Parar Música";

    } else {

        musica.pause();

        botao.innerHTML = "🎵 Tocar Música";

    }

});

// Zoom de imagens ao clicar (lightbox)
// Cole este script antes do </body>, ou num arquivo .js ligado ao HTML

document.addEventListener('DOMContentLoaded', () => {
  // cria o overlay uma única vez
  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  const overlayImg = document.createElement('img');
  overlay.appendChild(overlayImg);
  document.body.appendChild(overlay);

  function abrirZoom(src, alt){
    overlayImg.src = src;
    overlayImg.alt = alt || '';
    overlay.classList.add('active');
  }

  function fecharZoom(){
    overlay.classList.remove('active');
  }

  // seleciona todas as imagens das galerias do portfólio
  const seletor = '.Reinogeek img, .Reinogeek02 img, .Diversidade img, .Doemais img, .Present img, .card img';

  document.querySelectorAll(seletor).forEach(img => {
    img.addEventListener('click', () => abrirZoom(img.src, img.alt));
  });

  // clicar no overlay (ou na imagem ampliada) fecha o zoom
  overlay.addEventListener('click', fecharZoom);

  // fechar com a tecla Esc
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') fecharZoom();
  });
});