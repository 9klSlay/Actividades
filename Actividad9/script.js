document.getElementById("calcular").addEventListener("click", function() {
    let cuotas = Number(document.getElementById("cuotas").value);
    let resultado = cuotas >= 6 ? "Serán aplicados intereses en esta compra" : "No serán aplicados intereses en esta compra";

    document.getElementById("resultado").innerHTML = resultado;
});
