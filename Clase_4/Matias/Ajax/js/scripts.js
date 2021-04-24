
var peticionHTTP =  new XMLHttpRequest();

ejecutarPOST();



function ejecutarGET()
{
    
// peticionHTTP.readyState :4 ESTADOS,1-ESTABLECIO LA CONEXION,2-SERV RECIBIO PETICION,3-PETICION ENVIO PETICION,4-RESPUESTA RECIBIDA.
    peticionHTTP.onreadystatechange = function(){
//VALIDO QUE LA RESPUESTA LLEGO CORRECTAMENTE.
    if(peticionHTTP.readyState == 4 && peticionHTTP.status ==200){
        var listaPersonas = JSON.parse(peticionHTTP.responseText);

    }
}
peticionHTTP.open("GET","http://localhost:3000/personas",true);
peticionHTTP.setRequestHeader("key","value"); //ESCRIBO DENTRO DEL HEAD
peticionHTTP.send(); //ESCRIBO DENTRO DEL BODY
    
}


function ejecutarPOST()
{
    // peticionHTTP.readyState :4 ESTADOS,1-ESTABLECIO LA CONEXION,2-SERV RECIBIO PETICION,3-PETICION ENVIO PETICION,4-RESPUESTA RECIBIDA.
        peticionHTTP.onreadystatechange = function(){
    //VALIDO QUE LA RESPUESTA LLEGO CORRECTAMENTE.
        if(peticionHTTP.readyState == 4 && peticionHTTP.status ==200){
            alert(peticionHTTP.responseText);
    
        }
    }
    peticionHTTP.open("POST","http://localhost:3000/nuevaPersona",true);
    peticionHTTP.setRequestHeader("Content-type","application/json"); //ESCRIBO DENTRO DEL HEAD

    var persona = {nombre:'Matias',apellido: 'Aguirre' ,telefono: '54987977',fecha: '01/01/2021' }; //CREO EL SON
    var stringPersona = JSON.stringify(persona); //CONVIERTO EL JSON A STRING.
    peticionHTTP.send(stringPersona); //ESCRIBO DENTRO DEL BODY
    
}