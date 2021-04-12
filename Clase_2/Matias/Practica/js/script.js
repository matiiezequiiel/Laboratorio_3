// DOS INPUT PARA SUMAR
// -validar:que sea mayor a 0 . sino el borde de color rojo del input que no cumple
// -boton limpiar: que limpie los inputs
// -los dos botones tienen que tener estilos diferentes
// -si son positivos que se sume y se guarde en una tabla. que se vayan acumulando los resultados en distintas filas/celdas.

window.addEventListener("load", () => {
  alert("Bienvenido a la calculadora.");
  var btnEnviar = document.getElementById("btnEnviar");
  var btnLimpiar = document.getElementById("btnLimpiar");

  btnEnviar.addEventListener("click", sumar);
  btnLimpiar.addEventListener("click", limpiar);
});

function sumar() {
  var op1 = document.getElementById("txtNum1");
  var op2 = document.getElementById("txtNum2");
  var resultado = document.getElementById("txtResultado");

  if (op1.value > 0 && op2.value > 0) {
    op1.removeAttribute("class");
    op2.removeAttribute("class");
    resultado.value = parseInt(op1.value) + parseInt(op2.value);
  } else {
    if (op1.value < 0 && op2.value < 0) {
      op1.setAttribute("class", "btnError");
      op2.setAttribute("class", "btnError");
    } else if (op1.value < 0) {
      op1.setAttribute("class", "btnError");
    } else {
      op2.setAttribute("class", "btnError");
    }
  }
}

function limpiar() {
  var operandos = document.getElementsByName("operandos");

  for (var i = 0; i < operandos.length; i++) {
    operandos[i].value = " ";
  }
}
