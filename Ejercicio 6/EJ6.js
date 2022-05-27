/*

JS del Ejercicio 5, Mayúsculas y minúsculas

*/
const pali = document.getElementById('cadena')

function palindromo (){

  // entrada de datos
  
  let cadena = document.getElementById('cadena').value;
  let cadenaArray = cadena.split('');
  let respuesta = "";

  for (let i = 0; i < cadenaArray.length; i++) {
    if (cadenaArray[i] !== cadenaArray[cadenaArray.length - 1 - i]) {
      respuesta = "<brilla>NO </brilla>";
      break;
    }
  }
  
  document.getElementById("respuesta").innerHTML = "La cadena " + respuesta + "es un <brilla>palíndromo</brilla>.";

}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  palindromo()
  pali.value = ""
})