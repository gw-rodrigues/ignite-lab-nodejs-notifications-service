import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type OverrideProps = Partial<NotificationProps>;

export function makeNotification(override: OverrideProps = {}) {
  return new Notification({
    content: new Content('New friend request!'),
    category: 'social',
    recipientId: 'recipient-01',
    ...override,
  });
}
