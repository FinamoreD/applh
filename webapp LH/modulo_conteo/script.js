const bolloInput = document.getElementById("input-bollos");
const bolloJrInput = document.getElementById("input-bollos-jr");
const panInput = document.getElementById("input-panes");
const panJrInput = document.getElementById("input-panes-jr");
const papaInput = document.getElementById("input-papas");
const obtenerConteoBtn = document.getElementById("obtenerConteo");
const copiarConteoBtn = document.getElementById("copiarConteo");
const textoGenerado = document.getElementById("textoGenerado");

// Agregar eventos a los inputs
bolloInput.addEventListener("input", (event) => {
  bollos = event.target.value;
});

bolloJrInput.addEventListener("input", (event) => {
  bollosJr = event.target.value;
});

panInput.addEventListener("input", (event) => {
  panes = event.target.value;
});

panJrInput.addEventListener("input", (event) => {
  panesJr = event.target.value;
});

papaInput.addEventListener("input", (event) => {
  papas = event.target.value;
});

// Agregar evento al botón "Obtener conteo"
obtenerConteoBtn.addEventListener("click", () => {
  // Generar el conteo
  const conteo = `Bollos: ${bollos}\nBollos Jr: ${bollosJr}\nPanes: ${panes}\nPanes Jr: ${panesJr}\nPapas: ${papas}`;

  // Mostrar el conteo en el textarea
  textoGenerado.value = conteo;
});

// Agregar evento al botón "Copiar conteo"
copiarConteoBtn.addEventListener("click", () => {
  // Copiar el conteo al portapapeles
  navigator.clipboard.writeText(textoGenerado.value);
  alert("Conteo copiado al portapapeles.");
});