//obtener informacion de la forma
const nombre =document.getElementById("name");
const correo =document.getElementById("correo");
//llamar la formula

const form =document.getElementById ("forma");

//constante de contenedor del contenido inyectado con js

const contenedor = document.getElementById("")
//crear evenlistener para la form


form.addEventListener( "submit" , (event) =>{
    event.preventDefault();

    //crear un objeto que tenga los valorres de la forma

    const formulario ={
        name: nombre.value,
        correo: correo.value,
    }

    console.log(formulario);

});
  


const formulario = {
    
}
// llamar el boton submit 
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    console.log(e.target)
});

/*crear una funcion que nos retorne contenido html dianmicamente*/



function crearCuadroDeforma( name,correo) {
    
    const cuadrohtml = `<div class="contenido">
    <h3 class="conteinido__titulo">${name}</h3>
    <p class="contenido__p">${correo}</p>
    </div>`

    return cuadrohtml;
}const cuadrohtmlconInfo = crearCuadroDeforma ()
    




