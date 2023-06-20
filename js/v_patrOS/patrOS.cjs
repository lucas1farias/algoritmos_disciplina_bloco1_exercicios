

// 1. Meu algoritmo foi modificado para esta versão
const { ulid } = require('ulid')
const entrada_terminal = require('readline-sync')
const arquivo = require('fs')

function main() {
  /* 1. Ao iniciar o programa, pedir ao usuário: seu nome e cargo. (Ex.: "João", "Gerente") */
  // let nome_usuario = entrada_terminal.question('Informe seu NOME >>> ')
  // let cargo_usuario = entrada_terminal.question('Informe seu CARGO >>> ')

  /* 2. Criar uma lista vazia para botar as montadoras. */
  let montadoras = []
  let montadoras_i = 0

  /* 3. Crie uma montadora A (atributos) */
  let montadora_A = {
    'id': nova_ulid(), 
    'nome': 'A', 
    'pais': 'Argentina', 
    'ano_fundacao': 1966
  }
  
  /* 4. Adicione a montadora A à lista de montadoras do sistema */
  montadoras[montadoras_i] = montadora_A
  montadoras_i++
  
  /* 5. Adicionar diretamente em "montadoras" mais uma montadora (essa será o que vou chamar de B)*/
  montadoras[montadoras_i] = {
    'id': nova_ulid(), 
    'nome': 'B', 
    'pais': 'Bulgaria', 
    'ano_fundacao': 1972
  }
  montadoras_i++

  /* 6. Crie um modelo de veículo "T" vinculado à montadora B */
  let modelo_T = {
    'id': nova_ulid(), 
    'nome': 'T', 
    'montadora': montadoras[1], 
    'valor_referencia': 55000, 
    'motorizacao': 2.0, 
    'turbo': false, 
    'automatico': true
}

  /* 7. Crie um modelo de veículo "U" vinculado à montadora B */
  let modelo_U = {
    'id': nova_ulid(), 
    'nome': 'U', 
    'montadora': montadoras[1], 
    'valor_referencia': 51000, 
    'motorizacao': 1.8, 
    'turbo': false, 
    'automatico': false
  }

  /* 8. Crie um modelo de veículo "V" vinculado à montadora A */
  let modelo_V = {
    'id': nova_ulid(), 
    'nome': 'V', 
    'montadora': montadora_A, 
    'valor_referencia': 62000, 
    'motorizacao': 1.6, 
    'turbo': false, 
    'automatico': false
  }
  
  /* 9. Crie uma lista para modelos que já nasce com os três modelos acima */
  let modelos = [
    modelo_T, modelo_U, modelo_V
  ]

  /* 10. Crie um veículo "F" do modelo U */
  let veiculo_F = {
    'id': nova_ulid(), 
    'modelo_veiculo': modelo_U, 
    'cor': 'Prata', 
    'ano_fabricacao': 2017,
    'ano_modelo': 2019,
    'valor': 70000,
    'placa': 'UVAS-0675'
  }

  /* 11. Crie um veículo "G" do modelo V */
  let veiculo_G = {
    'id': nova_ulid(), 
    'modelo_veiculo': modelo_V, 
    'cor': 'Azul Oceano', 
    'ano_fabricacao': 2020,
    'ano_modelo': 2022,
    'valor': 75000,
    'placa': 'MEGA-7702'
  }

  /* 12. Crie uma lista de modelos vazia */
  let modelos_v2 = []
  let modelos_v2_i = 0

  /* 13. Adicione "F" e "G" à lista de modelos */
  modelos_v2[modelos_v2_i] = veiculo_F
  modelos_v2_i++
  modelos_v2[modelos_v2_i] = veiculo_G
  modelos_v2_i++

  /* 14. Adicione a "modelos" on-the-fly mais um veículo "H", do modelo "T" */
  modelos_v2[modelos_v2_i] = {
    // veículo H
    'id': nova_ulid(), 
    'modelo_veiculo': modelo_T, 
    'cor': 'Marfim', 
    'ano_fabricacao': 2007,
    'ano_modelo': 2011,
    'valor': 60000,
    'placa': 'HALF-0202'
  }

  /* 15. Altere o nome do usuário e o cargo */
  continuar('Os dados iniciais do usuário foram alterados...')
  nome_usuario = 'Bot'
  cargo_usuario = 'Hacker'

  /* 16: Crie um array de veículos "veiculos_montadora_b", resultado de uma operação de filtro apenas da Montadora B */
  const veiculos_montadora_b = filtrar(criterio_nome_da_montadora, modelos_v2, montadoras[1]['nome'])
  continuar('Os veículos da montadora_B foram encontrados...')
  exibir('========== Veículos da montadora B ==========')
  percorrer_com_intervalo(veiculos_montadora_b)
  
  /* 17. Guarde em "soma_estoque" o somatório do valor de todos os veículos (reduce) */
  const soma_estoque = reduzir_limitada(criterio_somar, modelos_v2, 0, 'valor')
  continuar('O preco de todos os veículos foi calculado...')
  exibir('========== Preço de todos os veículos ==========')
  exibir(`R$ ${soma_estoque}`)

  /* 18. Guarde em "veiculo_mais_caro" o veículo mais caro do estoque (reduce) */
  const veiculo_mais_caro = reduzir_limitada(criterio_maior, modelos_v2, 0, 'valor')
  continuar('O veículo mais caro foi encontrado...')
  exibir('========== VEÍCULO MAIS CARO ==========')
  percorrer_com_intervalo(veiculo_mais_caro)
  
  for (let i = 0; i < len(modelos_v2); i++) {
    if (modelos_v2[i]['valor'] === veiculo_mais_caro) {
      exibir(modelos_v2[i])
      entrada_terminal.question('PROXIMO = ENTER')
      console.clear()
      break
    }
  }

  // REGISTRO DAS MONTADORAS EM DOC
  continuar('As montadoras foram anexadas textualmente...')
  escrever_em_arquivo(
    arquivo, 
    'montadoras.txt', 
    formatar_objetos_em_textos(montadoras, ['id', 'nome', 'pais', 'ano_fundacao'], 0)
  )

  // REGISTRO DOS MODELOS DE VEÍCULOS EM DOC
  continuar('Os modelos de veículos foram anexados textualmente...')
  escrever_em_arquivo(
    arquivo, 
    'modelos.txt', 
    formatar_objetos_em_textos(
      modelos, ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico'], 1
    )
  )

  // REGISTRO DOS VEÍCULOS EM DOC
  continuar('Os veículos foram anexados textualmente...')
  escrever_em_arquivo(
    arquivo, 
    'veiculos.txt', 
    formatar_objetos_em_textos(
      modelos_v2, ['id', 'modelo_veiculo', 'cor', 'ano_fabricacao', 'ano_modelo', 'valor', 'placa'], 2
    )
  )
  
  /* 19
  Crie uma nova lista a partir do mapeamento da lista "montadoras" que tenha apenas os atributos: 
    . nome, ano_de_fundacao, que tem o nome da montadora e quantos anos ela tem.
  */
  continuar('Dados filtrados sobre as montadoras...')
  exibir('========== MONTADORAS COM ATRIBUTOS FILTRADOS ==========')
  const montadoras_com_filtro = mapear_atribs_especificos(montadoras)
  const data_hoje = Number(nova_lista(fatiar, `${new Date}`, ' ')[3])
  montadoras = mapear_registro(criterio_subtrair, montadoras_com_filtro, data_hoje, 'ano_fundacao')
  percorrer_com_intervalo(montadoras)

  continuar('Limpeza dos dados executada...')
  exibir('========== REGISTROS LIMPOS ==========')
  const todos_os_dados = [
    montadoras, montadora_A, modelo_T, modelo_U, modelo_V, modelos, veiculo_F, veiculo_G, modelos_v2
  ]

  /* 20
  Limpar, apagar todos os objetos criados anteriormente, mantendo apenas em memória: nome e cargo do usuário.
  Substitui todo o procedimento em comentário abaixo
  */
  for (let i = 0; i < len(todos_os_dados); i++) {
    if (i === 0) {
      todos_os_dados[i] = limpar_registro(todos_os_dados[i])
    }
    if (i === 5 || i === 8) {
      for (let i = 0; i < len(todos_os_dados); i++) {
        todos_os_dados[i] = limpar_registro(todos_os_dados[i], false)
      }
    }
  }

  montadoras_i = 0
  modelos_v2_i = 0
  exibir(todos_os_dados)
  exibir(nome_usuario)
  exibir(cargo_usuario)
  
  /* ANTES
  montadoras = limpar_registro(montadoras)
  montadora_A = limpar_registro(montadora_A, false)
  modelo_T = limpar_registro(modelo_T, false)
  modelo_U = limpar_registro(modelo_U, false)
  modelo_V = limpar_registro(modelo_V, false)
  
  for (let i = 0; i < len(modelos); i++) {
    modelos[i] = limpar_registro(modelos[i], false)
  }
  
  veiculo_F = limpar_registro(veiculo_F, false)
  veiculo_G = limpar_registro(veiculo_G, false)
  
  for (let i = 0; i < len(modelos_v2); i++) {
    modelos_v2[i] = limpar_registro(modelos_v2[i], false)
  }
  
  console.log(montadoras)
  console.log(montadora_A)
  console.log(modelo_T)
  console.log(modelo_U)
  console.log(modelo_V)
  console.log(modelos)
  console.log(veiculo_F)
  console.log(veiculo_G)
  console.log(modelos_v2)
  */
}

function percorrer_com_intervalo(registro) {
  for (let i = 0; i < len(registro); i++) {
    exibir(registro[i])
    entrada_terminal.question('PROXIMO = ENTER')
    console.clear()
  }
}

function formatar_objetos_em_textos(registro, chaves, tipo) {
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

function escrever_em_arquivo(ref, nome_arquivo, conteudo) {
  ref.writeFileSync(nome_arquivo, conteudo)
}

function limpar_registro(registro, array=true) {
  if (array) {
    registro = []
    return registro
  } else {
    registro = {}
    return registro
  }
}

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

function criterio_subtrair(ref, i) {
  return ref - i
}

function criterio_maior(i, ref) {
  return i > ref ? i : ref
}

function criterio_somar(i, acumulador) {
  return i + acumulador
}

function mapear_registro(criterio, registro, ref, chave) {
  for (let i = 0; i < len(registro); i++) {
    registro[i][chave] = criterio(ref, registro[i][chave])
  }
  return registro
}

function mapear_atribs_especificos(registro) {
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

function reduzir_limitada(criterio, registro, vi, chave) {
  let acumulador = vi
  for (let i = 0; i < len(registro); i++) {
    acumulador = criterio(registro[i][chave], acumulador)
  }
  return acumulador
}

function criterio_nome_da_montadora(i, ref) {
  return i === ref
}

function filtrar(criterio, registro, ref) {
  const array = []
  let array_i = 0

  for (let i = 0; i < len(registro); i++) {
    if (criterio(registro[i]['modelo_veiculo']['montadora']['nome'], ref)) {
      array[array_i] = registro[i]['modelo_veiculo']
      array_i++
    }
  }
  return array
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function nova_ulid() {
  return ulid()
}

function exibir(conteudo) {
  console.log(conteudo)
}

function continuar(info) {
  exibir('\n' + info)
  entrada_terminal.question('<<< PRESSIONE ENTER PARA A ETAPA SEGUINTE >>>')
  console.clear()
}

main()
