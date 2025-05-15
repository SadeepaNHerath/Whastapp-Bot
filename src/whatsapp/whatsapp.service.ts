import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import * as process from 'node:process';

@Injectable()
export class WhatsappService {
  constructor(private readonly httpService: HttpService) {}

  /**
   * Sends a WhatsApp message to a specified phone number
   * @param to The recipient's phone number
   * @param message The message content to send
   * @returns The response data from the WhatsApp API
   */
  async sendMessage(to: string, message: string) {
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
    const url = `https://graph.facebook.com/v22.0/${phoneNumberId}/messages`;
    const token = process.env.WHATSAPP_API_KEY;

    const payload = {
      messaging_product: 'whatsapp',
      to: to,
      type: 'text',
      text: {
        body: message,
      },
    };

    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await firstValueFrom(
        this.httpService.post(url, payload, { headers }),
      );
      console.log('Message sent successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error(
        'Error sending message:',
        error.response?.data || error.message,
      );
      throw error;
    }
  }
}
