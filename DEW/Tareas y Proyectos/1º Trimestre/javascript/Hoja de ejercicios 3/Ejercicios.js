function ejercicio1(numElem = 10, min = 100, max = 200) {
    let arr = Array.from({ length: numElem }, () => Math.floor(Math.random() * (max - min + 1)) + min);
    console.log(`Array aleatorio: [${arr.join(", ")}]`);
    return arr;
}

function ejercicio2() {
    let arr = ejercicio1(20, 20, 100);
    arr.sort((a, b) => a - b);
    console.log(`Array ordenado: [${arr.join(", ")}]`);
}

function ejercicio3() {
    let arr = ejercicio1(20, 20, 100);
    arr.sort((a, b) => a - b); // Primero lo ordenamos
    arr = arr.sort(() => Math.random() - 0.5); // Luego lo mezclamos
    console.log(`Array mezclado: [${arr.join(", ")}]`);
}

function ejercicio4() {
    let arr = ejercicio1(15, -10, 20);
    let newArr = [];
    
    arr.forEach(x => {
        let operation = '';
        if (x <= -5) {
            operation = `Eliminar el primer elemento: ${newArr.shift() || 'Array vacío'}`;
        } else if (x > -5 && x <= 0) {
            operation = `Eliminar el último elemento: ${newArr.pop() || 'Array vacío'}`;
        } else if (x > 0 && x <= 10) {
            newArr.unshift(x);
            operation = `Añadir ${x} al principio`;
        } else if (x > 10) {
            newArr.push(x);
            operation = `Añadir ${x} al final`;
        }
        console.log(`x: ${x}, ${operation}. Tamaño del nuevo array: ${newArr.length}`);
    });
}

function ejercicio5() {
    let arr = ejercicio1(20, 60, 100);
    let sqrtArr = arr.map(x => Math.sqrt(x));
    console.log(`Raíces cuadradas: [${sqrtArr.join(", ")}]`);
}

function ejercicio6() {
    let arr = ejercicio1(20, -100, 100);
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let maxIndex = arr.indexOf(max);
    let minIndex = arr.indexOf(min);
    
    console.log(`Máximo: ${max} (índice: ${maxIndex}), Mínimo: ${min} (índice: ${minIndex})`);
}

function ejercicio7() {
    let arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * (20 - 10 + 1)) + 10);
    let seen = new Set();
    let result = '';
    
    arr.forEach(num => {
        if (seen.has(num)) {
            result += `Número ${num} es repetido.\n`;
        } else {
            result += `Número ${num} es nuevo.\n`;
            seen.add(num);
        }
    });
    
    console.log(result);
}

function ejercicio8() {
    let arr = Array.from({ length: 50 }, () => Math.floor(Math.random() * (20 - 10 + 1)) + 10);
    let counts = {};
    let result = '';
    
    arr.forEach(num => {
        if (counts[num]) {
            counts[num]++;
            result += `Número ${num} ya existía, aparece ${counts[num] - 1} vez(ces).\n`;
        } else {
            counts[num] = 1;
            result += `Número ${num} es nuevo.\n`;
        }
    });
    
    console.log(result);
}
