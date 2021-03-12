//Flags
// i - ignora maiúsculas e minúsculas
// g - pega todas as ocorrências, sem ela so encontra a primeira e para

const text = "Carlos assinou o abaixo assinado com caneta"

console.log(text.match(/C|ab/))

console.log(text.match(/c|ab/i))

console.log(text.match(/c|ab/gi))