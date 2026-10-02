document.getElementById("boton").addEventListener("click", function() {

let temperatura = Number(document.getElementById("temperatura").value);
let mensaje = document.getElementById("mensaje");

if (temperatura > 30) {

    console.log("O herby ta kaliente 🐒🐒");
    mensaje.textContent = "O herby ta kaliente 🐒🐒";

}

else if (temperatura < 10) {

    console.log("O herby ta elao ❄️❄️");
    mensaje.textContent = "O herby ta elao ❄️❄️";

}

else {

    console.log("O herby ta normal 🌞");
    mensaje.textContent = "O herby ta normal 🌞";

}

});
