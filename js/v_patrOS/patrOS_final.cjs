

const { ulid } = require('ulid')
const entrada_terminal = require('readline-sync')
const arquivo = require('fs')
let identacao = '        '
let tabela_alocacao = alocacao()
let tabela_dados = []
const chaves_montadora = ['id', 'nome', 'pais','ano_fundacao']
const chaves_modelos = ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
const chaves_veiculos = ['id', 'modelo_veiculo', 'cor', 'ano_fabricacao', 'ano_modelo', 'valor', 'placa']

function main() {
  /* 1. Ao iniciar o programa, pedir ao usuário: seu nome e cargo. (Ex.: "João", "Gerente") */
  const pessoa = inicializar_op_1()
  tabela_alocacao += `A${identacao} || ${pessoa['nome']}\n`
  tabela_alocacao += `  B${identacao} || ${pessoa['cargo']}\n`
  exibir(tabela_alocacao)

  /* 2. Criar uma lista vazia para botar as montadoras. */
  const montadoras = inicializar_op_2()
  tabela_alocacao += `  C${identacao} || ${len(montadoras) === 0 ? '---o []' : null}\n`
  exibir(tabela_alocacao)
  
  /* 3. Crie uma montadora A (atributos) */
  const montadora_A = inicializar_op_3(chaves_montadora, [nova_ulid(), 'Arg', 'Argentina', 1966])
  tabela_alocacao += `  I${identacao} || ---o montadora_A\n`
  tabela_alocacao += `  J${identacao} || ${montadora_A['id']}\n`
  tabela_alocacao += `  K${identacao} || ${montadora_A['nome']}\n`
  tabela_alocacao += `  L${identacao} || ${montadora_A['pais']}\n`
  tabela_alocacao += `  M${identacao} || ${montadora_A['ano_fundacao']}\n`
  exibir(tabela_alocacao)

  /* 4. Adicione a montadora A à lista de montadoras do sistema */
  inicializar_op_4(montadoras, montadora_A)
  tabela_alocacao += `  D${identacao} || I\n`
  exibir(tabela_alocacao)

  /* 5. Adicionar diretamente em "montadoras" mais uma montadora (essa será o que vou chamar de B)*/
  inicializar_op_5(montadoras,  chaves_montadora, [nova_ulid(), 'Bul', 'Bulgaria', 1972])
  tabela_alocacao += `  E${identacao} || ${montadoras[len(montadoras) - 1]['id']}\n`
  tabela_alocacao += `  F${identacao} || ${montadoras[len(montadoras) - 1]['nome']}\n`
  tabela_alocacao += `  G${identacao} || ${montadoras[len(montadoras) - 1]['pais']}\n`
  tabela_alocacao += `  H${identacao} || ${montadoras[len(montadoras) - 1]['ano_fundacao']}\n`
  exibir(tabela_alocacao)

  /* 6. Crie um modelo de veículo "T" vinculado à montadora B */
  const modelo_T = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_T', montadoras[1], 55000, 2.0, false, true])
  tabela_alocacao += `  N${identacao} || ---o modelo_T\n`
  tabela_alocacao += `  O${identacao} || ${modelo_T['id']}\n`
  tabela_alocacao += `  P${identacao} || ${modelo_T['nome']}\n`
  tabela_alocacao += `  Q${identacao} || E F G H\n`  // [montadoras[1] não possui slot, pois não foi criado variável
  tabela_alocacao += `  R${identacao} || ${modelo_T['valor_referencia']}\n`
  tabela_alocacao += `  S${identacao} || ${modelo_T['motorizacao']}\n`
  tabela_alocacao += `  T${identacao} || ${modelo_T['turbo']}\n`
  tabela_alocacao += `  U${identacao} || ${modelo_T['automatico']}\n`
  exibir(tabela_alocacao)

  /* 7. Crie um modelo de veículo "U" vinculado à montadora B */
  const modelo_U = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_U', montadoras[1], 51000, 1.8, false, false])
  tabela_alocacao += `  V${identacao} || ---o modelo_U\n`
  tabela_alocacao += `  W${identacao} || ${modelo_U['id']}\n`
  tabela_alocacao += `  X${identacao} || ${modelo_U['nome']}\n`
  tabela_alocacao += `  Y${identacao} || E F G H\n` // [montadoras[1] não possui slot, pois não foi criado variável
  tabela_alocacao += `  Z${identacao} || ${modelo_U['valor_referencia']}\n`
  tabela_alocacao += ` AA${identacao} || ${modelo_U['motorizacao']}\n`
  tabela_alocacao += ` AB${identacao} || ${modelo_U['turbo']}\n`
  tabela_alocacao += ` AC${identacao} || ${modelo_U['automatico']}\n`
  exibir(tabela_alocacao)

  /* 8. Crie um modelo de veículo "V" vinculado à montadora A */
  const modelo_V = inicializar_op_3(chaves_modelos, [nova_ulid(), 'mod_V', montadora_A, 62000, 1.6, false, false])
  tabela_alocacao += ` AD${identacao} || ---o modelo_V\n`
  tabela_alocacao += ` AE${identacao} || ${modelo_V['id']}\n`
  tabela_alocacao += ` AF${identacao} || ${modelo_V['nome']}\n`
  tabela_alocacao += ` AG${identacao} || D\n` // montadora_A -> I -> D
  tabela_alocacao += ` AH${identacao} || ${modelo_V['valor_referencia']}\n`
  tabela_alocacao += ` AI${identacao} || ${modelo_V['motorizacao']}\n`
  tabela_alocacao += ` AJ${identacao} || ${modelo_V['turbo']}\n`
  tabela_alocacao += ` AK${identacao} || ${modelo_V['automatico']}\n`
  exibir(tabela_alocacao)

  /* 9. Crie uma lista para modelos que já nasce com os três modelos acima */
  let modelos = [
    modelo_T, modelo_U, modelo_V
  ]
  tabela_alocacao += ` AL${identacao} || ---o modelos\n`
  tabela_alocacao += ` AM${identacao} || N\n`
  tabela_alocacao += ` AN${identacao} || V\n`
  tabela_alocacao += ` AO${identacao} || AD\n`
  exibir(tabela_alocacao)

  /* 10. Crie um veículo "F" do modelo U */
  let veiculo_F = inicializar_op_3(chaves_veiculos, [nova_ulid(), modelo_U, 'Prata', 2017, 2019, 70000, 'UVAS-0675'])
  tabela_alocacao += ` AP${identacao} || ---o veiculo_F\n`
  tabela_alocacao += ` AQ${identacao} || ${veiculo_F['id']}\n`
  tabela_alocacao += ` AR${identacao} || V\n`
  tabela_alocacao += ` AS${identacao} || ${veiculo_F['cor']}\n` 
  tabela_alocacao += ` AT${identacao} || ${veiculo_F['ano_fabricacao']}\n`
  tabela_alocacao += ` AU${identacao} || ${veiculo_F['ano_modelo']}\n`
  tabela_alocacao += ` AV${identacao} || ${veiculo_F['valor']}\n`
  tabela_alocacao += ` AW${identacao} || ${veiculo_F['placa']}\n`
  exibir(tabela_alocacao)

  /* 11. Crie um veículo "G" do modelo V */
  let veiculo_G = inicializar_op_3(chaves_veiculos, [nova_ulid(), modelo_V, 'Azul Oceano', 2020, 2022, 75000, 'MEGA-7702'])
  tabela_alocacao += ` AX${identacao} || ---o veiculo_G\n`
  tabela_alocacao += ` AY${identacao} || ${veiculo_G['id']}\n`
  tabela_alocacao += ` AZ${identacao} || AD\n`
  tabela_alocacao += ` BA${identacao} || ${veiculo_G['cor']}\n`
  tabela_alocacao += ` BB${identacao} || ${veiculo_G['ano_fabricacao']}\n`
  tabela_alocacao += ` BC${identacao} || ${veiculo_G['ano_modelo']}\n`
  tabela_alocacao += ` BD${identacao} || ${veiculo_G['valor']}\n`
  tabela_alocacao += ` BE${identacao} || ${veiculo_G['placa']}\n`
  exibir(tabela_alocacao)

  /* 12. Crie uma lista de modelos vazia */
  let modelos_v2 = inicializar_op_2()
  tabela_alocacao += ` BF${identacao} || ${len(modelos_v2) === 0 ? '---o []' : null}\n`
  exibir(tabela_alocacao)

  /* 13. Adicione "F" e "G" à lista de modelos */
  modelos_v2 = [
    veiculo_F, veiculo_G
  ]
  tabela_alocacao += ` BG${identacao} || AP\n`
  tabela_alocacao += ` BH${identacao} || AX\n`
  exibir(tabela_alocacao)

  /* 14. Adicione a "modelos" on-the-fly mais um veículo "H", do modelo "T" */
  inicializar_op_5(modelos_v2, chaves_veiculos, [nova_ulid(), modelo_T, 'Marfim', 2007, 2011, 60000, 'HALF-0202'])
  tabela_alocacao += ` BI${identacao} || ${modelos_v2[len(modelos_v2) - 1]['id']}\n`
  tabela_alocacao += ` BJ${identacao} || N\n`
  tabela_alocacao += ` BK${identacao} || ${modelos_v2[len(modelos_v2) - 1]['cor']}\n`
  tabela_alocacao += ` BL${identacao} || ${modelos_v2[len(modelos_v2) - 1]['ano_fabricacao']}\n`
  tabela_alocacao += ` BM${identacao} || ${modelos_v2[len(modelos_v2) - 1]['ano_modelo']}\n`
  tabela_alocacao += ` BN${identacao} || ${modelos_v2[len(modelos_v2) - 1]['valor']}\n`
  tabela_alocacao += ` BO${identacao} || ${modelos_v2[len(modelos_v2) - 1]['placa']}\n`
  exibir(tabela_alocacao)
  
  /* 15. Altere o nome do usuário e o cargo */
  pessoa['nome'] = 'Bot'
  pessoa['cargo'] = 'Hacker'
  
  const tabela_dados = nova_lista(fatiar, tabela_alocacao + '\n', '\n')
  alterar_dados_usuario(tabela_dados, 4, '|', '|| ', pessoa['nome'])
  alterar_dados_usuario(tabela_dados, 5, '|', '|| ', pessoa['cargo'])
  tabela_alocacao = nova_string(tabela_dados, '\n')
  exibir(tabela_alocacao)
}

// ---------------------------------------------------------------------------------------------------------------
function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
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

function inicializar_op_1() {
  // const nome_usuario = entrada_terminal.question('Informe seu NOME >>> ')
  // const cargo_usuario = entrada_terminal.question('Informe seu CARGO >>> ')
  const nome_usuario = 'Lucas'
  const cargo_usuario = 'programador'
  return {
    'nome': nome_usuario, 
    'cargo': cargo_usuario
  }
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
