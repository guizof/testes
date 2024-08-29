const { adicionar, subtrair, multiplicar, dividir } = require('../src/funcoes');

test('adicionar 1 + 2 deve retornar 3', () => {
  expect(adicionar(1, 2)).toBe(3);
});

test('subtrair 5 - 3 deve retornar 2', () => {
  expect(subtrair(5, 3)).toBe(2);
});

test('multiplicar 4 * 3 deve retornar 12', () => {
  expect(multiplicar(4, 3)).toBe(12);
});

test('dividir 10 / 2 deve retornar 5', () => {
  expect(dividir(10, 2)).toBe(5);
});

test('dividir por zero deve lançar um erro', () => {
  expect(() => dividir(10, 0)).toThrow('Divisão por zero não é permitida.');
});
