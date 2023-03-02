//8.- Escribe un programa que pida un número y diga si es divisible por 2

let numero = parseInt(prompt("Escribe un número cualquiera"))

if (numero - Math.floor(numero) === 0) {
    if(!(numero % 2)) {
        alert("El número es par!")
    } else {
        alert("El número es impar")
    }
} else {
    alert("El número no es entero, no aplican los conceptos de paridad")
}