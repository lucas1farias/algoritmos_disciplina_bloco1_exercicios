

import { question } from "readline-sync";

function main() {
    saltar_linha()
    const rotulo_serasa_v1 = '========== SERASA (versão 1) =========='
    const rotulo_serasa_v2 = '========== SERASA (versão 2) =========='
    const texto_generico = 'Informe sua porcentagem (0 a 100) no item '

    exibir(rotulo_serasa_v1)
    const serasa_um_score_itemA = entrada_num(texto_repetido(texto_generico, 'A ---> '))
    const serasa_um_score_itemB = entrada_num(texto_repetido(texto_generico, 'B ---> '))
    const serasa_um_score_itemC = entrada_num(texto_repetido(texto_generico, 'C ---> '))

    exibir(rotulo_serasa_v2)
    const serasa_dois_score_itemA = entrada_num(texto_repetido(texto_generico, 'A ---> '))
    const serasa_dois_score_itemB = entrada_num(texto_repetido(texto_generico, 'B ---> '))
    const serasa_dois_score_itemC = entrada_num(texto_repetido(texto_generico, 'C ---> '))

    const serasa_score_v1 = serasa_calculadora(serasa_um_score_itemA, serasa_um_score_itemB, serasa_um_score_itemC, 1)
    const serasa_score_v2 = serasa_calculadora(serasa_dois_score_itemA, serasa_dois_score_itemB, serasa_dois_score_itemC, 2)
    const cliente_classificacao_serase_v1 = classificacao_serasa(serasa_score_v1, 1)
    const cliente_classificacao_serase_v2 = classificacao_serasa(serasa_score_v2, 2)

    exibir('\n========== RELATÓRIO ==========')
    exibir(`Pontuação do cliente no SERASA (v1)     || ${serasa_score_v1}`)
    exibir(`Pontuação do cliente no SERASA (v2)     || ${serasa_score_v2}`)
    exibir(`Classificação do cliente no SERASA (v1) || ${cliente_classificacao_serase_v1}`)
    exibir(`Classificação do cliente no SERASA (v2) || ${cliente_classificacao_serase_v2}`)
    saltar_linha()
}

function texto_repetido(texto, diferente) {
    return texto + diferente
}

function serasa_calculadora(itemA, itemB, itemC, versao) {
    const item_a_v1 = 260
    const item_b_v1 = 570
    const item_c_v1 = 170

    const item_a_v2 = 620
    const item_b_v2 = 190
    const item_c_v2 = 190

    let fracao_do_itemA = itemA / 100
    let fracao_do_itemB = itemB / 100
    let fracao_do_itemC = itemC / 100
    let pontuacao = 0

    if (versao == 1) {
        pontuacao = (item_a_v1 * fracao_do_itemA) + (item_b_v1 * fracao_do_itemB) + (item_c_v1 * fracao_do_itemC)
    } 
    else {
        pontuacao = (item_a_v2 * fracao_do_itemA) + (item_b_v2 * fracao_do_itemB) + (item_c_v2 * fracao_do_itemC)
    }
    return Math.floor(pontuacao)
}

function classificacao_serasa(score_v1, versao) {
    let status = ''

    let score_apropriado = !isNaN(score_v1) && score_v1 >= 0 

    if (versao === 1) {
        if (score_apropriado) {
            if (score_v1 <= 400) {
                status = 'Baixo'
            } else if (score_v1 <= 600) {
                status = 'Regular'
            } else if (score_v1 <= 800) {
                status = 'Bom'
            } else if (score_v1 <= 1000) {
                status = 'Muito bom'
            }
        }
    } else {
        if (score_apropriado) {
            if (score_v1 <= 300) {
                status = 'Baixo'
            } else if (score_v1 <= 500) {
                status = 'Regular'
            } else if (score_v1 <= 700) {
                status = 'Bom'
            } else if (score_v1 <= 1000) {
                status = 'Muito bom'
            }
        }
    }
    
    return status
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
