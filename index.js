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
         <img src="./assets/img/y2020-05-19-04_generated.jpg" class="foot__cont3__image" alt="">
         <h4 id="text1" class="">${Name}</h4>
         <h4 id="text1" class="">${Work}</h4>

      </div>
      <div>
         <div class="foot__cont3__image__respuestas">
            <div class="foot__cont3__image__respuestas__info">
               <h2>Informacion</h2>
            </div>
            <div class="foot__cont3__image__respuestas__info__contenido" id="block1">
               <label for="email" class="foot__cont3__image__respuestas__info__contenido__input__item">${email}</label>
               <input type="text" placeholder=" " class="foot__cont3__image__respuestas__info__contenido__input">
            
               <label for="email"
               class="foot__cont3__image__respuestas__info__contenido__input__item">${telefono}</label>
               <input type="text" placeholder=" " class="foot__cont3__image__respuestas__info__contenido__input">
            </div>
            <div class="foot__cont3__image__respuestas__info__contenido" id="block3">
               <label for="email" class="foot__cont3__image__respuestas__info__contenido__input__item">${info}</label>
               <input type="text" placeholder=" " class="foot__cont3__image__respuestas__info__contenido__input">
            </div>
         </div>
      </div>

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



