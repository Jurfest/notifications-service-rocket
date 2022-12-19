import { Notification } from '@application/entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
  abstract findById(notificationId: string): Promise<Notification | null>;
  abstract save(notificationId: Notification): Promise<void>;
  abstract countManyByUserId(userId: string): Promise<number>;
  abstract getManyByRecipientId(recipientId: string): Promise<Notification[]>;
}
