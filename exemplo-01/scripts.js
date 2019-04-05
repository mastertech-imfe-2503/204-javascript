const quadrado = document.querySelector('.quadrado');

// quadrado.style.backgroundColor = 'red';

// function pintarDeVermelho() {
//     quadrado.style.backgroundColor = 'red';
// }

function pintarDeVermelho() {
    // if (quadrado.classList.contains('fundo-vermelho')) {
    //     quadrado.classList.remove('fundo-vermelho');
    // }
    // else {
    //     quadrado.classList.add('fundo-vermelho');
    // }

    quadrado.classList.toggle('fundo-vermelho');
}

// quadrado.onclick = pintarDeVermelho;
// quadrado.onclick = function () {
//     quadrado.classList.toggle('fundo-vermelho');
// }

function mudarCor(e) {
    console.log(e);
    e.target.classList.toggle('fundo-vermelho');
}

quadrado.onclick = mudarCor;

// quadrado.onclick = function (e) {
//     console.log(e);
//     e.target.classList.toggle('fundo-vermelho');
// }
