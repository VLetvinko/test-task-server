import { Body, Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';
import { Repository } from 'typeorm';

interface Item {
  name: string;
}

@Controller('items')
export class ItemsController {

  constructor(@InjectRepository(ItemEntity)
              private readonly itemsRepository: Repository<ItemEntity>) { }

  @Get()
  getAll(): Promise<ItemEntity[]> {
    return this.itemsRepository.find();
  }

  @Post()
  create(@Body() newItem: Item): Promise<ItemEntity> {
    const item = this.itemsRepository.create(newItem);
    return this.itemsRepository.save(item);
  }
}
