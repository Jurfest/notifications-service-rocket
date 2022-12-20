import { CancelNotification } from '@application/use-cases/cancel-notification';
import { CountNotifications } from '@application/use-cases/count-notifications';
import { GetNotifications } from '@application/use-cases/get-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';

import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationViewModel } from '../view-models/notification-view-model';

@Controller('notifications')
export class NotificationsController {
  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countNotifications: CountNotifications,
    private getNotifications: GetNotifications,
  ) {}

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string): Promise<void> {
    await this.cancelNotification.execute({
      notificationId: id,
    });
  }

  @Get('from/:recipientId')
  async getNotificationList(
    @Param('recipientId') recipientId: string,
  ): Promise<any> {
    const { notifications } = await this.getNotifications.execute({
      recipientId,
    });

    return { notifications: notifications.map(NotificationViewModel.toHTTP) };
  }

  @Get('count/from/:recipientId')
  async countNotificationList(
    @Param('recipientId') recipientId: string,
  ): Promise<{ count: number }> {
    const count = await this.countNotifications.execute({
      userId: recipientId,
    });

    return count;
  }

  @Patch(':id/read')
  async read(@Param('id') id: string): Promise<void> {
    await this.readNotification.execute({
      notificationId: id,
    });
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string): Promise<void> {
    await this.unreadNotification.execute({
      notificationId: id,
    });
  }

  @Post()
  async create(@Body() body: CreateNotificationBody): Promise<any> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return {
      notification: NotificationViewModel.toHTTP(notification),
    };
  }
}
