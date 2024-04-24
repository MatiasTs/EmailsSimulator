import borrar from "./modulos/borrar.js";
import enviar from "./modulos/enviar.js"

const btnEnviar = document.getElementById("enviar");
const resetButton = document.getElementById("resetear");

btnEnviar.addEventListener("click", enviar);

resetButton.addEventListener("click", borrar);

