/**El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
    
    Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
    "bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌ */

const isValidLetterCharacter = (str, characterOpen) => {
    let regExp = /\(([^)]+)\)/;
    let matches = regExp.exec(str);
    return (matches[1].includes(characterOpen)) ? true : false;
}

function isValid(letter) {
    if (letter.includes("(") &&
        letter.includes(")") &&
        !letter.includes("[") &&
        !letter.includes("{") &&
        !letter.includes("()")) {
        return true;
    } else if (letter.includes("(") || letter.includes("()") || isValidLetterCharacter(letter, "[") || isValidLetterCharacter(letter, "{")) {
        return false;
    }
}


console.log(isValid("bici coche (balón) bici coche peluche"))
console.log(isValid("(muñeca) consola bici"))
console.log(isValid("bici coche (balón bici coche"))
console.log(isValid("peluche (bici [coche) bici coche balón"))
console.log(isValid("(peluche {) bici"))
console.log(isValid("() bici"))




isValid("bici coche (balón) bici coche peluche");
isValid("(muñeca) consola bici");

isValid("bici coche (balón bici coche");
isValid("peluche (bici [coche) bici coche balón");
isValid("(peluche {) bici");
isValid("() bici");