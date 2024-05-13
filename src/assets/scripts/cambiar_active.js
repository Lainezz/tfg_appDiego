const nav_items = document.querySelectorAll(".zonaNav__nav_item");

/**
 * Al cargar la página, quita la clase CSS active a todos los elementos de navegacion
 * para, a continuación, darle al elemento de la página que ha sido cargada la clase CSS active
 */
function cambiar_active_nav() {
  console.log(window.location.pathname);
  const pagina = window.location.pathname;
  nav_items.forEach((element) => {
    element.classList.remove("active");
  });
  if (pagina == "/index.html" || pagina == "/") {
    nav_items[0].classList.add("active");
  } else if (pagina == "/programacion.html") {
    nav_items[1].classList.add("active");
  } else if (pagina == "/sobre_mi.html") {
    nav_items[2].classList.add("active");
  } else {
    nav_items[3].classList.add("active");
  }
}

window.onload = cambiar_active_nav();
