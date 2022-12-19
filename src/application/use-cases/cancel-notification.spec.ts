import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';

describe('Cancel notification', () => {
  it('should be able to cancel a notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(
      fakeNotificationsRepository,
    );

    const notification = makeNotification({
      recipientId: 'example-recipient-id-1',
    });

    await fakeNotificationsRepository.create(notification);

    await cancelNotification.execute({
      notificationId: notification.id,
    });

    expect(fakeNotificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(
      fakeNotificationsRepository,
    );

    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrowError(NotificationNotFound);
  });
});
