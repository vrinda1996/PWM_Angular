import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './Master Data/category/category-list/category-list.component';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import {CategoryService} from './Master Data/category/category.service';
import { MatTableModule,MatPaginatorModule, MatFormFieldModule,MatInputModule,MatRadioModule } from  '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SearchUserComponent } from './Master Data/User Master/search-user/search-user.component';
import { CreateUserComponent } from './Master Data/User Master/create-user/create-user.component';
import { UserMchComponent } from './Master Data/User Master/user-mch/user-mch.component';
import { OrganizationMasterComponent } from './Master Data/Organization/organization-master/organization-master.component';
import { LSMWMasterComponent } from './Master Data/Organization/lsmwmaster/lsmwmaster.component';
import { RoleCreationComponent } from './Master Data/Role Master/role-creation/role-creation.component';
import { RoleAndProfileMappingComponent } from './Master Data/Role Master/role-and-profile-mapping/role-and-profile-mapping.component';
import { ProfileSettingComponent } from './Master Data/Role Master/profile-setting/profile-setting.component';
import { UserTypeCreationComponent } from './Master Data/Role Master/user-type-creation/user-type-creation.component';
import { WorkflowMasterComponent } from './Master Data/Workflow Master/workflow-master/workflow-master.component';
import { CampaignComponent } from './Master Data/Other Master/campaign/campaign.component';
import { MarkettingComponent } from './Master Data/Other Master/marketting/marketting.component';
import { ReasonOfRejectionComponent } from './Master Data/Other Master/reason-of-rejection/reason-of-rejection.component';
import { ProblemTypeComponent } from './Master Data/Other Master/problem-type/problem-type.component';
import { PromotionTypeComponent } from './Master Data/Other Master/promotion-type/promotion-type.component';
import { TaskTypeComponent } from './Master Data/Other Master/task-type/task-type.component';
import { ZoneComponent } from './Master Data/Other Master/zone/zone.component';
import { CalenderComponent } from './Master Data/Other Master/calender/calender.component';
import { ObjectiveComponent } from './Master Data/Other Master/objective/objective.component';
import { DepartmentComponent } from './Master Data/Other Master/department/department.component';
import { StoreProposalPendingReportComponent } from './Master Data/Other Master/store-proposal-pending-report/store-proposal-pending-report.component';
import { OfferApplicableForComponent } from './Master Data/Other Master/offer-applicable-for/offer-applicable-for.component';
import { AdditionOfTaxComponent } from './Master Data/Other Master/addition-of-tax/addition-of-tax.component';
import { LeadTimeConfigurationComponent } from './Master Data/Lead Time/lead-time-configuration/lead-time-configuration.component';
import { LeadTimeByTimeComponent } from './Master Data/Lead Time/lead-time-by-time/lead-time-by-time.component';
import { BroadcastMessageComponent } from './Master Data/Broadcast Message/broadcast-message/broadcast-message.component';
import { VistexMasterComponent } from './Master Data/Vistex Master/vistex-master/vistex-master.component';
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
    MatRadioModule,
    FlexLayoutModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
