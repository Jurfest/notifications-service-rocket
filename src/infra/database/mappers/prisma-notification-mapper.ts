import { Content } from '@application/entities/notification/content';
import { Notification } from '@application/entities/notification/notification';
import { Notification as RawNotification } from '@prisma/client';

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

  static toDomain(prismaNotification: RawNotification): Notification {
    return new Notification(
      {
        category: prismaNotification.category,
        content: new Content(prismaNotification.category),
        recipientId: prismaNotification.recipientId,
        canceledAt: prismaNotification.cancelAt,
        createdAt: prismaNotification.createdAt,
        readAt: prismaNotification.readAt,
      },
      prismaNotification.id,
    );
  }
}
