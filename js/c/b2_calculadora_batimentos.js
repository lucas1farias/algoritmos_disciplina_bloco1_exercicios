

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO À CALCULADORA DE BATIMENTOS CARDÍACOS =====\n')

  // Entrada
  const age = numericInput('Informe a sua idade ---> ')

  // Processamento
  const heartRateMax = heartbeatMaxRate(age)
  const heartRateLevel1 = Math.floor(heartRateMax * (50 / 100))
  const heartRateLevel2 = Math.floor(heartRateMax * (55 / 100))
  const heartRateLevel3 = Math.floor(heartRateMax * (60 / 100))
  const heartRateLevel4 = Math.floor(heartRateMax * (65 / 100))
  const heartRateLevel5 = Math.floor(heartRateMax * (70 / 100))
  const heartRateLevel6 = Math.floor(heartRateMax * (75 / 100))
  const heartRateLevel7 = Math.floor(heartRateMax * (80 / 100))
  const heartRateLevel8 = Math.floor(heartRateMax * (85 / 100))
  const moderateHeartRateMean = Math.floor((heartRateLevel1 + heartRateLevel2 + heartRateLevel3 + heartRateLevel4) / 4)
  const intenseHeartRateMean = Math.floor((heartRateLevel5 + heartRateLevel6 + heartRateLevel7 + heartRateLevel8) / 4)
  const moderateGroup = `(${heartRateLevel1}, ${heartRateLevel2}, ${heartRateLevel3}, ${heartRateLevel4})`
  const intenseGroup = `(${heartRateLevel5}, ${heartRateLevel6}, ${heartRateLevel7}, ${heartRateLevel8})`
  
  // Saída
  title('\n===== RELATÓRIO =====')
  content('PESQUISA: Média de batimentos cardíacos entre atletas moderados e intensos')
  content(`Idade do atleta               || ${age} anos`)
  content(`Frequência cardíaca máxima    || ${heartRateMax}`)
  content('===== MÉDIA DE BATIMENTOS ESPERADOS POR CATEGORIA =====')
  content(`Atletas de categoria moderada || ${moderateGroup} [média: ${moderateHeartRateMean} bpm]`)
  content(`Atletas de categoria intensa  || ${intenseGroup} [média: ${intenseHeartRateMean} bpm]`)
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

function heartbeatMaxRate(age) {
  const formulaValue = 220
  const maxRate = formulaValue - age
  return maxRate
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
