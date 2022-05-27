/*

JS del Ejercicio 9, Array de los meses

*/

function buscarNombre(){

  const MESES = ["<brilla>Enero</brilla>", "<brilla>Febrero</brilla>", "<brilla>Marzo</brilla>", "<brilla>Abril</brilla>", "<brilla>Mayo</brilla>","<brilla>Junio</brilla>", "<brilla>Julio</brilla>", "<brilla>Agosto</brilla>", "<brilla>Septiembre</brilla>", "<brilla>Octubre</brilla>", "<brilla>Noviembre</brilla>", "<brilla>Diciembre</brilla>"];

  let mes = document.getElementById('mes').value;

  let numeroMes = mes - 1;
  let respuesta = "";

  if (numeroMes == -1)
    respuesta = "No has elegido número"
  else
    respuesta = MESES[numeroMes];

  document.getElementById('nombreMes').innerHTML = respuesta;

}