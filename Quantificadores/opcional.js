const texto1 = 'Jak ou Jake'

// ? = zero ou um - {0,1}
const regex = /jake?/gi //a letra ao lado do ? é opcional
console.log(texto1.match(regex))