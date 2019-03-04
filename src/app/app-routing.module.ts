import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './Master Data/category/category-list/category-list.component';
import {CreateUserComponent} from './Master Data/User Master/create-user/create-user.component';

const routes: Routes = [
  {path:"categoryList",component:CategoryListComponent},
  {path:"createUser",component:CreateUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
