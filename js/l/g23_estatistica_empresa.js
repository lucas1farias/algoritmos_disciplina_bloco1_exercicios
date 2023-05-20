

/*
23. Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de
horas trabalhadas e o seu nº de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$
40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR.
Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N
funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário
líquido do funcionário.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  const n = entrada_num('Digite o número de colaboradores a ser entrevistados')

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
  let codigo = undefined
  let h_trabalhadas = undefined
  let n_dependentes = undefined

  for (let i = 0; i < rept; i++) {
    codigo = entrada_num('Código do colaborador')
    h_trabalhadas = entrada_num('Jornada em horas do colaborador')
    n_dependentes = entrada_num('Número de dependentes do colaborador')
    exibir(`\nCódigo: ${codigo}\nJornada: ${h_trabalhadas}h\nDependentes: ${n_dependentes}`)
  }
}

main()
