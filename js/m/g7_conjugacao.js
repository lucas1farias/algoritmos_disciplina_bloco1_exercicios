

/*
7. Leia um verbo regular terminado em ER e mostre sua conjugação no presente.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const verbo = 'retroceder'
  const verbo = entrada_txt('Digite um verbo na segunda conjugação')

  // Processamento
  const verbo_nao_inf = remover_infinitivo(verbo, 2)

  // Saída
  relatorio()
  conjugar(verbo_nao_inf)
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
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
function remover_infinitivo(verbo, conjugacao) {
  let verbo_nao_inf = ''
  if (conjugacao == 1) {
    verbo_nao_inf = verbo.split('ar')
  } else if (conjugacao == 2) {
    verbo_nao_inf = verbo.split('er')
  } else if (conjugacao == 3) {
    verbo_nao_inf = verbo.split('ir')
  } else if (conjugacao == 4) {
    verbo_nao_inf = verbo.split('or')
  } else if (conjugacao == 5) {
    verbo_nao_inf = verbo.split('ur')
  }
  return verbo_nao_inf.join('')
}

function conjugar(verbo) {
  const sufixos = 'o.es.e.emos.eis.em'.split('.')
  const pronomes = 'Eu.Tu.Ele/Ela.Nós.Vós.Eles/Elas'.split('.')
  let linha = ''

  for (let i = 0; i < pronomes.length; i++) {
    linha = `${pronomes[i]} ${verbo}${sufixos[i]}`
    exibir(linha)
  }
}

main()
