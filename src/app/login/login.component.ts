import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { User } from '../Modals';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dataManagerService: DataManagerService) { }

  ngOnInit() {
  }

  form = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  });

  validateUserByReactiveForms()
  {
    console.log('validateUserByReactiveForms data= '+JSON.stringify(this.form.value));
    this.checkUser(this.form.value.username,this.form.value.password);
  }

  get username()
  {
    return this.form.get('username');
  }

  get password()
  {
    return this.form.get('password');
  }

  
  get Form()
  {
    return this.form;
  }

  validateUserByTemplateForms(formdata)
  {
    console.log('validateUserByTemplateForms data= '+JSON.stringify(formdata.value));
    this.checkUser(formdata.value.username,formdata.value.password);
  }

  checkUser(username : string, password : string)
  {
       console.log('checkUser data: '+username+' '+password);
        this.dataManagerService.checkUser(username,password).subscribe((res)=>{
           console.log('data returned= '+JSON.stringify(res));
            this.dataManagerService.currentUser = res.json();
            if(this.dataManagerService.currentUser!=null && this.dataManagerService.currentUser!=undefined)
            {
              this.dataManagerService.goToHomePage = true;
              console.log('user validated');
            }
            else
            {
            this.dataManagerService.goToHomePage = false;
            console.log('user not validated');
            }
        });
  }

}
