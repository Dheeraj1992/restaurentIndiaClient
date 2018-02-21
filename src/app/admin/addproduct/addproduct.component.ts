import { Component, OnInit } from '@angular/core';
import { Product, Subcategory } from '../../Modals';
import { DataManagerService } from '../../data-manager.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  product: Product = new Product();
  subcategories$ : Observable<Subcategory[]>;
  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
    this.subcategories$ =this.dataManagerService.getAllSubCategories();
  }

  save(product)
  {
    console.log(product);
  }
}
