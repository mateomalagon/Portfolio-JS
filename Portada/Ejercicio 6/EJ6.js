/*

JS del Ejercicio 5, Mayúsculas y minúsculas

*/

function palindromo (){

  // entrada de datos
  
  let cadena = document.getElementById('cadena').value;
  let cadenaArray = cadena.split('');
  let respuesta = "";

  for (let i = 0; i < cadenaArray.length; i++) {
    if (cadenaArray[i] !== cadenaArray[cadenaArray.length - 1 - i]) {
      respuesta = "no ";
      break;
    }
  }
  
  document.getElementById("respuesta").innerHTML = "La cadena " + respuesta + "es un <brilla>palíndromo</brilla>.";

}