

/*
19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea
(IMC = peso / altura2
). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso
(IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30).
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const personHeight = functionDb.numericInput("Informe sua altura em (m) ---> ")
  const personWeight = functionDb.numericInput("Informe seu peso em (kg) ---> ")
  // const personHeight = 1.78
  // const personWeight = 72

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
  functionDb.title("RELATÓRIO")
  functionDb.content(`Dados da pessoa: ${personHeight}m    ${personWeight}kg`)
  functionDb.content(personWeightCategory)
  functionDb.footer("FIM DA EXECUÇÃO")
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
