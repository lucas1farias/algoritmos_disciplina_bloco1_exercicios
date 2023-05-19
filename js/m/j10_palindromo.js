

/*
10. Uma palavra é palíndroma se ela não se altera quando lida da direita para esquerda. Por exemplo, raiar
é palíndroma. Escreva um programa que verifique se uma palavra digitada é palíndroma.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const palavra = 'rodador'
  const palavra = entrada_txt('Digite uma palavra para verificar se ela é um palíndromo')
  
  // Processamento
  const similaridade = eh_palindromo(palavra)
  
  // Saída
  relatorio()
  exibir_resultado(similaridade, `A palavra "${palavra}" é um palindromo?`)
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
function eh_palindromo(conteudo) {
  let texto_invertido = ''
  let contador = 0
  
  for (let i = 0; i < conteudo.length; i++) {
    texto_invertido += conteudo[(conteudo.length - 1) - contador]
    contador++
  }
  
  return texto_invertido == conteudo ? true : false
}

function exibir_resultado(verificacao, msg) {
  return verificacao ? exibir(`${msg}: sim`) : exibir(`${msg} não`)
}

main()
