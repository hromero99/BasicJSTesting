const Persona = require('./persona');

const people = [
    {
        name:"Hector",
        surname: "Romero",
        age: 1
    }, {
        name:"Hector",
        surname: "Romero",
        age: 12
    }, {
        name:"Hector",
        surname: "Romero",
        age: 20
    }, {
        name:"Hector",
        surname: "Romero",
        age: 999
    }
]
const persona = new Persona("Hector","Romero")
describe("TEST DE PERSONAS", () =>  {

test("Una persona con nombre y apellidos tiene que identificarse con esos atributos",() => {
    expect(persona.identify()).toBe("Hector Romero")
})
/*
    1. Si es un numero o no la edad tiene que dar un error (Valor incorrecto)
    2. Si la edad es menor  a 0 tiene que dar un error (No puedes tener edad negativa)
    3. Si la edad es mayor de 110 tiene que dar un error (No puedes ser tan mayor)
*/
test("Si una persona es mayor de edad isOlder tiene que devolver true",()=>{
    expect(new Persona(people[2].name,people[2].surname,people[2].age).isOlder()).toBeTruthy()
})
test("Si una persona es menor de edad isOlder tiene que devolver false",()=>{
    expect(new Persona(people[0].name,people[0].surname,people[0].age).isOlder()).toBeFalsy()
})
})