

/*
21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for
maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso
contrario, é arredondado para o inteiro imediatamente inferior.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const floatNumber = functionDb.numericInput("Digite uma valor fracionado (ex: 7.2, 7.7) ---> ")
  // const floatNumber = 112.5

  // Processamento
  const floatNumberRemainder = remainder(floatNumber)
  const integerNumber = roundIt(floatNumberRemainder, floatNumber)
  const report = `Arredondamento de ${floatNumber}: ${integerNumber}`

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(report)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function remainder(value) {
  return (value % 1).toFixed(1)
}

function roundIt(remainder, target) {
  const decrease = remainder < 0.5
  const issue = remainder == 0.7
  const increase = remainder >= 0.5
  
  if (issue) {
    const specialCalculus = (target + 1 + 0.1) - remainder
    return specialCalculus - 0.1
  }
  if (decrease) {
    return target - remainder
  } else if (increase) {
    return (target + 1) - remainder
  }
}

main()
