console.log("For");

/*
    Exercise a
    Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle 
    for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

*/

    var fruits = ["apple", "lemon", "mandarine", "orange", "pomelo"];

    alert("Exercise 5-a");

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

            var newword = fruits[i][0].toUpperCase()+(fruits[i].substring(1,word4.length)).toLowerCase();
            alert(newword);

    }