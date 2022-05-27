/* 


*/


const l1 = document.getElementById('lado1');
const l2 = document.getElementById('lado2')
const l3 = document.getElementById('lado3');


function comparar(){

// entrada de datos

let lado1 =Number(l1.value);
let lado2 =Number(l2.value);
let lado3 =Number(l3.value);

let respuesta="";

// vamos a evaluar que tipo de triángulo es

if ( lado1==lado2 && lado2==lado3 ){
  respuesta = "<brilla>equilátero</brilla>";
} else if ( lado1==lado2 || lado2==lado3 || lado1 == lado3){
  respuesta = "<brilla>isósceles</brilla>";
} else {
  respuesta = "<brilla>escaleno</brilla>";
}

//mostrar resultado

document.getElementById('resultadoTipo').innerHTML="El triángulo es "+respuesta;

}

const form = document.getElementById('form')
form.addEventListener('submit', e => {
  e.preventDefault()
  comparar()
  l1.value = "";
  l2.value = "";
  l3.value = "";
})
