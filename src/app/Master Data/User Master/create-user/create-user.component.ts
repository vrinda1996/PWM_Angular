import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


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
    organizationType: new FormControl(''),
    siteDescription: new FormControl(''),
    format: new FormControl(''),
    city: new FormControl(''),
    region: new FormControl(''),
    location: new FormControl(''),
    zone: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.employeeForm.value);
  }


}
