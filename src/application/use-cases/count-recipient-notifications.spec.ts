import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count recipient Notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('New friend request!'),
        category: 'social',
        recipientId: 'recipient-01',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        content: new Content('New friend request!'),
        category: 'social',
        recipientId: 'recipient-01',
      }),
    );
    await notificationsRepository.create(
      new Notification({
        content: new Content('New friend request!'),
        category: 'social',
        recipientId: 'recipient-02',
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'recipient-01',
    });

    expect(count).toEqual(2);
  });
});
