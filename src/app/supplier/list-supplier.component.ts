import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Supplier } from '../models/supplier.model';
import { SupplierService } from './supplier.service';



@Component({
 
  templateUrl: './list-supplier.component.html'
  
})
export class ListSupplierComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private router: Router, private supplierService: SupplierService,private location: Location) {

  }

  ngOnInit() {
    
    this.supplierService.getSuppliers()
      .subscribe( data => {
        this.suppliers = data;
      });
      
  };

  deleteSupplier(supplier: Supplier): void {
    this.supplierService.deleteSupplier(supplier)
      .subscribe( data => {
        this.suppliers = this.suppliers.filter(u => u !== supplier);
      })
      location.reload();
  };

  editSupplier(supplier: Supplier): void {
    localStorage.removeItem("editSupplierId");
    localStorage.setItem("editSupplierId", supplier.id.toString());
    this.router.navigate(['editsup']);
  };

}


