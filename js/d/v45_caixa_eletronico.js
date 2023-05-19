

/*
45. Um algoritmo para gerenciar os saques de um caixa eletrônico 
deve possuir algum mecanismo para decidir o numero de notas de cada
valor que deve ser disponibilizado para o cliente que realizou o
saque. Um possível critério seria o da "distribuição ótima" no 
sentido de que as notas de menor valor disponíveis fossem distribuídas 
em número mínimo possível. Por exemplo, se a maquina só dispõe de
notas de R$ 50, de R$ 10, de R$ 5 e de R$ 1, para uma quantia 
solicitada de R$ 87, o algoritmo deveria indicar uma nota de R$ 50, 
três notas de R$ 10, uma nota de R$ 5 e duas notas de R$ 1. Escreva
um algoritmo que receba o valor da quantia solicitada e retorne a 
distribuição das notas de acordo com o critério da distribuição ótima.
*/

import { question } from "readline-sync"

function main() {
  // Entrade
  const moneyAmount = Number(question('Digite um valor inteiro (apenas) que represente uma cédula de dinheiro ---> '))

  // Processamento
  const money_split = get_money_split_fifty_to_one(moneyAmount)

  // Saída
  const title = '\n===== RELATÓRIO ====='
  display(title)
  display(money_split)
}

function get_money_split_fifty_to_one(moneyAmount) {
  const cellFifty = 50
  const cellTen = 10
  const cellFive = 5
  const cellOne = 1
  const fiftyBills = Math.floor(moneyAmount / cellFifty)
  const fiftyLeftover = moneyAmount % cellFifty
  const tenBills = Math.floor(fiftyLeftover / cellTen) 
  const tenLeftover = moneyAmount % cellTen
  const fiveBills = Math.floor(tenLeftover / cellFive)
  const fiveLeftover = moneyAmount % cellFive
  const oneBills = Math.floor(fiveLeftover / cellOne)

  const report = `
  Saque            || ${moneyAmount}
  Cédulas de R$ 50 || ${fiftyBills}
  Cédulas de R$ 10 || ${tenBills}
  Cédulas de R$ 5  || ${fiveBills}
  Cédulas de R$ 1  || ${oneBills}
  `

  return report
}

function display(content) {
  console.log(content)
}

main()
