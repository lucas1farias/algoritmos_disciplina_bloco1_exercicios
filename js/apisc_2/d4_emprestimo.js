

import { question } from "readline-sync"

function main() {
    const emprestimo_aprovado = '========== STATUS do Empréstimo: Aprovado =========='
    const emprestimo_reprovado = '========== STATUS do Empréstimo: Reprovado =========='
    let alerta = ''
    
    saltar_linha('\n')
    const renda_mensal = entrada_num('Informe seu salário ---> ')
    const emprestimo = entrada_num('Informe a quantia desejada do empréstimo ---> ')   
    const qtd_parcelas = entrada_num('Informe a quantidade de parcelas ---> ')     

    const emprestimo_apropriado = verificar_emprestimo_valido(emprestimo)
    const n_parcelas_apropriada = verificar_parcelamento_valido(qtd_parcelas)
    const imposto_iof = calcular_imposto_iof(emprestimo, qtd_parcelas)
    const taxa_selic = calcular_taxa_selic(qtd_parcelas)
    const valor_parcela_parcial = calcular_parcelas_parciais(emprestimo, qtd_parcelas)
    const taxa_juros = calcular_juros_compostos(valor_parcela_parcial, taxa_selic, qtd_parcelas) 
    const total_a_pagar = calcular_montante(emprestimo, taxa_juros) + imposto_iof
    const parcela_mensal = relatorio_parcela(qtd_parcelas, total_a_pagar)
    const parcela_mensal_ilustrativa = relatorio_parcela(qtd_parcelas, total_a_pagar, true)
    const perda_salarial_mensal = verificar_perda(emprestimo, parcela_mensal)
    const parcela_apropriada = verificar_valor_parcela_apropriado(renda_mensal, parcela_mensal)

    exibir('\n========== RELATÓRIO ==========')
    exibir(`Valor pedido                 || R$ ${emprestimo}`)
    exibir(`Valor do imposto IOF         || R$ ${imposto_iof.toFixed(2)}`)
    exibir(`Taxa selic                   || ${taxa_selic.toFixed(2)}%`)
    exibir(`Valor dos juros a pagar      || R$ ${taxa_juros}`)
    exibir(`Total a pagar                || R$ ${total_a_pagar}`)
    exibir(`Valor da parcela mensal      || R$ ${parcela_mensal_ilustrativa}`)
    exibir(`Salário perdido mensalmente  || ${perda_salarial_mensal}%`)

    const salario_insuficiente =  (renda_mensal * 40/100) < parcela_mensal
    
    if (parcela_apropriada && emprestimo_apropriado && n_parcelas_apropriada) {
        exibir(emprestimo_aprovado)
    } if (!emprestimo_apropriado) {
        alerta = 'O empréstimo não deve ser menor que 1 salário mínimo'
        exibir(emprestimo_reprovado)
        exibir(alerta)
    } if (!n_parcelas_apropriada) {
        alerta = 'O empréstimo deve ter entre 2 até 24 parcelas'
        exibir(emprestimo_reprovado)
        exibir(alerta)
    } if (salario_insuficiente) {
        alerta = `40% do seu salário não supera a mensalidade: ${renda_mensal * 40/100}/${parcela_mensal}`
        exibir(emprestimo_reprovado)
        exibir(alerta)
    }
    saltar_linha()
}

function verificar_emprestimo_valido(valor_emprestimo) {
    return valor_emprestimo >= 1302
}

function verificar_parcelamento_valido(n_parcelas) {
    return n_parcelas >= 2 && n_parcelas <= 24 
}

function verificar_valor_parcela_apropriado(salario, valor_parcela) {
    let parte_salario_40 = salario * 40/100
    return parte_salario_40 > valor_parcela 
}

function calcular_imposto_iof(emprestimo_valor, n_parcelas) {
    const primeira_taxa = emprestimo_valor * (0.38 / 100)
    const segunda_taxa = 0.0082 * (30 * n_parcelas)
    return primeira_taxa + segunda_taxa
}

function calcular_taxa_selic(n_parcelas) {
    let selic = 13.75 / 100

    if (n_parcelas <= 6) {
        return selic * (50/100)
    } 
    else if (n_parcelas <= 12) {
        return selic * (75/100)
    } 
    else if (n_parcelas <= 18) {
        return selic * 1
    } else {
        return selic * (130/100)
    }
}

function calcular_parcelas_parciais(valor_emprestimo, n_parcelas) {
    return Number((valor_emprestimo / n_parcelas).toFixed(2))
}

function calcular_juros_compostos(valor_parcela, taxa_juros, n_parcelas) {
    let montante = valor_parcela * Math.pow(1 + taxa_juros, n_parcelas)
    return Number(montante.toFixed(2))
}

function calcular_montante(valor_emprestimo, valor_juros) {
    return valor_emprestimo + valor_juros
}

function relatorio_parcela(n_parcelas, total, ilustrar=false) {
    if (ilustrar) {
        return `${n_parcelas}x parcelas de R$ ${(total / n_parcelas).toFixed(2)}`
    } else {
        return Number((total / n_parcelas).toFixed(2))
    }
}

function verificar_perda(valor_renda, valor_juros) {
    let fracao_da_renda_perdida = (valor_juros / valor_renda) * 100
    return Number(fracao_da_renda_perdida.toFixed(2))
}

function exibir(texto) {
    console.log(texto)
}

function saltar_linha() {
    exibir('\n')
}

function entrada_num(instrucao) {
    return Number(question(instrucao))
}

main()
