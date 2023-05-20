

/*
24. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e
número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e
escreva:
a) média de salário da população;
b) média de número de filhos;
c) percentual de pessoas com salário de até R$ 1.000,00
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  const n = entrada_num('Digite o número de habitantes a ser entrevistados')

  // Processamento
  loop(n)

  // Saída
  relatorio()
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
}

function relatorio() {
  exibir('\n========== RELATÓRIO ==========')
}

function exibir(conteudo) {
  console.log(conteudo)
}

function fim() {
  exibir('========== FIM ==========\n')
}

// Funções de funcionalidade
function loop(rept) {
  let salario = undefined
  let n_filhos = undefined

  for (let i = 0; i < rept; i++) {
    salario = entrada_num('Salário do habitante')
    n_filhos = entrada_num('Número de filhos do habitante')
    exibir(`\nSalário: ${salario}\nFilhos: ${n_filhos}\n`)
  }
}

main()
