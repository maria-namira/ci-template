import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

test('Методы класса должны отработать корректно', () => {
  const testBuffer = new ArrayBufferConverter();
  testBuffer.load(getBuffer());
  expect(testBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});