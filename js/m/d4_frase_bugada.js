

/*
4. Leia uma frase e gere uma nova frase, duplicando cada caractere da frase digitada.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const frase = 'O rato é primo do esquilo'
  const frase = entrada_txt('Digite uma frase para que ela seja bugada')
  
  // Processamento
  const frase_lista = tornar_lista(frase, ' ')
  const frase_lista_bugada = repetir_procedimento(duplicar_palavra, frase_lista)
  const frase_bugada = tornar_texto(frase_lista_bugada, ' ')
  const saida = `A frase "${frase}" foi bugada para:\n<<< ${frase_bugada} >>>`

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

function tornar_texto(colecao, separador) {
  return colecao.join(separador)
}

function duplicar_palavra(colecao) {
  let palavra_bugada = []
  for (let i = 0; i < colecao.length; i++) {
    palavra_bugada.push(colecao[i] + colecao[i])
  }
  return palavra_bugada.join('')
}

function repetir_procedimento(funcao, colecao) {
  let resultado = []

  for (let i = 0; i < colecao.length; i++) {
    resultado.push(funcao(colecao[i]))
  }

  return resultado
}

main()
