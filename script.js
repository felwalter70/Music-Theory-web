//abrir e fechar nav
const nav = document.getElementById('nav')

//pagina atual
const pagAtual = window.location.pathname;
const links = document.querySelectorAll('ul a');

let teclasNode = document.querySelectorAll(".key");



//pega id teclas
const parentContainer = document.getElementById('piano');

//outros
const disco = document.getElementById('disco');
const agulha = document.getElementById('agulha');

const LP = new Audio('sounds/Faint.m4a');

function abrirNav() {
    nav.classList.add('display');
}

function fecharNav() {
    nav.classList.remove('display');
}

//funcionamento piano

for (let i = 0; i < teclasNode.length; i++) {
    teclasNode[i].addEventListener('mousedown', function(event) {
        let teclaAtual = event.currentTarget;
        let nota = teclaAtual.dataset.nota;
        somNota(nota);
    });
}

function somNota(note) {
    const notaAtual = new Audio(`sounds/${note}.wav`);
    notaAtual.currentTime = 0;
    notaAtual.play();
}

let keyNode = [];

function checaVetor(item) {
    for (let i = 0; i < keyNode.length; i++) {
        if (keyNode[i][1] == item) {
            return 1;
        }
    }

    return 0;
}

function abaixaTecla(item) {
    console.log("XD");
    if (item.classList.contains("teclaBranca")) {
            item.style.backgroundColor = "#969696";
        }
        else {
            item.style.backgroundColor = "#242424";
        }
        item.style.top = "5px";
}

function levantaTecla(item) {
    if (item.classList.contains("teclaBranca")) {
        item.style.backgroundColor = "white";
    }
    else {
        item.style.backgroundColor = "black";
    }
    item.style.top = "0px";
}

document.addEventListener('keydown', function(event) {
    let teclaA = null;
    nota = null;

    if (event.key === 'z') {
        nota = 'C3';
    }
    if (event.key === 's') {
        nota = 'C3s';
    }
    if (event.key === 'x') {
        nota = 'D3';
    }
    if (event.key === 'd') {
        nota = 'D3s';
    }
    if (event.key === 'c') {
        nota = 'E3';
    }
    if (event.key === 'v') {
        nota = 'F3';
    }
    if (event.key === 'g') {
        nota = 'F3s';
    }
    if (event.key === 'b') {
        nota = 'G3';
    }
    if (event.key === 'h') {
        nota = 'G3s';
    }
    if (event.key === 'n') {
        nota = 'A3';
    }
    if (event.key === 'j') {
        nota = 'A3s';
    }
    if (event.key === 'm') {
        nota = 'B3';
    }
    if (event.key === ',') {
        nota = 'C4';
    }
    if (event.key === 'l') {
        nota = 'C4s';
    }
    if (event.key === '.') {
        nota = 'D4';
    }
    if (event.key === 'ç') {
        nota = 'D4s';
    }
    if (event.key === ';') {
        nota = 'E4';
    }
    if (event.key === '/') {
        nota = 'F4';
    }
    if (event.key === ']') {
        nota = 'F4s';
    }

    if (nota !== null) {
        teclaA = document.querySelector(`[data-nota="${nota}"]`);

        let pressInfo = [teclaA, event.key];

        if (!checaVetor(pressInfo[1])) {
            keyNode.push(pressInfo);
            somNota(nota);
        }

        abaixaTecla(teclaA);
    }
});

document.addEventListener("keyup", function(event) {
    let itemA = [];
    let evtKey = event.key;

    itemA[1] = null;

    for (let i = 0; i < keyNode.length; i++) {
        if (keyNode[i][1] == evtKey) {
            itemA = keyNode[i];
            break;
        }
    }

    if (itemA[1] !== null) {
        let indice = keyNode.indexOf(itemA)

        if (indice !== -1) {
            keyNode.splice(indice, 1);
        }

        levantaTecla(itemA[0]);
    }
});

for (let i = 0; i < teclasNode.length; i++) {
    teclasNode[i].addEventListener("mousedown", function(event) {
        let elAtual = event.currentTarget;
        console.log(elAtual);
        abaixaTecla(elAtual);
    });
    teclasNode[i].addEventListener("mouseup", function(event) {
        let elAtual = event.currentTarget;
        console.log(elAtual);
        levantaTecla(elAtual);
    });
}

//Toca discos

function musica() {
    agulha.classList.add('agulhaAtivo');
    agulha.style.top = '-0.5em';
    agulha.style.right = '4.7em';
    LP.volume = 0.2;
    LP.play();
}

function musicaStop() {
    agulha.classList.remove('agulhaAtivo');
    agulha.style.top = '1.5em';
    agulha.style.right = '2em';
    LP.currentTime = 0;
    LP.pause();
}

//exemplos sons

function exemplosSons(nota) {
    somNota(nota);
}

//UX

links.forEach(link => {
    if(link.getAttribute('href') === path) {
        link.setAttribute('aria-current', 'page');
        link.classList.add('linkAtual');
    }
});