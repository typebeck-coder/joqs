const brayan = document.getElementById("brayan");
const beatriz = document.getElementById("beatriz");
const mensagem = document.getElementById("mensagem");

// ============================
// BOTÃO BRAYAN
// ============================

brayan.addEventListener("click", function () {

  mensagem.innerHTML = `
        Onwww eu sei que sou o melhor! ❤️🥹
        <br>
        Sabia que você me escolheria 😌❤️
    `;

});


// ============================
// BOTÃO BEATRIZ
// ============================

function fugir() {

  const largura = window.innerWidth;
  const altura = window.innerHeight;

  const larguraBotao = beatriz.offsetWidth;
  const alturaBotao = beatriz.offsetHeight;

  const margem = 20;

  const x = Math.random() *
    (largura - larguraBotao - margem * 2) + margem;

  const y = Math.random() *
    (altura - alturaBotao - margem * 2) + margem;

  beatriz.style.position = "fixed";
  beatriz.style.left = x + "px";
  beatriz.style.top = y + "px";
}


// PC / Notebook
beatriz.addEventListener("mouseenter", fugir);


// Celular
beatriz.addEventListener("touchstart", function (event) {

  event.preventDefault();

  fugir();

}, { passive: false });


// Caso tente clicar
beatriz.addEventListener("click", function (event) {

  event.preventDefault();

  fugir();

});