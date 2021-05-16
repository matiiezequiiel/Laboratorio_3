var peticionHTTP =  new XMLHttpRequest();


window.addEventListener("load",()=>{
    var btn=document.getElementById("btn");
    btn.addEventListener("click",agregarPersonaPOST);
    getListaDesdeServidor();
});

function getListaDesdeServidor(){
    
    peticionHTTP.onreadystatechange = function(){
      
        if(peticionHTTP.readyState == 4 && peticionHTTP.status ==200){
            let listaPersonasGET = JSON.parse(peticionHTTP.responseText);  
            cargarLista(listaPersonasGET);         
        }
    }
    peticionHTTP.open("GET","http://localhost:3000/personas",true);
    peticionHTTP.setRequestHeader("key","value"); //ESCRIBO DENTRO DEL HEAD
    peticionHTTP.send(); //ESCRIBO DENTRO DEL BODY
    
}

function cargarLista(listaPersonas){
    var cuerpo = $("tCuerpo");


    for(var i=0;i<objLength(listaPersonas);i++){
        var row = document.createElement("tr");
        cuerpo.appendChild(row);

        var tdNombre = document.createElement("td");
        row.appendChild(tdNombre);
        var textoNombre = document.createTextNode(listaPersonas[i].nombre);
        tdNombre.appendChild(textoNombre);

        var tdApellido = document.createElement("td");
        row.appendChild(tdApellido);
        var textoApellido = document.createTextNode(listaPersonas[i].apellido);
        tdApellido.appendChild(textoApellido);

        var tdTelefono = document.createElement("td");
        row.appendChild(tdTelefono);
        var textoTelefono = document.createTextNode(listaPersonas[i].telefono);
        tdTelefono.appendChild(textoTelefono);

        var tdFecha = document.createElement("td");
        row.appendChild(tdFecha);
        var textoFecha = document.createTextNode(listaPersonas[i].fecha);
        tdFecha.appendChild(textoFecha);

        var tdBorrar = document.createElement("td");
        row.appendChild(tdBorrar);
        var aBorrar= document.createElement("a");
        aBorrar.setAttribute("href","#");
        aBorrar.addEventListener("click",limpiar);
        tdBorrar.appendChild(aBorrar);
        var textoRef = document.createTextNode("Borrar");
        aBorrar.appendChild(textoRef);

    }

}

function agregarPersonaPOST(){
    var txtNombre= $("txtNombre");
    var txtApellido= $("txtApellido");
    var txtTelefono= $("txtTelefono");
    var txtFecha= $("txtFecha");
    
    if(txtNombre.value== ""){
        txtNombre.className="conError";
        return;
    }
    else{
        txtNombre.className="sinError";
    }

    if(txtApellido.value== ""){
        txtApellido.className="conError";
        return;
    }
    else{
        txtApellido.className="sinError";
    }

    if(txtTelefono.value== ""){
        txtTelefono.className="conError";
        return;
    }
    else{
        txtTelefono.className="sinError";
    }

    if(txtFecha.value== ""){
        txtFecha.className="conError";
        return;
    }
    else{
        txtFecha.className="sinError";
    }

    var persona = {nombre:txtNombre.value ,apellido:txtApellido.value ,telefono:txtTelefono.value, fecha: txtFecha.value }; //CREO EL JSON
    ejecutarPOST(persona);


}

function ejecutarPOST(persona)
{
    peticionHTTP.onreadystatechange = function(){
        if(peticionHTTP.readyState == 4 && peticionHTTP.status ==200){
            alert("Alta correcta");
            getListaDesdeServidor();
    
        }
    }
    peticionHTTP.open("POST","http://localhost:3000/nuevaPersona",true);
    peticionHTTP.setRequestHeader("Content-type","application/json"); //ESCRIBO DENTRO DEL HEAD

    var stringPersona = JSON.stringify(persona); //CONVIERTO EL JSON A STRING.
    peticionHTTP.send(stringPersona); //ESCRIBO DENTRO DEL BODY

}

function $(id)
{
    return document.getElementById(id);
}

function limpiar(event) {

    var target = event.target;
    
    $("tCuerpo").removeChild(target.parentNode.parentNode);
}

function objLength(obj){
var i=0;
for (var x in obj){
    if(obj.hasOwnProperty(x)){
    i++;
    }
} 
return i;
}
  
  
 