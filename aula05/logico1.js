let a=10;
let b=11;
let c=12;

console.log(`primeira condição com && = ${a>b && c>a}`);
console.log(`segunda condição com && = ${c>b && c>a}`);

console.log(`primeira versão com || = ${a>b || c<a}`);
console.log(`segunda versão com || = ${a>b || c>a}`);

console.log(`a negação da primeira expressão é = ${!(a>b)}`);
console.log(`a negação da segunda expressão é = ${!(a<b)}`);