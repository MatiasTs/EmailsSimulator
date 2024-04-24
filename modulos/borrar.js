let inputsList = document.querySelectorAll("#formulario > input, #formulario > textarea"),
    noValido = document.getElementById("noValido");;



const resetFunction = (event) => {
    inputsList.forEach(element => {
        element.value = "";
    });
    noValido.textContent = "";
    event.preventDefault();
}



export default resetFunction;