import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebey uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content with less than 5 characteres', () => {
    expect(() => new Content('Olá')).toThrowError('Content length error');
  });

  it('should not be able to create a notification content with more than 140 characteres', () => {
    expect(() => new Content('a'.repeat(141))).toThrowError(
      'Content length error',
    );
  });
});
