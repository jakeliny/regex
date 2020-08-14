const texto1 = 'não é leviOsa, é leviosAAAAAAAA'
const texto2 = 'e se eu falar sem A levios'

// * = zero ou mais
const regex = /leviosa*/gi
console.log(texto1.match(regex))
console.log(texto2.match(regex))