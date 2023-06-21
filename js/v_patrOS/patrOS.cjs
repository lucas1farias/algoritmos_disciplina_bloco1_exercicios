

const { ulid } = require('ulid')
const entrada_terminal = require('readline-sync')
const arquivo = require('fs')
const ano_atual = Number(nova_lista(fatiar, `${new Date}`, ' ')[3])
let operacao = 0

let p = '        '
let tabela_alocacao = alocacao()
let tabela_dados = []
const chaves_montadora = ['id', 'nome', 'pais','ano_fundacao']
const chaves_modelos = ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
const chaves_veiculos = ['id', 'modelo_veiculo', 'cor', 'ano_fabricacao', 'ano_modelo', 'valor', 'placa']

function main() {
  /* 1. Ao iniciar o programa, pedir ao usuário: seu nome e cargo. (Ex.: "João", "Gerente") */
  let pessoa = inicializar_op_1('Informe seu NOME >>> ')
  let cargo = inicializar_op_1('Informe seu CARGO >>> ')
  tabela_alocacao += `A${p} || ${pessoa}\n`
  tabela_alocacao += `  B${p} || ${cargo}\n`
  continuar(tabela_alocacao)

  /* 2. Criar uma lista vazia para botar as montadoras. */
  const montadoras = inicializar_op_2()
  tabela_alocacao += `  C${p} || ${len(montadoras) === 0 ? 'o---o---o---< montadoras' : null}\n`
  continuar(tabela_alocacao)
  
  /* 3. Crie uma montadora A (atributos) */
  const montadora_A = inicializar_op_3(chaves_montadora, [nova_ulid(), 'Arg', 'Argentina', 1966])
  tabela_alocacao += `  I${p} || o---o---o---< montadora_A\n`
  tabela_alocacao += `  J${p} || ${montadora_A['id']}\n`
  tabela_alocacao += `  K${p} || ${montadora_A['nome']}\n`
  tabela_alocacao += `  L${p} || ${montadora_A['pais']}\n`
  tabela_alocacao += `  M${p} || ${montadora_A['ano_fundacao']}\n`
  continuar(tabela_alocacao)

  /* 4. Adicione a montadora A à lista de montadoras do sistema */
  inicializar_op_4(montadoras, montadora_A)
  tabela_alocacao += `  D${p} || I\n`
  continuar(tabela_alocacao)

  /* 5. Adicionar diretamente em "montadoras" mais uma montadora (essa será o que vou chamar de B)*/
  inicializar_op_5(montadoras,  chaves_montadora, [nova_ulid(), 'Bul', 'Bulgaria', 1972])
  tabela_alocacao += `  E${p} || ${montadoras[len(montadoras) - 1]['id']}\n`
  tabela_alocacao += `  F${p} || ${montadoras[len(montadoras) - 1]['nome']}\n`
  tabela_alocacao += `  G${p} || ${montadoras[len(montadoras) - 1]['pais']}\n`
  tabela_alocacao += `  H${p} || ${montadoras[len(montadoras) - 1]['ano_fundacao']}\n`
  continuar(tabela_alocacao)

  /* 6. Crie um modelo de veículo "T" vinculado à montadora B */
  const modelo_T = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_T', montadoras[1], 55000, 2.0, false, true])
  tabela_alocacao += `  N${p} || o---o---o---< modelo_T\n`
  tabela_alocacao += `  O${p} || ${modelo_T['id']}\n`
  tabela_alocacao += `  P${p} || ${modelo_T['nome']}\n`
  tabela_alocacao += `  Q${p} || E F G H\n`  // [montadoras[1] não possui slot, pois não foi criado variável
  tabela_alocacao += `  R${p} || ${modelo_T['valor_referencia']}\n`
  tabela_alocacao += `  S${p} || ${modelo_T['motorizacao']}\n`
  tabela_alocacao += `  T${p} || ${modelo_T['turbo']}\n`
  tabela_alocacao += `  U${p} || ${modelo_T['automatico']}\n`
  continuar(tabela_alocacao)

  /* 7. Crie um modelo de veículo "U" vinculado à montadora B */
  const modelo_U = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_U', montadoras[1], 51000, 1.8, false, false])
  tabela_alocacao += `  V${p} || o---o---o---< modelo_U\n`
  tabela_alocacao += `  W${p} || ${modelo_U['id']}\n`
  tabela_alocacao += `  X${p} || ${modelo_U['nome']}\n`
  tabela_alocacao += `  Y${p} || E F G H\n` // [montadoras[1] não possui slot, pois não foi criado variável
  tabela_alocacao += `  Z${p} || ${modelo_U['valor_referencia']}\n`
  tabela_alocacao += ` AA${p} || ${modelo_U['motorizacao']}\n`
  tabela_alocacao += ` AB${p} || ${modelo_U['turbo']}\n`
  tabela_alocacao += ` AC${p} || ${modelo_U['automatico']}\n`
  continuar(tabela_alocacao)

  /* 8. Crie um modelo de veículo "V" vinculado à montadora A */
  const modelo_V = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_V', montadora_A, 62000, 1.6, false, false])
  tabela_alocacao += ` AD${p} || o---o---o---< modelo_V\n`
  tabela_alocacao += ` AE${p} || ${modelo_V['id']}\n`
  tabela_alocacao += ` AF${p} || ${modelo_V['nome']}\n`
  tabela_alocacao += ` AG${p} || D\n` // montadora_A -> I -> D
  tabela_alocacao += ` AH${p} || ${modelo_V['valor_referencia']}\n`
  tabela_alocacao += ` AI${p} || ${modelo_V['motorizacao']}\n`
  tabela_alocacao += ` AJ${p} || ${modelo_V['turbo']}\n`
  tabela_alocacao += ` AK${p} || ${modelo_V['automatico']}\n`
  continuar(tabela_alocacao)

  /* 9. Crie uma lista para modelos que já nasce com os três modelos acima */
  let modelos = [
    modelo_T, modelo_U, modelo_V
  ]
  tabela_alocacao += ` AL${p} || o---o---o---< modelos\n`
  tabela_alocacao += ` AM${p} || N\n`
  tabela_alocacao += ` AN${p} || V\n`
  tabela_alocacao += ` AO${p} || AD\n`
  continuar(tabela_alocacao)

  /* 10. Crie um veículo "F" do modelo U */
  let veiculo_F = inicializar_op_3(chaves_veiculos, [nova_ulid(), modelo_U, 'Prata', 2017, 2019, 70000, 'UVAS-0675'])
  tabela_alocacao += ` AP${p} || o---o---o---< veiculo_F\n`
  tabela_alocacao += ` AQ${p} || ${veiculo_F['id']}\n`
  tabela_alocacao += ` AR${p} || V\n`
  tabela_alocacao += ` AS${p} || ${veiculo_F['cor']}\n` 
  tabela_alocacao += ` AT${p} || ${veiculo_F['ano_fabricacao']}\n`
  tabela_alocacao += ` AU${p} || ${veiculo_F['ano_modelo']}\n`
  tabela_alocacao += ` AV${p} || ${veiculo_F['valor']}\n`
  tabela_alocacao += ` AW${p} || ${veiculo_F['placa']}\n`
  continuar(tabela_alocacao)

  /* 11. Crie um veículo "G" do modelo V */
  let veiculo_G = inicializar_op_3(chaves_veiculos, [nova_ulid(), modelo_V, 'Azul Oceano', 2020, 2022, 75000, 'MEGA-7702'])
  tabela_alocacao += ` AX${p} || o---o---o---< veiculo_G\n`
  tabela_alocacao += ` AY${p} || ${veiculo_G['id']}\n`
  tabela_alocacao += ` AZ${p} || AD\n`
  tabela_alocacao += ` BA${p} || ${veiculo_G['cor']}\n`
  tabela_alocacao += ` BB${p} || ${veiculo_G['ano_fabricacao']}\n`
  tabela_alocacao += ` BC${p} || ${veiculo_G['ano_modelo']}\n`
  tabela_alocacao += ` BD${p} || ${veiculo_G['valor']}\n`
  tabela_alocacao += ` BE${p} || ${veiculo_G['placa']}\n`
  continuar(tabela_alocacao)

  /* 12. Crie uma lista de modelos vazia */
  let modelos_v2 = inicializar_op_2()
  tabela_alocacao += ` BF${p} || ${len(modelos_v2) === 0 ? 'o---o---o---< veiculos_montadora_b' : null}\n`
  continuar(tabela_alocacao)

  /* 13. Adicione "F" e "G" à lista de modelos */
  modelos_v2 = [
    veiculo_F, veiculo_G
  ]
  tabela_alocacao += ` BG${p} || AP\n`
  tabela_alocacao += ` BH${p} || AX\n`
  continuar(tabela_alocacao)

  /* 14. Adicione a "modelos" on-the-fly mais um veículo "H", do modelo "T" */
  inicializar_op_5(modelos_v2, chaves_veiculos, [nova_ulid(), modelo_T, 'Marfim', 2007, 2011, 60000, 'HALF-0202'])
  tabela_alocacao += ` BI${p} || ${modelos_v2[len(modelos_v2) - 1]['id']}\n`
  tabela_alocacao += ` BJ${p} || N\n`
  tabela_alocacao += ` BK${p} || ${modelos_v2[len(modelos_v2) - 1]['cor']}\n`
  tabela_alocacao += ` BL${p} || ${modelos_v2[len(modelos_v2) - 1]['ano_fabricacao']}\n`
  tabela_alocacao += ` BM${p} || ${modelos_v2[len(modelos_v2) - 1]['ano_modelo']}\n`
  tabela_alocacao += ` BN${p} || ${modelos_v2[len(modelos_v2) - 1]['valor']}\n`
  tabela_alocacao += ` BO${p} || ${modelos_v2[len(modelos_v2) - 1]['placa']}\n`
  continuar(tabela_alocacao)
  
  /* 15. Altere o nome do usuário e o cargo */
  continuar('Aperte ENTER e role para cima para ver seus dados alterados (A, B)')
  pessoa = 'Bot'
  cargo = 'Hacker'
  
  tabela_dados = nova_lista(fatiar, tabela_alocacao + '\n', '\n')
  alterar_dados_usuario(tabela_dados, 4, '|', '|| ', pessoa)
  alterar_dados_usuario(tabela_dados, 5, '|', '|| ', cargo)
  tabela_alocacao = nova_string(tabela_dados, '\n')
  continuar(tabela_alocacao)

  /* 16: Crie um array de veículos "veiculos_montadora_b", resultado de uma operação de filtro apenas da Montadora B */
  // Guarda objetos de modelos de veículos, então ao achar, apontar a alocação para onde estão os modelos achados
  const veiculos_montadora_b = filtrar_veiculos(
    criterio_nome_da_montadora, 
    modelos_v2, 
    montadoras[1]['nome'],
    ['modelo_veiculo', 'montadora', 'nome']
  )
  exibir(veiculos_montadora_b)
  tabela_alocacao += ` BP${p} || o---o---o---< veiculos_montadora_b\n`
  tabela_alocacao += ` BQ${p} || N\n`
  tabela_alocacao += ` BR${p} || V\n`
  continuar(tabela_alocacao)

  /* 17. Guarde em "soma_estoque" o somatório do valor de todos os veículos (reduce) */
  const soma_estoque = reduzir_limitado(criterio_somar, modelos_v2, 0, 'valor')
  tabela_alocacao += ` BS${p} || ${soma_estoque}\n`
  continuar(tabela_alocacao)

  /* 18. Guarde em "veiculo_mais_caro" o veículo mais caro do estoque (reduce) */
  const veiculo_mais_caro = obter_veiculo_mais_caro(
    modelos_v2,
    reduzir_limitado(criterio_maior, modelos_v2, 0, 'valor'),
    ['valor']
  )
  tabela_alocacao += ` BT${p} || o---o---o---< veiculo_mais_caro\n`
  tabela_alocacao += ` BU${p} || AX\n`
  continuar(tabela_alocacao)

  // REGISTRO DAS MONTADORAS EM DOC
  continuar_simples('Aperte ENTER e verifique "montadoras.txt"')
  escrever_em_arquivo(arquivo, 'montadoras.txt', formatar_objetos_em_linha(montadoras, chaves_montadora, 0))

  // REGISTRO DOS MODELOS DE VEÍCULOS EM DOC
  continuar_simples('Aperte ENTER e verifique "modelos.txt"')
  escrever_em_arquivo(arquivo, 'modelos.txt', formatar_objetos_em_linha(modelos, chaves_modelos, 1))

  // REGISTRO DOS VEÍCULOS EM DOC
  continuar_simples('Aperte ENTER e verifique "veiculos.txt"')
  escrever_em_arquivo(arquivo, 'veiculos.txt', formatar_objetos_em_linha(modelos_v2, chaves_veiculos, 2))

  continuar_simples('')

  /* 19
  Crie uma nova lista a partir do mapeamento da lista "montadoras" que tenha apenas os atributos: 
    . nome, ano_de_fundacao, que tem o nome da montadora e quantos anos ela tem.
  */
  let montadoras_alteradas = mapear_montadora_atribs_nome_e_ano(montadoras)
  montadoras_alteradas = mapear_registro(criterio_subtrair, montadoras_alteradas, ano_atual, 'ano_fundacao')
  tabela_alocacao += ` BV${p} || o---o---o---< montadoras_alteradas\n`
  tabela_alocacao += ` BW${p} || K\n` // chave 2 de montadoras[0] não foi alterada
  tabela_alocacao += ` BX${p} || ${montadoras_alteradas[0]['ano_fundacao']}\n`
  tabela_alocacao += ` BY${p} || F\n` // chave 2 de montadoras[1] não foi alterada
  tabela_alocacao += ` BZ${p} || ${montadoras_alteradas[1]['ano_fundacao']}\n`
  continuar(tabela_alocacao)

  /* 20.Limpar, apagar todos os objetos criados anteriormente, mantendo apenas em memória: nome e cargo do usuário. */
  tabela_alocacao = nova_string(fatiar_array(tabela_dados, 0, 6), '\n')
  continuar(tabela_alocacao)
}

function mapear_registro(criterio, registro, ref, chave) {
  for (let i = 0; i < len(registro); i++) {
    registro[i][chave] = criterio(ref, registro[i][chave])
  }
  return registro
}

function mapear_montadora_atribs_nome_e_ano(registro) {
  const array = []
  let array_i = 0
  
  for (let i = 0; i < len(registro); i++) {
    for (let chave in registro[i]) {
      array[array_i] = {'nome': registro[i]['nome'], 'ano_fundacao': registro[i]['ano_fundacao']}
      array_i++
      break
    }
  }
  return array
}

function obter_veiculo_mais_caro(registro, valor, chaves) {
  for (let i = 0; i < len(registro); i++) {
    if (registro[i][chaves[0]] === valor) {
      return registro[i]
    }
  }
}

function criterio_subtrair(ref, i) {
  return ref - i
}

function criterio_nome_da_montadora(i, ref) {
  return i === ref
}

function criterio_somar(i, acumulador) {
  return i + acumulador
}

function criterio_maior(i, ref) {
  return i > ref ? i : ref
}

function filtrar_veiculos(criterio, registro, ref, chaves) {
  const array = []
  let array_i = 0

  for (let i = 0; i < len(registro); i++) {
    if (criterio(registro[i][chaves[0]][chaves[1]][chaves[2]], ref)) {
      array[array_i] = registro[i][chaves[0]]
      array_i++
    }
  }
  return array
}

function reduzir_limitado(criterio, registro, vi, chave) {
  let acumulador = vi
  for (let i = 0; i < len(registro); i++) {
    acumulador = criterio(registro[i][chave], acumulador)
  }
  return acumulador
}

// ---------------------------------------------------------------------------------------------------------------
function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

function fatiar_array(colecao, min, max) {
  const array = []
  let array_i =0
  
  for (let i = min; i < max; i++) {
    array[array_i] = colecao[i]
    array_i++
  }
  return array
}

function nova_lista(criterio, colecao, separador) {
  const array = []
  let array_i = 0
  let pos = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = criterio(colecao, pos, i - 1)
      array_i++
      pos = i + 1
    }
  }
  return array
}

function anexar(colecao, dados) {
  let colecao_i = 0
  for (let i = 0; i < len(dados); i++) {
    colecao[colecao_i] = dados[i]
    colecao_i++
  }
}

function nova_string(colecao, separador) {
  string = ''
  for (let i = 0; i < len(colecao); i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}

function alterar_dados_usuario(colecao, indice, separador, separador_B, substituto) {
  for (let i = 0; i < len(colecao); i++) {
    if (i === indice) {
      const dado = nova_lista(fatiar, colecao[i] + separador, separador)
      dado[len(dado) - 1] = separador_B + substituto
      colecao[i] = nova_string(dado, '')
    }
  }
}
// ---------------------------------------------------------------------------------------------------------------
function escrever_em_arquivo(ref, nome_arquivo, conteudo) {
  ref.writeFileSync(nome_arquivo, conteudo)
}

function formatar_objetos_em_linha(registro, chaves, tipo) {
  let linha = ''
  let pos = 0
  
  if (tipo === 0) {
    /* 'id', 'nome', 'pais', 'ano_fundacao' */
    for (let i = 0; i < len(registro); i++) {
      const cada_i = registro[i]
      linha += `${cada_i[chaves[pos]]} ${cada_i[chaves[pos + 1]]} ${cada_i[chaves[pos + 2]]} ${cada_i[chaves[pos + 3]]}\n`
    }
    return linha
  }
  
  // modelos
  else if (tipo === 1) {
    /* 'id', 'nome', 'montadora['id']', 'valor_referencia', 'motorizacao', 'turbo', 'automatico' */
    for (let i = 0; i < len(registro); i++) {
      const cada_i = registro[i]
      linha += `${cada_i[chaves[pos]]} ${cada_i[chaves[pos + 1]]} ${cada_i[chaves[pos + 2]]['id']} ${cada_i[chaves[pos + 3]]} ${cada_i[chaves[pos + 4]]} ${cada_i[chaves[pos + 5]]} ${cada_i[chaves[pos + 6]]}\n`
    }
    return linha
  }

  // veículos
  else if (tipo === 2) {
    /* 'id', 'modelo_veiculo', 'cor', 'ano_fabricacao', 'ano_modelo', 'valor', 'placa' */
    for (let i = 0; i < len(registro); i++) {
      const cada_i = registro[i]
      linha += `${cada_i[chaves[pos]]} ${cada_i[chaves[pos + 1]]['id']} ${cada_i[chaves[pos + 2]]} ${cada_i[chaves[pos + 3]]} ${cada_i[chaves[pos + 4]]} ${cada_i[chaves[pos + 5]]} ${cada_i[chaves[pos + 6]]}\n`
    }
    return linha
  }
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function exibir(conteudo) {
  console.log(conteudo)
}

function continuar(ref) {
  exibir(ref)
  entrada_terminal.question(`<<< Avancar = ENTER ( operação atual: ${operacao} ) >>>`)
  operacao++
  console.clear()
}

function continuar_simples(ref) {
  exibir(ref)
  entrada_terminal.question(`<<< Avancar = ENTER >>>`)
  console.clear()
}

function nova_ulid() {
  return ulid()
}

function alocacao() {
  return `
  ===============================================
  Endereço  Valor
  ===============================================
  `
}

function inicializar_op_1(conteudo) {
  const dado = entrada_terminal.question(conteudo)
  return dado
}

function inicializar_op_2() {
  return []
}

function inicializar_op_3(chaves, valores) {
  const registro = {}
  for (let i = 0; i < len(chaves); i++) {
    registro[chaves[i]] = valores[i] 
  }
  return registro
}

function inicializar_op_4(registro, objeto) {
  const ultimo_i = len(registro)
  registro[ultimo_i] = objeto
}

function inicializar_op_5(registro, chaves, valores) {
  const ultimo_i = len(registro)
  const registro_temp = {}
  for (let i = 0; i < len(chaves); i++) {
    registro_temp[chaves[i]] = valores[i]
  }
  registro[ultimo_i] = registro_temp
}

main()
