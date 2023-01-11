import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServerKafka } from '@nestjs/microservices';

ConfigModule.forRoot({ envFilePath: '.env.local' });
const KAFKA_PASSWORD = process.env.KAFKA_PASSWORD ?? '';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['rare-goblin-12091-eu1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'cmFyZS1nb2JsaW4tMTIwOTEkRJemHyIYO5HYY7FhM1pAqxT1Mqqxn2tt-l3CJ8Y',
          password: KAFKA_PASSWORD,
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
