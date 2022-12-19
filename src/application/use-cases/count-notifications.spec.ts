import { Content } from '@application/entities/notification/content';
import { Notification } from '@application/entities/notification/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

import { CountNotifications } from './count-notifications';

describe('CountNotifications', () => {
  it('should count user notifications', async () => {
    const fakeNotificationsRepository = new InMemoryNotificationsRepository();
    const countNotifications = new CountNotifications(
      fakeNotificationsRepository,
    );

    await fakeNotificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'example-recipient-id-1',
      }),
    );

    await fakeNotificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'example-recipient-id-1',
      }),
    );

    await fakeNotificationsRepository.create(
      new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade'),
        recipientId: 'example-recipient-id-2',
      }),
    );

    const { count } = await countNotifications.execute({
      userId: 'example-recipient-id-1',
    });

    expect(count).toEqual(2);
  });
});
