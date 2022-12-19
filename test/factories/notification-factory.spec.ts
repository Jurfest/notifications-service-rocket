import { makeNotification } from './notification-factory';

describe('NotificationFactory', () => {
  it('should be defined', () => {
    expect(makeNotification({})).toBeDefined();
  });
});
