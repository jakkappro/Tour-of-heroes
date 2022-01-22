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

  constructor(private messageService: MessageService) { }
}

