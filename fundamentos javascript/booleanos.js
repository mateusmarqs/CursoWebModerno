let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!(isAtivo)) // ! representa negação em js
console.log(!!(isAtivo)) // !! nega a negação, volta ao valor verdadeiro

  //exemplos de verdadeiros
  console.log(!!' ')
  console.log(!![])

  //exemplos de falsos
  console.log(!!0)
  console.log(!!'')
  console.log(!!null)
  console.log(!!NaN)

  let nome = ''
  console.log( nome || 'Desconhecido' || 'Oi') // ele vai imprimir o primeiro valor verdadeiro