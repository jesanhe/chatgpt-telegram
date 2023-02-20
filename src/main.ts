import { NestGram } from 'nestgram';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const bot = new NestGram(
    '6265965628:AAHzDVjYqcvc_wf8Ea9jSHAsVe8JSTNE0ac',
    AppModule,
  );
  await bot.start();
}
bootstrap();
