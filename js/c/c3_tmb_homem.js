

import { question } from "readline-sync"

function main() {
  title('\n========== BEM-VINDO A CALCULADORA DE TAXA METABÓLICA BASAL ==========')
  
  // Entradas
  const personWeight = numericInput('Informe o seu peso ---> ')
  const personHeight = numericInput('Informe a sua altura em (cm) ---> ')
  const personAge = numericInput('Informe a sua idade ---> ')

  // Processamento
  const result = maleBasalMetabolicRate(personWeight, personHeight, personAge)
  const personHeightMeters = cmIntoMeter(personHeight)

  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Dados informados      || (peso: ${personWeight}kg) (altura: ${personHeightMeters}m) (idade: ${personAge})`)
  content(`Taxa Metabólica Basal || ${result}`)
  footer('========== FIM DA EXECUÇÃO ==========\n')
}

function cmIntoMeter(cmValue) {
  const meters = cmValue / 100
  return meters
}

function maleBasalMetabolicRate(weight, height, age) {
  // https://www.calculator.net/bmr-calculator.html
  const calculus = (10 * weight) + (6.25 * height) - (5 * age) + 5
  return Math.round(calculus)
}

function numericInput(msg) {
  const element = Number(question(msg))
  return element
}

function print(msg) {
  console.log(msg)
}

function title(titleLabel) {
  print(titleLabel)
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
