import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CategoryListComponent} from './Master Data/category/category-list/category-list.component';
import {CreateUserComponent} from './Master Data/User Master/create-user/create-user.component';
import {SearchUserComponent} from './Master Data/User Master/search-user/search-user.component';
import {OrganizationMasterComponent} from './Master Data/Organization/organization-master/organization-master.component';
import {LSMWMasterComponent} from './Master Data/Organization/lsmwmaster/lsmwmaster.component';

const routes: Routes = [
  {path:"categoryList",component:CategoryListComponent},
  {path:"createUser",component:CreateUserComponent},
  {path:"searchUser",component:SearchUserComponent},
  {path:"orgMaster",component:OrganizationMasterComponent},
  {path:"lsmwMaster",component:LSMWMasterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
