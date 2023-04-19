let idade;

function maratona(idade) {
  if (idade <= 16) {
    categoria = "juvenil";
    premio = 10 * idade;
  } else if (idade >= 15 && idade <= 24) {
    categoria = "junior";
    premio = 8 * idade;
  } else if (idade >= 25 && idade <= 45) {
    categoria = "Adulto";
    premio = 6 * idade;
  } else if (idade >= 46 && idade <= 55) {
    categoria = "adulto2";
    premio = 5 * idade;
  } else {
    categoria = "master";
    premio = 4 * idade;
  }
}
maratona(16);
console.log(`a sua categoria é ${categoria} e seu premio é R$: ${premio}`);
