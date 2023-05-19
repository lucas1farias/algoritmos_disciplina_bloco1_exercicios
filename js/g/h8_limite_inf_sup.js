

/*
Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const numero = entrada_num('Digite um número')
  const limite_inferior = entrada_num('Digite um valor que represente um limite inferior')
  const limite_superior = entrada_num('Digite um valor que represente um limite superior')
  // const numero = 3
  // const limite_inferior = 1
  // const limite_superior = 20
  relatorio()
  exibir(`Multiplos de ${numero} encontrados entre ${limite_inferior} e ${limite_superior}`)
  exibir_multiplos(numero, limite_inferior, limite_superior)
  fim()
}

// Funções de apoio
function saltar_linha() {
  exibir('\n')
}

function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
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
function eh_multiplo(n, n2) {
  return n % n2 === 0
}

function exibir_multiplos(alvo, limite_inf, limite_sup) {
  let multiplos = ''
  while (limite_inf <= limite_sup) {
    if (eh_multiplo(limite_inf, alvo)) {
      multiplos += limite_inf + ' '
    }
    limite_inf++
  }
  exibir(multiplos)
}

main()
