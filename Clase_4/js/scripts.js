let nombre = "Carlitos";
let edad = 21;

/*
function saludar() {
  console.log(`Hola soy ${this.nombre}`); //ALT+96 ``
}

const per1 = {
  nombre,
  edad,
  saludar,
};

console.log(per1);
per1.saludar();

const persona1 = {
  nombre: "Juan",
  edad: 30,
  saludar: function () {
    console.log(`Hola soy ${this.nombre}`); //ALT+96 ``
  }
};

console.log(persona1);
console.log(persona1.nombre);
console.log(persona1["edad"]);

persona1["saludar"]();
*/

// CONSTRUCTOR
function Persona(nombre, apellido, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
}
// AGREGAR METODO AL PROTOTIPO DEL OBJETO.
Persona.prototype.saludar = function () {
  console.log(`Hola soy ${this.nombre}`); //ALT+96 ``
  
};
Persona.prototype.presentarse = function () {
  console.log(`Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`); //ALT+96 ``
  
};

// CREO UNA PERSONA.
const persona1 = new Persona("Juan", "Martinez", 60);
const otraPersona = new Persona("Marcos","Acuña",25);

persona1.saludar();

// APLICACION DE HERENCIA.
function Profesor (nombre,apellido,edad,materia){
  this.super= Persona;
  this.super(nombre,apellido,edad);
  this.materia=materia;
}

// LE PASO AL PROFESOR EL PROTOTIPO DE PERSONA.
Profesor.prototype = new Persona;
Profesor.prototype.constructor = Profesor;
// SOBRESCRIBO METODO PRESENTARSE DE LA CLASE PADRE.
Profesor.prototype.presentarse = function (){
  console.log(`Hola soy ${this.nombre} ${this.apellido} y doy ${this.materia }`);
}
// AGREGO UN METODO AL PROFESOR.
Profesor.prototype.calificar = function (){
  console.log("Desaprobado.")
}

const profe1 = new Profesor("Mariano","Ramirez",23,"Laboratorio");

profe1.saludar();
profe1.presentarse();

