//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let numero = parseInt(prompt("Escribe un numero"))

if (!(numero % 2)) {
    document.write("es divisible por 2 ")
}

if (!(numero % 3)) {
    document.write("es divisible por 3 ")
}

if (!(numero % 5)) {
    document.write("es divisible por 5 ")
}

if (!(numero % 7)) {
    document.write("es divisible por 7 ")
}