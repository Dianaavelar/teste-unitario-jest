const soma = require('./../src/soma');
const calculadora = require ('./../src/soma')

test ('A soma de 1 e 2 deve ser igual a 3', () => {
    expect(sum(1,2)).toBe(3);

});

test ('A diferença de 10 e 2 deve ser igual a 8', () => {
    expect(diferenca(10,2)).toBe(8);

});
test ('A multiplicacao de 3 e 2 de ser igual a 6', () => {
    expect(product(3,2)).toBe(6);

});

test ('A divisao de 10 e 2 deve ser igual a 5', () => {
    expect(divi(10,2)).toBe(5);

});