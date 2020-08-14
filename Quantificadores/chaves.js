const texto = '22 de junho de 1995 as 8 da manhã'

// para definir uma quantificador usa {}
console.log(texto.match(/\d{1,2}/g))
console.log(texto.match(/[0-9]{2}/g))
console.log(texto.match(/\d{1,}/g))

console.log(texto.match(/\w{5}/g))
console.log(texto.match(/[\wã]{5,}/g))

