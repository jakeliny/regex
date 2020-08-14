//Flags
// i - Ignora case
// g - pega todas as ocorrencias, sem ela so encontra a primeira e para

const text = "Carlos assinou o abaixo assinado"

console.log(text.match(/C|ab/))

console.log(text.match(/c|ab/i))

console.log(text.match(/c|ab/gi))