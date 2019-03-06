import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { org } from '../../../models/org';

@Injectable({
  providedIn: 'root'
})
export class OrganizationMasterService {

  constructor(private http:HttpClient) { }
  private orgUrl = 'http://localhost:8080/organizationApi/orgList';

  public getOrgList() {
    return this.http.get<org[]>(this.orgUrl);
  }
}
