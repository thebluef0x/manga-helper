const {sum, sum3} = require('./utils.js')

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})
test('adds 1 + 2 + 3 to equal 6', () => {
  expect(sum3(1, 2, 3)).toBe(6);
})