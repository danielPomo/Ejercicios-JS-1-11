//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let numero = prompt("Escribe un numero")

if (!(numero % 2 && numero % 3 && numero % 5 && numero % 7)) {
    document.write("el numero es divisible por 2, 3, 5 o 7")
} else {
    document.write("El número no es divisible por 2 ni por 3 ni por 5 ni por 7")
}