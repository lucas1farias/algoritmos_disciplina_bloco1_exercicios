

import { question } from "readline-sync"
import { ulid } from "ulid"
const gerenciador = require('fs')

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
  return Number(question(conteudo))
}

function nova_entrada_txt(conteudo) {
  return question(conteudo)
}
