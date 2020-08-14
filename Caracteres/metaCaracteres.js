// . - um caractere qualquer
//[] - conjunto de caracteres permitidos
// [^] - conjunto de caracteres proibidos


// ? - opcional
// * - zero ou mais
// + - um ou mais
// {n, m} - de n até m 


// ^ - inicio da linha 
// $ - fim da linha
// \b - inicio ou fim de palavra 

// \ - espace para entrada de literal
// () - grupo
// | - ou
// \1...\9 - Retrovisor


 
// . ? * + - ^ $ | [ ] { } ( ) \ :
const texto = '1,2,3,4,5,6,a.b c!d?e'

//para pegar o ponto literal
const regexPonto = /\./g
console.log(texto.split(regexPonto))

// , ou . ou ? ou ! ou espaço - global
const regexSimbolos = /,|\.|\?|!| /g
console.log(texto.split(regexSimbolos))
//Ocorreu o slipt de todos os elementos pq usamos OU