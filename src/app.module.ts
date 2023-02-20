import { Module } from 'nestgram';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  services: [AppService],
})
export class AppModule {}
