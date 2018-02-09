import { Component, OnInit } from '@angular/core';
import { DataManagerService } from '../data-manager.service';
import { CategoryGroup } from '../Modals';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cg: CategoryGroup;
  constructor(private dataManagerService:DataManagerService) { 
  //   this.dataManagerService.getCategoryGroup().subscribe((res:CategoryGroup)=>
  //  {
  //   this.cg = res;
  //   console.log(' this.cg '+JSON.stringify( this.cg));
  //  });
 
  }

  getProductsByCategory(categoryid)
  {
    console.log('categoryid='+categoryid);
  }

  ngOnInit() {
  }

}
