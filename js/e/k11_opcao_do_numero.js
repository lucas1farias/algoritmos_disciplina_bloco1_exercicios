

/*
11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o
valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores
possíveis para a variável opção são 1, 2 e 3.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const option = functionDb.numericInput("Informe um número de opção (1, 2 ou 3) ---> ")
  const firstNumber = functionDb.numericInput("Escolha um número qualquer ---> ")
  const secondNumber = functionDb.numericInput("Escolha um outro número qualquer ---> ")
  const thirdNumber = functionDb.numericInput("Escolha um próximo número qualquer ---> ")
  // const option = 0
  // const firstNumber = 20
  // const secondNumber = 62
  // const thirdNumber = 33
  
  // Processamento
  const isOptionProper = isOutOfRange(option, 1, 3)
  let report = ''
  
  if (isOptionProper) {
    if (option == 1) {
      report = firstNumber
    } else if (option == 2) {
      report = secondNumber
    } else {
      report = thirdNumber
    }
  } else {
    report = "INVÁLIDA"
  }

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`Se a opção escolhida foi ${option}, então ela vale: ${report}`)
  functionDb.content("FIM DA EXECUÇÃO")
}

function isOutOfRange(value, min, max) {
  if (value >= min && value <= max) {
    return true
  } else {
    return false
  }
}

main()
