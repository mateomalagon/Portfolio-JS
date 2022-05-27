/*


*/
const dniElement = document.getElementById('dni')
function letraDNI (){

  // entrada de datos
  const LETRAS = "TRWAGMYFPDXBNJZSQVHLCKE";

  let dni=Number(dniElement.value);

  let resto = dni % 23;

  let letra = LETRAS.substring(resto,resto+1);

  document.getElementById('letra').innerHTML="La letra de este DNI es: "+letra;
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  letraDNI()
  dniElement.value = ""
})

