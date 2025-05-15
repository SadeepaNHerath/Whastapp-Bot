import { Test, TestingModule } from '@nestjs/testing';
import { HttpModule } from '@nestjs/axios';
import { WhatsappController } from './whatsapp.controller';
import { WhatsappService } from './whatsapp.service';

describe('WhatsappController', () => {
  let controller: WhatsappController;
  let service: WhatsappService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [WhatsappController],
      providers: [WhatsappService],
    }).compile();

    controller = module.get<WhatsappController>(WhatsappController);
    service = module.get<WhatsappService>(WhatsappService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
