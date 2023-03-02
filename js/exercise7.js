//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

let num1 = parseInt(prompt("Escribe un número"))
let num2 = parseInt(prompt("Escribe otro número"))
let num3 = parseInt(prompt("Escribe un tercer número"))

let mayor
if (num1 >= num2 && num1 >= num3) {
    mayor = num1
} else {
    if (num2 >= num1 && num2 >= num3) {
        mayor = num2
    } else {
        if (num3 >= num1 && num3 >= num1) {
            mayor = num3
        }
    }
}

document.write(mayor)