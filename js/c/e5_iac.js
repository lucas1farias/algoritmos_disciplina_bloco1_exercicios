

import { question } from "readline-sync"

function main() {
  title('\n========== BEM-VINDO AO ÍNDICE DE ADIPOSIDADE CORPORAL ==========')

  // Entradas
  const personHipCm = numericInput('Informe a sua circumferência do quadril em (cm) ---> ')
  const personHeightCm = numericInput('Informe a sua altura em (cm) ---> ')

  // Processamento
  const personHeightMeters = cmIntoMeter(personHeightCm)
  const personBodyAdiposityIndex = bodyAdiposityIndex(personHipCm, personHeightMeters)

  // Saída
  title('\n========== RELATÓRIO ==========')
  content(`Seu IAC        || ${personBodyAdiposityIndex} (quadril atual: ${personHipCm}cm)`)
  content(`Magro          || (0 -> 8.9)`)
  content(`Normal         || (9 -> 20.9)`)
  content(`Sobrepeso      || (21 -> 25.9)`)
  content(`Obeso          || (26 -> 29.9)`)
  content(`Quadril mínimo || ${minHips(personHipCm, personBodyAdiposityIndex, personHeightMeters)}`)
  content(`Quadril máximo || ${maxHips(personHipCm, personBodyAdiposityIndex, personHeightMeters)}`)
  footer('========== FIM DO RELATÓRIO =========\n')
}

function print(msg) {
  console.log(msg)
}

function title(titleLabel) {
  print(titleLabel)
}

function numericInput(text) {
  const element = Number(question(text))
  return element
}

function cmIntoMeter(cmValue) {
  const meters = cmValue / 100
  return meters
}

function bodyAdiposityIndex(hipsCm, height) {
  const functionDenominator = height * Math.sqrt(height)
  const calculus = ((hipsCm / functionDenominator) - 18)
  return calculus.toFixed(1)
}

function minHips(hipValue, bodyAdiposityIndexReference, height) {
  const boundary = 9
  let hipMin = 0
  let bai = bodyAdiposityIndexReference
  for (let centimeter = hipValue; bai > boundary; centimeter--) {
    bai = bodyAdiposityIndex(centimeter, height)
    // console.log(centimeter, bai)
    hipMin = centimeter
  }
  return hipMin + 1
}

function maxHips(hipValue, bodyAdiposityIndexReference, height) {
  const boundary = 20.9
  let hipMax = 0
  let bai = bodyAdiposityIndexReference
  for (let centimeter = hipValue; bai < boundary; centimeter++) {
    bai = bodyAdiposityIndex(centimeter, height)
    // console.log(centimeter, bai)
    hipMax = centimeter
  }
  return hipMax - 1
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
