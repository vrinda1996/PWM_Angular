import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { mstStore } from '../../../models/mstStore';

@Injectable({
  providedIn: 'root'
})
export class OrganizationMasterService {

  constructor(private http:HttpClient) { }
  private orgUrl = 'http://localhost:8082/organizationApi/orgList';

  public getOrgList() {
    return this.http.get<mstStore[]>(this.orgUrl);
  }
}
