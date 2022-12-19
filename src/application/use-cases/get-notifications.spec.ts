import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { GetNotifications } from './get-notifications';

describe('GetNotifications', () => {
  it('should get user notifications', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const getNotifications = new GetNotifications(fakeNotificationsRepository);

    await fakeNotificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );

    await fakeNotificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );

    await fakeNotificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-2' }),
    );

    const { notifications } = await getNotifications.execute({
      recipientId: 'example-recipient-id-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'example-recipient-id-1' }),
        expect.objectContaining({ recipientId: 'example-recipient-id-1' }),
      ]),
    );
  });
});
