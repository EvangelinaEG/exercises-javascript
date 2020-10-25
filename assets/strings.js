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

