

/*
11. Leia LimiteSuperior e LimiteInferior e escreva todos os números primos entre os limites lidos.
*/

import { question } from "readline-sync"

function main() {
  saltar_linha()
  const limite_inf = entrada_num('Digite um número que represente um limite inferior')
  const limite_sup = entrada_num('Digite um número que represente um limite superior')
  // const limite_inf = 10
  // const limite_sup = 20
  relatorio()
  exibir(`Números primos encontrados entre o intervalo ${limite_inf} e ${limite_sup}`)
  eh_primo(limite_inf, limite_sup)
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
function eh_primo(limite_inf, limite_sup) {
  let primos = ''
  for (let i = limite_inf; i <= limite_sup; i++) {
    if (i == 2 || i == 3 || i == 5 || i == 7) {
      primos += i + ' '
    }
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      primos += i + ' '
    } 
  }
  exibir(primos)
}

main()
