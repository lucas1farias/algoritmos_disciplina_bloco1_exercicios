

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
  while (limite_inf <= limite_sup) {
    if (limite_inf == 2 || limite_inf == 3 || limite_inf == 5 || limite_inf == 7) {
      primos += limite_inf + ' '
    }
    if (limite_inf % 2 != 0 && limite_inf % 3 != 0 && limite_inf % 5 != 0 && limite_inf % 7 != 0) {
      primos += limite_inf + ' '
    } 
    limite_inf++
  }
  exibir(primos)
}

main()
