// Instalar o pacote do node pelo npm (node package manager): npm i prompt -sync
const prompt = require('prompt-sync')();

// Calculando a média do aluno
let aluno, nota, media = 0, conceito;

// Estrutura de repetição para solicitar todas as notas do usuário
for(let i=1; i<=3; i++){
    nota = Number(prompt(`${aluno} informe sua ${i}ª nota: `)); //Solicitando ao usuário as suas notas
    media += nota; // adicionando todas as notas na variável média
}

// Calculando a média
media /= 3;

// if (media >= 9.5) {
//     conceito = "Excelente";
// } else if (media < 9.5 && media >= 8.5) {
//     conceito = "Ótimo";
// } else if (media < 8.5 && media >= 7) {
//     conceito = "Bom";
// } else if (media < 7 && media >= 5) {
//     conceito = "ANS";
// } else {
//     conceito = "Insuficiente";
// }

// Utilizando operador ternário para atribuir o conceito
(media >= 9.5) ? conceito = "Excelente":
    (media < 9.5 && media >= 8.5) ? conceito = "Ótimo":
        (media < 8.5 && media >= 7) ? conceito = "Bom":
            (media < 7 && media >= 5) ? conceito = "ANS": conceito = "Insuficiente";

// Exibindo ao aluno sua média com até duas casas decimais e conceito 
console.log(`${Aluno}, sua média é ${media.toFixed(2)} e o seu conceito é ${conceito}!`);