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



function crearCuadroDeforma( name, email, work, telefono, info) {
    
    const cuadrohtml = `
    <footer class="foot">
    <div class="foot__cont3">
       <img src="./assets/img/y2020-05-19-04_generated.jpg" class="foot__cont3__image" alt="">
       <h4 id="text1" class="">${name}</h4>
       <h4 id="text1" class="">${work}</h4>
        
    </div>
    <div id="respuesta" >
    <div>
          <h2 class="info">informacion</h2>
    </div>
       <div class="contenido">
          <input type="text" placeholder=" "class="contenido__input">
          <label for="email"class="contenido__input__item">${email}</label>
        </div>
       <div class="contenido">
          <input type="text" placeholder=" "class=" contenido__input">
          <label for="email"class="contenido__input__item">${telefono}</label>
        </div>
        <div class="contenido" id="block3">
          <input type="text" placeholder=" "class="contenido__input">
          <label for="email"class=" contenido__input__item">${info}</label>
       </div>
       </form>
    </div>
    
  </footer>`

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



