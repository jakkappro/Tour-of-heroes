import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  updateItem(i: Item) {
    const oldItem = ITEMS.find(item => item.id === i.id);
    if (oldItem === undefined) {
      this.messageService.add(`ItemService: item with id=${i.id} not found`);
      return;
    }

    oldItem.name = i.name;
    oldItem.price = i.price;
    oldItem.owner = i.owner;
    this.messageService.add(`ItemService: updated item id=${i.id}`);
  }

  getItems(): Observable<Item[]> {
    const items = of(ITEMS);
    this.messageService.add("Item service: fetched new item");
    return items;
  } 

  getItem(id: number): Observable<Item> {
    const item = of(ITEMS.find(item => item.id === id)!);
    this.messageService.add(`Item service: fetched item id=${id}`);
    return item;
  }

  constructor(private messageService: MessageService) { }
}

