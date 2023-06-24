

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

  const arquivo_txt_montadoras = 'montadoras.txt'
  const arquivo_txt_modelos = 'modelos.txt'
  const arquivo_txt_veiculos = 'veiculos.txt'
  
  let montadoras = []
  let montadoras_receptora = [] // recebe dados de arquivo de txt "montadoras.txt"
  let veiculos_receptora = [] // recebe dados de arquivo de txt "veiculos.txt"
  let modelos = []
  let entrada = undefined
  let entradaB = undefined
  
  // Montadora pré-definida: Bra
  montadoras[0] = {
    'id': nova_ulid(),
    'nome': 'Bra',
    'pais': 'Brasil',
    'ano_fundacao': 1972
  }
  
  // Montadora pré-definida: Arg
  montadoras[1] = {
    'id': nova_ulid(),
    'nome': 'Arg',
    'pais': 'Argentina',
    'ano_fundacao': 1966
  }

  // Modelo "A" pré-definido vinculado a: Bra
  modelos[0] = {
    'id': nova_ulid(), 
    'nome': 'A', 
    'montadora': montadoras[0], 
    'valor_referencia': 60000, 
    'motorizacao': 1.8, 
    'turbo': true, 
    'automatico': true
  }
  
  // Modelo "B" pré-definido vinculado a: Bra
  modelos[1] = {
    'id': nova_ulid(), 
    'nome': 'B', 
    'montadora': montadoras[0], 
    'valor_referencia': 70000, 
    'motorizacao': 1.4, 
    'turbo': false, 
    'automatico': true
  }

  // Modelo "C" pré-definido vinculado a: Arg
  modelos[2] = {
    'id': nova_ulid(), 
    'nome': 'C', 
    'montadora': montadoras[1], 
    'valor_referencia': 80000, 
    'motorizacao': 1.6, 
    'turbo': true, 
    'automatico': false
  }

  // Modelo "C" pré-definido vinculado a: Arg
  modelos[3] = {
    'id': nova_ulid(), 
    'nome': 'D', 
    'montadora': montadoras[1], 
    'valor_referencia': 100000, 
    'motorizacao': 1.0, 
    'turbo': false, 
    'automatico': true
  }

  let conteudo_em_arquivo = extrair_conteudo_textual(arquivo_txt_montadoras)
  let txt_dos_modelos = extrair_conteudo_textual(arquivo_txt_modelos)

  while (entrada != 0) {
    entrada = nova_entrada(menu())
    
    // Criar montadora
    if (entrada === opcoes.criar) {
      const nome = nova_entrada_txt('Informe o NOME da MONTADORA >>> ')
      const pais = nova_entrada_txt('Informe o PAIS do MONTADORA >>> ')
      const ano_fundacao = nova_entrada('Informe o ANO DE FUNDACAO da montadora >>> ')
      novo_registro(montadoras, chaves['montadora'], [nova_ulid(), nome, pais, ano_fundacao])
      continuar()
    }
    // Listar montadoras
    else if (entrada === opcoes.listar) {
      exibir(rotulos('montadoras_disponiveis'))
      exibir_objetos(montadoras, chaves['montadora'], 'montadoras')
      console.log(montadoras)
      continuar()
    }
    else if (entrada === opcoes.alterar) {
      exibir(rotulos['montadoras_disponiveis'])
      exibir_nomes(montadoras, chaves['montadora'][1])
      const montadora_i = nova_entrada(frases_de_input_parte1('informar_i_da_montadora'))
      
      exibir('Informe o NÚMERO do CAMPO a ser alterado')
      exibir_atribs(chaves['montadora'])
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
    // Na parte 2, foi pedida uma funcionalidade que afeta diretamente esse recurso
    /*
    ======= ANTES =======
      exibir(rotulos('remocao_montadoras'))
      exibir_nomes(montadoras, chaves['montadora'][1])
      const indice_montadora = nova_entrada('Informe o NÚMERO que representa a MONTADORA >>> ')
      montadoras = remover_montadora_limitada(montadoras, indice_montadora)
    */
    else if (entrada === opcoes.remover) {

      exibir(rotulos('remocao_montadoras'))
      exibir_nomes(montadoras, chaves['montadora'][1])
      const indice_montadora = nova_entrada('Informe o NÚMERO que representa a MONTADORA >>> ')
      
      // Recebe os modelos a serem deletados (seus i são achados no loop abaixo)
      const modelos_a_serem_deletados = obter_objetos_a_serem_deletados(
        modelos, montadoras, indice_montadora, ['montadora', 'nome']
      )
      
      if (len(modelos_a_serem_deletados) != 0) {
        exibir(rotulos('montadoras_encontradas'))
        exibir(`${len(modelos_a_serem_deletados)} modelo(s)`)

        const confirmacao_remocao = nova_entrada(frases_de_input_parte1('confirmar_remocao'))

        if (confirmacao_remocao === 1) {
          const i_dos_modelos_sobreviventes = obter_indices_diferentes(modelos, modelos_a_serem_deletados)
          modelos = filtrar_modelos(i_dos_modelos_sobreviventes, modelos)
          montadoras = remover_montadora_limitada(montadoras, indice_montadora)
          exibir(rotulos('info'))
          exibir(tratamentos('modelos_removidos'))
        } 
        else {
          exibir(rotulos('info'))
          exibir(tratamentos('cancelamento_de_remocao')) 
        }
      } 
      else {
        exibir(rotulos('info'))
        exibir(tratamentos('veiculo_sem_montadora'))
      }
      continuar()
    }
    else if (entrada === opcoes.status) {
      exibir(`${len(montadoras) !== 0 ? `${rotulos['info']}\n${len(montadoras)} montadora(s)` : `${rotulos['info']}\n${rotulos['sem_montadoras']}`}`)
      continuar()
    }
    // GRAVAÇÃO
    else if (entrada === opcoes.anexar_em_txt) {
      exibir(rotulos('info'))
      exibir(infos('modelos_gravados_em_txt', ` ${arquivo_txt_montadoras}`))
      anexar_conteudo_textual(arquivo_txt_montadoras, criar_string_de_registro(montadoras, chaves['montadora'], 'montadoras'))
      continuar()
    }
    // EXTRAÇÃO (precisa que "montadoras.txt") tenha algum dado, senão: retorno vazio
    else if (entrada === opcoes.extrair_de_txt) {
      
      const rascunho = nova_lista(fatiar, conteudo_em_arquivo + '\r', '\r')
      const rascunho_refinado = nova_string(rascunho, '')
      const conteudo = nova_lista(fatiar, rascunho_refinado + '\n', '\n')

      let indice = 0
      for (let i = 0; i < len(conteudo) - 1; i++) {
        montadoras_receptora[indice] = reverter_txt_em_objeto_modelos(conteudo[i], chaves['montadora'], 'montadoras')
        indice++
      }
      
      exibir(rotulos('cada_objeto_de_montadora'))
      loop_com_intervalo(montadoras_receptora)
      continuar()
    }

    /* PARTE 2 
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    -----------------------------------------------------------------------------------------------
    */

    else if (entrada === opcoes.parte_2) {
      const opcoes = {
        'criar_modelo': 1,
        'listar_modelos': 2,
        'listar_modelos_filtro': 3,
        'remover_modelo': 4,
        'alterar_modelo': 5,
        'ver_objeto_da_montadora_do_modelo': 6,
        'gravar_veiculos_em_txt': 7,
        'extrair_veiculos_de_txt': 8
      }

      const chaves_ = {
        'modelo': ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
      }

      entradaB = nova_entrada(menu_parte2())
      
      // Eu preciso do índice do montadora para vincular um modelo a ela
      if (entradaB === opcoes.criar_modelo) {
        exibir(rotulos('indice_das_montadoras'))
        exibir_nomes(montadoras, chaves['montadora'][1])
        
        const montadora_i = nova_entrada(frases_de_input_parte2('informar_i_da_montadora'))
        // ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
        const nome_modelo = nova_entrada_txt(frases_de_input_parte2('informar_nome_modelo'))
        const valor_ref = nova_entrada(frases_de_input_parte2('informar_valor_referencia'))
        const motorizacao = nova_entrada(frases_de_input_parte2('informar_potencia_motor'))
        let eh_turbo = nova_entrada(frases_de_input_parte2('perguntar_se_eh_turbo'))
        let eh_automatico = nova_entrada(frases_de_input_parte2('perguntar_se_eh_automatico'))
        
        eh_turbo === 1 ? eh_turbo = true : eh_turbo = false
        eh_automatico === 1 ? eh_automatico = true : eh_automatico = false
        
        // Um objeto de veículo vinculado à uma montadora X (pelo i=2 do array passado como parâmetro abaixo)
        novo_registro(
          modelos, 
          chaves_['modelo'], 
          [nova_ulid(), nome_modelo, montadoras[montadora_i], valor_ref, motorizacao, eh_turbo, eh_automatico]
        )
        continuar()
      }

      else if (entradaB === opcoes.listar_modelos) {
        exibir(rotulos('modelos_disponiveis'))
        exibir_objetos(modelos, chaves_['modelo'], 'modelos')
        continuar()
      }
      
      // Eu preciso do índice da montadora p/ filtrar o modelo vinculado à montadora X
      else if (entradaB === opcoes.listar_modelos_filtro) {
        exibir(rotulos('indice_das_montadoras'))
        exibir_nomes(montadoras, chaves['montadora'][1])
        
        const montadora_i = nova_entrada(frases_de_input_parte2('informar_i_da_montadora'))
        
        exibir(rotulos('veiculos_vinculados_nessa_montadora'))
        filtrar_limitado(criterio_i_montadora, modelos, montadoras, montadora_i, chaves_['modelo'])
        continuar()
      }
      
      // Estou ciente de que a função não é performática e que poderia usar "splice"
      else if (entradaB === opcoes.remover_modelo) {
        exibir(rotulos('indice_dos_modelos'))
        exibir_nomes(modelos, chaves_['modelo'][1])
        const modelo_i = nova_entrada(frases_de_input_parte2('informar_i_da_montadora'))
        modelos = remover_montadora_limitada(modelos, modelo_i)
        continuar()
      }

      else if (entradaB === opcoes.alterar_modelo) {
        exibir(rotulos('modelos_disponiveis'))
        exibir_nomes(modelos, chaves_['modelo'][1])
        
        const modelo_i = nova_entrada(frases_de_input_parte2('informar_i_do_modelo'))
        
        exibir(rotulos('indice_dos_campos'))
        exibir_atribs(chaves_['modelo'])

        const atrib = nova_entrada(frases_de_input_parte2('informar_numero_do_atrib'))
        let novo_valor = undefined
        
        /* 'id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico' */
        /*       1       2            3                   4              5        6 */
        /*       str     obj          int                 bool           bool     bool */
        /* Se === 2, exibir qual a montadora via "modelos[modelo_i]['montadora']" */
        /* Pedir uma nova entrada "montadora_i" para que o modelo seja vinculado a outra montadora */
        
        // CHAVE: nome
        if (atrib === 1) {
          novo_valor = nova_entrada_txt(frases_de_input_parte2('informar_novo_valor'))
          alterar_atrib(modelos[modelo_i], chaves_['modelo'][atrib], novo_valor)
        } 
        
        // CHAVE: montadora (+ complexo)
        else if (atrib === 2) {
          exibir(rotulos('montadora_desse_modelo'))
          exibir(modelos[modelo_i]['montadora']['nome']) // montadora vinculada
          exibir(rotulos('montadoras_disponiveis'))
          exibir_nomes(montadoras, chaves['montadora'][1]) // opções de montadora
          
          novo_valor = nova_entrada_txt(frases_de_input_parte2('informar_i_da_montadora'))
          const nova_montadora_vinculada = montadoras[novo_valor]
          alterar_atrib(modelos[modelo_i], chaves_['modelo'][atrib], nova_montadora_vinculada)
        }

        // CHAVES: valor_referencia & motorizacao
        else if (atrib === 3 || atrib === 4) {
          novo_valor = nova_entrada_txt(frases_de_input_parte2('informar_novo_valor'))
          alterar_atrib(modelos[modelo_i], chaves_['modelo'][atrib], Number(novo_valor))
        }

        // CHAVES: turbo & automatico
        else if (atrib === 5 || atrib === 6) {
          const valor_atual_do_atrib = modelos[modelo_i][chaves_['modelo'][atrib]]
          alterar_atrib(modelos[modelo_i], chaves_['modelo'][atrib], !valor_atual_do_atrib)
        }
        continuar()
      }
      
      // Opção adicional após editar "montadora", para verificar se mudou de forma mais ampla
      else if (entradaB === opcoes.ver_objeto_da_montadora_do_modelo) {
        exibir(rotulos('modelos_disponiveis'))
        exibir_nomes(modelos, chaves_['modelo'][1])
        const modelo_i = nova_entrada(frases_de_input_parte2('informar_i_do_modelo'))
        exibir(modelos[modelo_i]['montadora'])
        
      }
      // GRAVAÇÃO DE DADOS DE ARRAY EM ARQUIVO DE TEXTO
      else if (entradaB === opcoes.gravar_veiculos_em_txt) {
        exibir(rotulos('info'))
        exibir(infos('modelos_gravados_em_txt', ` ${arquivo_txt_veiculos}`))
        anexar_conteudo_textual(arquivo_txt_veiculos, criar_string_de_registro(modelos, chaves_['modelo'], 'modelos'))
        continuar()
      }
      // EXTRAÇÃO
      else if (entradaB === opcoes.extrair_veiculos_de_txt) {
      
        const rascunho = nova_lista(fatiar, txt_dos_modelos + '\r', '\r')
        const rascunho_refinado = nova_string(rascunho, '')
        const conteudo = nova_lista(fatiar, rascunho_refinado + '\n', '\n')
        
        // reverter_txt_em_objeto_modelos(txt_dos_modelos, chaves_['modelo'])
        let indice = 0
        for (let i = 0; i < len(conteudo) - 1; i++) {
          veiculos_receptora[indice] = reverter_txt_em_objeto_modelos(conteudo[i], chaves_['modelo'], 'modelos')
          indice++
        }
        
        exibir(rotulos('cada_objeto_de_modelo'))
        loop_com_intervalo(veiculos_receptora)
        continuar()
      }
    }
  }
}

// Usado na entrada 3
function alterar_atrib(objeto_registro, nome_atrib, novo_valor) {
  objeto_registro[nome_atrib] = novo_valor
}

function anexar_conteudo_textual(nome_arquivo, conteudo) {
  return gerenciador.writeFileSync(nome_arquivo, conteudo)
}

function continuar() {
  terminal.question('<<< Continuar = ENTER >>>')
  console.clear()
}

// Entrada 6 (PARTE 1) (PARTE 2)
function criar_string_de_registro(colecao, chaves, tipo) {
  let linha = ''

  if (tipo === 'montadoras') {
    for (let i = 0; i < len(colecao); i++) {
      linha += `${colecao[i][chaves[0]]} ${colecao[i][chaves[1]]} ${colecao[i][chaves[2]]} ${colecao[i][chaves[3]]}\n`
    }
  } 
  else if (tipo === 'modelos') {
    for (let i = 0; i < len(colecao); i++) {
      linha += `${colecao[i][chaves[0]]} ${colecao[i][chaves[1]]} ${colecao[i][chaves[2]][chaves[1]]} ${colecao[i][chaves[3]]} ${colecao[i][chaves[4]]} ${colecao[i][chaves[5]]} ${colecao[i][chaves[6]]}\n`
    }
  }
  return linha
}

function criterio_i_montadora(a, b, ref) {
  return a['montadora']['nome'] === b[ref]['nome']
}

function exibir(conteudo) {
  console.log(conteudo)
}

// Usado na entrada 3
function exibir_atribs(chaves) {
  for (let i = 0; i < len(chaves); i++) {
    i !== 0 ? exibir(`${i}: ${chaves[i]}`) : null
  }
}

// Usado na entrada 3
function exibir_nomes(colecao, chave_nome) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(`${i}: ${colecao[i][chave_nome]}`)
  }
}

// Usado na entrada 2
function exibir_objetos(colecao, chaves, categoria) {
  if (categoria === 'montadoras') {
    /* [0] ignorado => ['id', 'nome', 'pais', 'ano_fundacao'] */
    for (let i = 0; i < len(colecao); i++) {
      const nome = `${chaves[1]}: ${colecao[i][chaves[1]]} || `
      const pais = `${chaves[2]}: ${colecao[i][chaves[2]]} || `
      const ano_fundacao = `${chaves[3]}: ${colecao[i][chaves[3]]}`
      exibir(`${nome}${pais}${ano_fundacao}`)
    }
  }
  else if (categoria === 'modelos') {
    /* [0] ignorado => ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico'] */
    for (let i = 0; i < len(colecao); i++) {
      const nome = `${chaves[1]}: ${colecao[i][chaves[1]]} || `
      const montadora = `${chaves[2]}: ${colecao[i][chaves[2]][chaves[1]]} || `
      const valor_referencia = `${chaves[3]}: ${colecao[i][chaves[3]]} || `
      const motorizacao = `${chaves[4]}: ${colecao[i][chaves[4]]} || `
      const turbo = `${chaves[5]}: ${colecao[i][chaves[5]]} || `
      const automatico = `${chaves[6]}: ${colecao[i][chaves[6]]}`
      exibir(`${nome}${montadora}${valor_referencia}${motorizacao}${turbo}${automatico}`)
    }
  }
}

function extrair_conteudo_textual(caminho) {
  return gerenciador.readFileSync(caminho, 'utf8')
}

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
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

function filtrar_modelos(colecao, registro) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    array[array_i] = registro[colecao[i]]
    array_i++
  }
  return array
}

function frases_de_input_parte1(chave) {
  const frases = {
    'informar_i_da_montadora': 'Informe o INDICE da MONTADORA (valores acima) >>> ',
    'confirmar_remocao': 'Os MODELOS devem ser DELETADOS? (1 - Sim || outra coisa - Não)'
  }
  return frases[chave]
}

function frases_de_input_parte2(chave) {
  const frases = {
    'informar_i_da_montadora': 'Informe o INDICE da MONTADORA (valores acima) >>> ',
    'informar_i_do_modelo': 'Informe o INDICE do MODELO (valores acima) >>> ',
    'informar_numero_do_atrib': 'Qual o NUMERO do atributo? (valores acima) >>> ',
    'informar_novo_valor': 'Informe o NOVO VALOR >>> ',
    'informar_nome_modelo': 'Informe o NOME do MODELO >>> ',
    'informar_valor_referencia': 'Informe a VALOR de REFERÊNCIA >>> ',
    'informar_potencia_motor': 'Informe a POTÊNCIA do MOTOR >>> ',
    'perguntar_se_eh_turbo': 'O modelo possui a propriedade "TURBO"? (0 - não / 1 - sim) >>> ',
    'perguntar_se_eh_automatico': 'O modelo possui a propriedade "AUTOMÁTICO"? (0 - não / 1 - sim) >>> ',
    'informar_i_nome_campo': 'Informe o CAMPO da MONTADORA a ser alterado >>> '
  }
  return frases[chave]
}

function infos(chave, complemento='') {
  const txt = {
    'modelos_gravados_em_txt': 'Montadoras anexadas ao arquivo'
  }
  
  return txt[chave] + complemento
}

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function loop_com_intervalo(colecao) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(colecao[i])
    continuar()
    console.clear()
  }
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
  5 - alterar modelo
  6 - ver objeto da montadora do modelo
  7 - gravar modelos em (.txt)
  8 - extrair modelos de (.txt)
  >>> `
}

function nova_entrada(conteudo) {
  return Number(terminal.question(conteudo))
}

function nova_entrada_txt(conteudo) {
  return terminal.question(conteudo)
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

// Entrada 1 (PARTE 1)
function novo_registro(registro, chaves, valores) {
  const ultimo_i = len(registro)
  const objeto_de_registro = {}
  for (let i = 0; i < len(chaves); i++) {
    objeto_de_registro[chaves[i]] = valores[i]
  }
  registro[ultimo_i] = objeto_de_registro
}

function obter_indices_diferentes(colecaoA, colecaoB) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecaoA) || i < len(colecaoB); i++) {
    if (colecaoA[i] != colecaoB[i]) {
      array[array_i] = i
      array_i++
    }
  }
  return array
}

function obter_objetos_a_serem_deletados(colecaoA, colecaoB, indice, chaves) {
  /* ======= RACIOCINIO QUE CRIOU A FUNÇÃO =======
  const indice_montadora = nova_entrada('Informe o NÚMERO que representa a MONTADORA >>> ')
  const i_dos_modelos_da_montadora = []
  let indice = 0
  for (let i = 0; i < len(modelos); i++) {
    const modelo_pertence_a_montadora = modelos[i]['montadora']['nome'] === montadoras[indice_montadora]['nome']
    if (modelo_pertence_a_montadora) {
      i_dos_modelos_da_montadora[indice] = modelos[i]
      indice++
    }
  }
  console.log(i_dos_modelos_da_montadora)
  */
  const array = []
  let array_i = 0

  for (let i = 0; i < len(colecaoA); i++) {
    const objeto_eh_deletavel = colecaoA[i][chaves[0]][chaves[1]] === colecaoB[indice][chaves[1]]
    if (objeto_eh_deletavel) {
      array[array_i] = colecaoA[i]
      array_i++
    }
  }

  return array
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

// Entrada 8 (PARTE 2)
function reverter_txt_em_objeto_modelos(colecao, chaves, tipo) {
  const array = []
  const ultimo_i = 0
  const registro_temp = {}

  for (let i = 0; i < len(chaves); i++) {
    registro_temp[chaves[i]] = nova_lista(fatiar, colecao + ' ', ' ')[i]
  }

  /* 
  Existe uma anomalia que não consigo entender no arquivo de texto
  A última chave junta seus dados com o primeiro dado da linha de baixo
  Cada condição abaixo trata um tipo de arquivo
  O tratamento evita que o último valor da chave pegue dados da linha posterior
  É feito um fatiamento no caractere que os conecta
  */
  if (tipo === 'montadoras') {
    array[ultimo_i] = registro_temp
    let ultima_chave = chaves[len(chaves) - 1]
    array[ultimo_i][ultima_chave] = Number(nova_lista(fatiar, array[ultimo_i][ultima_chave] + ',', ',')[0])
  }
  
  else if (tipo === 'modelos') {
    array[ultimo_i] = registro_temp
    let ultima_chave = chaves[len(chaves) - 1]
    array[ultimo_i][ultima_chave] = nova_lista(fatiar, array[ultimo_i][ultima_chave] + '\n', '\n')[0]
  }

  return array[0]
}

function rotulos(chave) {
  const txt = {
    'info': '\n========== INFO ==========',
    'criar_modelo': '\n========== CRIAR MODELO ==========',
    'montadoras_disponiveis': '\n========= MONTADORAS DISPONÍVEIS =========',
    'modelos_disponiveis': '\n========= MODELOS DISPONÍVEIS =========',
    'indice_das_montadoras': '\n========= INDICE DAS MONTADORAS ==========',
    'indice_dos_modelos': '\n========= INDICE DOS MODELOS ==========',
    'veiculos_vinculados_nessa_montadora': '\n========== VEICULOS DA MONTADORA ==========',
    'montadora_desse_modelo': '\n==========  MONTADORA VINCULADA A ESTE MODELO ==========',
    'indice_dos_campos': '\n========== INDICE DOS CAMPOS ==========',

    'remocao_montadoras': '\n========== REMOCAO DE MONTADORAS ==========',
    'montadoras_encontradas': '\n========== MONTADORAS ENCONTRADAS ==========',
    'cada_objeto_de_montadora': '\n========== MONTADORAS ==========',
    'cada_objeto_de_modelo': '\n========== MODELOS =========='
  }
  return txt[chave]
}

function tratamentos(chave, complemento='') {
  const txt = {
    'cancelamento_de_remocao': 'OPERACAO CANCELADA',
    'veiculo_sem_montadora': 'VEICULOS DESSA MONTADORA NAO FORAM ENCONTRADAS',
    'modelos_removidos': 'MODELO(S) REMOVIDO(S)'
  }
  return txt[chave] + complemento
}

main()
