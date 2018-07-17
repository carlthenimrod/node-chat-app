const expect = require('expect');

let {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    let message = generateMessage('Tester', 'Test Message');

    expect(message.from).toBe('Tester');
    expect(message.text).toBe('Test Message');
    expect(typeof message.createdAt).toBe('number');
  });
});