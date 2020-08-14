const texto1 = 'não é leviOsa, é leviosAAAAAAAA'

// + -> um ou mais
const regex = /leviosa+/gi
console.log(texto1.match(regex))

const texto3 = 'Os números: 0123456789. 987654'
console.log(texto3.match(/\d/g)) //poderia usar [0-9]
console.log(texto3.match(/[0-9]+/g)) //um ou mais digitos