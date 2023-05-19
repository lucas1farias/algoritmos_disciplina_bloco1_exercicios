

import { question } from "readline-sync";

function main() {
    saltar_linha()
    const n_compras = entrada_num('Número de compras -> ')
    const cliente = entrada_texto('Nome do cliente -> ')
    let valor_compra = 0 
    
    let soma_vendas = 0 
    const cashback_5 = 250
    const cashback_7 = 500
    const cashback_8 = 750
    let cashback = 0 
    const percentual_menor = 5, percentual_pequeno = 7, percentual_medio = 8, percentual_generoso = 25
    let percentual_investido = 0
    
    let menor_compra = Infinity
    let maior_compra = -Infinity
    let contador = 0
    
    while (contador < n_compras) {
        valor_compra = entrada_num('Valor da compra -> ')
        
        soma_vendas = soma_vendas + valor_compra

        if (valor_compra < menor_compra) {
            menor_compra = valor_compra
        } if (valor_compra > maior_compra) {
            maior_compra = valor_compra
        }

        contador++
    }

    if (soma_vendas <= cashback_5) {
        cashback = (soma_vendas * 5/100)
        percentual_investido = percentual_menor
    } else if (soma_vendas <= cashback_7) {
        cashback = (soma_vendas * 7/100)
        percentual_investido = percentual_pequeno
    } else if (soma_vendas <= cashback_8) {
        cashback = (soma_vendas * 8/100)
        percentual_investido = percentual_medio
    } else {
        cashback = (cashback_5 * 5/100) + (cashback_7 * 7/100) + (cashback_8 * 8/100) + (soma_vendas * 25/100)
        percentual_investido = percentual_menor + percentual_pequeno + percentual_medio + percentual_generoso
    }

    const valor_recebido = soma_vendas - cashback
    
    exibir('\n========== RELATÓRIO ==========')
    exibir(`Cliente                          || ${cliente}`)
    exibir(`Soma das vendas                  || R$ ${soma_vendas}`)
    exibir(`Cashback distribuido             || R$ ${cashback}`)
    exibir(`Valor recebido                   || R$ ${valor_recebido}`)
    exibir(`Percentual investido em cashback || R$ ${percentual_investido}%`)
    exibir(`Compra de menor valor            || R$ ${menor_compra}`)
    exibir(`Compra de maior valor            || R$ ${maior_compra}`)
    saltar_linha()
}

function exibir(texto) {
    console.log(texto)
}

function saltar_linha() {
    exibir('\n')
}

function entrada_texto(instrucao) {
    return question(instrucao) 
}

function entrada_num(instrucao) {
    return Number(question(instrucao))
}

main()
