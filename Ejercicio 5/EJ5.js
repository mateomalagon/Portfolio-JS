/*


*/

function mayuMinu (){

  // entrada de datos
  
  let cadena = document.getElementById('cadena').value;
  let respuesta = "";
  
  if (cadena == cadena.toUpperCase()){

    respuesta = "mayúsculas";

  } else {
      if (cadena == cadena.toLowerCase()){

        respuesta = "minúsculas";

    } else {

        respuesta = "una mezcla de mayúsculas y minúsculas";

    }
  }

    document.getElementById("respuesta").innerHTML = "La cadena está escrita en " + respuesta;

}