class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola soy ${this.nombre}`);
  }
  presentarse() {
    console.log(
      `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`
    ); //ALT+96 ``
  }
}

// CREO UNA PERSONA.
const persona1 = new Persona("Juan", "Martinez", 60);
const otraPersona = new Persona("Marcos", "Acuña", 25);

// APLICACION DE HERENCIA.
class Profesor extends Persona {
  constructor(nombre, apellido, edad, materia) {
    super(nombre, apellido, edad);
    this.materia = materia;
  }

  // SOBRESCRIBO METODO PRESENTARSE DE LA CLASE PADRE.
  presentarse() {
    console.log(
      `Hola soy ${this.nombre} ${this.apellido} y doy ${this.materia}`
    );
  }
  // AGREGO UN METODO AL PROFESOR.
  calificar() {
    console.log("Desaprobado.");
  }

  set setMateria(materia){
    this.materia=materia;
  }
  get getMateria(){
    return this.materia;
  }
  
  static metodoEstatico(){
    console.log("Soy un metodo de clase.")
  }
}

const profe1 = new Profesor("Mariano", "Ramirez", 23, "Laboratorio");

profe1.setMateria = "Algebra.";
console.log(profe1.getMateria);
Profesor.metodoEstatico();
profe1.saludar();
profe1.presentarse();
