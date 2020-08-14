// é um coringa de posições, substitui qualquer coisa

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g))
console.log(texto.match(/1..,/g))

const float = '8.3,7.1,8,8,10.0'
console.log(float.match(/8../g))
console.log(float.match(/.\../g))

