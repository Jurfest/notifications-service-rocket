import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { NotificationNotFound } from './errors/notification-not-found';
import { UnreadNotification } from './unread-notification';

describe('UnreadNotification', () => {
  it('should be able to unread a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(
      fakeNotificationsRepository,
    );

    const notification = makeNotification({ readAt: new Date() });

    await fakeNotificationsRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(fakeNotificationsRepository.notifications[0].readAt).toBeNull();
  });

  it('should not be able to unread a non existing notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(
      fakeNotificationsRepository,
    );

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrowError(NotificationNotFound);
  });
});
