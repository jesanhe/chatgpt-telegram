import { Controller, OnCommand, OnText, Text } from 'nestgram';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @OnCommand('start')
  getHello(): string {
    return this.appService.getHello();
  }

  // handle other text messages, optional
  @OnText()
  async text(@Text() text: string): Promise<string> {
    return await this.appService.handleMessage(text);
  }
}
