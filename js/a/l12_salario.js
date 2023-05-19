

/* 
12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
*/

import { question } from "readline-sync"

// Entradas
const personSalary = Number(question('Digite o valor do salário ---> '))
const percentageRaise = Number(question('Valor do ajuste em porcento ---> '))

// Processamento
const personSalaryRaise = personSalary * (percentageRaise / 100)
const personNewSalary = personSalary + personSalaryRaise

// Saída
const title = '\n===== RELATÓRIO ====='
const report = `
${title}
Salário anterior || $ ${personSalary}
Acréscimo        || $ ${personSalaryRaise} (${percentageRaise}%)
Salário novo     || $ ${personNewSalary}
`

console.log(report)
