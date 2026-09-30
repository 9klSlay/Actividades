document.getElementById("verificar").addEventListener("click", function() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let resultado = document.getElementById("resultado");

    if (email == "9k.lslay@gmail.com" && password == "Herby ta kaliente") {
        resultado.innerHTML = "Usuario correcto ✓";
    } else {
        resultado.innerHTML = "Usuario incorrecto ✗";
    }
});
