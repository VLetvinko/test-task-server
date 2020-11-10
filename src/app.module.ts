import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { FilesModule } from './files/files.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1111',
    database: 'test_db',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true
  }),
    MulterModule.register({
      dest: '/upload',
    }),
    FilesModule,
    ItemsModule,
    FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
