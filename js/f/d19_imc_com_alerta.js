

/*
19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2
). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const personHeight = 1.78
  // const personWeight = 72
  const personHeight = numericInput("Informe sua altura em (m) ---> ")
  const personWeight = numericInput("Informe seu peso em (kg) ---> ")
  
  // Processamento
  let imcCalculus = 0
  const heightCm = isInteger(personHeight)

  // Altura passada em (cm) (forma inapropriada)
  if (heightCm) {
    imcCalculus = imc(personWeight, cmToMeters(personHeight))
  } 
  // Altura passada em (m) (forma apropriada)
  else {
    imcCalculus = imc(personWeight, personHeight)
  }
  
  const personWeightCategory = personShape(imcCalculus)

  // Saída
  title("RELATÓRIO")
  content(`Dados da pessoa: ${personHeight}m    ${personWeight}kg`)
  content(personWeightCategory)
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

function isInteger(value) {
  if (value % 1 == 0) {
    return true
  } else {
    return false
  }
}

function cmToMeters(cm) {
  return cm / 100
}

function imc(weight, height) {
  return (weight / height ** 2).toFixed(1)
}

function personShape(imcValue) {
  const normal = imcValue < 25
  const obese = imcValue < 30
  const obeseMorbid = imcValue > 30 
  
  if (normal) {
    return `[Status: Peso normal (${imcValue} < 25)]`
  } else if (obese) {
    return `[Status: Obesidade (${imcValue} > 25)]`
  } else if (obeseMorbid) {
    return `[Status: Obesidade mórbida (${imcValue} > 30)]`
  }
}

main()
