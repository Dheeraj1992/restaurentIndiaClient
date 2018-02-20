import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Modals';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  @Input() products:  Array<Product>;
  constructor() { }

  ngOnInit() {
  }

}
