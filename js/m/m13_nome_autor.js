

/*
13. As normas para a exibição da bibliografia de um artigo cientifico, de uma monografia, de um livro,
texto etc., exigem que o nome do autor seja escrito no formato último sobrenome, sequência das
primeiras letras do nome e dos demais sobrenomes, seguidas de ponto final. Por exemplo, Antonio
Carlos Jobim seria referido por Jobim, A. C.. Escreva um programa que receba um nome completo e o
escreva no formato de bibliografia.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const pessoa = 'Antonio Carlos Jobim'
  const pessoa = entrada_txt('Digite um nome de alguém')
  
  // Processamento
  const pessoa_autor = reconfigurar_nome(tornar_lista(pessoa, ' '), 2)
  const saida = `Nome da pessoa: ${pessoa}\nNome de autor da pessoa: ${pessoa_autor}`
  
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
function tornar_lista(colecao, separador) {
  return colecao.split(separador)
}

function reconfigurar_nome(nome, char_tamanho_aceito) {
  const ultimo_indice = nome.length - 1
  let nome_autor = []
  
  nome_autor.push(nome[ultimo_indice] + ',')
  
  for (let i = 0; i < nome.length; i++) {
    i != ultimo_indice && nome[i].length > char_tamanho_aceito ? nome_autor.push(nome[i][0] + '.') : null
  }

  return nome_autor.join(' ')
}

main()
