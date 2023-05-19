

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO À CALCULADORA DE ÁGUA =====')

  // Entrada
  const weight = numericInput('Informe o seu peso ---> ')

  // Processamento
  const regularAthlete = waterNeeded(weight, 35)
  const intenseAthlete = waterNeeded(weight, 45)

  // Saída
  title('\n===== RELATÓRIO =====')
  content('PESQUISA: Litros de água consumíveis em atividades moderada e intensa')
  content(`Peso do atleta     || ${weight}kg`)
  content(`Categoria moderada || ${regularAthlete}L`)
  content(`Categoria intensa  || ${intenseAthlete}L`)
  footer('===== FIM DA EXECUÇÃO =====\n')
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

function waterNeeded(weight, waterMlPerKg) {
  const mlToLiter = 1000
  const waterNeeded = ((waterMlPerKg * weight) / mlToLiter).toFixed(2)
  return waterNeeded
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
