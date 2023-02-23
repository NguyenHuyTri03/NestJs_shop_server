import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemController } from './items/item/item.controller';
import { ItemService } from './items/item/item.service';
import { ItemModule } from './items/item/item.module';

@Module({
  imports: [ItemModule],
  controllers: [AppController, ItemController],
  providers: [AppService, ItemService],
})
export class AppModule {}
