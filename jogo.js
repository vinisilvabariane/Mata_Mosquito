var altura = 0;
var largura = 0;
var vidas = 1;
var pontos = 0;
var tempo = 0;
var criaMosca = 0;

//Setando cronometro
var cronometro = setInterval(function () {
    tempo -= 1;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosca);
        window.location.href = "vitoria.html";
    } else {
        document.getElementById("tempo").innerHTML = tempo;
    }
}, 1000);

//Setando dificuldades
var nivel = window.location.search;
nivel = nivel.replace("?", "");
if (nivel === "facil") {
    criaMosca = 2000;
    tempo = 20;
} else if (nivel === "normal") {
    criaMosca = 1500;
    tempo = 30;
} else if (nivel === "dificil") {
    criaMosca = 1000;
    tempo = 60;
} else if (nivel === "inseticida") {
    criaMosca = 750;
    tempo = 120;
}

//Calcular tamanho da pagina
function redimensionar() {
    altura = window.innerHeight;
    largura = window.innerWidth;
}

//Gerar posicao aleatoria para a mosca
function posicaoRandomica() {
    if (document.getElementById("mosca")) {
        document.getElementById("mosca").remove();
        if (vidas > 5) {
            window.location.href = "fim_de_jogo.html"
        } else {
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png"
        }
        vidas++;
    }
    var posX = Math.floor(Math.random() * largura) - 100;
    var posY = Math.floor(Math.random() * altura) - 100;
    var mosca = document.createElement("img");
    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;
    mosca.src = "imagens/mosca.png";
    mosca.classList.add(tamanhoAleatorio(), ladoAleatorio());
    mosca.style.left = posX + "px";
    mosca.style.top = posY + "px";
    mosca.style.position = "absolute";
    mosca.id = "mosca"
    document.body.appendChild(mosca);
    mosca.onclick = function () {
        pontos++;
        document.getElementById("cont").innerHTML = pontos;
        this.remove();
    }
    console.log("Os pontos sao:" + pontos);
}

//Gerar tamanho alaetorio para a mosca
function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);
    switch (classe) {
        case 0:
            return "mosca1"
        case 1:
            return "mosca2"
        case 2:
            return "mosca3"
    }
}

//Gerar um lado aleatorio para a mosca
function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);
    switch (classe) {
        case 0:
            return "direita"
        case 1:
            return "esquerda"
    }
}

redimensionar();