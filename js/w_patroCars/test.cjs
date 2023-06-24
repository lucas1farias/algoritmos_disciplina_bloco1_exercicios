

const gerenciador = require('fs')

function len(colecao) {
  let contador = 0
  for (let i in colecao) {
    contador++
  }
  return contador
}

function indices_diferentes(colecaoA, colecaoB) {
  const diferentes = []
  let array_i = 0

  for (let i = 0; i < len(colecaoA) || i < len(colecaoB); i++) {
    if (colecaoA[i] !== colecaoB[i]) {
      diferentes[array_i] = i
    }
  }

  return diferentes
}

const arr1 = [0, 1, 2]
const arr2 = [0, 1]

// for (let i = 0; i < arr1.length || i < arr2.length; i++) {
//   if (arr1[i] !== arr2[i]) {
//     console.log(`Os elementos nas posições ${i} são diferentes.`)
//   }
// }

function anexar_conteudo_textual(nome_arquivo, conteudo) {
  return gerenciador.writeFileSync(nome_arquivo, conteudo)
}

function gravar_dados_em_txt(colecao, chaves, separador, callback, exe, nome_arquivo) {
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
    console.log('---o ', string)
    // callback(exe, nome_arquivo, string)
  }
}

montadoras = [
  {
    'id': '01H3NN7JC70G2SV39H8PER458J',
    'nome': 'Bra',
    'pais': 'Brasil',
    'ano_fundacao': 1972
  },
  {
    'id': '01H3NN7JC8861PEXPB1MS7BTQW',
    'nome': 'Arg',
    'pais': 'Argentina',
    'ano_fundacao': 1966
  }
]

// gravar_dados_em_txt(montadoras, chaves['montadora'], '\n', anexar_conteudo_textual, gerenciador, 'montadoras.txt')

const chaves = ['id', 'nome', 'pais', 'ano_fundacao']
let linha = ''
for (let i = 0; i < len(montadoras); i++) {
  linha += `${montadoras[i][chaves[0]]} ${montadoras[i][chaves[1]]} ${montadoras[i][chaves[2]]} ${montadoras[i][chaves[3]]}\n`
}
console.log(linha)
anexar_conteudo_textual('montadoras.txt', linha)
