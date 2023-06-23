

const {ulid} = require('ulid')
const gerenciador = require('fs')
const terminal = require("readline-sync")

function main() {
  
  const opcoes = {
    'criar': 1,
    'listar': 2,
    'alterar': 3,
    'remover': 4,
    'status': 5,
    'anexar_em_txt': 6,
    'extrair_de_txt': 7,
    'parte_2': 10
  }
  
  const chaves = {
    'montadora': ['id', 'nome', 'pais', 'ano_fundacao']
  }
  
  const infos = {
    'info': '\n========== INFO ==========',
    'montadoras_disponiveis': '\n========= MONTADORAS DISPONÍVEIS =========',
    'escolher_id': 'Escolha o número da montadora abaixo',
    'sem_montadoras': 'Não há montadoras cadastradas até o omomento!',
    'dados_gravados_em_txt': 'Montadoras anexadas ao arquivo principal!',
    'dados_em_txt': '\n========== DADOS DAS MONTADORAS =========='
  }

  const arquivo_principal = 'montadoras.txt'
  
  let montadoras = []
  let montadoras_receptora = [] // recebe dados de arquivo de txt "montadoras.txt"
  let modelos = []
  let entrada = undefined
  let entradaB = undefined
  
  // Montadora pré-definidas p/ evitar perder tempo com chamadas múltiplas de terminal
  montadoras[0] = {
    'id': nova_ulid(),
    'nome': 'Bra',
    'pais': 'Brasil',
    'ano_fundacao': 1972
  }

  montadoras[1] = {
    'id': nova_ulid(),
    'nome': 'Arg',
    'pais': 'Argentina',
    'ano_fundacao': 1966
  }

  // Modelos pré-definidos p/ evitar perder tempo com chamadas múltiplas de terminal
  modelos[0] = {
    'id': nova_ulid(), 
    'nome': 'A', 
    'montadora': montadoras[0], 
    'valor_referencia': 60000, 
    'motorizacao': 1.8, 
    'turbo': true, 
    'automatico': true
  }

  modelos[1] = {
    'id': nova_ulid(), 
    'nome': 'B', 
    'montadora': montadoras[0], 
    'valor_referencia': 70000, 
    'motorizacao': 1.4, 
    'turbo': false, 
    'automatico': true
  }

  modelos[2] = {
    'id': nova_ulid(), 
    'nome': 'C', 
    'montadora': montadoras[1], 
    'valor_referencia': 80000, 
    'motorizacao': 1.6, 
    'turbo': true, 
    'automatico': false
  }

  let conteudo_em_arquivo = extrair_conteudo_textual(arquivo_principal)

  while (entrada != 0) {
    entrada = nova_entrada(menu())
    
    if (entrada === opcoes.criar) {
      const nome = nova_entrada_txt('Informe o NOME da MONTADORA >>> ')
      const pais = nova_entrada_txt('Informe o PAIS do MONTADORA >>> ')
      const ano_fundacao = nova_entrada('Informe o ANO DE FUNDACAO da montadora >>> ')
      novo_registro(montadoras, chaves['montadora'], [nova_ulid(), nome, pais, ano_fundacao])
      exibir(infos['info'])
      exibir('Nova montadora criada!')
      continuar()
    }
    else if (entrada === opcoes.listar) {
      exibir(infos['montadoras_disponiveis'])
      exibir_montadoras_em_linha(montadoras, chaves['montadora'])
      continuar()
    }
    else if (entrada === opcoes.alterar) {
      exibir(infos['montadoras_disponiveis'])
      exibir(infos['escolher_id'])
      exibir_nomes_das_montadoras(montadoras, chaves['montadora'][1])
      const montadora_i = nova_entrada('Informe o NÚMERO da MONTADORA com base na lista cima >>> ')
      
      exibir('Informe o NÚMERO do CAMPO a ser alterado')
      exibir_atribs_montadora(chaves['montadora'])
      const atrib = nova_entrada('Informe o CAMPO da MONTADORA a ser alterado >>> ')
      const novo_valor = nova_entrada_txt('Informe o NOVO VALOR >>> ')
      
      // Índice 3 é (int) enquanto o resto é (str)
      if (atrib === 3) {
        alterar_atrib(montadoras[montadora_i], chaves['montadora'][atrib], Number(novo_valor))
      } 
      else {
        alterar_atrib(montadoras[montadora_i], chaves['montadora'][atrib], novo_valor)
      }
      continuar()
    }
    else if (entrada === opcoes.remover) {
      exibir_nomes_das_montadoras(montadoras, chaves['montadora'][1])
      const indice_montadora = nova_entrada('Informe o NÚMERO que representa a MONTADORA >>> ')
      montadoras = remover_montadora_limitada(montadoras, indice_montadora)
      continuar()
    }
    else if (entrada === opcoes.status) {
      exibir(`${len(montadoras) !== 0 ? `${infos["info"]}\n${len(montadoras)} montadora(s)` : `${infos["info"]}\n${infos["sem_montadoras"]}`}`)
      continuar()
    }
    else if (entrada === opcoes.anexar_em_txt) {
      exibir(infos['info'])
      exibir(infos['dados_gravados_em_txt'])
      gravar_dados_em_txt(
        montadoras, chaves['montadora'], '\n', anexar_conteudo_textual, arquivo_principal
      )
      continuar()
    }
    else if (entrada === opcoes.extrair_de_txt) {
      
      const rascunho = nova_lista(fatiar, conteudo_em_arquivo + '\r', '\r')
      const rascunho_refinado = nova_string(rascunho, '')
      const conteudo = nova_lista(fatiar, rascunho_refinado + '\n', '\n')

      let indice = 0
      for (let i = 0; i < len(conteudo) - 1; i++) {
        montadoras_receptora[indice] = criar_objeto_adaptado(conteudo[i], chaves['montadora'])
        indice++
      }
      
      exibir(infos['dados_em_txt'])
      loop_com_intervalo(montadoras_receptora)
      continuar()
    }
    /* PARTE 2 */
    else if (entrada === opcoes.parte_2) {
      const opcoes = {
        'criar_modelo': 1,
        'listar_modelos': 2,
        'listar_modelos_filtro': 3,
        'remover_modelo': 4
      }

      const chaves_ = {
        'modelo': ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
      }

      entradaB = nova_entrada(menu_parte2())
      
      // Eu preciso do índice do montadora para vincular um modelo a ela
      if (entradaB === opcoes.criar_modelo) {
        exibir(infos['montadoras_disponiveis'])
        exibir(infos['escolher_id'])
        exibir_nomes_das_montadoras(montadoras, chaves['montadora'][1])
        
        /*
        (id: ULID, nome: string, montadora: Montadora, valor_referencia: number,
        motorizacao: number, turbo: boolean, automatico: boolean)
        */
        const montadora_i = nova_entrada(frases_de_input_parte2('pedir_i_da_montadora'))
        const nome_modelo = nova_entrada_txt(frases_de_input_parte2('informar_nome_modelo'))
        const valor_ref = nova_entrada(frases_de_input_parte2('informar_valor_referencia'))
        const motorizacao = nova_entrada(frases_de_input_parte2('informar_potencia_motor'))
        
        let eh_turbo = 0
        let eh_automatico = 0
        while (verificar_dois_dados_true(eh_turbo, eh_automatico)) {
          eh_turbo = nova_entrada(frases_de_input_parte2('perguntar_se_eh_turbo'))
          eh_automatico = nova_entrada(frases_de_input_parte2('perguntar_se_eh_automatico'))
          eh_turbo === 1 ? eh_turbo = true : eh_turbo = false
          eh_automatico === 1 ? eh_automatico = true : eh_automatico = false
        }
        // Um objeto de veículo vinculado à uma montadora X via i=2
        novo_registro(
          modelos, 
          chaves_['modelo'], 
          [nova_ulid(), nome_modelo, montadoras[montadora_i], valor_ref, motorizacao, eh_turbo, eh_automatico]
        )
        continuar()
      }

      else if (entradaB === opcoes.listar_modelos) {
        exibir(infos['montadoras_disponiveis'])
        exibir_nomes_das_montadoras(modelos, chaves_['modelo'][1])
      }
      
      // Eu preciso do índice da montadora p/ filtrar o modelo vinculado à montadora X
      else if (entradaB === opcoes.listar_modelos_filtro) {
        exibir(infos['montadoras_disponiveis'])
        exibir(infos['escolher_id'])
        exibir_nomes_das_montadoras(montadoras, chaves['montadora'][1])
        
        const montadora_i = nova_entrada(frases_de_input_parte2('pedir_i_da_montadora'))
        
        exibir(frases_de_input_parte2('veiculos_vinculados_nessa_montadora'))
        filtrar_limitado(criterio_i_montadora, modelos, montadoras, montadora_i, chaves_['modelo'])
      }
      
      // Estou ciente de que a função não é performática e que poderia usar "splice"
      else if (entradaB === opcoes.remover_modelo) {
        exibir_nomes_das_montadoras(modelos, chaves_['modelo'][1])
        const indice_montadora = nova_entrada(frases_de_input_parte2('pedir_i_da_montadora'))
        modelos = remover_montadora_limitada(modelos, indice_montadora)
        continuar()
      }
    }
  }
}

function criterio_i_montadora(a, b, ref) {
  return a['montadora']['nome'] === b[ref]['nome']
}

function filtrar_limitado(criterio, colecao, colecaoB, ref, chaves) {
  for (let i = ref; i < len(colecao); i++) {
    if (criterio(colecao[i], colecaoB, ref)) {
      console.log(
        `${colecao[i][chaves[0]]} || ${colecao[i][chaves[1]]} || ${colecao[i][chaves[2]][chaves[1]]}`
      )
    }
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

function menu() {
  return `
  ========== PatroCars (versao montadoras) ==========
  0 - Sair
  1 - Criar
  2 - Listar
  3 - Alterar
  4 - Remover
  5 - Status
  6 - Gravar dados em .txt
  7 - Extrair dados de .txt
  10 - NAVEGAR PARTE 2
  >>> `
}

function menu_parte2() {
  return `
  ========== PatroCars (versao modelos) ==========
  0 - Sair
  1 - criar modelo
  2 - listar modelos
  3 - listar modelos por montadora
  4 - remover modelo
  >>> `
}

function loop_com_intervalo(colecao) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(colecao[i])
    continuar()
    console.clear()
  }
}

function continuar() {
  terminal.question('<<< PRESSIONE ENTER >>>')
  console.clear()
}

/* --------------------------------------------------------------------------------------------------------------- */
// Entrada 1
function novo_registro(registro, chaves, valores) {
  const ultimo_i = len(registro)
  const objeto_de_registro = {}
  for (let i = 0; i < len(chaves); i++) {
    objeto_de_registro[chaves[i]] = valores[i]
  }
  registro[ultimo_i] = objeto_de_registro
}

// Usado na entrada 2
function exibir_montadoras_em_linha(colecao, chaves) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(`${chaves[0]}: ${colecao[i][chaves[0]]} || ${chaves[1]}: ${colecao[i][chaves[1]]} || ${chaves[2]}: ${colecao[i][chaves[2]]} || ${chaves[3]}: ${colecao[i][chaves[3]]}`)
  }
}

// Usado na entrada 3
function exibir_nomes_das_montadoras(colecao, chave_nome) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(`${i}: ${colecao[i][chave_nome]}`)
  }
}

// Usado na entrada 3
function exibir_atribs_montadora(chaves) {
  for (let i = 0; i < len(chaves); i++) {
    i !== 0 ? exibir(`${i}: ${chaves[i]}`) : null
  }
}

// Usado na entrada 3
function alterar_atrib(objeto_registro, nome_atrib, novo_valor) {
  objeto_registro[nome_atrib] = novo_valor
}

// Não performática (versão não built-in que consegui criar) (estou ciente de "splice")
function remover_montadora_limitada(colecao, indice) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (i !== indice) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

// Performática, mas com built-in "length"
function remover_montadora_v2(colecao, indice) {
  for (let i = indice; i < len(colecao); i++) {
    colecao[i] = colecao[i + 1]
  }
  colecao.length = colecao.length - 1
}

// Performática, mas com built-in "splice"
function remover_montadora_v3(colecao, indice) {
  colecao.splice(indice, 1)
}

// Entrada 6
function gravar_dados_em_txt(colecao, chaves, separador, callback, exe, nome_arquivo) {
  const array = []
  let array_i = 0
  let string = ''
  for (let i = 0; i < len(colecao); i++) {
    // Existe a opção de criar numa linha passando as chaves manualmente, mas me incomoda
    for (let j = 0; j < len(chaves); j++) {
      if (j < len(chaves) -1) {
        string += colecao[i][chaves[j]] + ' '
      }
      else {
        string += colecao[i][chaves[j]] + separador
      }
    }
    callback(exe, nome_arquivo, string)
  }
}

// Entrada 7
function criar_objeto_adaptado(colecao, chaves) {
  const array = []
  const ultimo_i = 0
  const registro_temp = {}
  for (let i = 0; i < len(chaves); i++) {
    registro_temp[chaves[i]] = nova_lista(fatiar, colecao + ' ', ' ')[i]
  }
  
  /* 
  Existe uma anomalia que não consigo entender
  As 3 linhas antes do "return" não deveriam existir
  Contudo, em face desse problema, ele foi tratado na função
  O tratamento evita que o último valor da chave pegue dados da linha posterior, quebrando a conexão entre eles pela ","
  */
  array[ultimo_i] = registro_temp
  let ultima_chave = chaves[len(chaves) - 1]
  array[ultimo_i][ultima_chave] = Number(nova_lista(fatiar, array[ultimo_i][ultima_chave] + ',', ',')[0])
  
  return array[0]
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
      pos = i + 1
      array_i++
    }
  }
  return array
}

function nova_string(colecao, separador) {
  let string = ''
  for (let i = 0; i < len(colecao); i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}

function nova_ulid() {
  return ulid()
}

function anexar_conteudo_textual(nome_arquivo, conteudo) {
  return gerenciador.writeFileSync(nome_arquivo, conteudo)
}

function extrair_conteudo_textual(caminho) {
  return gerenciador.readFileSync(caminho, 'utf8')
}

function nova_entrada(conteudo) {
  return Number(terminal.question(conteudo))
}

function nova_entrada_txt(conteudo) {
  return terminal.question(conteudo)
}

/* 
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
-------------------------------------------------------------------------------------------------------------------
*/
function frases_de_input_parte2(chave) {
  const frases = {
    'pedir_i_da_montadora': 'Informe o NÚMERO da MONTADORA com base na lista cima >>> ',
    'informar_nome_modelo': 'Informe o NOME do MODELO >>> ',
    'informar_valor_referencia': 'Informe a VALOR de REFERÊNCIA >>> ',
    'informar_potencia_motor': 'Informe a POTÊNCIA do MOTOR >>> ',
    'perguntar_se_eh_turbo': 'O modelo possui a propriedade "TURBO"? (0 - não / 1 - sim) >>> ',
    'perguntar_se_eh_automatico': 'O modelo possui a propriedade "AUTOMÁTICO"? (0 - não / 1 - sim) >>> ',
    'veiculos_vinculados_nessa_montadora': '\n========== VEICULOS DA MONTADORA =========='
  }
  return frases[chave]
}

function verificar_dois_dados_true(a, b) {
  return a === 0 || a === 1 && b === 0 || b === 1
}

main()
