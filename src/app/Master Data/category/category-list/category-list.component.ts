import { Component, OnInit , ViewChild, NgModule} from '@angular/core';
import {mch} from '../../models/mch';
import {CategoryService} from '../category.service';
import { Router } from '@angular/router';
import {MatPaginator,MatTableDataSource,MatFormFieldModule, MatInputModule} from '@angular/material';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length:number;
  categoryList: mch[];
  dataSource = new MatTableDataSource<mch>(); 
  mchTableColumns  :  string[] = ['mcCode', 'mcName', 'categoryName', 'subCategoryName', 'isMCActive'];
  pageSizeOptions:number[] = [15, 30, 45];
  constructor(private router: Router, private categoryService: CategoryService) {
   
   }
   public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit(){
    this.getcategoryList();
  }
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
  }
  public getcategoryList = () => {
    this.categoryService.getCategoryList()
    .subscribe(res => {
      this.dataSource.data = res as mch[];
    })
  }

}