const sum = require ('../src/soma')

test ('Adicione 1+2 e resulte em 3', () => {
    expect(sum(1,2)).toBe(3);

});jest