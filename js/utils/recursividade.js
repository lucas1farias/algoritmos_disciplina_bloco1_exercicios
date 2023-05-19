

function contar_de_ate(n) {
  let contador_externo = 0
  for (let contador = 1; contador <= n; contador++) {
      contador_externo += contador
  }
  return contador_externo
}

// Recursiva
function contar_de_ate_rcsv(n) {
if (n === 1) {
  return 1
}
return n + contar_de_ate_rcsv(n - 1)
}

console.log(contar_de_ate(10))
console.log(contar_de_ate_rcsv(10))
