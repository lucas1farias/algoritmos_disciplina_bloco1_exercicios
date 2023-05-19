

/*
15. Escreva uma sub-rotina de nome vertical, que escreva um texto de até 20 caracteres na vertical. Ex.:
vertical (10,'Algoritmos'); escreverá 'Algoritmos' na coluna 10.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()

  // Entrada
  // const palavra = 'Legado'
  // const posicao = 11
  const palavra = entrada_txt('Digite uma palavra a ser inserida numa sequência vertical')
  const posicao = entrada_num('Informe a posição que deve ser exibida (1 a 20)')
  
  // Processamento
  
  // Saída
  relatorio()
  vertical(posicao, palavra)
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
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
function i_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min))
}

function alfabeto() {
  return 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z'.split('.')
}

function criar_texto(limite_chars, funcao_a, funcao_b) {
  let texto = ''
  let letra = ''
  const alfabeto = funcao_a()

  for (let i = 0; i < limite_chars; i++) {
    letra = alfabeto[funcao_b(0, alfabeto.length)]
    texto += letra
  }
  return texto
}

function vertical(pos, palavra) {
  const txt = criar_texto(20, alfabeto, i_aleatorio)

  for (let i = 0; i < txt.length; i++) {
    if (i === pos) {
      exibir(`(${i}, '${palavra}')`)
    } else {
      exibir(txt[i])
    }
  }
}

main()
