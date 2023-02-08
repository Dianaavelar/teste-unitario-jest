let {sum, diff, product, div} = require('./../src/calcs');
const calculators = require('./../src/calcs');


test('A soma de 1 e 2 deve ser igual a 3', () => {
    expect(sum(1, 2)).toBe(3);
    
});

test('A diferença de 10 e 2 deve ser igual a 8', ( ) => {
    expect(diff(10, 2)).toBe(8);

});

test('A multiplicaçao de 4 e 2 deve ser igual a 8', ( ) => {
    expect(product(4, 2)).toBe(8);

});

test('A divisao de 8 e 2 deve ser igual a 4', ( ) => {
    expect(div(8, 2)).toBe(4);

});
