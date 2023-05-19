

function i_aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min))
}

function range(min, max) {
  let container = []
  
  for (let i = min; i <= max; i++) {
    container.push(i)
  }
  
  return container
}
