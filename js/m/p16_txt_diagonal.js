

/*
16. Escreva uma sub-rotina de nome diagonal, que escreva um texto de até 20 caracteres na diagonal. Ex.:
diagonal ('Algoritmos '); escreverá 'Algoritmos' na diagonal.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const palavra = 'Algoritmos'
  const palavra = entrada_txt('Digite uma palavra para ver seus caracteres se deslocando em cascata')
  
  // Processamento
  
  // Saída
  relatorio()
  diagonal(palavra)
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
function diagonal(txt) {
  let deslocamento = ['  ']
  
  for (let i = 0; i < txt.length; i++) {
    if (i == 0) {
      exibir(txt[i])
    } else {
      exibir(deslocamento.join('') + txt[i])
      deslocamento.push('   ')
    }
  }
}

main()
