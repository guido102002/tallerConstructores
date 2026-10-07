function constructoraEstudiante(nombre,curso,nota){
    this.nombre = nombre;
    this.curso = curso;
    this.nota = nota;
    this.aprueba = nota>=3.0;

    this.mostrarNota = function(){
        if(this.aprueba){
            console.log(`${this.nombre} gano ${this.curso} con  ${this.nota}.`);
        }else{
            console.log(`${this.nombre} perdio ${this.curso} con ${this.nota}.`);
        }
    }
    
}

const estudiante1 = new constructoraEstudiante("fernando","matematicas",4.5);
const estudiante2 = new constructoraEstudiante("yulieth","matematicas",4.5);
const estudiante3 = new constructoraEstudiante("lucas","matematicas",2.5);

estudiante1.mostrarNota();
estudiante2.mostrarNota();
estudiante3.mostrarNota();