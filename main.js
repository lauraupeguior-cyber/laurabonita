
var fechaFestival = new Date(2026, 9, 10, 18, 0, 0).getTime();

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

  // Asegurar formato de 2 dígitos (agrega un cero a la izquierda si es menor a 10)
  document.getElementById("dias").textContent = dias < 10 ? "0" + dias : dias;
  document.getElementById("horas").textContent = horas < 10 ? "0" + horas : horas;
  document.getElementById("minutos").textContent = minutos < 10 ? "0" + minutos : minutos;
  document.getElementById("segundos").textContent = segundos < 10 ? "0" + segundos : segundos;
}


actualizarContador();

setInterval(actualizarContador, 1000);



var pista = document.getElementById("pista-carrusel");
var posicion = 0;
var anchoCarta = 220; 
var totalCartas = pista.children.length;

function obtenerCartasVisibles() {
  if (window.innerWidth <= 480) return 1;
  if (window.innerWidth <= 768) return 2;
  return 3;
}

document.getElementById("boton-siguiente").addEventListener("click", function () {
  var cartasVisi = obtenerCartasVisibles();
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