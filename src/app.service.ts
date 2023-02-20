import { Injectable } from '@nestjs/common';
import { ChatGPTAPI } from 'chatgpt';
// const { ChatGPTAPI } = await import('chatgpt');

@Injectable()
export class AppService {
  api = new ChatGPTAPI({
    apiKey: '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',
  });

  getHello(): string {
    return 'Hello World!';
  }

  async handleMessage(message: string) {
    const res = await this.api.sendMessage(message);
    console.log(res.text);
    return res.text;
  }
}
