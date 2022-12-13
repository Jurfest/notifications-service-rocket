import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

import { PrismaService } from './prisma/prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  list(): PrismaPromise<any> {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody): Promise<void> {
    const { recipientId, content, category } = body;
    await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
  }
}
