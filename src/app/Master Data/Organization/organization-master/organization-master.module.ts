import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule,MatPaginatorModule } from  '@angular/material';
import { OrganizationRoutingModule } from './organization-master-routing.module';
import { OrganizationMasterComponent } from './organization-master.component';

@NgModule({
  declarations: [OrganizationMasterComponent],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class OrganizationMasterModule { }
