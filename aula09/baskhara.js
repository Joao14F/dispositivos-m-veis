function basc(a, b, c) {
  let del = (b * b) - 4 * a * c;
    console.log(`O delta é ${del}`)

  if (del < 0) {
    console.log(`Não é possível`);
  } 
  else {
    raiz1 = (-b + Math.sqrt(del)) / (2 * a);
    raiz2 = (-b - Math.sqrt(del)) / (2 * a);
    console.log(`X' é ${raiz1} e X'' é ${raiz2} e o delta é ${del}`);

  }
}
basc(2, 4, 2);
