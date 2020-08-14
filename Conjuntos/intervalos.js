const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//as bordas são inclusivas
console.log(texto.match(/[a-z]/g)) 
console.log(texto.match(/[b-d]/g))
console.log(texto.match(/[2-4]/g))
console.log(texto.match(/[A-Z1-3]/gi))

//Respeitar a ordem da tabela unicode
const texto2 = 'ABC [abc] a-c 1234'
console.log(texto2.match(/[A-z]/g))

//Entre o A e o z existe o [] seguindo a tabela unicode