

/* 
10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.
*/

import { question } from "readline-sync"

// Entrada
const numberToBeDivided = Number(question('Digite um dividendo ---> '))
const divisor = Number(question('Digite um divisor ---> '))

// Processamento
const operation = numberToBeDivided + '/' + divisor
const quotient = (numberToBeDivided / divisor).toFixed(2)
const divisionRemainings = (quotient - Math.floor(quotient)).toFixed(2)

//Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Quociente da operação (${operation}): ${quotient}
Resto do quociente da operação (${operation}): ${divisionRemainings}
`

console.log(report)
