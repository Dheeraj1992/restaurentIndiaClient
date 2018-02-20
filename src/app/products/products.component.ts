import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Modals';

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
