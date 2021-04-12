window.addEventListener("load",function (){ //Bienvenida a la pagina.
    alert("Bienvenido a la pagina");
    var btn=document.getElementById("btnName");
    btn.addEventListener("click", function (){ //Mostrar nombre
        var name=document.getElementById("txtNombre");
        alert ("Bienvenido " + name.value);
        var parrafo=document.getElementById("parrafo");
        parrafo.innerHTML = name.value; //INNER METO DENTRO DEL PARRAFO.
        var resul=document.getElementById("txtResultado");
        resul.value = name.value; //INNER METO DENTRO DEL PARRAFO.
    });
});

