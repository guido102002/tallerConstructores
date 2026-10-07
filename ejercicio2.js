function constructoraMascota(nombre, especie,edad,peso){
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.peso = peso;

    this. presentarse = function(){
         return `soy el dueño de ${this.nombre}, un(a) ${this.especie} de ${this.edad} año(s) y peso ${this.peso} kg.`;

    }
}

const animal1 =  new constructoraMascota("logan","lobo",5,10);
const animal2 =  new constructoraMascota("dante","pichenr",4,5);
const animal3 =  new constructoraMascota("zeus","pastor aleman",10,30);

console.log(animal1.presentarse());
console.log(animal2.presentarse());
console.log(animal3.presentarse());




