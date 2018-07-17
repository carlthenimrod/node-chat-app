const expect = require('expect');

let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let message = generateMessage('Tester', 'Test Message');

    expect(message.from).toBe('Tester');
    expect(message.text).toBe('Test Message');
    expect(typeof message.createdAt).toBe('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location object', () => {
    let location = generateLocationMessage('Tester', 1, 2);

    expect(location.from).toBe('Tester');
    expect(location.url).toBe('https://www.google.com/maps/@1,2');
  });
});