import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notifications-repository/notifications-repository';
import { PrismaNotificationsRepository } from './prisma/prisma-notifications-repository/prisma-notifications-repository';

import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
