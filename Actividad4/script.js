tamaño = prompt("Digite el tamaño de su pantalla actual: ");
if (tamaño >= 576){
    console.log("Tamaño XS");
    alert("Tamaño XS");
}
else if (tamaño >= 768){
    console.log("Tamaño SM");
    alert("Tamaño SM");
}
else if (tamaño >= 962){
    console.log("Tamaño MD");
    alert("Tamaño MD");
}
else if (tamaño >= 963){
    console.log("Tamaño XL");
    alert("Tamaño XL");
}
else if (tamaño >= 1200){
    console.log("Tamaño XXL");
    alert("Tamaño XXL");
}
else{
    console.log("Tamaño no valido; Prueba con un tamaño mayor a 576");
    alert("Tamaño no valido; Prueba con un tamaño mayor a 576");
}