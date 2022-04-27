/* 


*/

function comparar(){

// entrada de datos

let lado1 =Number(document.getElementById('lado1').value);
let lado2 =Number(document.getElementById('lado2').value);
let lado3 =Number(document.getElementById('lado3').value);

let respuesta="";

// vamos a evaluar que tipo de triángulo es

if ( lado1==lado2 && lado2==lado3 ){
  respuesta = "es equilátero";
} else {
  if ( lado1==lado2 && lado2==lado3 ){
    respuesta = "es isósceles";
  } else {
    respuesta = "es escaleno";
  }
}

//mostrar resultado

document.getElementById('resultadoTipo').innerHTML="El triángulo es "+respuesta;

}