import { Component, OnInit , ViewChild, NgModule} from '@angular/core';
import {OrganizationMasterService} from './organization-master.service';
import { Router } from '@angular/router';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import { org } from '../../../models/org';

@Component({
  selector: 'app-organization-master',
  templateUrl: './organization-master.component.html',
  styleUrls: ['./organization-master.component.css']
})
export class OrganizationMasterComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length:number;
  orgList: org[];
  dataSource = new MatTableDataSource<org>(); 
  orgTableColumns  :  string[] = ['Zone', 'State', 'Region', 'City', 'Site Code', 'Site Description', 'Location', 'Store Class', 'Format', 'Status'];
  pageSizeOptions:number[] = [15, 30, 45];
  constructor(private router: Router, private orgMasterService: OrganizationMasterService) {
   
   }
   public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit(){
    this.getorgList();
  }
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
  }
  public getorgList = () => {
    this.orgMasterService.getOrgList()
    .subscribe(res => {
      this.dataSource.data = res as org[];
    })
  }

}