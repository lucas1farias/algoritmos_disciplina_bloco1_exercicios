

/*
4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const twoDigitsNumber = 21
  const twoDigitsNumber = numericInput("Informe um número de 2 dígitos ---> ")
  
  // Processamento
  const unit = findNumberDecimalPlace(twoDigitsNumber, 'unidade')
  const ten = findNumberDecimalPlace(twoDigitsNumber, 'dezena')
  const numbersAlike = numbersAreSimilar(unit, ten)
  const question = `A dezena ${ten} e a unidade ${unit} são iguais?`

  // Saída
  title('RELATÓRIO')
  if (numbersAlike) {
    content(question + ' Sim')
  } else {
    content(question + ' Não')
  }
  footer('FIM DA EXECUÇÃO')
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

function findNumberDecimalPlace(value, level) {
  const hundred = 100
  let unit;
  let ten;
  if (level == 'unidade') {
    unit = (value + hundred) % 10
    return unit
  } else {
    let hundredRemainder = value % 100
    ten = Math.floor(hundredRemainder / 10) 
    return ten
  }
}

function numbersAreSimilar(n1, n2) {
  if (n1 == n2) {
    return true
  } else {
    return false 
  }
}

main()
