import { Component, OnInit } from '@angular/core';
import { Product } from '../../Modals';
import { DataManagerService } from '../../data-manager.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {

  product : Product= new Product();
  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
  }

  addproduct(formdata)
  {
    this.product = formdata.value;
    console.log('formdata: '+JSON.stringify(this.product));
    console.log(this.dataManagerService.saveProduct(this.product));
  }

}
