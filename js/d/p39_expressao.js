

/* 
39. Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão:
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  let a = Number(question('Digite um valor inteiro para um id (A) ---> '))
  let b = Number(question('Digite um valor inteiro para um id (B) ---> '))
  let c = Number(question('Digite um valor inteiro para um id (C) ---> '))

  // Processamento
  const letterR = (a + b) ** 2
  const letterS = (b + c) ** 2
  const letterD = (letterR + letterS) / 2

  // Saída
  const title = '\n===== RELATÓRIO ====='
  const report = `
  ${title}
  Dados      || a = ${a} / b = ${b} / c = ${c}
  Valor de R || ${letterR}
  Valor de S || ${letterS}
  Valor de D || ${letterD}
  `

  display(report)
}

function display(content) {
  console.log(content)
}

main()
