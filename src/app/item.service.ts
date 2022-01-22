import { Injectable } from '@angular/core';
import { ITEMS } from './mock-items';
import { Item } from './item';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

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

