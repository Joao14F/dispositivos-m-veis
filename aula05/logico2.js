let idade=18;
let paisPresentes=true;

console.log(`pode viajar 1: ${(idade>= 18 || paisPresentes==true)}`);
console.log(`pode viajar 2: ${(idade>18 || paisPresentes==true)}`);
console.log(`pode viajar 3: ${(idade>18 || paisPresentes==false)}`);

let comprouBilhete=true;
console.log(`pode viajar 4: ${((idade>18 || paispresentes==true) && comprouBilhete==false)}`);
console.log(`pode viajar 5: ${((idade>=18 || paisPresentes==false) && comprouBilhete==true)}`);
console.log(`pode viajar 6: ${((idade>=18 || paisPresentes==true) && comprouBilhete==true)}`);