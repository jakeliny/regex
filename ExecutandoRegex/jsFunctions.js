const text = '0,1,2,c,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNumber = /9/;
console.log(regexNumber.test(text)); //booleano, verifica se existe ou não
console.log(regexNumber.exec(text)); //executa e mostrar o que encontrou incluindo index

const regexLetter = /[a-f]/g
console.log(text.match(regexLetter)) //se deu match com a expressão
console.log(text.search(regexLetter)) //procurar e responder com o indice do primeiro que deu match
console.log(text.replace(regexLetter, 'BU')) //substitui as ocorrencias por BU
console.log(text.split(regexLetter)) //separar em um array