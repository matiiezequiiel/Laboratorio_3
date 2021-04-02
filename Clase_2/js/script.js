let clave;
let video;
let play;
let pausa;   
let form;

window.addEventListener('load',() => {

        clave = document.getElementById('txtPass');
        console.log(clave);

        clave.addEventListener('keyup', (e)=>{
            console.log(e.target.value);
        });

        
        video = document.getElementById('video');
        play = document.getElementById('play');
        pausa = document.getElementById('stop');
      

        play.addEventListener('click',()=>{
            video.play();
        });

        stop.addEventListener('click',()=> {
            video.stop();
        });

        document.forms[0].addEventListener('submit', e =>{
            e.preventDefault();

        });


});




/*
FUNCION ANONIMA:

window.addEventListener('load',function (){

    clave=document.getElementById('txtPass');
    console.log(clave);
});
*/

