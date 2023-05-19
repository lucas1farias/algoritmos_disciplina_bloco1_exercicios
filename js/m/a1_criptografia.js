

/*
1. Faça a criptografia de uma frase digitada pelo usuário. Na criptografia, a frase deverá ser invertida e as
consoantes deverão ser substituídas pelo caractere #.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const frase = 'javascript'
  const frase = entrada_txt('Digite uma palavra para transformá-la')

  // Processamento
  const frase_invertida = inverter_texto(frase)
  const frase_consoantes_censuradas = substituir_consoantes('#', frase_invertida, obter_consoantes())
  const saida = `Frase: ${frase}\nInversão: ${frase_invertida}\nCensura: ${frase_consoantes_censuradas}`

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
function obter_consoantes() {
  return 'b.c.d.f.g.h.j.k.l.m.n.p.q.r.s.t.v.w.x.y.z'.split('.')
}

function char_esta_contido(char, colecao) {
  for (let i = 0; i < colecao.length; i++) {
    if (colecao[i] == char) {
      return true
    }
  }
}

function substituir_consoantes(substituta, colecao_alvo, colecao_matriz) {
  let nova_colecao = []
  
  for (let i = 0; i < colecao_alvo.length; i++) {
    let eh_consoante = char_esta_contido(colecao_alvo[i], colecao_matriz)
    
    eh_consoante ? nova_colecao.push(substituta) : nova_colecao.push(colecao_alvo[i])
    // if (eh_consoante) {
    //   nova_colecao.push(substituta)
    // } else {
    //   nova_colecao.push(colecao_alvo[i])
    // }
  }
  return nova_colecao.join('')
}

function inverter_texto(texto) {
  let texto_invertido = ''
  let contador = 0
  for (let i = 0; i < texto.length; i++) {
    texto_invertido += texto[(texto.length - 1) - contador]
    contador++
  }
  return texto_invertido
}

main()
