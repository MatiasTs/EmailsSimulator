const email = document.getElementById("email"),
    noValido = document.getElementById("noValido"),
    asunto = document.getElementById("asunto"),
    mensaje = document.getElementById("mensaje");

const enviarFunction = (event) => {

    
    let comprobar = condicion(email, "email");
    if(comprobar){
        comprobar = condicion(asunto, "asunto");
        if(comprobar){

            condicion(mensaje, "mensaje");
        }
    }

    event.preventDefault();
}

const  escribirTexto = ( palabra) => {
    noValido.textContent = `El ${palabra} no puede venir vacío`;
}

const condicion = (elemento, palabra) => {
    if (elemento.value.trim() === ''){
        escribirTexto(palabra);
        return false;
        
    }else{
        borrarTexto();
        return true;
    }
}

const borrarTexto = () => {
    noValido.textContent = '';
}


export default enviarFunction;
