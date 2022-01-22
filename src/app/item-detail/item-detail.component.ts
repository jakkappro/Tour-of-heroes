import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';
import { Hero } from '../hero';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  @Input() item?: Item;
  @Input() inHeroView?: boolean;
  @Input() hero?: Hero;

  constructor(    
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location) { }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id).subscribe(item => this.item = item);
    this.inHeroView = false;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    if (this.item === undefined) {
      this.getItem();
    }
  }

  sell(): void {
    this.hero!.money += this.item!.price;
    this.hero!.item = undefined;
    this.item!.owner = "";
  }

}
