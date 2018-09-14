import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Item } from '../models/item.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {

  constructor(private http:HttpClient) {}

  private itemUrl = 'http://localhost:8080/item/api/item/';


  public getItems() {
    return this.http.get<Item[]>(this.itemUrl+"/list");
  }

  getItemById(id: number) {
    return this.http.get<Item>(this.itemUrl + '/' + id);
  }

  public deleteItem(item) {
    return this.http.delete(this.itemUrl + item.id);
  }

  updateItem(item: Item) {
    return this.http.put(this.itemUrl + '/' + item.id, item);
  }


    public createItem(item) {
    return this.http.post<Item>(this.itemUrl, item);
  }

}