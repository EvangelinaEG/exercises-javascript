console.log("If - Else");

/*
    Exercise a
    Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
*/

    var num = Math.random();

    if(num >= 0,5){

        alert("Greater than 0,5");

    }else{

        alert("Lower than 0,5");

    }
/*
    Exercise b
    Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
        “Bebe” si la edad es menor a 2 años
        “Nino” si la edad es entre 2 y 12 años
        “Adolecente” si la edad es entre 13 y 19 años
        “Joven” si la edad está entre 20 y 30 años
        “Adulto” entre 31 y 60 años
        “Adulto mayor” entre 61 y 75 años
        “Anciano” si es mayor a 75 años

 */

    var age =  Math.floor(Math.random()*(100+1));
    
    if(age < 0){

        alert("incorrect age");

    }else if(age < 2){

        alert("Bebé");

    }

    else if(age < 13){

        alert("Nino");

    }

    else if(age < 20){

        alert("Adolescente");

    }

    else if(age < 31){

        alert("Jóven");

    }

    else if(age < 61){

        alert("Adulto");

    }

    else if(age < 76){

        alert("Adulto mayor");

    }

    else if(age < 101){

        alert("Anciano");

    }

    else{

        alert("Incorrect age");

    }


   