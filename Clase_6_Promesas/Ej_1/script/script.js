// SUMAR DOS NUMEROS
// AL RESULTADO ELEVARLO AL CUADRADO
// AL CUADRADO DIVIDIRLO POR 2
// A LA DIVISION RESTARLE 50
// A LA RESTA VALIDAR SI ES MAYOR A 0

function operar(a, b, callback) {
  setTimeout(() => {
    return callback(a, b);
  }, 2000);
}

function potenciar(a, callback) {
  setTimeout(() => {
    return callback(a);
  }, 3000);
}

function validar(a, callback) {
  setTimeout(() => {
    return callback(a);
  }, 1500);
}

// SIN USAR PROMESAS
/*
operar(4,5,(x,y)=>{
    let rta = x+y;
    console.log("Suma: " + rta);
    potenciar(rta,(a)=>{
        let cuadrado = Math.pow(a,2);
        console.log("Cuadrado: " + cuadrado);
        operar(cuadrado,2,(a,b)=>{
            let cociente= a/b;
            console.log("Cociente: " + cociente);
            operar(cociente,50,(a,b)=>{
                let resta = a - b;
                console.log("Resta: " + resta);
                validar(resta,(a)=>{
                    console.log("Validacion: " + a > 0 ? "Positivo" : "Negativo");
                });

            });

        });

    });
});
*/

function sumarPromesa(a, b) {
    if(isNaN(a) || isNaN (b)){
        return Promise.reject({error: "No pasaste numeros."});
    }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
}

function cuadradoPromesa(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.pow(a, 2));
    }, 2000);
  });
}

function dividirPromesa(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a / b);
    }, 2000);
  });
}

function restarPromesa(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a - b);
    }, 2000);
  });
}

function validarPromesa(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a > 0 ? "Positivo" : "Negativo");
    }, 2000);
  });
}

sumarPromesa(10, 5) 
  .then((suma) => {
    console.log("Suma: " + suma);
    return cuadradoPromesa(suma);
  })
  .then((cuadrado) => {
    console.log("Cuadrado: " + cuadrado);
    return dividirPromesa(cuadrado, 2);
  })
  .then((cociente) => {
    console.log("Cociente: " + cociente);
    return restarPromesa(cociente, 50);
  })
  .then((resta) => {
    console.log("Resta: " + resta);
    return validarPromesa(resta);
  })
  .then((resultado) => {
    console.log(resultado) ;
  })
  .catch((e)=>{
      console.log(e.error);
  })
