

/*
29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas
formadas pelos seus dois primeiros e dois últimos dígitos.
Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito.
Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const fourDigitsNumber = 4167
  const fourDigitsNumber = numericInput("Informe um número de 4 dígitos ---> ")
  
  // Processamento
  const thousand = getThousand(fourDigitsNumber)
  const hundred = getHundred(fourDigitsNumber)
  const ten = getTen(fourDigitsNumber)
  const unit = getUnit(fourDigitsNumber)
  const firstSum = Number(`${thousand}${hundred}`)
  const secondSum = Number(`${ten}${unit}`)
  const numberSquare = Math.sqrt(fourDigitsNumber)
  const perfectSquare = firstSum + secondSum
  const proof = `${numberSquare} = ${firstSum} + ${secondSum}`
  let report = ''

  if (numberSquare == perfectSquare) {
    report = `O valor ${fourDigitsNumber} é um quadrado perfeito: [${proof}]`
  } else {
    report = `O valor ${fourDigitsNumber} NÃO é um quadrado perfeito: [${proof}]`
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
