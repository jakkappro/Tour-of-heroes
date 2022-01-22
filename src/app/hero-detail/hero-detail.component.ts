import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { Item } from '../item';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;
  item?: Item;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) { }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  getItem(): void {
    this.item = this.hero!.item;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
    this.getItem();
  }

  sellItem(i: Item): void {
    this.hero!.item = undefined;
    this.hero!.money += i.price;
    this.heroService.updateHero(this.hero!);
    this.location.back();
  }
}
