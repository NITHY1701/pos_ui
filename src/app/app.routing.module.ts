import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SupplierComponent} from './supplier/supplier.component';
import {ListSupplierComponent} from './supplier/list-supplier.component';
import {ItemComponent} from './item/item.component';
import {ListItemComponent} from './item/list-item.component';
import {PurchaseComponent} from './purchase/purchase.component';
const routes: Routes = [
  { path: 'addsup', component: SupplierComponent },
  { path: 'listsup', component: ListSupplierComponent }, 
  { path: 'editsup', component: SupplierComponent }, 
  { path: 'additem', component: ItemComponent },
  { path: 'edit-item', component: ItemComponent },  
  { path: 'listitem', component: ListItemComponent },
  { path: 'purchase', component: PurchaseComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
