

/*
3. Leia uma frase e gere uma nova frase, retirando os espaços entre as palavras.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const frase = 'Javascript é uma linguagem de programação'
  const frase = entrada_txt('Digite uma frase e veja como ela fica sem os espaços')

  // Processamento
  const frase_sem_espacos = substituir_char(frase, ' ', '')
  const saida = `A frase ${frase} agora se tornou: ${frase_sem_espacos}`

  // Saída
  relatorio()
  exibir(saida)
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
function substituir_char(colecao, alvo, substituta) {
  let nova_colecao = []
  
  for (let i = 0; i < colecao.length; i++) {
    
    colecao[i] === alvo ? nova_colecao.push(substituta) : nova_colecao.push(colecao[i])

    // if (colecao[i] === alvo) {
    //   nova_colecao.push(substituta)
    // } else {
    //   nova_colecao.push(colecao[i])
    // }
  }
  return nova_colecao.join('')
}

main()
