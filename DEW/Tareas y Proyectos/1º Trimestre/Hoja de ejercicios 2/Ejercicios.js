
function ejercicio1() {
    const texto = document.getElementById("textoContar").value;
    const caracter = document.getElementById("caracter").value;

    if (caracter.length !== 1) {
        console.log("Por favor, introduce un solo carácter.");
        return;
    }

    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    console.log(`El carácter "${caracter}" aparece ${contador} veces en el texto.`);
}


function ejercicio2() {
    const input = document.getElementById("numeros").value;
    const numeros = input.split(',').map(num => parseFloat(num.trim()));
    let suma = 0;
    let validos = 0;
    let errores = "";

    numeros.forEach((num, index) => {
        if (isNaN(num)) {
            errores += `¡AVISO! El argumento número ${index + 1} "${input.split(',')[index]}" no es un número, lo ignoramos.\n`;
        } else {
            suma += num;
            validos++;
        }
    });

    if (validos === 0) {
        console.log("Error: Debes introducir al menos un número válido.");
    } else {
        let media = suma / validos;
        console.log(errores + `Suma: ${suma}, Media: ${media}`);
    }
}


function ejercicio3() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    let resultado = '';

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Ambos valores deben ser números.";
    } else {
        // 1. Lista de argumentos
        resultado += "1. Lista de argumentos: " + (num1 + num2) + "\n";

        // 2. Concatenación de strings
        resultado += "2. Concatenación: " + num1 + " + " + num2 + " = " + (num1 + num2) + "\n";

        // 3. Marcadores de posición (ES5)
        resultado += "3. Marcadores de posición: " + num1 + " + " + num2 + " = " + (num1 + num2) + "\n";

        // 4. Plantillas literales (ES6)
        resultado += `4. Plantillas: ${num1} + ${num2} = ${num1 + num2}`;
    }

    console.log(resultado);
}


function ejercicio4() {
    const num1 = parseFloat(document.getElementById("divNum1").value);
    const num2 = parseFloat(document.getElementById("divNum2").value);

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Uno o ambos valores no son números.");
    } else if (num2 === 0) {
        console.log("Error: No se puede dividir por 0.");
    } else if (!isFinite(num1 / num2)) {
        console.log("El resultado es infinito.");
    } else {
        console.log(`Resultado: ${num1 / num2}`);
    }
}


function ejercicio5() {
    const dni = parseInt(document.getElementById("dni").value);
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET";

    if (isNaN(dni) || dni < 0 || dni > 99999999) {
        console.log("El número de DNI no es válido.");
    } else {
        const letra = letras[dni % 23];
        console.log(`La letra del DNI es: ${letra}`);
    }
}


function ejercicio6() {
    const linea = document.getElementById("csvLinea").value;
    const separador = document.getElementById("csvSeparador").value || ',';
    
    const elementos = linea.split(separador);
    let resultado = `Se han detectado ${elementos.length} elementos:\n`;
    elementos.forEach((elemento, index) => {
        resultado += `Elemento ${index + 1}: ${elemento.trim()}\n`;
    });

    console.log(resultado);
}

function ejercicio7() {
    const texto = document.getElementById("textoAnalizar").value.trim().toLowerCase();
    let puntos = 0;

    // +1 si empieza por "el" o "la"
    if (texto.startsWith("el") || texto.startsWith("la")) puntos += 1;

    // +10 si finaliza en gerundio
    if (texto.endsWith("ando") || texto.endsWith("endo")) puntos += 10;

    // +100 si contiene "con" entre dos palabras
    const regex = /\b\w+\b\s+con\s+\b\w+\b/;
    if (regex.test(texto)) puntos += 100;

    console.log(`Puntos obtenidos: ${puntos}`);
}


function ejercicio8() {
    let texto = document.getElementById("textoArriba").value;
    if (texto.includes("arriba")) {
        texto = texto.replace(/arriba/g, "abajo");
        console.log(`Nuevo texto: ${texto}`);
    } else {
        console.log("No se encontró la palabra 'arriba' en el texto.");
    }
}


function ejercicio9() {
    const texto = document.getElementById("textoMayMin").value;

    if (texto === texto.toUpperCase()) {
        console.log("El texto está completamente en mayúsculas.");
    } else if (texto === texto.toLowerCase()) {
        console.log("El texto está completamente en minúsculas.");
    } else {
        console.log("El texto contiene una combinación de mayúsculas y minúsculas.");
    }
}


function ejercicio10() {
    const texto = document.getElementById("textoPalindromo").value.toLowerCase().replace(/[\s,.]/g, '');

    const esPalindromo = texto === texto.split('').reverse().join('');

    console.log(esPalindromo ? "El texto es un palíndromo." : "El texto no es un palíndromo.");
}
