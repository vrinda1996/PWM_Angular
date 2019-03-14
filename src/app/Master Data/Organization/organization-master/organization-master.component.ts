import { Component, OnInit , ViewChild, NgModule} from '@angular/core';
import {OrganizationMasterService} from './organization-master.service';
import { Router } from '@angular/router';
import {MatPaginator,MatTableDataSource} from '@angular/material';
import {mstStore } from '../../../models/mstStore';

@Component({
  selector: 'app-organization-master',
  templateUrl: './organization-master.component.html',
  styleUrls: ['./organization-master.component.css']
})
export class OrganizationMasterComponent implements OnInit {
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  length:number;
  orgList: mstStore[];
  dataSource = new MatTableDataSource<mstStore>(); 
  orgTableColumns  :  string[] = ['zoneName', 'state', 'region', 'city', 'storeId', 'storeDesc', 'location', 'storeClass', 'format', 'isStoreBlocked'];
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
      this.dataSource.data = res as mstStore[];
    })
  }

}