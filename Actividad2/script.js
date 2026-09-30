document.getElementById("calcular").addEventListener("click", function() {

    let cantidad = Number(document.getElementById("cantidad").value);
    let precio = Number(document.getElementById("precio").value);

    let resultado = cantidad / precio;

    if (resultado >= 1) {
        document.getElementById("mensaje").textContent = "Alcanza";
        alert("Alcanza");
    } else {
        document.getElementById("mensaje").textContent = "No alcanza";
        alert("No alcanza");
    }

});