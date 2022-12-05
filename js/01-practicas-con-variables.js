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

/*let num1 = parseInt(prompt("Ingrese el primer numero:"));
let num2 = parseInt(prompt("Ingrese el segundo numero:"));
document.write(
  `El resultado de la suma de los numeros ingresado es ${num1 + num2}`
);*/

//6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/*let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
if (num1 > num2) {
  document.write(`El número ${num1} es mayor que ${num2}`);
} else document.write(`El número ${num2} es mayor que ${num1}`);*/

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*let num1 = parseInt(prompt("Ingrese el primer número: "));
let num2 = parseInt(prompt("Ingrese el segundo número: "));
let num3 = parseInt(prompt("Ingrese el tercer número: "));

let mayor = Math.max(num1, num2, num3);

document.write(`El mayor de los números ingresados es ${mayor}`);*/

//8.- Escribe un programa que pida un número y diga si es divisible por 2.

/*let num = parseInt(prompt("Ingrese un número para ver si es divisible por 2:"));

if (num % 2 === 0) {
  alert(`El número ${num} es divisible por 2.`);
} else {
  alert(`El número ${num} no es divisible por dos`);
}*/

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
//Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

/*let frase = prompt("Escribe una frase:");

document.write(
  `La frase ${frase} tiene las siguientes vocales: ${frase.charAt(
    a,
    e,
    i,
    o,
    u
  )} `
);*/

//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro).

//let num = prompt("Ingrese un numero:");

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible).

/*let num = prompt("Ingrese un numero:");

if (num % 2 === 0) {
  console.log("El numero es divisible por 2");
}
if (num % 3 === 0) {
  console.log("El numero es divisible por 3");
}
if (num % 5 === 0) {
  console.log("El numero es divisible por 5");
}
if (num % 7 === 0) {
  console.log("El numero es divisible por 7");
} else {
  console.log("El numero no es divisible por ninguno de los divisores!");
}*/
