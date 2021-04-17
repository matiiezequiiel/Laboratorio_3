window.addEventListener("load",()=>{
    var btn=document.getElementById("btn");
    btn.addEventListener("click",agregarPersona);
});

function agregarPersona(){
    var txtNombre= $("txtNombre");
    var txtApellido= $("txtApellido");

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

    var cuerpo = $("tCuerpo");

    // cuerpo.innerHTML +=
    //  "<tr>" +
    // "<td>" + txtNombre.value +"</td>" +
    // "<td>" + txtApellido.value +"</td>" +
    // "<td><a href='#'>Borrar</a></td>" +
    // "</tr>"

    // CREAR TR
    var row = document.createElement("tr");
    cuerpo.appendChild(row);

    var tdNombre = document.createElement("td");
    row.appendChild(tdNombre);
    var textoNombre = document.createTextNode(txtNombre.value);
    tdNombre.appendChild(textoNombre);

    var tdApellido = document.createElement("td");
    row.appendChild(tdApellido);
    var textoApellido = document.createTextNode(txtApellido.value);
    tdApellido.appendChild(textoApellido);

    var tdBorrar = document.createElement("td");
    row.appendChild(tdBorrar);
    var aBorrar= document.createElement("a");
    aBorrar.setAttribute("href","#");
    aBorrar.addEventListener("click",limpiar);
    tdBorrar.appendChild(aBorrar);
    var textoRef = document.createTextNode("Borrar");
    aBorrar.appendChild(textoRef);


}

function $(id)
{
    return document.getElementById(id);
}

function limpiar(event) {

    var target = event.target;
    
    $("tCuerpo").removeChild(target.parentNode.parentNode);
  }