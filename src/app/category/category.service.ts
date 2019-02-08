import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {mch} from '../models/mch';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  private categoryUrl = 'http://localhost:8080/categoryApi/category';

  public getCategoryList() {
    return this.http.get<mch[]>(this.categoryUrl);
  }
}
