import { Component, OnInit } from '@angular/core';
import {Supplier} from '../models/supplier.model';
import { SupplierService } from './supplier.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit{

  supplier: Supplier = new Supplier();
  
  constructor(private router: Router, private supplierService: SupplierService) { }

  ngOnInit() {
    
    let itemId = localStorage.getItem("editSupplierId");
    let curUrl=this.router.url;
    if(curUrl=='/addsup') {
      localStorage.getItem("editSupplierId");     
    }else{
      
    this.supplierService.getSupplierById(+itemId)
      .subscribe( data => {
        this.supplier=data;
      });
     
  }
}


  createSupplier(): void {
    this.supplierService.createSupplier(this.supplier)
        .subscribe( data => { });
        location.reload(); 
        this.router.navigate(['listsup']); 
     
  
  };

  updateSupplier(): void {
    this.supplierService.updateSupplier(this.supplier)
        .subscribe( data => {
        
          localStorage.removeSupplier("editSupplierId");
         
        });
        location.reload();
        this.router.navigate(['listsup']); 
       
  };
  

}
