// Instalar o pacote do node pelo npm (node package manager): npm i prompt -sync
const prompt = require('prompt-sync')();

let nome, idade, dias;

nome = prompt("Informe seu nome: ");
idade = prompt(`${nome}, informe sua idade: `);
dias = 365 * idade;

console.log(`${nome}, você já viveu mais do que ${dias} dias.`);

// Operadores Ternários