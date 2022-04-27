import { Test, TestingModule } from '@nestjs/testing';
import { InvItemController } from './inv-item.controller';

describe('InvItemController', () => {
  let controller: InvItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvItemController],
    }).compile();

    controller = module.get<InvItemController>(InvItemController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
