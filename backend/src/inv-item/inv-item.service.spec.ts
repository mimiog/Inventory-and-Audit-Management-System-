import { Test, TestingModule } from '@nestjs/testing';
import { InvItemService } from './inv-item.service';

describe('InvItemService', () => {
  let service: InvItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvItemService],
    }).compile();

    service = module.get<InvItemService>(InvItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
