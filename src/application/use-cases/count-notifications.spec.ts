import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CountNotifications } from './count-notifications';

describe('CountNotifications', () => {
  it('should count user notifications', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const countNotifications = new CountNotifications(
      fakeNotificationsRepository,
    );

    await fakeNotificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );

    await fakeNotificationsRepository.create(
      makeNotification({ recipientId: 'example-recipient-id-1' }),
    );

    const { count } = await countNotifications.execute({
      userId: 'example-recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
