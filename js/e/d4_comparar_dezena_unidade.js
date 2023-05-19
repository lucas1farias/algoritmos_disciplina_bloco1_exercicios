

/*
4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente
do algarismo da unidade.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const twoDigitsNumber = functionDb.numericInput("Informe um número de 2 dígitos ---> ")
  // const twoDigitsNumber = 21

  // Processamento
  const unit = findNumberDecimalPlace(twoDigitsNumber, 'unidade')
  const ten = findNumberDecimalPlace(twoDigitsNumber, 'dezena')
  const numbersAlike = numbersAreSimilar(unit, ten)
  const question = `A dezena ${ten} e a unidade ${unit} são iguais?`

  // Saída
  functionDb.title('RELATÓRIO')
  if (numbersAlike) {
    functionDb.content(question + ' Sim')
  } else {
    functionDb.content(question + ' Não')
  }
  functionDb.footer('FIM DA EXECUÇÃO')
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
