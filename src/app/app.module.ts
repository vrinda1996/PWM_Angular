import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import {CategoryService} from './category/category.service';
import { MatTableModule,MatPaginatorModule, MatFormFieldModule,MatInputModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SearchUserComponent } from './search-user/search-user.component';
import { CreateUserComponent } from './User Master/create-user/create-user.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    AppComponent,
    SearchUserComponent,
    CreateUserComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
