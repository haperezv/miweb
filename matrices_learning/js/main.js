/**
 * Ejercicio 1:
    Solicitarle al usuario que ingrese un conjunto de numeros separados por coma, 
    despues de ingresarlos mostrar el pantalla los numeros 
    ingresados, la suma de los numeros, la resta de los numeros y 
    el promedio de los numeros 
 */

/**
 * PSEUDOCODIGO
 * 1. declarar variable tipo array numeros
 * 2. declarar variable ingresarNumeros  solicitar al usuario que ingrese un conjunto de numeros separados por coma,
 * 3. separar la cadena de string
 * 4. ['1', ', '2', '3', ', '4', '5']
 * 5. insertar al array numeros
 * 6. Recorrer el array de numeros
 * 2.
 * 3. suma de los numeros, resta de los numeros y el promedio de los numeros
 */


var ingresarNumeros = "1,2,3"

ingresarNumeros = ingresarNumeros.split(",")

// suma de los numeros
// longitud = 2
// i = 0,1,2,3
// suma = 6
// resta = -6
// operacion = 0 - 1 = -1, -1 -2 = -3, -3 -3

let sum = 0
let rest = 0
let prom = 0

for (var i = 0; i < ingresarNumeros.length; i++) {

    sum = parseInt(ingresarNumeros[i]) + sum
    rest = rest - parseInt(ingresarNumeros[i])
    prom ++
}

console.log("Suma = " + sum);
console.log("Resta = " + rest);
console.log("Promedio = " + sum/prom )






