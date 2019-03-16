import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators} from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface UserRole {
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
 
  userRoleControl= new FormControl('', [Validators.required]);
  public userRoles = [];

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.employeeForm.value);
  }
  private userRoleUrl = 'http://localhost:8082/roleAPI/getRole';

  public getUserRoleList() {
    console.log("res");
    return this.http.get<UserRole[]>(this.userRoleUrl).subscribe((res : any[])=>{
      console.log(res);
      this.userRoles = res;
    });
  }
}