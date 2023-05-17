//TODO JavaScript, el lenguaje del navegador. Js hace que los sitios web sean dinámicos e interactivos.
//*También puedes crear apps y juegos, entre otras cosas.

//TODO Cómo empezar
//? Salidas
//alert("Esta pagina utiliza cookies");
//console.log(); //*permite registrar mensajes por consola y ejercutar código.. ver errores y advertencias
//document.write(); 

//? Texto -string- se encierra entre comillas
//("Hello World"), (''), (``).

//? Operaciones simples (* multi) (/ divisor) (+ incremento) (- decremento) (% sustracción) (** elevar) 
//*Al igual que las matemáticas normales, la multiplic y división se calculan antes que la suma y resta
//console.log(5+2*3) //*res= es 11, en vez de que vaya en orden res= 21
//console.log((5+2)*3) //* forma para que se enfoque primero en los valores dentro del parentesis

//? Variables
//* son contenedores que nos permiten almacenar valores
//* 'let' es la forma moderna de declarar variales y tiene una serie de ventajas sobre 'var'.
//*ejemplo, var permite declara variables con el mismo nombre, mientras let da lugar a un error (lo que lo hace más seguro)

//var name; 
//name= "Jhonny"; //* el signo de '=' se utiliza para asignar
//let age = 22; //* las variables pueden cambiar su valor durante el programa
//age = 23;
//const pi = 3.14; //* las constantes tienen un valor y este no puede cambiar 
//document.write(age);  

//? Tipos de Datos
//* se refiere a los tipos de valores con los que se puede trabajar un programa.

//*String = cadenas, todo lo que vaya entre comillas.
//talla = "42"; nombre = "Maria";

//*Int-eger = numerico, pueden escribirse con o son decimales.
//num1 = 22; num2 = 23.5;

//*Booleanos = solo tiene dos valores, sí o no, True or False, 0 false 1 true.
//let isActive = true;
//let isInactive = false; 

//TODO Operadores y cadenas
//? Operaciones matemáticas
//let x = 8;
//x += 3;
//console.log(x+11); //* ir sumandole

//*Exponenciación
//* Dos asteriscos ** se utilizan para elevar un número a la potencia de otro.
//let x = 100;
//let y = 2;
//console.log(x**y); //1000 //** 2 cubo, 3 , 5, 1/2 raíz cuadrada;

//*Resto
//* Módulo operador %, lo que resta o sobra de una división
//let balls = 100;
//let basket = 3;
//console.log(balls % basket); //100/3 = 33.. sobra 1;

//*Incremento y Disminución
//let score = 10;
//score++; //*score++ es una abreviatura de score = score + 1; añade 1 repetidamenete
//score--; //* resta 1 al valor

//console.log(score); //11 

//? Operadores de asignación
//* asignan valores a las variables
//let x = 50, y = 100, z = 25;
//x+=5; //* x = x+5;
// x-=5;
// x*=5;
// x/=5;
// x%=5;
//console.log(x); //*55

//? Cadenas
//console.log("Welcome");
//console.log('She said "Yes!"');

//*Escapar 
//* la barra invertida \ es un carácter especial, se llama escape character. 
//* se utiliza para representar ciertas cosas en una cadena, como new line, tabulaciones, etc.
//console.log("She said \"Yes!\"");

//*Nuevas líneas 
//* la barra invertida también se utiliza para crear nuevas líneas en el texto. Con (\n)
//document.write("One \nTwo \nThree"); 

//? Plantillas literales
//*Las plantillas literales so otra forma de crear cadenas y trabajar con ella de forma flexible. (``)
//* te permiten utilizar variables dentro de las cadenas. con el signo de dólar y llaves ${}
//* back-ticks ``
//user = "John Wick"
//let bienvenida = `Hello, user ${user}!`;
//console.log(bienvenida);

//? Concatenación de cadenas
//*No solo se puede sumar números, sino también strings
/*console.log("Java" + 'Script'); //JavaScript
console.log("2" + "3"); //23

let nom = prompt("Escribe tu nombre:");
let saludo = "Welcome, ";
console.log(saludo + nom + "!");*/

//TODO Toma de decisiones
//? Booleanos & comparaciones
//* Los tipos de datos booleanos sólo pueden tomar los valores true o false
/*let isActive = true;
let isHoliday = false;

//*Creación de un juego para pasar al siguiente nivel debe superar la puntuación de 99
let score = 85;
let age = "85";
console.log(score > 99); //false

console.log(score == age); //true
console.log(score === age); //false

//* mayor y menor también se utilizan para comparar cadenas lexicográficamente 
console.log('Jhonny' < 'Ash'); //false -jhonny continen más letras.
console.log('c' > 'b'); //true -c esta en la posición 3 mientras b en la 2.
*/

//? La declaración if
//* se utiliza para evaluar expresiones
/*let purchase = 1700;

if (purchase >= 1500){
    console.log("Discount 20%!");
}*/

//? Declaración else
//* se ejecuta cuando el condicional if es false
/*let score = 90;

if(score >= 100){
    console.log("Level Completed!");
}else{
    console.log("Try again");
}*/

//? Declaración else if
//* Cuando haya momentos en los querramos probar múltiples condiciones. ahí entra else if
/*let time = 15;

if(time < 10){
    console.log("Good morning");
}else if(time < 20){
    console.log("Good day");
}else{
    console.log("Good evening");
}

let stopLight = 'green';

if (stopLight == 'red'){
    console.log("Stop!");
}else if(stopLight == 'yellow'){
    console.log('Slow down.');
}else if(stopLight == 'green'){
    console.log("Go!");
}else{
    console.log("Unknown");
}*/

//? Declaración switch
//* switch se puede usar para reemplazar múltiples declaraciones if else.
//* break detiene la ejecución cuando encuentra la coincidencia y el programa sale de la declaración switch
//* default especifica el código a ejecutar si no hay coincidencia de casos.
/*let choise = 0;

switch(choise){
    case 1: //coincide
        console.log("Sports");
        break; //detiene
    case 2:
        console.log("Business");
        break;
    case 3:
        console.log("Technology");
        break;
    default:
        console.log("Not found");
}*/

//? Operador ternario
//* los operadores condicionales o ternarios toma tres operandos: una condición seguida de
//* un signo de interrogación (?), y luego una expersión a ejecutar si la condición es true seguido
//* de dos puntos (:), y finalmente la expresión a ejecutar si es falsa.
//! variable = (condiction) ? value1: value2
//* este operador se utiliza frecuentemente como alternativa a una declaración if else.

/*let age = 42;
let isAdult = (age < 18) ? "Too young": "Old enough";
console.log(isAdult);

let hour = prompt("Ingresa la hora:");
let result = (hour <= 12) ? "am": "pm";
console.log(result);*/  //-12:am | +13:pm

//TODO Bucles
//* Los bucles permiten ejecutar el mismo código varias veces.

//? Bucle for
/*for(let i = 0; i <= 20; i+= 2){
    console.log(i);
}*/

//? Bucle while & do while
//* se ejecuta solo si la expresión es verdadera
//* se ejecuta por lo menos una vez antes de comprobar si es true la condición

/*let i= 0;
while(i <= 10){
    console.log(i);
    i++;
}*/

/*let i= 5;
do{
    console.log(i);
    i++;
}
while(i < 5);*/

//? Declaración break
//* el break termite salir de un bucle prematuramente, basándose en la condición dada.
/*for(let i = 0; i < 10; i++){
    if(i == 3){
        break;
    }
    console.log(i);
}*/

//? Continue
//* continue statement se utiliza para omitir una iteración del bucle, y continuar la siguiente.
/*for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}*/

//TODO Funciones
//* Una función es un bloque de código diseñado para realizar una tarea concreta. 
//* su proposito es crearla una vez y llamarla cuantas veces sea necesaria.

//? Funciones
/*function saludo(){
    let user = prompt("Ingresa tu nombre:");
    console.log(`"Welcome, ${user}"`);
}

saludo();*/

//? Parámetros
//* las funciones pueden tener parámetros, se definen entre paréntesis y pueden utilizarse como variables en la función.
/*const login = (user, id) => {
    console.log("Hi " + user + id);
}

//* También puedes utilizar como parámetros variables creadas fuera de la función:
let myUser = "Jhonny";

login("Maria", " 01");
login("James", " 007");
login(myUser);*/

//* CASO descuento - si el importe total es igual o superior a 1,500 se descontará un 15%.
/*function discount(purchase){
    if(purchase >= 1500){
        purchase *= 0.85;
    }

    console.log(purchase);
}

discount(1900); //descuento
discount(1200); //sin descuento
*/


//? Devolviendo las funciones
//* En algunos casos no necesitamos generar resultado
//* return finaliza la ejecución de la función, todo lo que viene después dentro de la función será ignorado.

/*function add (x, y){
    return x + y;
    //*ignorado
    console.log('Well Done!');
}

let result = add(5, 6);
console.log(result);*/

/*withd = prompt("Ingresa el ancho del area");
length = prompt("Ingresa el largo del area");
function area (x, y){
    return x * y;
}

console.log(area(withd, length));*/

//! HASTA AQUÍ EL CURSO DE SOLO LEARN INTRODUCTION TO JAVASCRIPT