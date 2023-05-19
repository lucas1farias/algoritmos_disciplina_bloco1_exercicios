

// function eh_numerico(colecao) {
//   let posicoes_numeros = []
//   for (let i = 0; i < colecao.length; i++) {
//     !isNaN(colecao[i]) ? posicoes_numeros.push(i) : null
//   }
//   return posicoes_numeros
// }

function valor_entre(ref, min, max) {
  return ref >= min && ref <= max
}

function cacha_alta(conteudo, separado) {
  let texto = ''
  
  if (separado) {
    for (let i = 0; i < conteudo.length; i++) {
      texto += conteudo[i].toUpperCase() + ' '
    }
  } else {
    for (let i = 0; i < conteudo.length; i++) {
      texto += conteudo[i].toUpperCase()
    }
  }
  
  return texto
}

function obter_alfabeto(tipo) {
  let minus = 'a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t.u.v.w.x.y.z'.split('.')
  
  if (tipo == 0) {
    return minus
  } 
  else {
    let maius = cacha_alta(minus, true).split(' ')
    maius.splice(maius.length - 1, 1)
    return maius
  }
}

function obter_codigo_letra(char) {
  return char.charCodeAt(0)
}

function reverter_codigo_letra(codigo) {
  return String.fromCharCode(codigo)
}

function editar_char_codigo(char, n_saltos, positivo=true) {
  if (!positivo) {
    n_saltos = - n_saltos
  }
  let codigo_da_letra = obter_codigo_letra(char) + n_saltos
  return reverter_codigo_letra(codigo_da_letra)
}

function editar_char_codigo_letras(texto, n_saltos, positivo=true) {
  let filtro = ''
  if (!positivo) {
    for (let i = 0; i < texto.length; i++) {
      if (eh_letra(texto[i])) {
        filtro += editar_char_codigo(texto[i], n_saltos, false)
      } 
      // Manter o char que não for letra sem alteração
      else {
        filtro += texto[i]
      }
    }
  } 

  //
  else {
    for (let i = 0; i < texto.length; i++) {
      if (eh_letra(texto[i])) {
        filtro += editar_char_codigo(texto[i], n_saltos)
      } 
      // Manter o char que não for letra sem alteração
      else {
        filtro += texto[i]
      }
    }
  }
  
  return filtro
}

function editar_char_codigo_global(texto, n_saltos, positivo=true) {
  let filtro = ''
  if (!positivo) {
    for (let i = 0; i < texto.length; i++) {
      filtro += editar_char_codigo(texto[i], n_saltos, false)
    } 
  }

  else {
    for (let i = 0; i < texto.length; i++) {
      filtro += editar_char_codigo(texto[i], n_saltos)
    }
  }
  
  return filtro
}

function eh_letra(char) {
  const codigo_ascii = obter_codigo_letra(char)
  const eh_letra_maiuscula = valor_entre(codigo_ascii, 65, 90)
  const eh_letra_minuscula = valor_entre(codigo_ascii, 97, 122)
  
  return eh_letra_maiuscula || eh_letra_minuscula ? true : false
}

function filtrar_letras(texto) {
  let filtro = ''
  for (char of texto) {
    if (eh_letra(char)) {
      filtro += char
    }
  }
  return filtro
}

function inverter_texto(texto) {
  let texto_invertido = ''
  let contador = 0
  for (let i = 0; i < texto.length; i++) {
    texto_invertido += texto[(texto.length - 1) - contador]
    contador++
  }
  return texto_invertido
}

function obter_metade_texto(texto) {
  return Math.trunc(texto.length / 2)
}

function fatiar_texto(texto, indice, invertido=false) {
  let texto_formatado = ''
  
  if (invertido) {
    for (let i = 0; i < indice; i++) {
      texto_formatado += texto[i]
    }
  } 
  // Não invertido
  else {
    for (let i = indice; i < texto.length; i++) {
      texto_formatado += texto[i]
    }
  }
  
  return texto_formatado
}

// const exemplo = substituir_cadeia_char('Javascript', 0, 3, 'Python')
function substituir_cadeia_char(txt, min, max, particula) {
  let container = ''

  if (min == 0) {
    min = -1
  }
  
  for (let i = 0; i < txt.length; i++) {
    if (i < min) {
      container += txt[i]
    }
    if (i == min) {
      container += txt[i]
    }
    if (i > min && i < max) {
      container += ''
    }
    if (i == max) {
      container += ''
      container += particula
    }
    if (i > min && i > max) {
      container += txt[i]
    }
  }
  
  return container
}

console.log(cacha_alta(`\nRange dos códigos do alfabeto minúsculo: {{{ ${obter_codigo_letra('a')} }}} {{{ ${obter_codigo_letra('z')} }}}`))
console.log(cacha_alta(`Range dos códigos do alfabeto maiúsculo: {{{ ${obter_codigo_letra('A')} }}} {{{ ${obter_codigo_letra('Z')} }}}`))

const alfabeto_minusculo = obter_alfabeto(0)
const alfabeto_maiusculo = obter_alfabeto(1)

// PROVAR QUE TODAS AS LETRAS SÃO LETRAS: 26 + 26 = 52
let contador = 0
alfabeto_maiusculo.forEach((char, i) => {
  if (eh_letra(char)) {
    contador++
  } 
  if (eh_letra(alfabeto_minusculo[i])) {
    contador++
  }
})

console.log(cacha_alta(`Qtd. de letras dos 2 alfabetos juntas? {{{ ${contador} }}}`))

let exemplo_a = 'Texto #3'
console.log(cacha_alta('Teste de filtragem com um código: '), [exemplo_a], cacha_alta('(Remover chars não alfabéticos):'), `{{{ ${filtrar_letras(exemplo_a)} }}}`)

let regra_de_ceasar = []
alfabeto_minusculo.forEach((letra, i) => {
  regra_de_ceasar.push(`${letra} = ${editar_char_codigo(letra, 3)}`)
  regra_de_ceasar.push(`${alfabeto_maiusculo[i]} = ${editar_char_codigo(alfabeto_maiusculo[i], 3)}`)
})

console.log(cacha_alta(`Todas as letras traduzidas para formato cifra de Ceasar: ${regra_de_ceasar}`))

// exemplo_a = filtrar_letras(exemplo_a)
// console.log(`[exemplo_b] [filtrar_letras] após filtrar caracteres apenas letras: ${exemplo_a}`)

// exemplo_a = editar_char_codigo_letras(exemplo_a, 3)
// console.log(`[exemplo_b] [editar_char_codigo_letras] após subir cada caracter letra 3 casas a ->: ${exemplo_a}`)

// exemplo_a = inverter_texto(exemplo_a)
// console.log(`[exemplo_b] [inverter_texto] após inverter todos os caracteres letras: ${exemplo_a}`)

// exemplo_a = editar_char_codigo_letras(exemplo_a, 1, false)
// console.log(`[exemplo_b] [editar_char_codigo_letras] após descer (par=false) cada caracter letra 1 casa a <-: ${exemplo_a}`)
