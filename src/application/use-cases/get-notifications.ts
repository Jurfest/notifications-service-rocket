import { Notification } from '@application/entities/notification/notification';
import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository/notifications-repository';

interface GetNotificaticationsRequest {
  recipientId: string;
}

interface GetNotificaticationsResponse {
  notifications: Notification[];
}

@Injectable()
export class GetNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetNotificaticationsRequest,
  ): Promise<GetNotificaticationsResponse> {
    const { recipientId } = request;

    const notifications =
      await this.notificationsRepository.getManyByRecipientId(recipientId);

    return { notifications };
  }
}
