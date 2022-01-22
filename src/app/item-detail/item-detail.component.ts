import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../item.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item?: Item;

  constructor(    
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location) { }

  getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.itemService.getItem(id).subscribe(item => this.item = item);
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getItem();
  }

}
