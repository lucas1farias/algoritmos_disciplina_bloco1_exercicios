

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
      exibir_objetos(montadoras, chaves['montadora'], 'montadoras')
      continuar()
    }
    else if (entrada === opcoes.alterar) {
      exibir(infos['montadoras_disponiveis'])
      exibir(infos['escolher_id'])
      exibir_nomes(montadoras, chaves['montadora'][1])
      const montadora_i = nova_entrada('Informe o NÚMERO da MONTADORA com base na lista cima >>> ')
      
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
    Ao tentar remover a "montadora", se esta tiver "modelos cadastrados"
    informar ao usuário e perguntar se deseja realmente remover
    
    SIM: removerá a "montadora" e todos os seus modelos
    
    Para eu saber se uma "montadora" possui um "modelo" vinculado, eu preciso:
        . Pedir o índice da montadora (para remover a montadora ao final)
        . Percorrer os modelos['montadora'] que aponta para montadoras[i]
        . Se modelos[i]['montadora']['nome'] === montadoras[i]['nome']
        . Add num array "i"
        . Se len(array) != 0
        . Avisar o usuário que a montadora "X" possui modelos "Y"
        . Se ele disser que pode, percorrer "array" e remover via "modelos[i]"
    */
    else if (entrada === opcoes.remover) {
      exibir_nomes(montadoras, chaves['montadora'][1])
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
        'remover_modelo': 4,
        'alterar_modelo': 5,
        'ver_objeto_da_montadora_do_modelo': 6
      }

      const chaves_ = {
        'modelo': ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
      }

      entradaB = nova_entrada(menu_parte2())
      
      // Eu preciso do índice do montadora para vincular um modelo a ela
      if (entradaB === opcoes.criar_modelo) {
        exibir(rotulos('indice_das_montadoras'))
        exibir_nomes(montadoras, chaves['montadora'][1])
        
        // ['id', 'nome', 'montadora', 'valor_referencia', 'motorizacao', 'turbo', 'automatico']
        const montadora_i = nova_entrada(frases_de_input_parte2('informar_i_da_montadora'))
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
  5 - alterar modelo
  6 - ver objeto da montadora do modelo
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
    'indice_dos_campos': '\n========== INDICE DOS CAMPOS =========='
  }
  return txt[chave]
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

// Usado na entrada 3
function exibir_nomes(colecao, chave_nome) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(`${i}: ${colecao[i][chave_nome]}`)
  }
}

// Usado na entrada 3
function exibir_atribs(chaves) {
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

function verificar_dois_dados_true(a, b) {
  return a === 0 || a === 1 && b === 0 || b === 1
}

main()
