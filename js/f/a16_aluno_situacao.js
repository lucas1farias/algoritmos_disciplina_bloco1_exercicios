

/*
16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior
ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média
final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve
escreva “Reprovado”. Escreva um algoritmo para ler um número e verificar se ele obedece a esta característica.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const studentGrade1 = functionDb.numericInput("Informe a primeira nota do aluno ---> ")
  const studentGrade2 = functionDb.numericInput("Informe a segunda nota do aluno ---> ")
  // const studentGrade1 = 7.5
  // const studentGrade2 = 7.7

  // Processamento
  const studentMean = mean(studentGrade1, studentGrade2)
  const result = studentStatus(studentMean, 7, 5)

  // Saída
  functionDb.title("RELATÓRIO")
  functionDb.content(`Média do aluno: ${studentMean}`)
  functionDb.content(`${result}`)
  functionDb.footer("FIM DA EXECUÇÃO")
}

function mean(v1, v2) {
  const calculus = (v1 + v2) / 2
  return calculus.toFixed(1)
}

function studentStatus(meanValue, approved, finalExam) {
  if (meanValue >= approved) {
    return '[Status: Aprovado]'
  } else if (meanValue >= finalExam) {
    return '[Status: Exame Final]'
  } else {
    return '[Status: Reprovado]'
  }
}

main()
