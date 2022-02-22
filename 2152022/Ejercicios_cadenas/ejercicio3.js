/**
 * # Dada una palabra, calcule la puntuación de scrabble de esa palabra.
#
# Valores por letra
#
#
# Letra                              Valor
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Ejemplo
#
# "Casa" debe tener 3 + 1 + 1 + 1 = 6 puntos
#

1. Declarar la funcion puntiacionScrabble
2. Crear variable de texto con las cadenas de letras.. 
text  = "A, E, I, O, U, L, N, R, S, T,D, G,B, C, M, P, F, H, V, W, Y,K,J, X, Q, Z"

 */

//var text  = " A,  E,  I, O, U, L, N, R, S, T, D, G, B, C, M, P, F, H, V, W, Y, K, J, X, Q, Z"
var  puntos = 0

function puntiacionScrabble(text) {
    
    text = text.split(",")

    for (let i = 0; i < text.length; i++) {
       
       // console.log(text[i])
        
        if (text[i] >=  'A' && text[i] <= 'T') {
            
            puntos = 1
            console.log(puntos)
        }
    }

}

puntiacionScrabble("T")


