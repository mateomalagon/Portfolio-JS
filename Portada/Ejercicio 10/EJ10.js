/*

JS del Ejercicio 10, Traducción de los meses en inglés

*/

function traductor(){

  const MESES = {"Enero":"<brilla>January</brilla>",
                "Febrero":"<brilla>February</brilla>", 
                "Marzo":"<brilla>March</brilla>",
                "Abril":"<brilla>April</brilla>",
                "Mayo":"<brilla>May</brilla>",
                "Junio":"<brilla>June</brilla>",
                "Julio":"<brilla>July</brilla>",
                "Agosto":"<brilla>August</brilla>",
                "Septiembre":"<brilla>September</brilla>",
                "Octubre":"<brilla>October</brilla>",
                "Noviembre":"<brilla>November</brilla>",
                "Diciembre":"<brilla>December</brilla>"};

  let mes = document.getElementById('mes').value;

  let numeroMes = mes - 1;
  let respuesta = (mes == "error")? "No has elegido mes" : MESES[mes];

  document.getElementById('nombreMes').innerHTML = respuesta;

}