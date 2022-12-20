import { Module } from '@nestjs/common';
import { SendNotification } from '@application/use-cases/send-notification';
import { DatabaseModule } from '../database/database.module';

import { NotificationsController } from './controllers/notifications.controller';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { ReadNotification } from '@application/use-cases/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification';
import { GetNotifications } from '@application/use-cases/get-notifications';
import { CountNotifications } from '@application/use-cases/count-notifications';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    GetNotifications,
    CountNotifications,
  ],
})
export class HttpModule {}
