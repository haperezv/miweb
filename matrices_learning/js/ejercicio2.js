/**
 * Ejercicio 2: 
Mostrarle al usuario 2 opciones, 1 Ingresar Nombres, 2 Terminar.
Si el usuario elige la opcion 1, pedirle que ingrese un nombre de la forma 
"Nombre Apellido" y guardarlo para una futura operacion, volver a preguntar al usuario 
que opcion elegir, repetir hasta que la opcion sea terminar. Si el usuario elige terminar 
mostrar en una tabla de HTML los nombres en una columna "Nombre", y los Apellidos en la columna 
"Apellido", plus si la tabla tiene algun estilo
 */


/**
 * PSEUDOCODIGO
 * 
 */

var prompt = require("./node_modules/prompt");


prompt.start();

 var html = '<table border= 1>'
 html += '<tr>'
 html += '<th>Nombre</th>'
 html += '<th>Apellido</th>'
 html += '</tr>'

while (menu != 2) {
    
    var menu = parseInt(prompt("Menu: \n\t1. Ingresar Nombres \n\t2. Terminar \n\n Ingresar una opcion"))

    switch (menu) {
        case 1:
                
                var nombre = prompt("Ingrese Nombre Apellido")
                console.log(nombre)
                nombre = nombre.split(" ")
                html += '<tr>'

                for (let i = 0; i < nombre.length; i++) {
                    
                    html += '<td>'+nombre[i]+'</td>'
                }
                html += '</tr>'
                                 
            break;
        case 2:
            break;

        default:
            prompt("\nPor Favor solo ingrese una opcion valida del menu\n")
            break;
    }

} 

document.write(html)
html += '</table>'






    
        