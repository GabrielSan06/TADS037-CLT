// CALCULADORA

const prompt = require('prompt-sync')();
let num1, op, num2, repetir;



do {
    // Limpando o terminal
    console.clear();

    console.log(".:: PROGRAMA QUE SIMULA UMA CALCULADORA SIMPLES ::.");

    // Solicitando os números e o operador ao usuário
    num1 = Number(prompt("Informe o primeiro número a ser calculado: "));
    op = prompt("Informe o operador do calculo (+ - * /):") ;
    num2 = Number(prompt("Informe o segundo número a ser calculado: "));

    switch (op) {
        case "+":
            console.log(`${num1} + ${num2} = ${num1+num2}`);
            break;
        case "-":
            console.log(`${num1} - ${num2} = ${num1-num2}`);
            break;
        case "*":
            console.log(`${num1} * ${num2} = ${num1*num2}`);
            break;
        case "/":
            console.log(`${num1} / ${num2} = ${num1/num2}`);
            break;
        default:
            console.log(`Operador "${op}" Inválido!`);
            break;
    }

    // Utilizando o toLowerCase para manter o valor do promt
    repetir = prompt("Deseja repetir o programa? \n s = sim \n n = não \n").toLowerCase();
} while (repetir == "s");