console.log("Funciones");

/*
    Exercise 6-a
    Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador.

*/

    function suma(a = null, b = null){

        if((isNaN(a) && isNaN(b)) || a != null || b != null ){

            var result = a + b;

            return result;     

        }else{

            console.log("Los valores recibidos no son numericos o son nulos");

        }

    }

    console.log("Exercise 6-a: " + suma(5, 7));