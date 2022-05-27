/*

JS del Ejercicio 5, Mayúsculas y minúsculas

*/

const MM = document.getElementById('cadena')

function mayuMinu (){

  // entrada de datos
  
  let cadena = MM.value;
  let respuesta = "";
  
  if (cadena == cadena.toUpperCase()){

    respuesta = "<brilla>mayúsculas</brilla>";

  } else {
      if (cadena == cadena.toLowerCase()){

        respuesta = "<brilla>minúsculas</brilla>";

    } else {

        respuesta = "una mezcla de <brilla>mayúsculas</brilla> y <brilla>minúsculas</brilla>";

    }
  }

    document.getElementById("respuesta").innerHTML = "La cadena está escrita en " + respuesta;

}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  mayuMinu()
  MM.value = ""
})
