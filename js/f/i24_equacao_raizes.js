

/*
24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o
coeficiente A deve ser diferente de 0 (zero).
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const a = functionDb.numericInput("Determine um valor para A ---> ")
  const b = functionDb.numericInput("Determine um valor para B ---> ")
  const c = functionDb.numericInput("Determine um valor para C ---> ")
  // const a = 2
  // const b = 8
  // const c = -24

  // Processamento
  const coeficientsDelta = getDelta(a, b, c)
  const xNegative = getX(b, a, coeficientsDelta, '-')
  const xPositive = getX(b, a, coeficientsDelta, '+')

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`A=${a} B=${b} C=${c}`)
  functionDb.content(`Delta de ABC: ${coeficientsDelta}`)
  functionDb.content(`Raiz em X uma linha: ${xNegative}`)
  functionDb.content(`Raiz em X 2 linhas: ${xPositive}`)
  functionDb.footer("FIM DA EXECUÇÃO")
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
