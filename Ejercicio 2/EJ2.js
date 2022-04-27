/* javascript para el ejercicio 2  del portfolio de LM*/
function calcular(){

// obtener dato (radio)
const PI = 3.1416; // no seria necesario, esta en la libreria matematica basica de JS
let radio = Number(document.getElementById('radio').value);

  // realizar cáculos

let circunferencia = 2 * radio * PI;
let circulo = radio ** 2 * PI;
let esfera = radio ** 3 * PI;

  // mostrar resultados

document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es: "+circunferencia;

document.getElementById("circulo").innerHTML="El area del circulo es: "+circulo;

document.getElementById("esfera").innerHTML="El volumen de la esfera es: "+esfera;

}