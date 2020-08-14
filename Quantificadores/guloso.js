 
const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

// quantificadores SÃO gulosos (greedy)
console.log(texto.match(/<div>.+<\/div>/g)) //um ou mais
console.log(texto.match(/<div>.*<\/div>/g)) //zero ou mais

// // quantificadores NÃO gulosos (lazy)
console.log(texto.match(/<div>.+?<\/div>/g)) 
console.log(texto.match(/<div>.*?<\/div>/g))