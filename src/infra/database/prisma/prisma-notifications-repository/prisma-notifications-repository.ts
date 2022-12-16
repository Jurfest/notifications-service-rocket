import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification/notification';
import { NotificationsRepository } from 'src/application/repositories/notifications-repository/notifications-repository';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        category: notification.category,
        id: notification.id,
        content: notification.content.value,
        recipientId: notification.recipientId,
        createdAt: notification.createdAt,
        readAt: notification.readAt,
      },
    });
  }
}
