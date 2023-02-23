import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ItemModel } from 'src/models/item.model';
import { ItemService } from './item.service';

@Controller('item')
export class ItemController {

    constructor( private itemServices: ItemService){}

    @Get("getAll")
    getAllItems(){
        return this.itemServices.getAllItems();
    }

    @Get("getById/:id")
    getItemById(@Param ("id") id: string){
        return this.itemServices.getItemById(id);
    }

    @Post("create")
    createItem(@Body() item: any) {
        return this.itemServices.createItem(item);
    }

    @Put("updateItem/:id")
    updateItem(@Param("id") id: string, @Body() item: ItemModel) {
        return this.itemServices.updateItem(id, item);
    }

    @Delete("deleteItem/:id")
    deleteItem(@Param("id") id: string) {
        return this.itemServices.deleteItem(id);
    }
}
