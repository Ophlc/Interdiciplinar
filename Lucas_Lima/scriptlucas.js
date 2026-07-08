// --- CONTROLE DA MÚSICA (CÓDIGO ORIGINAL) ---
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


// --- LÓGICA DO ZOOM NAS IMAGENS ---
document.addEventListener("DOMContentLoaded", function () {
    // 1. Cria a estrutura do Zoom dinamicamente no HTML
    const modal = document.createElement("div");
    modal.classList.add("modal-zoom");
    
    const modalImg = document.createElement("img");
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // 2. Seleciona todas as imagens das suas galerias de eventos
    const imagensGaleria = document.querySelectorAll(".galeria-evento img");

    imagensGaleria.forEach(img => {
        img.addEventListener("click", function () {
            modalImg.src = this.src; // Passa o caminho da imagem clicada para a modal
            modal.classList.add("mostrar");
            document.body.style.overflow = "hidden"; // Trava o scroll da página ao fundo
        });
    });

    // 3. Fecha o zoom ao clicar em qualquer lugar da tela escura
    modal.addEventListener("click", function () {
        modal.classList.remove("mostrar");
        document.body.style.overflow = "auto"; // Devolve o scroll da página
    });
});