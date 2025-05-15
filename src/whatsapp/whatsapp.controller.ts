import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import * as process from 'node:process';
import { WhatsappService } from './whatsapp.service';

@Controller('whatsapp')
export class WhatsappController {
  constructor(private readonly whatsappService: WhatsappService) {}

  @Get('test')
  test() {
    return 'test';
  }

  @Get('webhook')
  challengeWebhook(@Req() req, @Res() res) {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    if (mode && token) {
      if (
        mode === 'subscribe' &&
        token === process.env.WHATSAPP_CHALLENGE_kEY
      ) {
        console.log('WEBHOOK_VERIFIED');
        res.status(200).send(challenge);
      } else {
        res.sendStatus(403);
      }
    }
  }

  @Post('webhook')
  async handleWebhook(@Req() req, @Res() res) {
    try {
      console.log('Received webhook:', JSON.stringify(req.body, null, 2));
      
      const entry = req.body.entry?.[0];
      const changes = entry?.changes?.[0];
      const value = changes?.value;
      const message = value?.messages?.[0];
      
      if (message) {
        const from = message.from;
        const messageBody = message.text?.body;
        
        if (from && messageBody) {
          console.log(`Received message from ${from}: ${messageBody}`);
          
          await this.whatsappService.sendMessage(
            from,
            `Thank you for your message: "${messageBody}". We have received your inquiry and will respond shortly.`
          );
          
          console.log(`Reply sent to ${from}`);
        }
      }
      
      res.status(200).send('EVENT_RECEIVED');
    } catch (error) {
      console.error('Error processing webhook:', error);
      res.status(200).send('EVENT_RECEIVED');
    }
  }
}
