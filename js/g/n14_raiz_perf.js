

/*
14. Leia N, calcule e escreva o maior quadrado menor ou igual a N. Por exemplo, se N for igual a 38, o
maior quadrado menor que 38 é 36 (quadrado de 6).
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número limite')
  // const numero = 38
  const lista = criar_conjunto(1, numero)
  const raiz_perf_limite = ultima_raiz_perf(lista)
  const saida = `A última raiz quadrada perfeita antes de ${numero}, é: ${raiz_perf_limite}`
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
function criar_conjunto(min, max) {
  let container = []
  
  while (min <= max) {
    container.push(min)
    min++
  }
  
  return container
}

function ultima_raiz_perf(lista) {
  let i = 0
  let raiz = 0
  let raiz_perf = 0
  let ultima_raiz = 0
  let fim = 0
  
  while (i < lista.length) {
    
    raiz = Math.sqrt(lista[i])
    raiz_perf = raiz % 2 === 0 || raiz % 2 === 1
    fim = lista[i] == lista.length
    
    if (raiz_perf && !fim) {
      ultima_raiz = lista[i]
    }

    i++
  }
  return ultima_raiz
}

main()
