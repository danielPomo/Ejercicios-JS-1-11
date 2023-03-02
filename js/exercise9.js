//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt("Escribe una frase cualquiera")

let a = 0, e = 0, i = 0, o = 0, u = 0

for(let index = 0; index < frase.length; index++) {
    if (frase.charAt(index) === "a" || frase.charAt(index) === "á") {
        a = a + 1
    }
    if (frase.charAt(index) === "e" || frase.charAt(index) === "é") {
        e = e + 1
    }
    if (frase.charAt(index) === "i" || frase.charAt(index) === "í") {
        i = i + 1
    }
    if (frase.charAt(index) === "o" || frase.charAt(index) === "ó") {
        o = o + 1
    }
    if (frase.charAt(index) === "u" || frase.charAt(index) === "ú") {
        u = u + 1
    }
}

if (a > 0) {
    document.write("a")
}

if (e > 0) {
    document.write("e")
}

if (i > 0) {
    document.write("i")
}

if (o > 0) {
    document.write("o")
}

if (u > 0) {
    document.write("u")
}