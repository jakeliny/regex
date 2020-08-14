const texto1 = 'Jak ou Jake'

// ? = zero ou um 
const regex = /jake?/gi //a letra ao lado do ? é opcional
console.log(texto1.match(regex))