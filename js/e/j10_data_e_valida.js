

/* 
10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.
*/

import { question } from "readline-sync"

function main() {
  // Entradas
  // const day = 29
  // const month = 2
  // const year = 2023 
  const day = numericInput("Informe uma data de dia do mês válida (de 26 até 31) ---> ")
  const month = numericInput("Informe uma mês válido (de 1 até 12) ---> ")
  const year = numericInput("Informe um ano válido (de 1 até 9999) ---> ")
  
  // Processamento
  const dateScanned = dateValidator(day, month, year)

  // Saída
  title("RELATÓRIO")
  content(dateScanned)
  footer("FIM DA EXECUÇÃO")
}

function numericInput(content) {
  return Number(question(content))
}

function title(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function content(content) {
  console.log(content)
}

function footer(this_content) {
  content(`\n========== ${this_content} ==========\n`)
}

function dateValidator(d, m, y) {
  const theDate = `${d}/${m}/${y}`
  
  const invalidDay = d <= 0
  const invalidDayMax = d > 31
  
  const invalidMonth = m <= 0
  const invalidMonthMax = m > 12
  
  const invalidYear = y <= 0
  const invalidYearMax = y > 9999 

  const februaryInvalidDayMin = d < 26
  const februaryInvalidDayMax = d > 29

  const dayIsInvalid = `A data ${theDate} é inválida por causa do dia`
  const monthIsInvalid = `A data ${theDate} é inválida por causa do mês`
  const yearIsInvalid = `A data ${theDate} é inválida por causa do ano`
  const correctDate = `A data ${theDate} é uma data em formato válido` 
  
  // Verificação exclusiva p/ o mês Fevereiro
  if (m == 2) {
    if (!februaryInvalidDayMin && !februaryInvalidDayMax) {
      if (!invalidYear && !invalidYearMax) {
        return correctDate
      } else {
        return yearIsInvalid
      }
    } else {
      return dayIsInvalid
    }
  }
  
  if (d == 31) {
    if (m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) {
      if (!invalidYear && !invalidYearMax) {
        return correctDate
      } else {
        return yearIsInvalid
      }
    } else {
      return monthIsInvalid
    }
  }
  
  if (d == 30) {
      if (m == 4 || m == 6 || m == 9 || m == 11) {
        if (!invalidYear && !invalidYearMax) {
          return correctDate
        } else {
          yearIsInvalid
        }
    } else {
      return monthIsInvalid
    }
  }
}

main()
