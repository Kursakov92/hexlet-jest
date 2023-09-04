const importedObject = require('../src/index.js')
test('reverse', () => {
  expect(importedObject.reverse('hello')).toEqual('olleh');
  expect(importedObject.reverse('')).toEqual('');
});