/*Escribe una función llamada sumNumbersInString que recibe una cadena de texto como argumento y 
retorna la suma de todos los números que aparecen en la cadena. 
Si no hay números en la cadena, debe retornar 0.

- Existe la funcion sumNumbersInString
- La funcion solo recibe cadena de texto 
- cadena sin numeros
- cadena con muchos numeros
- cadena con 1 numero
- cadena con numeros y letras
*/
const  {sumNumbersInString} = require("./script")

describe("sumNumbersInString Module", () => {

  test("Recibe una otra cosa que no es cadena texto", () => {
    expect(sumNumbersInString(true)).toBe("Tipo de dato incorrecto")
    expect(sumNumbersInString(2)).toBe("Tipo de dato incorrecto")
    expect(sumNumbersInString({})).toBe("Tipo de dato incorrecto")
    expect(sumNumbersInString([])).toBe("Tipo de dato incorrecto")
  });
  test("Recibe cadena sin numeros", () => {
    expect(sumNumbersInString("")).toBe(0);
    expect(sumNumbersInString("jkasdbnh")).toBe(0);
    expect(sumNumbersInString("-----^^")).toBe(0);

  });
  test("Recibe cadena con muchos numeros", () => {
    expect(sumNumbersInString("12345")).toBe(15);
    expect(sumNumbersInString("1 2 3 4 5")).toBe(15);
    expect(sumNumbersInString("1-2 3-4 5")).toBe(15);
  });
  test("cadena con 1 numero", () => {
    expect(sumNumbersInString("1")).toBe(1);
  });
  test("cadena con numero letras", () => {
    expect(sumNumbersInString("gags7361")).toBe(17);

  });
  
});
