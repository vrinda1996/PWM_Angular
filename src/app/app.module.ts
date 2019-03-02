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
import { UserMchComponent } from './User Master/user-mch/user-mch.component';
import { OrganizationMasterComponent } from './Organization/organization-master/organization-master.component';
import { LSMWMasterComponent } from './Organization/lsmwmaster/lsmwmaster.component';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { RoleAndProfileMappingComponent } from './Role Master/role-and-profile-mapping/role-and-profile-mapping.component';
import { ProfileSettingComponent } from './Role Master/profile-setting/profile-setting.component';
import { UserTypeCreationComponent } from './Role Master/user-type-creation/user-type-creation.component';
import { WorkflowMasterComponent } from './Workflow Master/workflow-master/workflow-master.component';
import { CampaignComponent } from './Other Master/campaign/campaign.component';
import { MarkettingComponent } from './Other Master/marketting/marketting.component';
import { ReasonOfRejectionComponent } from './Other Master/reason-of-rejection/reason-of-rejection.component';
import { ProblemTypeComponent } from './Other Master/problem-type/problem-type.component';
import { PromotionTypeComponent } from './Other Master/promotion-type/promotion-type.component';
import { TaskTypeComponent } from './Other Master/task-type/task-type.component';
import { ZoneComponent } from './Other Master/zone/zone.component';
import { CalenderComponent } from './Other Master/calender/calender.component';
import { ObjectiveComponent } from './Other Master/objective/objective.component';
import { DepartmentComponent } from './Other Master/department/department.component';
import { StoreProposalPendingReportComponent } from './Other Master/store-proposal-pending-report/store-proposal-pending-report.component';
import { OfferApplicableForComponent } from './Other Master/offer-applicable-for/offer-applicable-for.component';
import { AdditionOfTaxComponent } from './Other Master/addition-of-tax/addition-of-tax.component';
import { LeadTimeConfigurationComponent } from './Lead Time/lead-time-configuration/lead-time-configuration.component';
import { LeadTimeByTimeComponent } from './Lead Time/lead-time-by-time/lead-time-by-time.component';
import { BroadcastMessageComponent } from './Broadcast Message/broadcast-message/broadcast-message.component';
import { VistexMasterComponent } from './Vistex Master/vistex-master/vistex-master.component';
import { CreateComponent } from './Proposal Management/Promotion Proposal/create/create.component';
import { ViewModifyComponent } from './Proposal Management/Promotion Proposal/view-modify/view-modify.component';
import { ArticleDownloadComponent } from './Proposal Management/Article Download/article-download/article-download.component';
import { McWiseApproverComponent } from './Proposal Management/MC Wise Approver/mc-wise-approver/mc-wise-approver.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    AppComponent,
    SearchUserComponent,
    CreateUserComponent,
    UserMchComponent,
    OrganizationMasterComponent,
    LSMWMasterComponent,
    RoleCreationComponent,
    RoleAndProfileMappingComponent,
    ProfileSettingComponent,
    UserTypeCreationComponent,
    WorkflowMasterComponent,
    CampaignComponent,
    MarkettingComponent,
    ReasonOfRejectionComponent,
    ProblemTypeComponent,
    PromotionTypeComponent,
    TaskTypeComponent,
    ZoneComponent,
    CalenderComponent,
    ObjectiveComponent,
    DepartmentComponent,
    StoreProposalPendingReportComponent,
    OfferApplicableForComponent,
    AdditionOfTaxComponent,
    LeadTimeConfigurationComponent,
    LeadTimeByTimeComponent,
    BroadcastMessageComponent,
    VistexMasterComponent,
    CreateComponent,
    ViewModifyComponent,
    ArticleDownloadComponent,
    McWiseApproverComponent
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
