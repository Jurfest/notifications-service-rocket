import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository/notifications-repository';

interface CountNotificaticationsRequest {
  userId: string;
}

interface CountNotificaticationsResponse {
  count: number;
}

@Injectable()
export class CountNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountNotificaticationsRequest,
  ): Promise<CountNotificaticationsResponse> {
    const { userId } = request;

    const count = await this.notificationsRepository.countManyByUserId(userId);

    return { count };
  }
}
