const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) // não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) // isso é um intervalo (range) 
//$ e ? estão respeitando a ordem da tabela unicode

// NÃO é um intervalo (range)...
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))


// $-? -> o traço no meio é um intervalo
//-? -> o traço nas laterais ou sozinho não é um intervalo

// pode precisar de escape dentro do conjunto: - [ ] ^