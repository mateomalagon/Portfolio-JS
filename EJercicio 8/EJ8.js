/* 

JS del Ejercicio 8, División por Euclides

*/

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")

function euclides() {
  let a = Math.abs(Number(num1.value));
  let b = Math.abs(Number(num2.value));
  if (Number.isNaN(a) || Number.isNaN(b))
    return;
  let iaux; //auxiliar
  let i1 = Math.max(a, b); //i1 = el más grande
  let i2 = Math.min(a, b); //i2 = el más pequeño

  console.log({a, b, i1, i2})

  do {
    iaux = i2; //guardar divisor
    i2 = i1 % i2; //resto pasa a divisor
    i1 = iaux; //divisor pasa a dividendo
  } while (i2 !== 0);
  
  document.getElementById("resultadoMCD").innerHTML = `El M.C.D entre ${a} y ${b} es <brilla>${i1}</brilla>`;

  console.log(i1)

}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  euclides();
  num1.value = "";
  num2.value = "";
})