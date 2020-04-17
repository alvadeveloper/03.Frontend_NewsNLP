const handleSubmit = require('./src/client/js/formHandler');



test('test one', () => {
  let testPerson = new handleSubmit('/test', 123)
  expect(testPerson).toEqual({firstName: 'John', lastName: 'Doe'});
});
