import { Component, OnInit } from '@angular/core';
import { Product } from '../Modals';
import { DataManagerService } from '../data-manager.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private dataManagerService:DataManagerService) {
      this.dataManagerService.getAllProducts();
   }

  ngOnInit() {
  }

}
