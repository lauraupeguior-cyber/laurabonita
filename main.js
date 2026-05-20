// ==========================================================================
// 1. LÓGICA DEL MENÚ HAMBURGUESA (MÓVIL)
// ==========================================================================
var botonMenu = document.getElementById("boton-menu");
var menuNavegacion = document.getElementById("menu-navegacion");

if (botonMenu && menuNavegacion) {
  botonMenu.addEventListener("click", function() {
    menuNavegacion.classList.toggle("mostrar");
  });
  
  // Opcional: Cierra el menú automáticamente cuando se le da click a una sección
  menuNavegacion.addEventListener("click", function() {
    if (window.innerWidth <= 480) {
      menuNavegacion.classList.remove("mostrar");
    }
  });
}

// ==========================================================================
// 2. CONTROLADOR DE LA CUENTA REGRESIVA
// ==========================================================================
var fechaFestival = new Date("2026-10-10T18:00:00").getTime();

function actualizarContador() {
  var ahora = new Date().getTime();
  var diferencia = fechaFestival - ahora;

  if (diferencia <= 0) {
    document.getElementById("dias").textContent = "00";
    document.getElementById("horas").textContent = "00";
    document.getElementById("minutos").textContent = "00";
    document.getElementById("segundos").textContent = "00";
    return;
  }

  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  document.getElementById("dias").textContent = dias < 10 ? "0" + dias : dias;
  document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos").textContent = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos").textContent = segundos < 10 ? "0" + segundos : segundos;
}

actualizarContador();
setInterval(actualizarContador, 1000);


// ==========================================================================
// 3. LÓGICA DEL CARRUSEL DE ARTISTAS
// ==========================================================================
var pista = document.getElementById("pista-carrusel");
var posicion = 0;
var anchoCarta = 220;
var totalCartas = pista ? pista.children.length : 0;
var cartasVisi = 3;

if (pista) {
  document.getElementById("boton-siguiente").addEventListener("click", function () {
    if (posicion < totalCartas - cartasVisi) {
      posicion = posicion + 1;
      pista.style.transform = "translateX(-" + posicion * anchoCarta + "px)";
    }
  });

  document.getElementById("boton-anterior").addEventListener("click", function () {
    if (posicion > 0) {
      posicion = posicion - 1;
      pista.style.transform = "translateX(-" + posicion * anchoCarta + "px)";
    }
  });
}