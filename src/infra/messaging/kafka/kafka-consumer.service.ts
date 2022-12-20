import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['real-gnat-14844-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmVhbC1nbmF0LTE0ODQ0JANCgjqq2v4zLoceFF2TGZQHUDjzhpFWZcZ-8nBTkIE',
          password:
            '5Sjhj1HoAPzxU39ZsDLOvPtlQcXKc0Td9ZPSj7kmAWPLtCW1OLhc5gjSpTBaQT3qlVTO7g==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
