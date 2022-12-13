import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty() @IsUUID() recipientId: string;
  content: string;
  category: string;
}
