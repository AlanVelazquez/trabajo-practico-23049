//funcion para calcular


function calcular() {
    const categoria = document.getElementById("categoria").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    var importeTotal = 0;

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const mail = document.getElementById("correo").value;

    if (nombre === "") {
        mensajeEmergente("ingrese su nombre. ");
    } else if (apellido === "" ) {
        mensajeEmergente("ingrese su apellido.");
    } 
    else if (mail === "") {
        mensajeEmergente("ingrese su dirección de correo electrónico.");
    } 
    else if (isNaN(cantidad)) {
        mensajeEmergente("ingrese la cantidad antes de continuar.");
    } 
    else {
        var importe = 200*cantidad;
        if (categoria == "Estudiante") {
            importeTotal = importe-(importe*.80);
        } else if (categoria == "Trainee") {
            importeTotal = importe-(importe*.50);
        } else if (categoria == "Junior") {
            importeTotal = importe-(importe*.15);
        }
        document.getElementById("total").innerHTML = "Total a pagar: $ "+ importeTotal;
        mensajeEmergente("Gracias por su compra!");
    }
}


const botonCalcular = document.getElementById('botonCalcular');
botonCalcular.addEventListener('click', calcular);

const botonBorrar = document.getElementById('botonBorrar');
botonBorrar.addEventListener('click', borrar);

function borrar() {
    var totalAPagar = document.getElementById("total");
    totalAPagar.innerHTML = "Total a pagar: $ ";
    
}



// función mensaje emergente
function mensajeEmergente(texto){
    var mensaje = document.createElement("div");
    mensaje.textContent = texto;
    mensaje.style.position = "fixed";
    mensaje.style.top = "-60px";
    mensaje.style.left = "50%";
    mensaje.style.transform = "translateX(-50%)";
    mensaje.style.padding = "15px";
    mensaje.style.borderRadius = "5px";
    mensaje.style.zIndex = "10000";
    mensaje.className = "w-100 alert alert-light text-center shadow"
    document.body.appendChild(mensaje);
  
    setTimeout(() => {
        mensaje.style.transition = "all 500ms";
        mensaje.style.top = "0px";
    }, 500);
  
    setTimeout(() => {
      document.body.removeChild(mensaje);
    }, 3500);
  }


