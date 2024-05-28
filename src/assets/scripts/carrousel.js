
let nVeces = 0;

function moverPanel() {
  // Obtengo el elemento
  const section_naranja = document.querySelector(
    ".section_gris__section_naranja"
  );

  const nVecesMax = section_naranja.children.length;
  section_naranja.style.transform = `translateX(-50%)`;

  

  if (nVeces == nVecesMax-1) {
    const percentageToMove = 50*(nVecesMax-1);
    section_naranja.style.transform = `translateX(${percentageToMove}%)`;
    section_naranja.style.transform = ``;
    nVeces = 0;
  } else {
    nVeces++;
  }
}

/**
 * Función para inicializar los elementos multimedia del carrousel
 */
function inicializar_carrousel() {
  window.setInterval(moverPanel, 5000);
}

window.onload = inicializar_carrousel();
