

/*
20. Leia uma frase e faça a criptografia, retirando as vogais das palavras. O programa deverá armazenar
estas vogais e suas posições originais, mostrar a frase criptografada, em seguida, descriptografar a frase
e mostrá-la na tela.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const palavra = 'Linguagem Javascript'
  const palavra = entrada_txt('Digite uma palavra ou frase para filtrar suas vogais')
  
  // Processamento
  const palavra_cripto = manipular_vogais(palavra, true)
  
  // Saída
  relatorio()
  exibir(palavra_cripto[0])
  exibir(palavra_cripto[2])
  exibir(palavra_cripto[1])
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
function manipular_vogais(txt, lembrar) {
  let indices = ''
  let nova_palavra = ''
  let copia = ''
  let char = undefined
  
  if (lembrar) {
    copia = txt
  }

  for (let i = 0; i < txt.length; i++) {
    char = txt[i]
    
    if (char == 'a') {
      nova_palavra += ''
      indices += ` ${i}`
    } else if (char == 'e') {
      nova_palavra += ''
      indices += ` ${i}`
    } else if (char == 'i') {
      nova_palavra += ''
      indices += ` ${i}`
    } else if (char == 'o') {
      nova_palavra += ''
      indices += ` ${i}`
    } else if (char == 'u') {
      nova_palavra += ''
      indices += ` ${i}`
    } else {
      nova_palavra += char
    }
  }
  
  return `${nova_palavra}.${copia}.${indices}`.split('.')
}

main()
