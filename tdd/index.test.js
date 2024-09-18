const suma = require('./index');
/*
    Queremos hacer una funcion que sume dos numeros y nos de el resultado de la suma.
    ¿Qué casos tenemos que comprobar?
    1. Si es un numero tiene que hacer la suma
    2. Si no es numero no tenemos la suma
    3. Si es un numero, tenemos que comprobar:
        3.1 Si son positivos se suma
        3.2 Si son negativos se suma
        3.3 Si es 0 se suma
    4. Si lso parametros no son correctos
*/
test("Comprobamos si un parámetro de la suma no esta", () => {
    expect(suma(1)).toBeNaN()
})
test("Comprobacion de que la suma de 2 numeros es correcta",() => {
    expect(suma(1,1)).toBe(2);
})

test("Comprobamos que si los parametros de la suma no son números tiene que devolver", () => {
    expect(suma("a","b")).toBeNaN();
})

test("Comprobamos que si los numeros de la suma son negativos", () => {    
    expect(suma(-1,-2)).toBe(-3)
})
test("Comprobamos que si los numeros de la suma son 0", () => {
    expect(suma(0,0)).toBe(0)
})