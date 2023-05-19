

import { question } from "readline-sync"

function main() {
  title('\n===== BEM-VINDO AO CÁLCULO DE DÉFICIT CALÓRICO =====')
  
  // Entradas
  const personWeight = numericInput('Informe o seu peso ---> ')
  const percentageLoss = numericInput('Informe a % inteira a perde do seu peso ---> ')
  const weekGoal = numericInput('Informe o número de semanas em que deseja perder ---> ')
  const caloriesDailyConsumption = numericInput('Informe seu consumo diário de calorias ---> ')
  
  // Processamento
  const howMuchKgToLose = amountKgLoss(personWeight, percentageLoss)
  const daysGoal = weeksIntoDays(weekGoal)
  const lossInCalories = weightIntoCalories(howMuchKgToLose)
  const dailyDeficit = getCalorieDailyDeficit(lossInCalories, daysGoal)
  
  // Saída
  title('\n===== RELATÓRIO =====')
  content(`Quilos a perder                 || ${howMuchKgToLose}kg`)
  content(`Meta em dias                    || ${daysGoal} dia(s)`)
  content(`Quilos a perder em calorias     || ${lossInCalories} kcal`)
  content(`Déficit calórico diário         || ${dailyDeficit} kcal`)
  content(`Consumo de calorias diário      || ${caloriesDailyConsumption} Kcal`)
  content(`Calorias perdidas ao fim do dia || ${caloriesDailyConsumption + dailyDeficit} kcal`)
  footer('===== FIM DA EXECUÇÃO =====\n')
}

function print(msg) {
  console.log(msg)
}

function title(titleLabel) {
  print(titleLabel)
}

function numericInput(msg) {
  const element = Number(question(msg))
  return element
}

function amountKgLoss(weight, percentage) {
  const percentageReal = percentage / 100
  const kgWeightLoss =  (weight * percentageReal).toFixed(2)
  return kgWeightLoss
}

function weeksIntoDays(weekValue) {
  const conversion = weekValue * 7
  return conversion
}

function weightIntoCalories(weightValue) {
  const KgToKcal = 7700
  const weightToKcal = weightValue * KgToKcal
  return weightToKcal
}

function getCalorieDailyDeficit(calorieValue, days) {
  const calculus = Number((calorieValue / days).toFixed(2))
  return calculus
}

function content(contentLabel) {
  print(contentLabel)
}

function footer(footerLabel) {
  print(footerLabel)
}

main()
