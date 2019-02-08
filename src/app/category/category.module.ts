import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from  '@angular/material';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatTableModule
  ]
})
export class CategoryModule { }
