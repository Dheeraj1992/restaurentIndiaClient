import { Component, OnInit } from '@angular/core';
import { Product } from '../Modals';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  products : Array<Product>;
  constructor(private dataManagerService:DataManagerService) {
    dataManagerService.getAllProducts().subscribe((res: Product[])=>
    {
      this.products=res
    });
   }

  ngOnInit() {
  }

}
