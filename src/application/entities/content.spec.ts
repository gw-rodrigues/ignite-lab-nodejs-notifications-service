import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a Notification content', () => {
    const content = new Content('Voce recebeu uma solicitação de amizade.');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a Notification content with less then 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });

  it('should not be able to create a Notification content with more then 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
