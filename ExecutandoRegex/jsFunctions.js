const text = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNumber = RegExp('9')
console.log(regex.test(text)); //se existe ou não
console.log(regex.exec(text)); //executa e mostrar o que encontrou incluindo index

const regexLetter = /[a-f]/g
console.log(text.match(regexLetter)) //se deu match com a expressão
console.log(text.search(regexLetter)) //pesquisar e responder com o primeiro indice que encontratr
console.log(text.replace(regexLetter, 'BU')) //substituir
console.log(text.split(regexLetter)) //separar em um array