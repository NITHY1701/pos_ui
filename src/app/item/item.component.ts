import { Component, OnInit } from '@angular/core';
import {Item} from '../models/item.model';
import { ItemService } from './item.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  item: Item = new Item();

  constructor(private router: Router, private itemService: ItemService) { }

  ngOnInit() {
    
    let itemId = localStorage.getItem("editItemId");
    let curUrl=this.router.url;
    if(curUrl=='/additem') {
      localStorage.removeItem("editItemId");     
    }else{
      
    this.itemService.getItemById(+itemId)
      .subscribe( data => {
        this.item=data;
      });
     
  }
}


  createItem(): void {
    this.itemService.createItem(this.item)
        .subscribe( data => { });
        location.reload(); 
        this.router.navigate(['listitem']); 
     
  
  };

  updateItem(): void {
    this.itemService.updateItem(this.item)
        .subscribe( data => {
        
          localStorage.removeItem("editItemId");
         
        });
        location.reload();
        this.router.navigate(['listitem']); 
       
  };
  

}
