import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {SupplierService} from './supplier/supplier.service';
import { AppRoutingModule } from './app.routing.module';
import { SupplierComponent } from './supplier/supplier.component';
import { ListSupplierComponent } from './supplier/list-supplier.component';
import { ItemService} from './item/item.service';
import { HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { ItemComponent } from './item/item.component';
import { ListItemComponent } from './item/list-item.component';
import { PurchaseComponent } from './purchase/purchase.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ListItemComponent,
    SupplierComponent,
    ListSupplierComponent,
    PurchaseComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,    
    ReactiveFormsModule
   
    ],
  providers: [ItemService,SupplierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
