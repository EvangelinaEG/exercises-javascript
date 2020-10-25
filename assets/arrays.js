console.log("Arrays");

/*
    Exercise a
    Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

*/

    var months =  ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    console.log("Exercise a: "+ "Month 5: "+ months[4] + " Month 11: " + months[10]);

/*
    Exercise b
    Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

*/

    console.log("Exercise b: "+ months.slice().sort());

/*
    Exercise c
    Agregar un elemento al principio y al final del array (utilizar unshift y push).

*/

    months.unshift("Months");

    months.push("finish");

    console.log("Exercise c: "+ months );

