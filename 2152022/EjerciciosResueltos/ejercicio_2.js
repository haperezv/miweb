/*
Mostrarle al usuario 2 opciones, 1 Ingresar Nombres, 2 Terminar.
Si el usuario elige la opcion 1, pedirle que ingrese un nombre de la forma "Nombre Apellido" y guardarlo para una futura operacion, volver a preguntar al usuario que opcion elegir, repetir hasta que la opcion sea terminar. Si el usuario elige terminar mostrar en una tabla de HTML los nombres en una columna "Nombre", y los Apellidos en la columna "Apellido", plus si la tabla tiene algun estilo

1. Solicitar al usuario mostrar las opciones
2. Guardar el valor de la opcion elegida por el usuario
3. El usuario ingresara varios nombres, entonces crear un array para guardar los nombres
4. Iniciar un loop y validar la opcion del usuario, mientras la opcion sea 1 solicitar al usuario ingresar un Nombre y Apellido y guardarlo en el array anterior
5. Si la opcion es 2
  Crear un elemento html para crear las filas de la tabla
  Iterar por el array y cada vez que este en una posicion, partir el dato para tener Nombre y Apellido separados
  Crear un tr y añadir un td con el Nombre y otro con el apellido
6. Insertar el html creado a la tabla

// */

var opcion = prompt("Eliga una de las siguientes opciones:\n 1. Ingresar Nombre\n2. Terminar");

var array_nombres = [];
var nombre;

while(opcion != 2){
  nombre = prompt("Ingrese un Nombre y Apellido");
  array_nombres.push(nombre);
  opcion = prompt("Eliga una de las siguientes opciones:\n 1. Ingresar Nombre\n2. Terminar");
}

var html = "";

var i = 0;
var array_interno;
["Yony Briñez", "Juan Charrasquiado"]
while(i < array_nombres.length){
  array_interno = array_nombres[i].split(" "); // ["Juan", "Charrasquiado"]
  html += `<tr><td>${array_interno[0]}</td><td>${array_interno[1]}</td></tr>`
  i++;
}

// document.querySelector("tbody").insertAdjacentHTML("afterbegin", `<tr><td>Yony</td><td>Brinez</td></tr>`);

document.querySelector("tbody").innerHTML = html;
