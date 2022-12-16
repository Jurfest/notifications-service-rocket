import { Notification } from '@application/entities/notification/notification';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      category: notification.category,
      id: notification.id,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }
}
