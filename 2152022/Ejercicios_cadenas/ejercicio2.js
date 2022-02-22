/**
 * # Función Escalera

Escribe una función llamada escalera que reciba un número como argumento.
La función debe retornar una cadena de texto en forma de escalera como en el siguiente ejemplo:

```javascript
escalera(2);
// #
// ##

escalera(3);
// #
// ##
// ###

escalera(5);
// #
// ##
// ###
// ####
// #####
```

La primera línea del string tiene un signo de número (#), 
la segunda dos, y así sucesivamente hasta el número que ingresó el usuario.

**Nota**: Recuerda que para representar un salto de línea en un string debes
 utilizar el caracter `\n`.
 */


 /**
  * PSEUDOCODIGO
  * 1. crear la funcion escalera con parametro numero
  * 2. crear una variable llamada text vacia, para ir concatenando el caracter "#"
  * 3. crear un ciclo donde la condicion de la variable i sea menor al numero 
  *    ingresado en la fucion y que ademas se comporte como fila de mi matrix
  * 4. crear una variable resultado vacia para almacenar el caracter concatenado
  * 5. crear un nuevo ciclo que me recorra las columnas esta variable va a iniciar en j
  *    y en su condicion debe ser menor igual a la fila para que pueda recorrer columna y fila
  *    concatene el caracter que va ser imprimido en la escalera
  * 6. resultado va ser igual a concatenar el caracter "#" de la 1ra posicion de la matrix 
  * 7. retornar mi variable texto con la concatenacion de mi caracter del resultado
  *  8. imprimir la funcion pasando los casos de prueba, 1,2 . 
  */

 function escalera(numero) {
    
    var text = ""

    for (let i = 0; i < numero; i++) {
        
        var result = " "
        
        for (let j = 0; j <= i; j++) {
            
            result += "# " 
            
        }
        
        text += result + "\n"
    }

    return text
 }  

 //escalera(3)
// console.log(escalera(3))
 console.log(escalera(5))