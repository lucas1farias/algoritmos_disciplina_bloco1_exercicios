

import { question } from "readline-sync"

function main() {
  saltar_linha()
  
  // Entrada
  // const valor_progressao = 99
  const valor_progressao = entrada_num('Digite um valor correspondente ao limite de uma progressão do dividendo')
  
  // Processamento
  const calculo = progressao(valor_progressao)
  const saida = `Valor da progressão entre (dividendo +=2 / divisor +=1): ${calculo}`
  
  // Saída
  relatorio()
  exibir(saida)
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
function progressao(limite_dividendo) {
  let i_dividendo = 1
  let i_divisor = 1
  let fracao = ''

  for (let i = i_dividendo; i <= limite_dividendo; i+=2) {
    i_dividendo = i
    i_divisor += 1
  }

  i_divisor -= 1
  fracao = `${i_dividendo}/${i_divisor}`
  return fracao
}


main()
