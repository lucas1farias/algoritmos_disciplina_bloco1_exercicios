

import { question } from "readline-sync"

function main() {
  let entrada = undefined
  let vetor_main = []
  let vetor_secundario = []
  
  while (entrada != 0) {
    entrada = entrada_num(menu())

    if (entrada === 0) {
      console.log(mensagens())
      console.log('========== FIM ==========')
    }
    if (entrada === 1) {
      vetor_main = novo_vetor()
      console.log(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 2) {
      vetor_main = novo_vetor_um_por_um()
      procedimento_padrao()
    }
    else if (entrada === 3) {
      vetor_main = vetor_aleatorio()
      procedimento_padrao()
    }
    else if (entrada === 4) {
      if (tamanho_colecao(vetor_main) === 0) {
        console.log('========== AVISO ==========\nO vetor está vazio')
      } else {
        console.log(`========== VETOR CRIADO ==========`)
        console.log(vetor_main)
      }
      procedimento_padrao()
    }
    else if (entrada === 5) {
      vetor_main = cada_indice_vetor_elevado(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 6) {
      console.log(contar(vetor_main))
      procedimento_padrao()
    }
    else if (entrada === 7) {
      const negativos = filtrar(criterio_eh_negativo, vetor_main)
      const positivos = filtrar(criterio_eh_positivo, vetor_main)
      const resultado = `
      ========== SOMATÓRIOS ==========
      Todos os valores do vetor:   ${vetor_main}
      Somatório:                   ${reduzir(criterio_somar, vetor_main, 0)}
      Todos os negativos do vetor: ${negativos}
      Somatório:                   ${reduzir(criterio_somar, negativos, 0)}
      Todos os positivos do vetor: ${positivos}
      Somatório:                   ${reduzir(criterio_somar, positivos, 0)}
      `
      console.log(resultado)
      procedimento_padrao()
    }
    else if (entrada === 8) {
      const media_todos_indices = reduzir(criterio_somar, vetor_main, 0) / tamanho_colecao(vetor_main)
      const todos_positivos = filtrar(criterio_eh_positivo, vetor_main)
      const media_positivos = reduzir(criterio_somar, todos_positivos, 0) / tamanho_colecao(todos_positivos)
      const todos_negativos = filtrar(criterio_eh_negativo, vetor_main)
      const media_negativos = reduzir(criterio_somar, todos_negativos, 0) / tamanho_colecao(todos_negativos)
      const medias = `
      ========== MEDIAS ==========
      Vetor:                              ${vetor_main}
      Média de todos os números no vetor: ${media_todos_indices}
      Todos os números +:                 ${todos_positivos}
      Média de todos os números +:        ${media_positivos}
      Todos os números -:                 ${todos_negativos}
      Média de todos os números -:        ${media_negativos}
      `
      const mediana_todos = mediana(ordenar(criterio_maior_igual, vetor_main, 0, tamanho_colecao(vetor_main) - 1))
      const mediana_positivos = mediana(ordenar(criterio_maior_igual, todos_positivos, 0, tamanho_colecao(todos_positivos) - 1))
      const mediana_negativos = mediana(ordenar(criterio_maior_igual, todos_negativos, 0, tamanho_colecao(todos_negativos) - 1))
      const medianas = `
      ========== MEDIANAS ==========
      Vetor:                                  ${vetor_main}
      Mediana de todos os números no vetor:   ${mediana_todos}
      Vetor dos +:                            ${ordenar(criterio_maior_igual, todos_positivos, 0, tamanho_colecao(todos_positivos) - 1)}
      Mediana de todos os números + no vetor: ${mediana_positivos}
      Vetor dos -:                            ${ordenar(criterio_maior_igual, todos_negativos, 0, tamanho_colecao(todos_negativos) - 1)}                          
      Mediana de todos os números - no vetor: ${mediana_negativos}
      `
      console.log(medias)
      console.log(medianas)
      procedimento_padrao()
    }
    else if (entrada === 9) {
      vetor_main = ordenar(criterio_maior_igual, vetor_main, 0, tamanho_colecao(vetor_main) - 1)
      const maior_valor = indice_especifico(vetor_main, tamanho_colecao(vetor_main) - 1)
      const menor_valor = indice_especifico(vetor_main, 0)
      const resultado = `
      ========== MAIOR E MENOR =========
      Vetor: ${vetor_main}
      Maior: ${maior_valor}
      Menor: ${menor_valor}
      `
      console.log(resultado)
      procedimento_padrao()
    }
    else if (entrada === 10) {
      sortear_positivo_negativo(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 11) {
      grupos_e_tamanhos()
      procedimento_padrao()
    }
    else if (entrada === 12) {
      vetor_secundario = vetor_aleatorio_v2(vetor_main)
      const resultado = `
      ========== COMPARAÇÃO ENTRE VETORES ==========
      Vetor vigente: ${vetor_main}
      Vetor secundário: ${vetor_secundario}
      ${similaridade(vetor_secundario, vetor_main, 'Os vetores são iguais', 'Os vetores são diferentes')}
      `
      console.log(resultado)
      procedimento_padrao()
    }
    else if (entrada === 13) {
      const maiores_valores = vetor_rank_maiores(vetor_main)
      const resultado = `
      ========== MAIORES NÚMEROS DO VETOR =========
      Vetor: ${vetor_main}`
      console.log(resultado)
      console.log(maiores_valores)
      procedimento_padrao()
    }
    else if (entrada === 14) {
      const menores_valores = vetor_rank_menores(vetor_main)
      const resultado = `
      ========== MENORES NÚMEROS DO VETOR =========
      Vetor: ${vetor_main}`
      console.log(resultado)
      console.log(menores_valores)
      procedimento_padrao()
    }
    else if (entrada === 15) {
      // vetor_main = valores_acima_media(vetor_main)
      const media = reduzir(criterio_somar, vetor_main, 0) / tamanho_colecao(vetor_main)
      const abaixo_da_media = filtrar_v2(criterio_menor, vetor_main, media)
      const acima_da_media = filtrar_v2(criterio_maior, vetor_main, media)
      const resultado = `
      ========== VALORES ACIMA E ABAIXO DA MÈDIA =========
      Vetor:                   ${vetor_main}
      Média:                   ${media}
      Valores abaixo da média: ${abaixo_da_media}
      Valores acima da média:  ${acima_da_media}`
      console.log(resultado)
      procedimento_padrao()
    }
    else if (entrada === 16) {
      // 16. Média dos números positivos múltiplos de dois + produto acumulado dos números negativos pares / 2
      const multiplos_dois = filtrar_v2(criterio_eh_multiplo, vetor_main, 2)
      const multiplos_dois_media = reduzir(criterio_somar, multiplos_dois, 0) / tamanho_colecao(multiplos_dois)
      const pares_negativos = filtrar(criterio_eh_par_negativo, vetor_main)
      const pares_negativos_metade = mapear_v2(criterio_reducao_metade, pares_negativos, 2)
      const pares_negativos_metade_produto_acumulado = reduzir(criterio_multiplicar, pares_negativos_metade, 1)
      const resultado = multiplos_dois_media + pares_negativos_metade_produto_acumulado
      const relatorio = `
      ========== RELATÓRIO ==========
      Vetor:                                                ${vetor_main}
      Números positivos multiplos de 2 encontrados:         ${multiplos_dois}
      Média dos pares multiplos de 2 encontrados:           ${multiplos_dois_media}
      Pares negativos:                                      ${pares_negativos}
      Pares negativos / 2:                                  ${pares_negativos_metade}
      Produto acumulado dos pares negativos:                ${pares_negativos_metade_produto_acumulado}
      Média dos pares múltiplos de 2 + pares negativos / 2: ${resultado}
      `
      console.log(relatorio)
      procedimento_padrao()
    }
    else if (entrada === 17) {
      vetor_main = modificar_vetor_via_criterios(vetor_main)
      procedimento_padrao()
    }
    else if (entrada === 18) {
      vetor_main = modificar_vetor_via_criterios(vetor_main, false)
      procedimento_padrao()
    }
    else if (entrada === 19) {
      const m = entrada_num('Informe um valor M para procurar seus múltiplos >>> ')
      const n = entrada_num('Informe um valor N para procurar seus múltiplos >>> ')
      const multiplos_m = filtrar_v2(criterio_eh_multiplo, vetor_main, m)
      const multiplos_n = filtrar_v2(criterio_eh_multiplo, vetor_main, n)
      const multiplos_m_n = diferentes(string_numerica_p_lista(fatiar, multiplos_m + ',' + multiplos_n + ',', ','))
      const resultado = `
      ========== MÚLTIPLOS DE ${m} e ${n} ==========
      Vetor:             ${vetor_main}
      Múltiplos de ${m}: ${diferentes(multiplos_m)}
      Múltiplos de ${n}: ${diferentes(multiplos_n)}
      Múltiplos de ${m} e ${n}: ${multiplos_m_n}`
      console.log(resultado)
      procedimento_padrao()
    }
  }
}

function entrada_num(txt) {
  return Number(question(txt))
}

function menu() {
  return `
  ========== BEM-VINDO ==========
  0 - Sair
  1 - Gerar vetor com N valores
  2 - Gerar vetor com N valores 1 por 1
  3 - Preencher vetor automaticamente
  4 - Ver valores do vetor
  5 - Elevar valores a potência N
  6 - Contar números (-, 0, +)
  7 - Somar números (todos, -, +)
  8 - Soma media e mediana (todos, +, -)
  9 - Maior e menor valor do vetor
  10 - Sortear dois números: (+, -)
  11 - Grupos e suas quantidades
  12 - Comparar vetor (randômico vs atual)
  13 - Verificar N vetores maiores
  14 - Verificar N vetores menores
  15 - Ver valores acima da média do vetor
  16 - Cálculo complexo
  17 - Ordenar crescente com critérios
  18 - Ordenar decrescente com critérios
  19 - Remover múltiplos de N e M
  >>> `   
}

function limpar_terminal() {
  console.clear()
}

function continuar() {
  return question('\n===== DIGITE ENTER PARA VOLTAR AO MENU =====\n')
}

function procedimento_padrao() {
  continuar()
  limpar_terminal()
}

function vetor_indefinido(qtd_indices) {
  const array = []
  let array_i = 0
  for (let i = 0; i < qtd_indices; i++) {
    array[array_i] = undefined
    array_i++
  }
  return array
}

function tamanho_colecao(colecao) {
  let contador = 0
  for (let i of colecao) {
    contador++
  }
  return contador
}

function indice_especifico(colecao, i) {
  return colecao[i]
}

function n_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min)
}

// Usado em 0
function mensagens() {
  const msgs = [
    '\nFlw parça v_v!', '\nAté a vista :)', '\nA gente se vê *u*',
    '\nJá vai? tá cedo! :(', '\nVolte sempre =)', '\nTamo junto! vlws *_*',
    '\nVazando? beleza u_u!', '\nVocê acabou de entrar e já vai embora u_U?', '\nTchauzinho ToT',
    '\nJá tá indo? que absurdo :x', '\nVolte logo, eim :P', '\nVá pela sombra :D',
    '\nSaindo sem de despedir? ¬¬', '\nRapaz, já vai ?_?', '\nTudo que vai, uma hora volta =P',
  ]
  return msgs[n_aleatorio(0, tamanho_colecao(msgs))]
}

// Usado em 1
function novo_vetor() {
  const entrada = entrada_num('Digite um valor N p/ definir o tamanho do vetor >>> ')
  let vetor_sem_valores = vetor_indefinido(entrada)
  console.log(vetor_sem_valores)
  let vetor = mapear(criterio_igualar, vetor_sem_valores, entrada)
  return vetor
}

// Usado em 2
function novo_vetor_um_por_um() {
  const entrada = entrada_num('Digite qtd. de número que o vetor deve ter >>> ')
  let vetor_a_ser_preenchido = vetor_indefinido(entrada)
  for (let i = 0; i < entrada; i++) {
    let valor_vetor = entrada_num('Digite o valor do vetor atual >>> ')
    vetor_a_ser_preenchido[i] = valor_vetor
  }
  return vetor_a_ser_preenchido
}

// Usado em 3
function vetor_aleatorio() {
  const tamanho_vetor = entrada_num('Determine o valor do TAMANHO do vetor >>> ')
  const valor_inicial = entrada_num('Valor MÍNIMO anexado ao vetor >>> ')
  const valor_limite = entrada_num('Valor MÁXIMO anexado ao vetor (valor não inclusivo, ex.: se 4, então usar 5) >>> ')
  let vetor_secundario = vetor_indefinido(tamanho_vetor)
  for (let i = 0; i < tamanho_vetor; i++) {
    vetor_secundario[i] = n_aleatorio(valor_inicial, valor_limite)
  }
  return vetor_secundario
}

// Usado em 5
function cada_indice_vetor_elevado(vetor) {
  const valor_potencia = entrada_num('Digite o valor da potência que elevará cada índice do vetor >>> ')
  const novo_vetor = mapear(criterio_elevar_potencia, vetor, valor_potencia)
  return novo_vetor
}

// Usado em 6 (função do tipo agregação)
function contar(vetor) {
  let negativos = 0
  let nulos = 0
  let positivos = 0
  for (let i of vetor) {
    i < 0 ? negativos++ : null
    i === 0 ? nulos++ : null
    i > 0 ? positivos++ : null
  }
  return `
  ========== QUANTIDADES DOS NÚMEROS ==========
  Vetor:             ${vetor}
  Número negativos:  ${negativos}
  Números neutros:   ${nulos}
  Números positivos: ${positivos}
  `
}

// Usado em 8
function mediana(colecao) {
  let i = 0
  if (tamanho_colecao_eh_par(colecao)) {
    i = obter_indice_central_se_par(colecao)
    const indiceA = indice_especifico(colecao, i)
    const indiceB = indice_especifico(colecao, i - 1)
    const resultado = (indiceA + indiceB) / 2
    return resultado
  } else {
    i = obter_indice_central_se_impar(colecao)
    return colecao[i]
  }
}

function tamanho_colecao_eh_par(colecao) {
  return tamanho_colecao(colecao) % 2 === 0
}

function obter_indice_central_se_par(colecao) {
  return tamanho_colecao(colecao) / 2
}

function obter_indice_central_se_impar(colecao) {
  return Math.floor(tamanho_colecao(colecao) / 2)
}

// Usado em 10
function sortear_positivo_negativo(colecao) {
  let n1 = -1
  let n2 = 1
  let positivos = 0
  let negativos = 0
  let relatorio = '\n========== NÚMEROS =========='
  relatorio += `\nVetor: ${colecao}`
  
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    colecao[i] > 0 ? positivos++ : null
    colecao[i] < 0 ? negativos++ : null
  }

  if (positivos == 0) {
    relatorio += `\nNúmero positivo sorteado: não há números positivos no vetor`
  }
  if (negativos == 0) {
    relatorio += `\nNúmero negativo sorteado: não há números negativos no vetor`
  }
  // Achar os números (+, -) se os dois estiverem na coleção
  if (positivos !== 0 && negativos !== 0) {
    while (n1 <= 0) {
      n1 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
    }
    relatorio += `\nNúmero positivo sorteado: ${n1}`
    while (n2 >= 0) {
      n2 = indice_especifico(colecao, n_aleatorio(0, tamanho_colecao(colecao) - 1))
    }
    relatorio += `\nNúmero negativo sorteado: ${n2}`
  }
  console.log(relatorio)
  procedimento_padrao()
}

// Usado no 11
function grupos_e_tamanhos() {
  let range_valores = 0
  let tamanhos = []
  let indice = 0
  let partida = 0
  const qtd_grupos = entrada_num('Informe quantos grupos devem ser criados >>> ')
  
  for (let i = 0; i < qtd_grupos; i++) {
    const tamanho = entrada_num(`Informe a tamanho do grupo ${i + 1} >>> `)
    range_valores += tamanho
    tamanhos[indice] = tamanho
    indice++
    
    let array_principal = []
    let array_principal_indice = 0
    for (let i = partida; i < range_valores; i++) {
      array_principal[array_principal_indice] = i
      array_principal_indice++
    }
    array_principal = embaralhar(array_principal, 0)
    console.log(array_principal)
    array_principal = []
    array_principal_indice = 0
    partida = range_valores
  }
}

function embaralhar(colecao, a) {
  let motor = 0
  while (motor < tamanho_colecao(colecao)) {
    let pos_inicial = colecao[a]
    let i = n_aleatorio(0, tamanho_colecao(colecao))
    colecao[a] = colecao[i]
    colecao[i] = pos_inicial
    motor++
  }
  return colecao
}

// Usado em 12
function vetor_aleatorio_v2(vetor) {
  let vetor_secundario = vetor_indefinido(tamanho_colecao(vetor))
  for (let i = 0; i < tamanho_colecao(vetor); i++) {
    vetor_secundario[i] = n_aleatorio(0, tamanho_colecao(vetor))
  }
  return vetor_secundario
}

// Usado em 12
function similaridade(menor, maior, msg, msg_erro) {
  let contador = 0
  for (let i = 0; i < tamanho_colecao(maior); i++) {
    maior[i] === menor[i] ? contador++ : null
  }
  return contador === tamanho_colecao(menor) ? msg : msg_erro
}

// Usado em 13
function vetor_rank_maiores(vetor) {
  const qtd_nums_rank = entrada_num('Quantidade de números MAIORES formam o rank? >>> ')
  let vetor_ordenado = ordenar(criterio_menor_igual, vetor, 0, tamanho_colecao(vetor) - 1)
  const array = []
  let array_i = 0
  for (let i = 0; i < qtd_nums_rank; i++) {
    array[array_i] = vetor_ordenado[i]
    array_i++
  }
  return array
}

// Usado em 14
function vetor_rank_menores(vetor) {
  const qtd_nums_rank = entrada_num('Quantos números MENORES formam o rank? >>> ')
  let vetor_ordenado = ordenar(criterio_maior_igual, vetor, 0, tamanho_colecao(vetor) - 1)
  const array = []
  let array_i = 0
  for (let i = 0; i < qtd_nums_rank; i++) {
    array[array_i] = vetor_ordenado[i]
    array_i++
  }
  return array
}

// Usado em 17 e 18
function modificar_vetor_via_criterios(vetor, crescente=true) {
  const menu = `
  ========== MENU ==========
  QUAL O CRITÉRIO DE ORDENAMENTO?
  1 - Ordenar todos sem filtrar
  2 - Ordenar filtrando os pares
  3 - Ordenar filtrando os ímpares 
  4 - Ordenar filtrando os positivos
  5 - Ordenar filtrando os negativos
  6 - Ordenar por múltiplo
  >>> `

  if (crescente) {
    const criterio = entrada_num(menu)

    if (criterio === 1) {
      const antes = vetor
      vetor = ordenar(criterio_maior_igual, vetor, 0, tamanho_colecao(vetor) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    } 
    else if (criterio === 2) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_par, vetor)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS PARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 3) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_impar, vetor)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS ÍMPARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 4) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_positivo, vetor)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS POSITIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 5) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_negativo, vetor)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO CRESCENTE COM OS NEGATIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 6) {
      const multiplo = entrada_num('Informe o multiplo a ser comparado >>> ')
      const antes = vetor
      const vetor_filtrado = filtrar_v2(criterio_eh_multiplo, vetor, multiplo)
      vetor = ordenar(criterio_maior_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log(`\n========== VETOR ORDENADO CRESCENTE COM OS MÚLTIPLOS DE ${multiplo} ==========`)
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
  }
  else {
    const criterio = entrada_num(menu)

    if (criterio === 1) {
      const antes = vetor
      vetor = ordenar(criterio_menor_igual, vetor, 0, tamanho_colecao(vetor) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    } 
    else if (criterio === 2) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_par, vetor)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS PARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 3) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_impar, vetor)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS ÍMPARES ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 4) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_positivo, vetor)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS POSITIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 5) {
      const antes = vetor
      const vetor_filtrado = filtrar(criterio_eh_negativo, vetor)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log('\n========== VETOR ORDENADO DECRESCENTE COM OS NEGATIVOS ==========')
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
    else if (criterio === 6) {
      const multiplo = entrada_num('Informe o multiplo a ser comparado >>> ')
      const antes = vetor
      const vetor_filtrado = filtrar_v2(criterio_eh_multiplo, vetor, multiplo)
      vetor = ordenar(criterio_menor_igual, vetor_filtrado, 0, tamanho_colecao(vetor_filtrado) - 1)
      console.log(`\n========== VETOR ORDENADO DECRESCENTE COM OS MÚLTIPLOS DE ${multiplo} ==========`)
      console.log(`ANTES: ${antes}`)
      console.log(`DEPOIS: ${vetor}`)
    }
  }
} 

// Usado em 19
function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let e = 0; e < tamanho_colecao(colecao); e++) {
    let dif = true
    for (let i = 0; i < e; i++) {
      if (colecao[i] === colecao[e]) {
        dif = false
        break
      }
    }
    if (dif) {
      array[array_i] = colecao[e]
      array_i++
    }
  }
  return array
}

// Usado em 19
function string_numerica_p_lista(criterio, colecao, separador) {
  const array = []
  let pos = 0
  let localizador = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (colecao[i] === separador) {
      array[pos] = Number(criterio(colecao, localizador, i - 1))
      localizador = i + 1
      pos++
    }
  }
  return array
}

// Usado em 19 (similar ao slice)
function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

// ---------------------------------------------------- QUICKSORT ----------------------------------------------------
function realocar(colecao, b, a) {
  const pos_inicial = colecao[a]
  colecao[a] = colecao[b]
  colecao[b] = pos_inicial
}

function particionar(criterio, colecao, esquerda, direita) {
  const ref = colecao[direita]
  let menor_pos_nova = esquerda - 1
  for (let menor_pos_antiga = esquerda; menor_pos_antiga < direita; menor_pos_antiga++) {
    if (criterio(colecao[menor_pos_antiga], ref)) {
      menor_pos_nova++
      realocar(colecao, menor_pos_antiga, menor_pos_nova)
    }
  }
  realocar(colecao, direita, menor_pos_nova + 1)
  return menor_pos_nova + 1
}

function ordenar(criterio, colecao, esquerda, direita) {
  if (esquerda < direita) {
    const ref_anterior = particionar(criterio, colecao, esquerda, direita)
    ordenar(criterio, colecao, esquerda, ref_anterior - 1)
    ordenar(criterio, colecao, ref_anterior + 1, direita)
  }
  return colecao
}

function criterio_maior_igual(a, b) {
  return a <= b
}

function criterio_menor_igual(a, b) {
  return a >= b
}

// --------------------------------------------- CRITÉRIOS DE MAPEAMENTO ---------------------------------------------
function criterio_maior(a, b) {
  return a > b
}

function criterio_menor(a, b) {
  return a < b
}

function criterio_igualar(i, b) {
  i = b
  return i
}

function criterio_elevar_potencia(i, pot) {
  return i ** pot
}

function criterio_reducao_metade(i, ref) {
  return i / ref
}

// --------------------------------------------- CRITÉRIOS DE FILTRAGEM ---------------------------------------------
function criterio_eh_impar(i) {
  return i % 2 !== 0
}

function criterio_eh_multiplo(indice, multiplo) {
  /*
  indice: representa um índice de um vetor, onde esse valor é percorrido de 1 até ele mesmo

  Os dados são colocados num array
  Este array é percorrido e, se nele existe "indice" incluso, então: "indice" é múltiplo de "multiplo"
  Ex: vetor = [11]
  Na função: indice = 11 ... multiplo = 6 (valor fixo)
  Temos "multiplo" multiplicando a progressão de "indice" até ele mesmo
  OPERAÇÃO: [ multiplo * i ], ou seja: (6 * 1), (6 * 2) ... (6 * 11)
  array = [todos os valores da OPERAÇÃO]
  Se "array" possui um valor igual a "indice", então "indice" é múltiplo de "multiplo"
  Pois: "valor" * "multiplo" = "indice"
  11 não é múltiplo de 6, pois nenhum valor da progressão de 1 até 11 * 6, que gera o valor 11
  12 é múltiplo de 6, pois há um valor da progressão de 1 até 11 * 6, que gera o valor 12: neste caso, (6 * 2 = 12)
  */
  const array = []
  let array_indice = 0
  // Para "indice" positivo
  if (indice > 0) {
    for (let i = 1; i <= indice; i++) {
      array[array_indice] = multiplo * i
      array_indice++
    }
  }
  // Para "indice" negativo
  // Se não for "-i", os valores (- * -) se tornam positivos, nunca achando o múltiplo negativo
  else if (indice < 0) {
    for (let i = indice; i < 0; i++) {
      array[array_indice] = multiplo * -i
      array_indice++
    }
  }
  
  for (let i = 0; i < tamanho_colecao(array); i++) {
    if (array[i] === indice) {
      return true
    }
  }
  return false
}

function criterio_eh_negativo(i) {
  return i < 0
}

function criterio_eh_par(i) {
  return i % 2 === 0 && i !== 0
}

function criterio_eh_par_negativo(i) {
  return i < 0 && i % 2 === 0
}

function criterio_eh_positivo(i) {
  return i > 0
}

// ---------------------------------------------- CRITÉRIOS DE REDUÇÃO ----------------------------------------------
function criterio_multiplicar(a, b) {
  return a * b
}

function criterio_somar(a, b) {
  return a + b
}

// ----------------------------------------------- PRINCIPAIS FUNÇÕES -----------------------------------------------
function filtrar(criterio, colecao) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i])) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

// Caso seja preciso fazer uma comparação
function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[indice] = colecao[i]
      indice++
    }
  }
  return array
}

// Altera a coleção passada como parâmetro
function mapear(criterio, colecao, ref) {
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    colecao[i] = criterio(colecao[i], ref)
  }
  return colecao
}

// Cria uma nova coleção, ao invés de alterar a coleção que é passada como parâmetro
function mapear_v2(criterio, colecao, ref) {
  let array = []
  let indice = 0
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    array[indice] = criterio(colecao[i], ref)
    indice++
  }
  return array
}

function reduzir(criterio, colecao, vi) {
  let acumulador = vi
  for (let i = 0; i < tamanho_colecao(colecao); i++) {
    acumulador = criterio(acumulador, colecao[i])
  }
  return acumulador
}

main()
