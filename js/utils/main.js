

import { question } from "readline-sync"

/*                                     Entrada e Saída: entrada_saida.[js, py]                                     */
function entrada_num(conteudo) {
  return Number(question(conteudo + ' -----> '))
}

function entrada_txt(conteudo) {
  return question(conteudo + ' -----> ')
}

function exibir(conteudo) {
  console.log(conteudo)
}

/*                                         MATEMÁTICA: matematica.[js, py]                                         */
function decimal(n, casas) {
  return parseFloat(n).toFixed(casas)
} 

function eh_numero(alvo) {
  return !isNaN(alvo)
}

function eh_primo(n) {
  if (n == 1) {
    return false
  }
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return true
  }
  if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0) {
    return true
  } 
  else {
    return false
  }
}

function fatorial(numero) {
  if (numero == 0) {
    return 1
  } 
  else {
    let contador_externo = 1
    let calculo = 0

    for (let i = 1; i <= numero; i++) {
      calculo = contador_externo *= i
    }
    return calculo
  }
}

// Apenas para cálculo de montante
function juros_compostos(capital, taxa, periodo) {
  // É esperado que a taxa já tenha sido convertida (/100)
  // Em cálculos comuns, costuma-se diminuir as casa no cálculo após a *
  // Essa função deixa o valor original sem abreviação
  // A abreviação fica para o retorno
  let montante = capital * Math.pow(1 + taxa, periodo)
  return decimal(montante)
}

function range(min, max) {
  let container = []
  
  for (let i = min; i <= max; i++) {
    container.push(i)
  }
  
  return container
}

function valor_entre(ref, min, max) {
  return ref >= min && ref <= max
}

saltar_linha()
relatorio()
exibir(`[ decimal          ]: >>> decimal(10, 3)                  => ${decimal(10, 3)}`)
exibir(`[ eh_numero        ]: >>> eh_numero(2.7)                  => ${eh_numero(2.7)}`)
exibir(`[ eh_numero        ]: >>> eh_numero('/')                  => ${eh_numero('/')}`)
exibir(`[ eh_primo         ]: >>> eh_primo(8)                     => ${eh_primo(8)}`)
exibir(`[ eh_primo         ]: >>> eh_primo(7)                     => ${eh_primo(7)}`)
exibir(`[ fatorial         ]: >>> fatorial(4)                     => ${fatorial(4)}`)
exibir(`[ juros_compostos  ]: >>> juros_compostos(100, 15/100, 1) => ${juros_compostos(100, 15/100, 1)}`)
exibir(`[ range            ]: >>> range(1, 3)                     => ${range(1, 3)}`)
exibir(`[ valor_entre      ]: >>> valor_entre(2, 1, 3)            => ${valor_entre(2, 1, 3)}`)
fim()

/*                                             STRINGS: texto.[py, js]                                             */
function binario_decimal(conjunto) {
  let contador = 0
  let indices = []
  let progressoes = [1, 2, 4, 8, 16, 32, 64, 128]

  for (let i = 0; i < conjunto.length; i++) {
    if (conjunto[i] == '1') {
      indices.push(i)
    }
  }
  
  for (let i = 0; i < indices.length; i++) {
      contador += progressoes[indices[i]]
  }
  
  return contador
}

function codigo_letra(char) {
  return char.charCodeAt(0)
}

function codigo_letra_alterado(char, n_saltos) {
  const codigo_da_letra = codigo_letra(char) + n_saltos
  return letra_codigo(codigo_da_letra)
}

function deslocar_letras(texto, n_saltos) {
  let filtro = ''
  
  for (let i = 0; i < texto.length; i++) {
    if (eh_letra(texto[i])) {
      filtro += codigo_letra_alterado(texto[i], n_saltos)
    } 
    // Manter o char que não for letra sem alteração
    else {
      filtro += texto[i]
    }
  }
  
  return filtro
}

function eh_letra(char) {
  const codigo_ascii = codigo_letra(char)
  const eh_letra_maiuscula = valor_entre(codigo_ascii, 65, 90)
  const eh_letra_minuscula = valor_entre(codigo_ascii, 97, 122)
  
  return eh_letra_maiuscula || eh_letra_minuscula ? true : false
}

function fim() {
  exibir('========== FIM ==========\n')
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

function letra_codigo(codigo) {
  return String.fromCharCode(codigo)
}

function saltar_linha() {
  exibir('\n')
}

function relatorio() {
  exibir('\n========== RELATÓRIO ==========')
}

function substituir_chars(txt, min, max, particula) {
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

saltar_linha()
relatorio()
exibir(`[ binario_decimal  ]: >>> binario_decimal(inverter_texto('1010'))  => ${binario_decimal(inverter_texto('1010'))}`)
exibir(`[ codigo_letra     ]: >>> codigo_letra('l')                        => ${codigo_letra('l')}`)
exibir(`[ deslocar_letras  ]: >>> deslocar_letras('Hello World', 3)        => ${deslocar_letras('Hello World', 3)}`)
exibir(`[ deslocar_letras  ]: >>> deslocar_letras('Hello World', - 3)      => ${deslocar_letras('Hello World', - 3)}`)
exibir(`[ codigo_letra_alt ]: >>> codigo_letra_alt('j', 7)                 => ${codigo_letra_alterado('j', 7)}`)
exibir(`[ codigo_letra_alt ]: >>> codigo_letra_alt('j', -7)                => ${codigo_letra_alterado('j', -7)}`)
exibir(`[ inverter_texto   ]: >>> inverter_texto('Javascript')             => ${inverter_texto('Javascript')}`)
exibir(`[ letra_codigo     ]: >>> letra_codigo(120)                        => ${letra_codigo(120)}`)
exibir(`[ substituir_chars ]: >>> substituir_chars('Python', 0, 1, 'Java') => ${substituir_chars('Python', 0, 1, 'Java')}`)
fim()
