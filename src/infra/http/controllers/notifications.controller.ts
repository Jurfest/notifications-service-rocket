import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/use-cases/send-notification';

import { CreateNotificationBody } from '../dtos/create-notification-body';

// import { PrismaPromise } from '@prisma/client';
// import { randomUUID } from 'node:crypto';
// import { PrismaService } from '../../prisma/prisma.service';

@Controller('notifications')
export class NotificationsController {
  constructor(
    // private readonly prismaService: PrismaService
    private sendNotification: SendNotification,
  ) {}

  // @Get()
  // list(): PrismaPromise<any> {
  //   return this.prismaService.notification.findMany();
  // }

  @Post()
  async create(
    @Body() body: CreateNotificationBody,
  ): Promise<{ notification }> {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification };
    // await this.prismaService.notification.create({
    //   data: {
    //     id: randomUUID(),
    //     content,
    //     category,
    //     recipientId,
    //   },
    // });
  }
}
