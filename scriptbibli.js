const musica = document.getElementById("musica");
const botao = document.getElementById("btnMusica");

botao.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botao.innerHTML = "Parar Música";

    } else {

        musica.pause();

        botao.innerHTML = "Tocar Música";

    }

});