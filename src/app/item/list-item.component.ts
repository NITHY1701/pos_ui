import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Item } from '../models/item.model';
import { ItemService } from './item.service';



@Component({
 
  templateUrl: './list-item.component.html'
  
})
export class ListItemComponent implements OnInit {

  items: Item[];

  constructor(private router: Router, private itemService: ItemService,private location: Location) {

  }

  ngOnInit() {
    
    this.itemService.getItems()
      .subscribe( data => {
        this.items = data;
      });
      
  };

  deleteItem(item: Item): void {
    this.itemService.deleteItem(item)
      .subscribe( data => {
        this.items = this.items.filter(u => u !== item);
      })
      location.reload();
  };

  editItem(item: Item): void {
    localStorage.removeItem("editItemId");
    localStorage.setItem("editItemId", item.id.toString());
    this.router.navigate(['edit-item']);
  };
 

}


