console.log("Funciones");

/*
    Exercise 6-a
    Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
    Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha 
    variable en la consola del navegador.

*/

    function suma(a, b){

            var result = a + b;

            return result;     

    }

    console.log("Exercise 6-a: " + suma(5, 7));

/*

    Exercise 6-b
    A la función suma anterior, agregarle una validación para controlar si alguno de los
    parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene 
    error y retornar el valor NaN como resultado.

*/


    function sumaupd(c, d){

            if(!isNaN(c)){

                if(!isNaN(d)){

                    var result = c + d;

                    return result;     

                }else{

                    return ("the value "+ d + " is not numeric ");

                }

            }else{

                return ("the value " + c + " is not numeric ");

            }   

    }

    console.log("Exercise 6-b: " + sumaupd(2, 5));