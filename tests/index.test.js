const calculo = require('./index')

test('Função Numeros Aleatórios',() => {
    expect(calculo.NumerosAleatorios(1,100)).toBeGreaterThan(0)
    expect(calculo.NumerosAleatorios(1,100)).toBeGreaterThanOrEqual(1)
    expect(calculo.NumerosAleatorios(1,100)).toBeLessThan(101)
    expect(calculo.NumerosAleatorios(1,100)).toBeLessThanOrEqual(100);
})

test('teste n par', ()=>{
    expect(calculo).toBeDefined();
    expect(calculo.n_par(-3)).toBeNull()
    expect(calculo.n_par(0)).toBeNull()
    expect(calculo.n_par(10)).toBeTruthy()
    expect(calculo.n_par(11)).toBeFalsy();
})