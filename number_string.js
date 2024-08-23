

const sumNumbersInString = (cadenaOriginal)=>{
    let total = 0;
    if (typeof cadenaOriginal !== "string")
        return "Tipo de dato incorrecto"

    for (let index = 0; index < cadenaOriginal.length; index++) {
        const caracter = cadenaOriginal[index];
        let number = Number.parseInt(caracter)
        if (!isNaN(number)) {
            total = number + total
        }
    }
    
    return total
}
module.exports = {sumNumbersInString}