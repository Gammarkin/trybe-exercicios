const testingScope = (escopo) => {
    const ifOrElse = (escopo === true) ? `Não devo ser utilizada fora do meu escopo (if)
    ótimo, fui utilizada no escopo!`: 'Não devo ser utilizada fora meu escopo (else)';
    console.log(ifOrElse);
}
testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉
