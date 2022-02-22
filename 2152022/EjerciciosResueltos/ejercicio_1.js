/*
 1. Solicitar al usuario los numeros separados por coma
 2. Guardar los numeros en una variable llamada numeros
 3. Imprimir el valor de la variable numeros
4. Convertir la variable numeros en un array y guardarlo en una variable llamada array_numeros
["1", "2", "3"]
 5. Hallar la suma:
    - Declarar una variable para guardar la suma
    - Iterar sobre el array_numeros y acumular la suma de los numeros
6. Hallar la resta:
    - Declarar una variable para guardar la resta
    - Iterar sobre el array_numeros y acumular la resta de los numeros
7. Hallar el promedio:
    - Declarar una variable para guardar el promedio
    - Tomar la variable suma y dividirla sobre la longitud del array_numeros
8. Mostrar el valor de las variables suma, resta y promedio
*/

const prompt = require('prompt');

prompt.start();

prompt.get(['numeros'], function (err, result) {
  if (err) {
    return onErr(err);
  }

  var numeros = result.numeros;
  console.log(numeros);

  var array_numeros = numeros.split(",");
  console.log("Numeros: ", array_numeros);

  var suma = 0;
  var resta = 0;
  var i = 0;
  var promedio = 0;

  while(i < array_numeros.length){
    suma += parseInt(array_numeros[i]);
    resta -= parseInt(array_numeros[i]);
    i++;
  }

  promedio = suma / array_numeros.length;

  console.log("Suma: ", suma);
  console.log("Resta: ", resta);
  console.log("Promedio: ", promedio);
});

function onErr(err) {
  console.log(err);
  return 1;
}
