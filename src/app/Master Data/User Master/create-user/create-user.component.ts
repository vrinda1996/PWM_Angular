import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface UserRole {
  name: string;
}
export interface HoSiteCode {
  name: string;
}
export interface StoreSiteCode {
  name: string;
}
export interface ZoneSiteCode {
  name: string;
}
export interface FormatList {
  name: string;
}
export interface DescriptionList {
  name: string;
}

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  employeeForm = new FormGroup({
    existingEmployeeName: new FormControl(''),
    employeeCode: new FormControl(''),
    employeeName: new FormControl(''),
    contactNumber: new FormControl(''),
    emailAddress: new FormControl(''),
    reportingTo: new FormControl(''),
  });
  organizationForm = new FormGroup({
    organizationType: new FormControl(),
    siteDescription: new FormControl({ value: 'siteDescription', disabled: true }),
    format: new FormControl({ value: 'format', disabled:true }),
    city: new FormControl({ value: 'city', disabled: true}),
    region: new FormControl({ value: 'region', disabled: true }),
    location: new FormControl({ value: 'location', disabled: true}),
    zone: new FormControl({ value: 'zone', disabled: true}),
  });
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.getUserRoleList();
    this.getHoSiteCode();
    this.getStoreSiteCode();
    this.getFormatList();
    this.getZoneSiteCode();
    this.getDescriptionList();
  }

  onSubmit() {
  }
  userRoleControl= new FormControl('', [Validators.required]);
  public userRoles = [];
  private userRoleUrl = 'http://localhost:8082/roleAPI/getRole';
  public getUserRoleList() {
    console.log("user");
    return this.http.get<UserRole[]>(this.userRoleUrl).subscribe((res : any[])=>{
      this.userRoles = res;
    });
  }
  
  hoSiteCodeControl= new FormControl('', [Validators.required]);
  public hoSiteCode = [];
  private HoSiteCodeUrl = 'http://localhost:8082/roleAPI/getRole';
  public getHoSiteCode() {
    console.log("Ho");
    return this.http.get<HoSiteCode[]>(this.HoSiteCodeUrl).subscribe((res : any[])=>{
      this.hoSiteCode = res;
    });
  }

  storeSiteCodeControl= new FormControl('', [Validators.required]);
  public storeSiteCode = [];
  private StoreSiteCodeUrl = 'http://localhost:8082/roleAPI/getRole';
  public getStoreSiteCode() {
    console.log("Store");
    return this.http.get<StoreSiteCode[]>(this.StoreSiteCodeUrl).subscribe((res : any[])=>{
      this.storeSiteCode = res;
    });
  }
  formatControl= new FormControl('', [Validators.required]);
  public formatList = [];
  private FormatUrl = 'http://localhost:8082/roleAPI/getRole';
  public getFormatList() {
    console.log("format");
    return this.http.get<FormatList[]>(this.FormatUrl).subscribe((res : any[])=>{
      this.formatList = res;
    });
  }
  zoneSiteCodeControl= new FormControl('', [Validators.required]);
  public zoneSiteCode = [];
  private ZoneSiteCodeUrl = 'http://localhost:8082/roleAPI/getRole';
  public getZoneSiteCode() {
    console.log("Zone");
    return this.http.get<ZoneSiteCode[]>(this.ZoneSiteCodeUrl).subscribe((res : any[])=>{
      this.zoneSiteCode = res;
    });
  }
  descriptionControl= new FormControl('', [Validators.required]);
  public descriptionList = [];
  private DescriptionListUrl = 'http://localhost:8082/roleAPI/getRole';
  public getDescriptionList() {
    console.log("Description");
    return this.http.get<DescriptionList[]>(this.DescriptionListUrl).subscribe((res : any[])=>{
      this.descriptionList = res;
    });
  }
}