

/*
9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const limite_inf = entrada_num('Digite um número que represente um limite inferior')
  const limite_sup = entrada_num('Digite um número que represente um limite superior')
  // const limite_inf = 10
  // const limite_sup = 20
  relatorio()
  exibir(`Números pares entre o intervalo de ${limite_inf} e ${limite_sup}`)
  obter_entre_range(limite_inf, limite_sup, 'par')
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
function eh_par(n) {
  return n % 2 === 0
}

function obter_entre_range(limite_inf, limite_sup, tipo) {
  let multiplos = ''

  while (limite_inf <= limite_sup) {
    if (tipo === 'par') {
      if (eh_par(limite_inf)) {
        multiplos += limite_inf + ' '
      }
    }
    limite_inf++
  }
  exibir(multiplos)
}

main()