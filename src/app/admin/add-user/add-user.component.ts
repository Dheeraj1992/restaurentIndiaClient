import { Component, OnInit } from '@angular/core';
import { User, Cart } from '../../Modals';
import { DataManagerService } from '../../data-manager.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user: User;
  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
  }
  createUser(formdata)
  {
    console.log('data='+JSON.stringify(formdata.value));
    this.user=new User();
    this.user.username=formdata.value.username;
    this.user.password=formdata.value.password;
    this.user.cart= new Cart();
    this.user.cart.cartId=3;
    this.user.cart.dateAdded=new Date();
    console.log('this.user='+JSON.stringify(this.user));
    this.dataManagerService.createUser(this.user);
  }

}
