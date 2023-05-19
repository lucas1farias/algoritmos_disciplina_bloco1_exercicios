

/*
6. Leia uma frase e gere uma nova frase, substituindo o algarismo que aparecer na frase por seu extenso
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const frase = 'Java0script, ou JS7201369584 é1 um2a 3linguagem de4 pro5gramação muito6 conheci7da n8o m9undo'
  const frase = entrada_txt('Digite uma frase com números e veja a frase mudar')
  
  // Processamento
  const frase_numerica = numero_int_txt(frase)

  // Saída
  relatorio()
  exibir(frase_numerica)
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

function eh_numerico(caracter) {
  return !isNaN(caracter)
}

function numero_int_txt(colecao) {
  let frase_editada = ''
  
  for (let i = 0; i < colecao.length; i++) {
    if (eh_numerico(colecao[i]) && colecao[i] != ' ') {
      if (colecao[i] == '0') {
        frase_editada += 'zero'
      } else if (colecao[i] == '1') {
        frase_editada += 'um'
      } else if (colecao[i] == '2') {
        frase_editada += 'dois'
      } else if (colecao[i] == '3') {
        frase_editada += 'três'
      } else if (colecao[i] == '4') {
        frase_editada += 'quatro'
      } else if (colecao[i] == '5') {
        frase_editada += 'cinco'
      } else if (colecao[i] == '6') {
        frase_editada += 'seis'
      } else if (colecao[i] == '7') {
        frase_editada += 'sete'
      } else if (colecao[i] == '8') {
        frase_editada += 'oito'
      } else if (colecao[i] == '9') {
        frase_editada += 'nove'
      }
    } 
    else {
      frase_editada += colecao[i]
    }
  }
  return frase_editada
}

main()
