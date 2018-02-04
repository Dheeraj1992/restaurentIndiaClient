import { Component } from '@angular/core';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private dataManagerService: DataManagerService)
  {
    let promise1 = new Promise((resolve, reject) => {
    
    // dataManagerService.getAllCategoryGroup().subscribe((res:CategoryGroup[])=>{
    //   this.categoryGroups= res
     
    // });


    });
    promise1.then(()=>{
      // console.log(this.products);
      
    });
  }
  
}
