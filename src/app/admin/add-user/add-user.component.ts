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
    this.user.firstname=formdata.value.firstname;
    this.user.lastname=formdata.value.lastname;
    this.user.mobile=formdata.value.mobile;
    this.user.email=formdata.value.email;
    this.user.imageUrl=formdata.value.imageUrl;
    this.user.isAdmin=formdata.value.isAdmin;
    this.user.dateAdded= new Date();
    this.user.dateModified=new Date();

    this.user.cart= new Cart();
    this.user.cart.dateCreated=new Date();
    console.log('this.user='+JSON.stringify(this.user));
    this.dataManagerService.createUser(this.user);
  }

}
