/* javascript para el ejercicio 2  del portfolio de LM*/

document.getElementById("boton").addEventListener("click",calcular)

function calcular(){

// obtener dato (radio)
let radio = Number(document.getElementById('radio').value);

  // realizar cáculos

let circunferencia = 2 * radio * Math.PI;
let circulo = radio ** 2 * Math.PI;
let esfera = radio ** 3 * Math.PI;


let nuevoNodo = document.createElement("li");
let nuevoNodo2 = document.createElement("li");
let nuevoNodo3 = document.createElement("li");
let nuevoNodoSepara = document.createElement("br");


nuevoNodo.innerHTML = "<p>La longitud de la circunferencia de radio <brilla>" + radio + "</brilla> es: <brilla>" + circunferencia.toFixed(2) + "</brilla></p>";
nuevoNodo2.innerHTML = "<p>El área del círculo de radio <brilla>" + radio + "</brilla> es: <brilla>" + circulo.toFixed(2) + "</brilla></p>";;
nuevoNodo3.innerHTML = "<p>El volumen de la esfera de radio <brilla>" + radio + "</brilla> es: <brilla>" + esfera.toFixed(2) + "</brilla></p>";;
  // mostrar resultados

  
  document.getElementById("resultados").appendChild(nuevoNodo)
  document.getElementById("resultados").appendChild(nuevoNodo2)
  document.getElementById("resultados").appendChild(nuevoNodo3)
  document.getElementById("resultados").appendChild(nuevoNodoSepara)

}