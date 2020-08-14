const texto = '1,2,3,4,5,6,a.b c!d?e'

const regexVirgula = /,/g 
console.log(texto.split(regexVirgula))
console.log(texto.match(regexVirgula))

console.log(texto.match(/b c!d/))

// se procurarmos com tab no espaço, ele encontra \t que é tab
console.log('	'.match(/\s/g))