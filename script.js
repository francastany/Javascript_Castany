let precio, descuento

do {
    precio = parseFloat(prompt("Ingrese la cantidad de dinero gastada"));
    if (isNaN(precio)) {
        alert("Ingrese un número válido")
    }
} while (isNaN(precio));

if (precio >= 5000 && precio < 7500) {
    descuento = 0.1
} else if (precio >= 7500 && precio < 10000){
    descuento = 0.15
} else if (precio >= 10000 && precio < 20000){
    descuento = 0.2
} else if (precio >= 20000){
    descuento = 0.5
} else {
    descuento = 0
}

console.log("El descuento será de: " + descuento)

function precioFinal (precio, descuento) {
    return precio - (precio * descuento)
}

console.log("El total a pagar con el descuento aplicado es de: $" + precioFinal(precio, descuento))
