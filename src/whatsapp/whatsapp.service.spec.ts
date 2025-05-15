import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule, HttpService } from '@nestjs/axios';
import { WhatsappService } from './whatsapp.service';
import { of } from 'rxjs';

describe('WhatsappService', () => {
  let service: WhatsappService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [WhatsappService],
    }).compile();

    service = module.get<WhatsappService>(WhatsappService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('sendMessage', () => {
    it('should send a message successfully', async () => {
      const mockResponse = {
        messaging_product: 'whatsapp',
        contacts: [
          {
            input: '123456789',
            wa_id: '123456789',
          },
        ],
        messages: [
          {
            id: 'message_id',
          },
        ],
      };

      jest.spyOn(httpService, 'post').mockReturnValueOnce(
        of({
          data: mockResponse,
          status: 200,
          statusText: 'OK',
          headers: {},
          config: { url: '' } as any,
        }),
      );

      process.env.WHATSAPP_PHONE_NUMBER_ID = '12345';
      process.env.WHATSAPP_API_KEY = 'test-token';
      
      const result = await service.sendMessage('123456789', 'Test message');
      expect(result).toEqual(mockResponse);
    });
  });
});
