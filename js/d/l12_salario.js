

/* 
12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  const personSalary = Number(question('Digite o valor do salário ---> '))
  const percentageRaise = Number(question('Valor do ajuste em porcento ---> '))

  // Processamento
  const personSalaryRaise = get_raise(personSalary, percentageRaise)
  const personNewSalary = personSalary + personSalaryRaise

  // Saída
  const title = '\n===== RELATÓRIO ====='
  const report = `
  ${title}
  Salário anterior || $ ${personSalary}
  Acréscimo        || $ ${personSalaryRaise} (${percentageRaise}%)
  Salário novo     || $ ${personNewSalary}
  `

  display(report)
}

function get_raise(salary, raise_percentage) {
  return salary * (raise_percentage / 100)
}

function display(content) {
  console.log(content)
}

main()
