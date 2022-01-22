import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  updateHero(newHero: Hero) {
    const oldHero = HEROES.find(h => h.id === newHero.id);
    if (oldHero === undefined) {
      this.messageService.add(`HeroService: hero with id=${newHero.id} not found`);
      return;
    }

    oldHero.name = newHero.name;
    oldHero.money = newHero.money;
    oldHero.item = newHero.item;
    this.messageService.add(`HeroService: updated hero id=${newHero.id}`);
  }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add("Hero service: fetched new hero");
    return heroes;
  } 

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  buyItem(hero: Hero, item: Item): boolean {
    if (hero.money >= item.price) {
      hero.money -= item.price;
      if (hero.item !== undefined) {
        hero.item.owner = "";
      }
      item.owner = hero.name;
      hero.item = item;
      this.messageService.add(`HeroService: bought item ${item.name} for ${item.price}`);
      return true;
    }

    this.messageService.add(`HeroService: not enough money to buy item ${item.name} for ${item.price}`);
    return false;
  }

  constructor(private messageService: MessageService) { }
}
