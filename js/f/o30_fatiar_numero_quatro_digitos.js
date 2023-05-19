

/*
30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: 
-> Se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro
pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste
terceiro número é exatamente o número original de quatro dígitos. Por exemplo:
2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025.
*/

import { question } from "readline-sync"

function main() {
  // const fourDigitsNumber = 4444
  const fourDigitsNumber = numericInput("Informe um número de 4 dígitos ---> ")
  
  // Números de 4 dígitos nessa condição: 2025 3025 9801
  // Processamento
  const thousand = getThousand(fourDigitsNumber)
  const hundred = getHundred(fourDigitsNumber)
  const ten = getTen(fourDigitsNumber)
  const unit = getUnit(fourDigitsNumber)
  const firstSum = Number(`${thousand}${hundred}`)
  const secondSum = Number(`${ten}${unit}`)
  const endNumber = (firstSum + secondSum) ** 2
  let report = ''
  
  if (fourDigitsNumber == endNumber) {
    report = `${fourDigitsNumber} = (${firstSum} + ${secondSum}) elevado a 2? SIM -> ${endNumber}`
  } else {
    report = `${fourDigitsNumber} = (${firstSum} + ${secondSum}) elevado a 2? Não -> ${endNumber}`
  }

  // Saída
  title("RELATÓRIO")
  content(report)
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

function getThousand(numberFourDigits) {
  return Math.floor(numberFourDigits / 1000)
}

function getHundred(numberFourDigits) {
  const hundred = (numberFourDigits % 1000) / 100
  return Math.floor(hundred)
}

function getTen(numberFourDigits) {
  const ten = (numberFourDigits % 100) / 10
  return Math.floor(ten)
}

function getUnit(numberFourDigits) {
  return numberFourDigits % 10
}

main()
