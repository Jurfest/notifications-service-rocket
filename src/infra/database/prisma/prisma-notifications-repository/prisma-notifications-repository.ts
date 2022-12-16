import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository/notifications-repository';

import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '@infra/database/mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create(notification: Notification): Promise<void> {
    const formattedNotification =
      PrismaNotificationMapper.toPrisma(notification);

    await this.prismaService.notification.create({
      data: formattedNotification,
    });
  }
}
