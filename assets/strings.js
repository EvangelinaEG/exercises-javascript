console.log("Strings");

/*
    Exercise a
    Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
*/

    var word1 =  "radiumrocket".toUpperCase();

    console.log("Exercise a: "+ word1);

/*
    Excercise b
    Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

    var word2 = "Evangelina";

    var sub = word2.substring(0, 5);

    console.log("Exercise b: "+ sub);

/*
    Exerxise c
    Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
*/

    var word3 = "radiumrocket";

    var sub1 = word3.substring(word3.length - 3, word3.length);

    console.log("Exercise c: "+ sub1);

/*
    Exercise d
    Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var word4 = "evangelina";

var toUplo = (word4.substring(0, 1)).toUpperCase() + (word4.substring(1,word4.length)).toLowerCase();

console.log("Exercise d: "+ toUplo);

/*
Exercise e
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var word5 = "Radium Rocket";

var white = word5.indexOf(" ");

console.log("Exercise e: "+ white);

