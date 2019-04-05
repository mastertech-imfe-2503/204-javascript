const quadrados = document.querySelectorAll('.quadrado');
const paragrafo = document.querySelector('p');

function mudarCor(e) {
    e.target.classList.toggle('fundo-vermelho');
}

for (const quadrado of quadrados) {
    quadrado.onclick = mudarCor;
}

paragrafo.onclick = mudarCor;