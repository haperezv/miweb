/**
 * Escribe una funcion llamada contarAs que reciba un string (una cadena de texto)
 * y retorna el numero de caracteres "a" (minuscula) hay
 * 
 * Ejemplo:
 * contarAs("Hola Pablo") 2
 * contarAs("Hata la proxima") 4
 * contarAs("Bien pedro!") 0
 * 
 * PSEUDOCODIGO
 * 
 * 1. crear una funcion llamada contarAs, que reciba una cadena de texto como parametro
 * 2. realizar un ciclo para recorrer la cadena de texto, preguntando el tamaño
 * 3. preguntar por la posicion de la cadena de texto es igual "a" contar cuantas veces esta
 * 4. retorna el numero de caracteres "a" (minuscula) hay
 */

function contarAs(texto) {
    
    let count = 0

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            
            count ++
        }
    }    
    console.log(count)
    return count
}

var texto = "Hata la proxima"

contarAs(texto.toLocaleLowerCase())

