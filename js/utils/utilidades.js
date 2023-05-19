

import { question } from "readline-sync"

// =============== FUNÇÕES DE DESIGN ===============
export function saltar_linha() {
  exibir('\n')
}

export function exibir(conteudo) {
  console.log(conteudo)
}

export function relatorio() {
  exibir('\n========== RELATÓRIO ==========')
}

export function fim() {
  exibir('========== FIM ==========\n')
}

// =============== FUNÇÕES DE ENTRADA ===============
export function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
}

export function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
}
