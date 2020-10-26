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

            if(!isNaN(c) && typeof(c) === 'number'){

                if(!isNaN(d) && typeof(d) === 'number'){

                    var result = c + d;

                    return result;     

                }else{

                    return ("the value "+ d + " is not numeric ");

                }

            }else{

                return ("the value " + c + " is not numeric ");

            }   

    }

    console.log("Exercise 6-b: " + sumaupd(2, 7));

/*

    Exercise 6-c
    Crear una función validate integer que reciba un número como parámetro y devuelva
    verdadero si es un número entero.

*/

    function validateInteger(num){

        if(Number.isInteger(num)){

            return true;

        }else{

            return false;

        }

    }

    console.log("Exercise 6-c: " + validateInteger(6));

/*

    Exercise 6-d
    A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
    En caso que haya decimales mostrar un alerta con el error y retorna el número convertido 
    a entero (redondeado).

*/

    function sumaInteger(c, d){

        if(typeof(c) === 'number'){

            if (Number.isInteger(c)){

                if(typeof(d) === 'number'){

                    if (Number.isInteger(d)){

                        var result = c + d;

                        return result;     

                    }else{

                        return ("Error: "+ d + " is not integer. Use: " + Math.round(d));        

                    }

                }else{

                    return ("the value "+ d + " is not numeric ");

                }

            }else{

                return ("Error: " + c + " id not integer. Use: " + Math.round(c));

            }

        }else{

            return ("the value " + c + " is not numeric ");

        }   

    }

    console.log("Exercise 6-d: " + sumaInteger(2, 0.5));

/*

    Exercise 6-f
    Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de 
    la función suma probando que todo siga funcionando igual.

*/

    function sumaValidate(c, d){

        if(!isNaN(c) && typeof(c) === 'number'){

            if (validateInteger(c)){

                if(!isNaN(d) && typeof(d) === 'number'){

                    if (validateInteger(d)){

                        var result = c + d;

                        return result;     

                    }else{

                        return ("Error: "+ d + " is not integer. Use: " + Math.round(d));        

                    }

                }else{

                    return ("the value "+ d + " is not numeric ");

                }

            }else{

                return ("Error: " + c + " id not integer. Use: " + Math.round(c));

            }

        }else{

            return ("the value " + c + " is not numeric ");

        }   

    }

    console.log("Exercise 6-e: " + sumaValidate(2, 0.9));