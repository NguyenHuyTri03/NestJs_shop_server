import { Injectable } from '@nestjs/common';
import { ItemModel } from 'src/models/item.model';

@Injectable()
export class ItemService {

    private items: ItemModel[] = [
        {
            id: "item1",
            name: "Coke",
            description: "Coke is gud",
        },{
            id: "item2",
            name: "Pepsi",
            description: "Pepsi is a drink",
        },{
            id: "item3",
            name: "Poca",
            description: "Poca is a snack",
        },{
            id: "item4",
            name: "Lays",
            description: "Lays is a snack",
        },{
            id: "item5",
            name: "Bourbon",
            description: "Bourbon is wine",
        },{
            id: "item6",
            name: "Mentos",
            description: "Mentos is a candy",
        },{
            id: "item7",
            name: "Lego 3 in 1",
            description: "Lego is a toy",
        },{
            id: "item8",
            name: "MSI",
            description: "MSI is a laptop manufacturer",
        },{
            id: "item9",
            name: "Apple",
            description: "Apple is a fruit",
        },{
            id: "item10",
            name: "Coroba",
            description: "Coroba is a guitar manufacturer",
        }
    ];

    getAllItems() {
        return this.items;
    }

    getItemById(id: string): ItemModel {
        return this.items.find(item => item.id == id);
    }

    createItem(item: ItemModel) {
        this.items.push(item);
        return { message: "Item created" };
    }

    updateItem(id: string, item: ItemModel) {
        const index = this.items.findIndex(item => item.id === id);
        this.items[index] = item;
        return { message: "Item updated" };
    }

    deleteItem(id: string) {
        const index = this.items.findIndex(item => item.id === id);
        console.log(index);
        if(index == -1){
            console.log("Item not found");
        }else{
            console.log("item del");
            this.items.splice(index, 1);
        }
        
        return { message: "Item deleted" };
    }
}
