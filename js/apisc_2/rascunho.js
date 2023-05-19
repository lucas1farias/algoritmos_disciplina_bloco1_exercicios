

/*
Uma companhia financeira debita um juro de 0.85% diário sobre o saldo não pago de um empréstimo.
Com um empréstimo de R$ 3.000,00, um pagamento de R$ 200,00 é feito todo dia útil. Escreva um
algoritmo que calcule quantos dias úteis são necessários para se concluir o pagamento do empréstimo
*/

function main() {
    let emprestimo = 7000
    let pagamento_diario = 200
    let haver_divida = emprestimo > 0 
    let juros = 0
    let emprestimo_sem_juros = 0
    let emprestimo_com_juros = 0

    const sabado = 6
    const domingo = 7
    let dia_atual = 1
    let dia_semana = 1
    
    while (haver_divida) {
        juros = add_juros(emprestimo, 0.85)
        emprestimo_sem_juros = emprestimo
        emprestimo = num_decimal(debitar(emprestimo_sem_juros + juros, pagamento_diario), 2) 
        emprestimo_com_juros = num_decimal(emprestimo_sem_juros + juros, 2)
        
        exibir(`Dia ${dia_atual} || { juros: R$ ${juros} } { empréstimo: R$ ${emprestimo_sem_juros} } { empréstimo + juros: ${emprestimo_com_juros}}`)
        
        if (emprestimo < 0) {
          break
        }
        
        let dia_util = !dia_nao_util(dia_semana, sabado + 1) || !dia_nao_util(dia_semana, domingo + 1)
        
        if (dia_nao_util(dia_semana, domingo + 1)) {
          dia_semana = 0
        } if (dia_util) {
          dia_atual++
        }

        dia_semana++ 
    }
    exibir(`Dias úteis levados para terminar a empréstimo: ${dia_atual}`)
    exibir(`Remanescente extra a pagar após quitação: ${num_decimal(emprestimo, 2)}`)
}

function debitar(valor_alvo, valor_debito) {
  return valor_alvo -= valor_debito
}

function add_juros(valor_alvo, taxa) {
    return num_decimal(valor_alvo * (taxa/100), 2)
}

function num_decimal(valor, casas) {
  return Number(valor.toFixed(casas))
}

function dia_nao_util(valor_dia, valor_dia_nao_util) {
  return valor_dia == valor_dia_nao_util
}

function exibir(conteudo) {
  console.log(conteudo)
}

main()
// console.log('js')