

const drop = '\n'

function print(label) {
  console.log(label)
}

function xerox(char, amount) {
  const inittialChar = char
  for (let value = 0; value < amount; value++) {
    char += inittialChar
  }
  return char
}

// CALCULAR
function getPercentage(value, percentage, roundIt) {
  const fractionOfPercentage = value * (percentage / 100)
  
  if (roundIt) {
    return Math.round(fractionOfPercentage)
  } else {
    return fractionOfPercentage.toFixed(1)
  }
}

print(drop)
print(`${xerox('=', 20)} Função: getPercentage ${xerox('=', 20)}`)
print(`Quanto é 90% do valor 72? ${getPercentage(72, 90, false)}`)
print(`Quanto é 90% do valor 72? ${getPercentage(72, 90, true)}`)

function getRemainderFloat(number) {
  return (number % 1).toFixed(2)
}

print(drop)
print(`${xerox('=', 20)} Função: getRemainderFloat ${xerox('=', 20)}`)
print(`Quanto é o resto de 7.72? ${getRemainderFloat(7.72)}`)

function imc(weight, height) {
  const heightIsInteger = height % 1 == 0
  let heightReal = 0
  
  if (heightIsInteger) {
    heightReal = height / 100
    return (weight / heightReal ** 2).toFixed(1)
  } else {
    return (weight / height ** 2).toFixed(1)
  }
}

print(drop)
print(`${xerox('=', 20)} Função: imc ${xerox('=', 20)}`)
print(`IMC de alguém com 1.78m e com 72kg: ${imc(72, 1.78)}`)

function moneySplit(money) {
  const fifty = Math.floor(money / 50)
  const fiftyRemainder = money % 50

  const twenty = Math.floor(fiftyRemainder / 20)
  const twentyRemainder = fiftyRemainder % 20
  
  const ten = Math.floor(twentyRemainder / 10)
  const tenRemainder = twentyRemainder % 10
  
  const five = Math.floor(tenRemainder / 5)
  const fiveRemainder = tenRemainder % 5
  
  const two = Math.floor(fiveRemainder / 2)
  const twoRemainder = fiveRemainder % 2
  
  const one = Math.floor(twoRemainder / 1)
  
  return `
    Notas de 50: ${fifty}
    Notas de 20: ${twenty}
    Notas de 10: ${ten}
    Notas de 5: ${five}
    Notas de 2: ${two}
    Notas de 1: ${one}
  `
}

print(drop)
print(`${xerox('=', 20)} Função: moneySplit ${xerox('=', 20)}`)
print(`Como fica a divisão de uma cédula de R$ 62,00? ${moneySplit(62)}`)

// IDENTIFICAR
function getThousand(numberFourDigits) {
  return Math.floor(numberFourDigits / 1000)
}

print(drop)
print(`${xerox('=', 20)} Função: getThousand ${xerox('=', 20)}`)
print(`Quem é o milhar de 7285? ${getThousand(7285)}`)

function getHundred(numberFourDigits) {
  const hundred = (numberFourDigits % 1000) / 100
  return Math.floor(hundred)
}

print(drop)
print(`${xerox('=', 20)} Função: getHundred ${xerox('=', 20)}`)
print(`Quem é a centena de 7285? ${getHundred(7285)}`)

function getTen(numberFourDigits) {
  const ten = (numberFourDigits % 100) / 10
  return Math.floor(ten)
}

print(drop)
print(`${xerox('=', 20)} Função: getTen ${xerox('=', 20)}`)
print(`Quem é a dezena de 7285? ${getTen(7285)}`)

function getUnit(numberFourDigits) {
  return numberFourDigits % 10
}

print(drop)
print(`${xerox('=', 20)} Função: getUnit ${xerox('=', 20)}`)
print(`Quem é a unidade de 7285? ${getUnit(7285)}`)

// IDENTIFICAR TIPO 2
function isInteger(value) {
  if (value % 1 == 0) {
    return true
  } else {
    return false
  }
}

print(drop)
print(`${xerox('=', 20)} Função: isInteger ${xerox('=', 20)}`)
print(`7 é um número inteiro? ${isInteger(7)}`)
print(`7.2 é um número inteiro? ${isInteger(7.2)}`)

function isNumberPrime(n) {
  if (n == 1) {
    return 'não'
  }
  if (n == 2 || n == 3 || n == 5 || n == 7) {
    return 'sim'
  }
  if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0 && n % 9 != 0) {
    return 'sim'
  } 
  else {
    return 'não'
  }
}

print(drop)
print(`${xerox('=', 20)} Função: isNumberPrime ${xerox('=', 20)}`)
print(`131 é um número primo? ${isNumberPrime(131)}`)
print(`62 é um número primo? ${isNumberPrime(62)}`)

/*
Função útil para quando há muitas condições com modular, deixando-as mais semânticas
if (
  modular(n, 2, '!=', 0) &&
  modular(n, 3, '!=', 0) &&
  modular(n, 5, '!=', 0) &&
  modular(n, 7, '!=', 0) &&
  modular(n, 9, '!=', 0)
)
*/
function modular(number, modular, expression, binary) {
  if (expression == '==') {
    return number % modular == binary
  } else if (expression == '!=') {
    return number % modular != binary
  }
}

// TEMPO
function hourToMinutes(hour, minute) {
  return (hour * 60) + minute
}

print(drop)
print(`${xerox('=', 20)} Função: hourToMinutes ${xerox('=', 20)}`)
print(`3 horas e 14 minutos equivale a?: ${hourToMinutes(3, 14)} minutos`)

function minutesToHour(minute) {
  const secsInMin = 60
  const getHour = Math.floor(minute / secsInMin)
  const getMin = minute % secsInMin
  return `${getHour}h:${getMin}min` 
}

print(drop)
print(`${xerox('=', 20)} Função: minutesToHour ${xerox('=', 20)}`)
print(`131 minutos equivale a? ${minutesToHour(131)}`)

function secondsToTime(secondAmount) {
  const hour = Math.floor(secondAmount / 3600)
  const hourRemainder = (secondAmount / 3600) % 1
  
  const minutes = Math.floor(hourRemainder * 60)
  const minuteLeftover = ((hourRemainder * 60) % 1).toFixed(2)
  
  const seconds = Math.floor(minuteLeftover * 60)
  
  return `${hour}h:${minutes}min:${seconds}seg`
}

print(drop)
print(`${xerox('=', 20)} Função: secondsToTime ${xerox('=', 20)}`)
print(`Quantos é 307 segundos convertido em tempo completo? ${secondsToTime(307)}`)
print(`Quantos é 20666 segundos convertido em tempo completo? ${secondsToTime(20666)}`)

// TEMPO TIPO 2
function daysConverter(numberOfDays, option) {
  if (option == 'meses') {
    return Math.floor(numberOfDays * 0.032855)
  } else if (option == 'anos') {
    return Math.floor(numberOfDays * 0.002738)
  }
}

print(drop)
print(`${xerox('=', 20)} Função: daysToYears ${xerox('=', 20)}`)
print(`Uma pessoa que viveu por 9277 dias, têm quantos meses? ${daysConverter(9277, 'meses')}`)
print(`Uma pessoa que viveu por 9277 dias, têm quantos anos? ${daysConverter(9277, 'anos')}`)

function monthToYear(month) {
  const monthQuotient = Math.floor(month / 12)
  const monthRemainder = Math.floor(month % 12)
  return `${monthQuotient} ano(s) e ${monthRemainder} mês(es)`
}

print(drop)
print(`${xerox('=', 20)} Função: monthToYear ${xerox('=', 20)}`)
print(`Quanto 22 meses value em anos e meses? ${monthToYear(22)}`)
