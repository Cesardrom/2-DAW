function calculate()
{
    
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;

    switch(operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = "Operacion no permitida"
    }
    document.getElementById("result").textContent = result
    console.log(num1);
    console.log(num2);
    console.log(operation);
    console.log(result);
}

let nombre = "David";
let apellido = "Betancor";
const ciudad = "Lima";
const nacimiento = 1972;
function calculaEdad(year){
	return 2019 – year;
}
// ES5
console.log(nombre + "" + apellido + ", nació en " + ciudad + ", y su edad es " + calcularEdad(year));

//ES6
console.log(${nombre}  ${apellido} , nació en ${ciudad} , y su edad es ${calcularEdad(year)});