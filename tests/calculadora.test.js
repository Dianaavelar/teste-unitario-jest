const {sum,diff, product, divi} = require('./../src/calculadora');
const calculadora = require ('./../src/calculadora')

test ('A soma de 5 e 3 deve ser igual a 8', () => {
    expect(sum(5,3)).toBe(8);

});

test ('A diferença de 6 e 2 deve ser igual a 4', () => {
    expect(diff(6,2)).toBe(4);

});
test ('A multiplicacao de 3 e 3 deve ser igual a 9', () => {
    expect(product(3,3)).toBe(9);

});

test ('A divisao de 8 e 2 deve ser igual a 4', () => {

    expect(divi(8,2)).toBe(4);

});