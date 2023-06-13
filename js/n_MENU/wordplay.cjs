

/*
// Não usada aqui
function ler_unidade_char(indice, char) {
  for (let i = 0; i < len(indice); i++) {
    if (indice[i] === char) {
      console.log(i)
    }
  }
}

// Para funcionar, o terminal precisa estar no path da configuração em "input"
// var input = require('fs').readFileSync('stdin', 'utf8')
// var colecao_maior = input.split('\r').join('').split('\n')
*/

// Qual o motivo da minha função "codigo_letra" estar retornando "undefined" em "criterio_eh_palavra"?
var input = require('fs').readFileSync('stdin3', 'utf8')
const a = nova_lista(fatiar, input + '\r', '\r')
const b = nova_string(a, 0, len(a), '')
const lines = nova_lista(fatiar, b + '\n', '\n')
const readline = require('readline-sync')

function main() {
  let palavras_nao_apenas_letras = []
  let palavras_apenas_letras = []
  let palavras_com_todas_as_letras = []
  let entrada = undefined
  
  while (entrada != 0) {
    entrada = entrada_num(menu())
    
    if (entrada == 1) {
      percorrer(colecao_maior)
      const resultado = `\n========== PALAVRAS ENCONTRADAS ==========\n${len(colecao_maior)} palavra(s)`
      exibir(resultado)
    }
    else if (entrada == 2) {
      const palavras_encontradas_com_inicial = exibir_palavras_com_inicial(colecao_maior)
      const resultado = `
      ========== PALAVRAS ENCONTRADAS ==========
      ${len(palavras_encontradas_com_inicial)} palavras
      ${porcentagem_micro_em_relacao_macro(len(palavras_encontradas_com_inicial), len(colecao_maior))}%
      `
      exibir(resultado)
      exibir(palavras_encontradas_com_inicial)
    }
    else if (entrada == 3) {
      palavras_nao_apenas_letras = exibir_palavras(colecao_maior)
      const total = len(colecao_maior)
      const encontrados = len(palavras_nao_apenas_letras)
      const porcentagem = porcentagem_micro_em_relacao_macro(encontrados, total)
      
      const resultado = `
      ========== PALAVRAS QUE NÃO SÃO APENAS LETRAS ==========
      ${encontrados} palavras (${porcentagem}%) (${encontrados}/${total})
      ${palavras_nao_apenas_letras}`
      exibir(resultado)
    }
    else if (entrada == 5) {
      palavras_apenas_letras = exibir_palavras(colecao_maior, true)
      const total = len(colecao_maior)
      const encontrados = len(palavras_apenas_letras)
      const porcentagem = porcentagem_micro_em_relacao_macro(encontrados, total)
      
      const resultado = `
      ========== PALAVRAS QUE NÃO SÃO APENAS LETRAS ==========
      ${encontrados} palavras (${porcentagem}%) (${encontrados}/${total})
      ${palavras_apenas_letras}`
      exibir(resultado)
    }
    else if (entrada == 4) {
      const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
      palavras_com_todas_as_letras = exibir_palavras_com_todas_letras(alfabeto, lines)
      console.log(palavras_com_todas_as_letras)
    }
  }
}

function entrada_num(conteudo) {
  return Number(readline.question(conteudo))
}

function entrada_txt(conteudo) {
  return readline.question(conteudo)
}

function exibir(conteudo) {
  console.log(conteudo)
}

function menu() {
  return `
  ========== WORDPLAY ==========
  0 - Sair
  1 - Exibir todas as palavras
  2 - Consultar palavras com N letras
  3 - Consultar palavras com algo que não seja letra
  4 - COnsultar palavras que possuam todas as letras
  5 - Consultar palavras apenas com letras
  >>> `
}

function len(colecao) {
  let contador = 0
  for (i in colecao) {
    contador ++
  }
  return contador
}

function fatiar(colecao, min, max) {
  let string = ''
  for (let i = min; i <= max; i++) {
    string += colecao[i]
  }
  return string
}

function nova_lista(funcao, colecao, separador) {
  const array = []
  let array_i = 0
  let a = 0
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === separador) {
      array[array_i] = funcao(colecao, a, i - 1)
      array_i++
      a = i + 1
    }
  }
  return array
}

function nova_string(colecao, min, max, separador) {
  let string = ''
  for (let i = min; i < max; i++) {
    i === 0 ? string += colecao[i] : string += separador + colecao[i]
  }
  return string
}

function percorrer(colecao) {
  for (let i = 0; i < len(colecao); i++) {
    exibir(colecao[i])
  }
}

// Uso genérico
function porcentagem_micro_em_relacao_macro(micro, macro) {
  return (micro * 100) / macro
}

// Entrada 2
function exibir_palavras_com_inicial(colecao) {
  const tamanho_palavra = entrada_num('Informe quantas letras a palavra possui >>> ')
  const resultado = filtrar_v2(criterio_tamanho_n, colecao, tamanho_palavra)
  return resultado
}

// Entrada 3 e 5
function exibir_palavras(colecao, inverso=false) {
  // const nao_apenas_palavra = filtrar(criterio_eh_palavra, colecao, true)
  // console.log(nao_apenas_palavra)
  const array = []
  let array_i = 0
  
  if (inverso) {
    for (let i = 0; i < len(colecao); i++) {
      if (eh_palavra(colecao[i])) {
        array[array_i] = colecao[i]
        array_i++
      }
    }
    return array
  }
  else {
    for (let i = 0; i < len(colecao); i++) {
      if (!eh_palavra(colecao[i])) {
        array[array_i] = colecao[i]
        array_i++
      }
    }
    return array
  }
}

// Entrada 3 (funções auxiliares)
function intervalo(min, max) {
  const array = []
  let array_i = 0
  while (min < max) {
    array[array_i] = min
    array_i++
    min++
  }
  return array
}

function codigo_letra(letra) {
  const maiusculas = nova_lista(fatiar, 'A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.', '.')
  const minusculas = nova_lista(fatiar, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.', '.')
  const n_maiusculas = intervalo(65, 91)
  const n_minusculas = intervalo(97, 123)

  for (let i = 0; i < len(maiusculas); i++) {
    if (letra === maiusculas[i]) {
      return n_maiusculas[i]
    }
  }
  for (let i = 0; i < len(minusculas); i++) {
    if (letra === minusculas[i]) {
      return n_minusculas[i]
    }
  }
  return false
}

function letra_codigo(codigo) {
  const maiusculas = nova_lista(fatiar, 'A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.V.W.X.Y.Z.', '.')
  const minusculas = nova_lista(fatiar, 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z.', '.')
  const n_maiusculas = intervalo(65, 91)
  const n_minusculas = intervalo(97, 123)

  for (let i = 0; i < len(n_maiusculas); i++) {
    if (codigo === n_maiusculas[i]) {
      return maiusculas[i]
    }
  }
  for (let i = 0; i < len(n_minusculas); i++) {
    if (codigo === n_minusculas[i]) {
      return minusculas[i]
    }
  }
}

function eh_palavra(colecao) {
  for (let i = 0; i < len(colecao); i++) {
    const codigo_do_char = codigo_letra(colecao[i]) 
    const afirmacao = codigo_do_char >= 65 && codigo_do_char <= 90 || codigo_do_char >= 97 && codigo_do_char <= 122
    if (!afirmacao) {
      return false
    }
  }
  return true
}

// Entrada 4
function exibir_palavras_com_todas_letras(colecao_menor, colecao_maior) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao_maior); i++) {
    // As que serão comparadas são aquelas >= que o tamanho do alfabeto
    if (len(colecao_maior[i]) >= len(colecao_menor)) {
      if (contido_sem_ordem(colecao_menor, colecao_maior[i])) {
        array[array_i] = colecao_maior[i]
        array_i++
      }
    }
  }
  return array
}

// Entrada 4 (funções auxiliares)
function contido(procurado, colecao) {
  for (let i = 0; i < len(colecao); i++) {
    if (colecao[i] === procurado) {
      return true
    }
  }
  return false
}

function diferentes(colecao) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (!contido(colecao[i], array)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

function contido_sem_ordem(colecao_menor, colecao_maior) {
  let contador = 0
  for (let e = 0; e < len(colecao_maior); e++) {
    for (let i = 0; i < len(colecao_menor); i++) {
      colecao_menor[i] === colecao_maior[e] ? contador++ : null
      // console.log(colecao_menor[i], colecao_maior[e], colecao_menor[i] == colecao_maior[e])
    }
  }
  return contador == len(colecao_menor) ? true : false
}

// ---------------------------------------------------- FILTRAR ----------------------------------------------------
function criterio_tamanho_n(i, tamanho) {
  return len(i) === tamanho
}

// Não consegui fazer funcionar em "exibir_palavras_nao_so_letras"
function criterio_eh_palavra(i) {
  const codigo_do_char = codigo_letra(i) 
  console.log(codigo_do_char, i)
  if (!codigo_do_char) {
    console.log('---o ', codigo_do_char)
    return false
  } 
  else {
    console.log('---u ', codigo_do_char)
    const afirmacao = codigo_do_char >= 65 && codigo_do_char <= 90 || codigo_do_char >= 97 && codigo_do_char <= 122
    return afirmacao ? true : false
  }
}

function filtrar(criterio, colecao, inverso=false) {
  const array = []
  let array_i = 0
  
  if (inverso) {
    for (let i = 0; i < len(colecao); i++) {
      if (criterio(colecao[i])) {
        array[array_i] = colecao[i]
        array_i++
      }
    }
    return array
  }
  else {
    for (let i = 0; i < len(colecao); i++) {
      if (!criterio(colecao[i])) {
        array[array_i] = colecao[i]
        array_i++
      }
    }
    return array
  }
  
}

// Quando o critério possui mais de 1 parâmetro
function filtrar_v2(criterio, colecao, extra) {
  const array = []
  let array_i = 0
  for (let i = 0; i < len(colecao); i++) {
    if (criterio(colecao[i], extra)) {
      array[array_i] = colecao[i]
      array_i++
    }
  }
  return array
}

main()
