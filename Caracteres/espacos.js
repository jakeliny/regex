 const texto = `
co	r
r	e r!
`

// \t - tab
// \n - enter
// \s - espaços

console.log(texto.match(/co\t/))
console.log(texto.match(/co\tr\nr/))
console.log(texto.match(/co\tr\nr\te\sr!/))
console.log(texto.match(/co\tr\nr\te r!/))