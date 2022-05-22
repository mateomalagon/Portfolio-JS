/* javascript para el ejercicio 2  del portfolio de LM*/
function calcular(){

// obtener dato (radio)
let radio = Number(document.getElementById('radio').value);

  // realizar cáculos

let circunferencia = 2 * radio * Math.PI;
let circulo = radio ** 2 * Math.PI;
let esfera = radio ** 3 * Math.PI;

  // mostrar resultados

document.getElementById("circunferencia").innerHTML="La longitud de la circunferencia es: "+circunferencia;

document.getElementById("circulo").innerHTML="El area del circulo es: "+circulo;

document.getElementById("esfera").innerHTML="El volumen de la esfera es: "+esfera;

}