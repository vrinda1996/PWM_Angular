import { Component, OnInit , ViewChild} from '@angular/core';
import {mch} from '../../models/mch';
import {CategoryService} from '../category.service';
import { Router } from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import {MatPaginator} from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @ViewChild(MatPaginator) mchPaginator: MatPaginator;
  categoryList: mch[];
  dataSource = new UserDataSource(this.categoryService); 
  mchTableColumns  :  string[] = ['mcCode', 'mcName', 'categoryName', 'subCategoryName', 'isMCActive'];
  constructor(private router: Router, private categoryService: CategoryService) {
    
   }
  
  ngOnInit()
  {
    this.dataSource.paginator = this.mchPaginator;
  }

}

export class UserDataSource extends DataSource<any> {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoryService: CategoryService) {
    super();
  }
  connect(): Observable<mch[]> {
    return this.categoryService.getCategoryList();
  }
  disconnect() {}
}