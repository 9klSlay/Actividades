document.getElementById("calcular").addEventListener("click", function() {
    let peso = Number(document.getElementById("Peso").value);
    let altura = Number(document.getElementById("Altura").value);

    let imc = peso / (altura * altura);

    if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById("mensaje").textContent = "Tiene un IMC normal";
        alert("Tiene un IMC normal");
    } else if (imc < 18.5) {
        document.getElementById("mensaje").textContent = "Tiene un IMC bajo";
        alert("Tiene un IMC bajo");
    } else if (imc >= 25) {
        document.getElementById("mensaje").textContent = "Tiene un IMC alto";
        alert("Tiene un IMC alto");
    } else {
        document.getElementById("mensaje").textContent = "Ingrese valores válidos";
        alert("Ingrese valores válidos");
    }
});