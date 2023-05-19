

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

function eh_primo_while(limite_inf, limite_sup) {
  let primos = ''
  while (limite_inf <= limite_sup) {
    if (limite_inf == 2 || limite_inf == 3 || limite_inf == 5 || limite_inf == 7) {
      primos += limite_inf + ' '
    }
    if (limite_inf % 2 != 0 && limite_inf % 3 != 0 && limite_inf % 5 != 0 && limite_inf % 7 != 0) {
      primos += limite_inf + ' '
    } 
    limite_inf++
  }
  exibir(primos)
}

function eh_primo_for(limite_inf, limite_sup) {
  let primos = ''
  for (let i = limite_inf; i <= limite_sup; i++) {
    if (i == 2 || i == 3 || i == 5 || i == 7) {
      primos += i + ' '
    }
    if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
      primos += i + ' '
    } 
  }
  exibir(primos)
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

// Dependente de: inverter_texto (ex.:) binario_decimal(inverter_texto('0001'))
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
