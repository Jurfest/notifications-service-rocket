import { ReadNotification } from './read-notification';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('ReadNotification', () => {
  it('should be able to read a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(fakeNotificationsRepository);

    const notification = makeNotification({
      recipientId: 'example-recipient-id-1',
    });

    await fakeNotificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    expect(fakeNotificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to read a non existing notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(fakeNotificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrowError(NotificationNotFound);
  });
});
