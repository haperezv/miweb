/**
 * # Función es Multiplo

Escribe una función llamada esMultiplo que reciba dos números y retorne verdadero
si el primer argumento es múltiplo del segundo.

Ejemplos de cómo vamos a invocar la función:

```javascript
esMultiplo(15, 3); // true
esMultiplo(8, 5); // false
esMultiplo(21, 7); // true
```
 */

/**
 * PSEUDOCODIGO
 * 1. crear funcion esMultiplo con los 2 parametros numero1 y numero2
 * 2. si el numero1 su reciduo es igual a cero del numero2 quiere decir que es multiplo del numero2
 * 3. retornar verdadero si no retorne falso
 * 4. imprima la funcion  esMultiplo con los casos ejemplos.
 */

function esMultiplo(numero1, numero2) {
    if (numero1 % numero2 == 0) {
        
        return true
    }else{
        return false
    }
    
}


//console.log(esMultiplo(15, 3))
console.log(esMultiplo(8, 5))
//console.log(esMultiplo(21, 7))



