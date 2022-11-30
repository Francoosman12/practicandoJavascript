//EJERCICIOS

//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.

// alert("Un mensaje");

//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

// document.write("Hello World");

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

//document.write("El resultado de sumar 3 + 5 es igual a " + (3 + 5));

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»

// let nombreUsuario = prompt("Ingrese el nombre del usuario");
// document.write(`Hola ${nombreUsuario}`);

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
//Nota: Tener en cuenta la siguiente función: parseInt
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
document.write(
  `El resultado de la suma de los numeros ingresado es ${num1 + num2}`
);

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
//8.- Escribe un programa que pida un número y diga si es divisible por 2.
//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro.
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible).
