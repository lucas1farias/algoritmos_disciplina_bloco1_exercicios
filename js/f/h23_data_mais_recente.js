

/*
23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais
recente.
*/

import * as functionDb from "../../functions.js"

function main() {
  // Entradas
  const firstDateDay = functionDb.numericInput("Informe o dia da primeira data ---> ")
  const firstDateMonth = functionDb.numericInput("Informe o mês da primeira data ---> ")
  const firstDateYear = functionDb.numericInput("Informe o ano da primeira data ---> ")
  const secondDateDay = functionDb.numericInput("Informe o dia da segunda data ---> ")
  const secondDateMonth = functionDb.numericInput("Informe o mês da segunda data ---> ")
  const secondDateYear = functionDb.numericInput("Informe o ano da segunda data ---> ")
  
  // const firstDateDay = 17
  // const firstDateMonth = 3
  // const firstDateYear = 1999
  // const secondDateDay = 16
  // const secondDateMonth = 4
  // const secondDateYear = 1998

  // Processamento
  const oldestYear = getOlderYear(firstDateYear, secondDateYear)
  const firstDate = `${firstDateDay}/${firstDateMonth}/${firstDateYear}`
  const secondDate = `${secondDateDay}/${secondDateMonth}/${secondDateYear}`
  let first = `Data mais antiga: ${firstDate}`
  let second = `Data mais antiga: ${secondDate}`
  let identical = 'As datas são idênticas'
  
  // Saída
  // Pelo ano
  if (oldestYear == firstDateYear) {
    repeatableData(first)
    return
  } else if (oldestYear == secondDateYear) {
    repeatableData(second)
    return
  } 
  // Se não for pelo ano, será pelo mês
  else {
    const oldestMonth = getOlderMonth(firstDateMonth, secondDateMonth)
    if (oldestMonth == firstDateMonth) {
      repeatableData(first)
      return
    } else if (oldestMonth == secondDateMonth) {
      repeatableData(second)
      return
    } 
    // Se não for pelo mês, será pelo dia
    else {
      const oldestDay = getOlderDay(firstDateDay, secondDateDay)
      if (oldestDay == firstDateDay) {
        repeatableData(first)
        return
      } else if (oldestDay == secondDateDay) {
        repeatableData(second)
        return
      } else {
        repeatableData(identical)
        return
      }
    }
  }
}

function getOlderYear(y1, y2) {
  // Comparar ano
  if (y1 > y2) {
    return y2
  } else if (y2 > y1) {
    return y1
  }
}

function getOlderMonth(m1, m2) {
  if (m1 > m2) {
    return m2
  } else if (m2 > m1) {
    return m1
  }
}

function getOlderDay(d1, d2) {
  if (d1 > d2) {
    return d2
  } else if (d2 > d1) {
    return d1
  }
}

function repeatableData(differentData) {
  functionDb.title("RELATÓRIO")
  functionDb.content(differentData)
  functionDb.footer("FIM DA EXECUÇÃO")
}

main()
