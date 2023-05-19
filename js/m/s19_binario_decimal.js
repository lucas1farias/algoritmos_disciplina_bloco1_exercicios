

/*
19. Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal
de numeração.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const binario = '11011101'
  const binario = entrada_txt('Digite um número binário de até 8 dígitos')
  
  // Processamento
  const binario_invertido = inverter_texto(binario)
  const conversao = binario_decimal(binario_invertido)
  
  // Saída
  relatorio()
  exibir(conversao)
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
function inverter_texto(texto) {
  let texto_invertido = ''
  let contador = 0
  
  for (let i = 0; i < texto.length; i++) {
    texto_invertido += texto[(texto.length - 1) - contador]
    contador++
  }
  return texto_invertido
}

function binario_decimal(conjunto) {
  let contador = 0
  let indices = []
  let progressoes = [1, 2, 4, 8, 16, 32, 64, 128]

  for (let i = 0; i < conjunto.length; i++) {
    if (conjunto[i] == '1') {
      indices.push(i)
    }
  }
  
  for (let i = 0; i < indices.length; i++) {
      contador += progressoes[indices[i]]
  }
  
  return contador
}

main()
