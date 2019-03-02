import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,MatPaginatorModule } from  '@angular/material';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class CategoryModule { }
