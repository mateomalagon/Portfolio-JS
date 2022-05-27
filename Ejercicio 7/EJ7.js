/* 

JS del Ejercicio 7, División por Euclides

*/

const dividen = document.getElementById('dividendo')
const divir = document.getElementById('divisor')

function divisionEuclides (){

  let divi = Number(dividen.value);
  let disor = Number(divir.value);
  let cociente = 0;

  while (divi>=disor){

    divi -= disor;
    cociente++;
  }

  document.getElementById('resultadoDivision').innerHTML = "El cociente es <brilla>" + cociente + "</brilla> y el resto <brilla>" + divi + "</brilla>";
}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  divisionEuclides()
  dividen.value = ""
  divir.value = ""
})