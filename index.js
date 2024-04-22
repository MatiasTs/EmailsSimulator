let inputsList = document.querySelectorAll("#formulario > input, #formulario > textarea");

const resetButton = document.getElementById("resetear");

resetButton.addEventListener("click", () => {
    inputsList.forEach(element => {
        element.value = "";
    });
})