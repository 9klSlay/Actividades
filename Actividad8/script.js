document.getElementById("revisar").addEventListener("click", function() {

    let opt1 = document.getElementById("opt1").checked;
    let opt2 = document.getElementById("opt2").checked;
    let resultado = document.getElementById("resultado");
    let enviar = document.getElementById("btn-enviar");

    if (opt1 == true || opt2 == true) {

        resultado.innerHTML = "Hay una opción marcada. Puedes enviar.";
        enviar.disabled = false;

    } else {

        resultado.innerHTML = "Marca al menos una opción.";
        enviar.disabled = true;

    }

});


document.getElementById("btn-enviar").addEventListener("click", function() {

    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "Enviado correctamente";

    document.getElementById("opt1").disabled = true;
    document.getElementById("opt2").disabled = true;
    document.getElementById("revisar").disabled = true;
    document.getElementById("btn-enviar").disabled = true;

});