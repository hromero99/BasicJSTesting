

class Persona{
    constructor(name,surname,edad){
        this.name = name
        this.surname = surname
        this.edad = edad
    }
    identify(){
        return `${this.name} ${this.surname}`
    }
    isOlder(){
        return this.edad >= 18
    }
}


module.exports = Persona;