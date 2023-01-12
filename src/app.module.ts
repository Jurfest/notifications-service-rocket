import { KafkaConsumerService } from '@infra/messaging/kafka/kafka-consumer.service';
import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/database/database.module';
import { HttpModule } from './infra/http/http.module';
import { MessagingModule } from './infra/messaging/messaging.module';

@Module({
  // imports: [HttpModule, DatabaseModule, MessagingModule],
  providers: [KafkaConsumerService],
})
export class AppModule {}
