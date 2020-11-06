import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemEntity } from './item.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ItemEntity]) // Підкл. модуль і вказ. сутність бд - НЕ ЗАБУТИ
  ],
  controllers: [ItemsController]
})
export class ItemsModule {}
