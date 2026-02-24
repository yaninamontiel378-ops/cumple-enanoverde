let musicaIniciada = false;

function abrirSorpresa() {
  const sorpresa = document.getElementById("sorpresa");
  const musica = document.getElementById("musica");

  // Mostrar sorpresa
  sorpresa.classList.toggle("oculto");

  // Iniciar música solo una vez
  if (!musicaIniciada) {
    musica.src += "&autoplay=1";
    musicaIniciada = true;
  }
}

/* Corazones flotando */
const contenedor = document.querySelector(".corazones");

setInterval(() => {
  const corazon = document.createElement("span");
  corazon.textContent = "🖤";
  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.animationDuration = (Math.random() * 3 + 4) + "s";
  contenedor.appendChild(corazon);

  setTimeout(() => corazon.remove(), 7000);
}, 400);
