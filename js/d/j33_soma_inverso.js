

/*
33. Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso.
(Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).
*/

import { question } from "readline-sync"

function main() {
  // Entrada
  // const number = 142
  const number = Number(question('Digite um valor entre 100 e 999 ---> '))

  // Processamento
  const title = '\n===== RELATÓRIO ====='
  const result = verificar_centena_ate_unidade(number, title)

  // Saída
  display(result)
}

function verificar_centena_ate_unidade(num_tres_digitos, rotulo) {
  const hundred = Math.floor(num_tres_digitos / 100)
  const remainings = num_tres_digitos % 100 
  const ten = Math.floor(remainings / 10)
  const unit = remainings % 10
  const numbersReversed = Number(unit + '' + ten + '' + hundred)
  const sum = num_tres_digitos + numbersReversed

  const report = `
  ${rotulo}
  Número alvo                     || ${num_tres_digitos}
  Inverso                         || ${numbersReversed}
  Soma entre número e seu inverso || ${sum}
  `
  return report
}

function display(content) {
  console.log(content)
}

main()
