//obtener informacion de la forma
const nombre =document.getElementById("name");
const correo =document.getElementById("correo");
const trabajo= document.getElementById("trabajo");
const contac= document.getElementById("phone");
const informacion = document.getElementById("info");
//llamar la formula

const form =document.getElementById ("forma");

//constante de contenedor del contenido inyectado con js

const contenedor = document.getElementById("contenedor")


//crear evenlistener para la form


form.addEventListener( "submit" , (event) =>{
    event.preventDefault();

    //crear un objeto que tenga los valorres de la forma

    const formulario ={
        name: nombre.value,
        email: correo.value,
        work: trabajo.value,
        telefono: contac.value,
        info:informacion.value,

    }

    const {name, email, work, telefono, info} = formulario;

    const cuadrohtmlconInfo = crearCuadroDeforma(name, email, work, telefono, info);

    console.log(formulario);

     contenedor.insertAdjacentHTML('beforeend', cuadrohtmlconInfo);
});
  



// llamar el boton submit 
const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    console.log(e.target)
});

/*crear una funcion que nos retorne contenido html dianmicamente*/



function crearCuadroDeforma( Name, email, Work, telefono, info) {
    
    const cuadrohtml = `
    <section class="foot">

      <div class="foot__cont3">
         <img src="./assets/img/y2020-05-19-04_generated.jpg" class="foot__cont3__image" alt="image">
         <h4  class="foot__cont3__image__name">${Name}</h4>
         <h4  class="foot__cont3__image__name">${Work}</h4>

      </div>
      <div>
         <form class="form-2">
            <h2 class="form-2__titul">Informacion</h2>
            <div class="contenedor-inputs">
               <input type="email" name="email" placeholder="${email}" class="input-50">

               <input type="number" name="telefono" placeholder="${telefono}" class="input-50">

               <input type="text" name="informacion" placeholder="${info}" class="input-100">

            </div>
         </form>

   </section>


   `;

    return cuadrohtml;
}
    
// Llamar al button submit


const  boton = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  console.log(e.target)
});

// Validar nombre
/*function validarNombre(nombre) {
  if (nombre != " ") {
    return true;
  }
}*/



