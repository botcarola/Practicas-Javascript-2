

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById ("apellido")


// onfocus se mostrará cuando se está trabajando en un campo

const estaEnFoco = () =>{
    console.log("Se está en foco")

}

inputNombre.onfocus = estaEnFoco

inputApellido.onfocus = estaEnFoco


// onchange detecta cambios, cuando aprieto enter o tabulo

const detectaCambios = () =>{
    console.log("Se detecta cambios")
}

inputNombre.onchange = detectaCambios

inputApellido.onchange = detectaCambios




//event en javascript, para ver lo que ingresa el usuario en un formulario


const verTodoLoQueHaIngresado = (event) =>{ //event te permite saber que sucedió en un campo de formulario
    console.log (event.target.value) // target.value te permite ver qué se escribó con exactitud en un campo

}



// oninput muestra paso por paso, lo que el usuario ingresa en el formulario

inputNombre.oninput = verTodoLoQueHaIngresado

inputApellido.oninput = verTodoLoQueHaIngresado




// si uso onblur solo veré lo que ingresó el usuario al dejar de estar en un campo de formulario

inputNombre.onblur = verTodoLoQueHaIngresado

inputApellido.onblur = verTodoLoQueHaIngresado




// javascript para confirmar campos de contraseña


const inputContrasenia = document.getElementById("contrasenia")
const inputContraseniaConfirmacion = document.getElementById("contrasenia2")
const error = document.getElementById("aviso")



const confirmarContraseniasIguales = () =>{
    
    const contrasenia1 = inputContrasenia.value
    const contrasenia2 = inputContraseniaConfirmacion.value

    if (contrasenia1 !== contrasenia2 ){
        inputContrasenia.style.border = "3px solid red"
        inputContraseniaConfirmacion.style.border = "3px solid red"

        console.log("Las contraseñas son diferentes")

        error.innerText = "Reingrese su contraseña"
        error.style.border = "3px solid red"

    }

    else{
        inputContrasenia.style.border = "3px solid green"
        inputContraseniaConfirmacion.style.border = "3px solid green"

        error.innerText = "Contraseñas válidas"
        error.style.border = "3px solid green"
    
    
    
    }

    
}

inputContraseniaConfirmacion.onblur = confirmarContraseniasIguales


// la función solo puede retornar un valor, ya que al retornar se finaliza la tarea



const edad = 18

const validadEdad = () =>{

    if(edad >= 18){
        return console.log("Puede comprar alcohol")
    }

    else if (edad >= 18){
        return console.log("Puede votar")

    }

    else if ( edad >= 18){
        return console.log("Puede navegar en páginas porno")
    }
}

console.log(validadEdad(edad))


// while


let numero = 0;
while (numero < 100) {
  console.log('número: ', numero);
  numero++;
}


// do- while (do ejecuta al menos una vez el proceso, sin recurrir a la condicion)
// en este caso muestra el 1000 una sola vez y luego se cancela el proceso, porque es false

let numero2 = 1000;
do {
  console.log('número: ', numero2);
  numero2++;
} while (numero2 < 10);


// en este caso el numero cumple con la condicion de while, por eso no se interrumpe el proceso

let numero3 = 4 ;
do{
    console.log('numero: ', numero3);
    numero3++;
} while (numero3<10);

