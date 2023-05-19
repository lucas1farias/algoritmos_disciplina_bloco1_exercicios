

// problema 12
// Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

import * as functionDb from "../../functions.js"

function main() {
  functionDb.title('BEM-VINDO À CALCULADORA DE ACRÉSCIMO DE SALÁRIO')
  
  // Entrada
  const personSalary = functionDb.numericInput('Informe o valor do salário ---> ')
  const percentageRaise = functionDb.numericInput('Informe o número inteiro da porcentagem do reajuste ---> ')
  
  // Processamento
  const personSalaryRaise = valueIncreasedByPercentage(personSalary, percentageRaise)
  const personNewSalary = personSalary + personSalaryRaise
  
  // Saída
  functionDb.title('RELATÓRIO')
  functionDb.content(`Salário atual || $ ${personSalary}`)
  functionDb.content(`Acréscimo     || $ ${personSalaryRaise} (${percentageRaise}%)`)
  functionDb.content(`Salário novo  || $ ${personNewSalary}`)
  functionDb.footer('FIM DA EXECUÇÃO')
}

function valueIncreasedByPercentage(targetValue, percentage) {
  const valueIncreased = targetValue * (percentage / 100)
  return valueIncreased
}

main()
