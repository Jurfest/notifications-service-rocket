import { Notification } from 'src/application/entities/notification/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
