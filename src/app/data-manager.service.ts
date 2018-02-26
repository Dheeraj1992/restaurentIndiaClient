import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { User, Product } from './Modals';

@Injectable()
export class DataManagerService {

  currentUser: User;

  validUser: boolean = false;

  products:  Array<Product>;

  constructor(private http: Http) { }

  
  checkUser(username : string, password : string)
  {
    return this.http.get(this.getRelativePath("/getUserbyIdAndPassword")
                        +"?username="+username+"&password="+password);
  }

  getCategoryGroup()
  {
    return this.http.get(this.getRelativePath("/getAllCategoryGroups")).
    map(res=>res.json());
  }

  saveProduct(product:Product)
  {
    return this.http.post(this.getRelativePath("/saveProduct"),product).
    map(res=>res.json());

  }

  getAllProducts() {
   this.http.get(this.getRelativePath("/getAllProducts"))
   .subscribe((res)=> this.products= res.json());
  }

  getProductsByCategoryGroup(groupId)
  {
    return this.http.get(this.getRelativePath("/getProductsByCategoryGroup"+"?groupId="+groupId))
    .subscribe((res)=> this.products= res.json());
  }

  getProductsByCategoryGroupAndCategory(groupId,categoryId)
  {
    return this.http.get(this.getRelativePath("/getProductsByCategoryGroupAndCategory"+
    "?groupId="+groupId+"&categoryId="+categoryId))
    .subscribe((res)=> this.products= res.json());
  }

  getAllSubCategories()
  {
    return this.http.get(this.getRelativePath("/getAllSubCategories"))
    .map(res => res.json());
  }

  createUser(user:User )
  {
    console.log('calling createUser');
    this.http.post(this.getRelativePath("/saveUser"),user).subscribe((res)=>
  {
      console.log('User saved: '+JSON.stringify(res));
  });
  }

  // Get complete path to endpoint irrespective of application host. 
  getRelativePath(path) {
    var protocol = window.location.protocol;
    var slashes = protocol.concat("//");
    var host = slashes.concat(window.location.hostname);
    if (environment.production) {
      var url = host + (window.location.port.length > 0 ? ":" + window.location.port : '') + path;
      return url;
    }
    else {
      var url2 = "http://localhost:9080" + path;
      return url2;
    }
  }
}
