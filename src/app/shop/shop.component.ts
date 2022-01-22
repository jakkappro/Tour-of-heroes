import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../item';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
    private itemService: ItemService
  ) { }

  hero?: Hero;
  availableItems: Item[] = [];

  selectedItem?: Item;
  onSelect(item: Item): void {
    this.selectedItem = item;
    this.heroService.buyItem(this.hero!, item);
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
    this.getItems();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  getItems(): void {
    this.itemService.getItems().subscribe(items => this.availableItems = items.filter(item => item.owner === undefined || item.owner === ""));
  }

}
