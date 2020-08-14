// grupo - agrupa caracteres + um quantificador
const texto1 = 'O José Simão é muito engraçado... hehehehehehe'
console.log(texto1.match(/(he)+/g))

const texto2 = 'http://www.gupy.io www.jakeliny.com.br google.com.br'
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))
//http:// - opcional
//www.  - opcional
//conjunto de palavras com um ou mais caracteres
// . literal seguido de 2 ou mais caracteres comtendo letras
//ultimo grupo opicional, exemplo o gupy não tem, um shorthand de dois digitos opcionais
