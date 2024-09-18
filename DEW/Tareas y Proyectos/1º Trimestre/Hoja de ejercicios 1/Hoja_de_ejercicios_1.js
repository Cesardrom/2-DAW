function ejercicio1()
{
    
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var num3 = parseFloat(document.getElementById("num3").value);
    let sum = num1 + num2 + num3
    if (num1 < 0 || num2 < 0 || num3 < 0){
        console.error("Una de las tres variables es negativa");
    } else if (num1 == 0 && num2 == 0 && num3 == 0){
        console.error("Las tres variables son 0");
    } else if (sum > 10){
        if (num1 != num2 && num1 != num3 && num2 != num3){
            console.error("La suma de los numeros es mayor que diez y son numeros distintos");
        }
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
}

/*
Este esta rarete
*/


function ejercicio2()
{
    let num = document.getElementById("x").value;
    
    if (num == 0){
        console.log("Este es muy facil... ¡prueba otro!");
    } else if (num == 2 || num == 4 || num == 6){
        console.log("Es un numero par");
    } else if (num == 1 || num == 3 || num == 5) {
        console.log("Es un numero impar");
    } else {
        console.log("solo se leer de 0 a 6");
    }
    
}

ejercicio2();
/*
Esta Rarete
*/
function ejercicio3()
{
    for (i=0, j=20; i>=8, j>0; i++, j = j - 3){
        console.log(i, j)
    }

}

