

/*
24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const a = 2
  // const b = 8
  // const c = -24
  const a = numericInput("Determine um valor para A ---> ")
  const b = numericInput("Determine um valor para B ---> ")
  const c = numericInput("Determine um valor para C ---> ")
  
  // Processamento
  const coeficientsDelta = getDelta(a, b, c)
  const xNegative = getX(b, a, coeficientsDelta, '-')
  const xPositive = getX(b, a, coeficientsDelta, '+')

  // Saída
  title("RELATÓRIO")
  content(`A=${a} B=${b} C=${c}`)
  content(`Delta de ABC: ${coeficientsDelta}`)
  content(`Raiz em X uma linha: ${xNegative}`)
  content(`Raiz em X 2 linhas: ${xPositive}`)
  footer("FIM DA EXECUÇÃO")
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function getDelta(a, b, c) {
  return (b ** 2) - 4 * (a * c)
}

function getX(b, a, deltaValue, category) {
  // x = – b ± √Δ / 2a
  let upperArea = - b + (Math.sqrt(deltaValue))
  const lowerArea = (2 * a)

  if (category == '+') {
    console.log(-b, Math.sqrt(deltaValue), (2 * a))
      
    return upperArea / lowerArea
  } else {
    upperArea = - b + (- Math.sqrt(deltaValue))
    return upperArea / lowerArea
  }
}

main()
