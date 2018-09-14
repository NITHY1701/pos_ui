import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Supplier } from '../models/supplier.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SupplierService {

  constructor(private http:HttpClient) {}

  private supplierUrl = 'http://localhost:8080/supplier/api/supplier/';
  private supplierlistUrl = 'http://localhost:8080/supplier/api/suppliers/';


  public getSuppliers() {
    return this.http.get<Supplier[]>(this.supplierlistUrl);
  }

  getSupplierById(id: number) {
    return this.http.get<Supplier>(this.supplierUrl + '/' + id);
  }

  public deleteSupplier(supplier) {
    return this.http.delete(this.supplierUrl + supplier.id);
  }

  updateSupplier(supplier: Supplier) {
    return this.http.put(this.supplierUrl + '/' + supplier.id, supplier);
  }


    public createSupplier(supplier) {
    return this.http.post<Supplier>(this.supplierUrl, supplier);
  }

}