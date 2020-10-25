console.log("For");

/*
    Exercise a
    Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle 
    for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

*/

    alert("Exercise 5-a");

    var fruits = ["apple", "lemon", "mandarine", "orange", "pomelo"];

    for(var i = 0; i < 5; i++ ){

        alert(fruits[i]);

    }

/*
    Exercise 5-b
    Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una 
    alerta por cada palabra modificada.

*/
    alert("Exercise 5-b");

    for(var i = 0; i < 5; i++){

        var newword = fruits[i][0].toUpperCase() + (fruits[i].substring(1,word4.length)).toLowerCase();

        alert(newword);

    }

/*

    Exercise 5-c
    Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) 
    recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. 
    Al final mostrar una única alerta con la cadena completa.

*/
    alert("Exercise 5-c");

    var sentence = "";

    for(var j = 0; j < 5; j++){
        
        sentence += fruits[j] + " ";

    }

    alert(sentence);

/*

    Exercise 5-d
    Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número 
    de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 
    elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola 
    del navegador el al array final (utilizar console.log).

*/

    console.log("Exercise 5-d");

    var array = [];

    for(var t=0; t < 10; t++){
        array.push(t);
    }

    console.log(array);

