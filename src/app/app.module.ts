import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryListComponent } from './Master Data/category/category-list/category-list.component';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import {CategoryService} from './Master Data/category/category.service';
import { MatTableModule,MatPaginatorModule, MatFormFieldModule,MatInputModule } from  '@angular/material';
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
import { InitiatePromotionComponent } from './Promotion Initiation/Create/initiate-promotion/initiate-promotion.component';
import { CreatePromotionInitiationComponent } from './Promotion Initiation/Create/initiate-promotion/create-promotion-initiation/create-promotion-initiation.component';
import { CreateSubPromoUsingFileComponent } from './Promotion Initiation/Create/create-sub-promo-using-file/create-sub-promo-using-file.component';
import { OrganizationGroupComponent } from './Promotion Initiation/Create/organization-group/organization-group.component';
import { ConflictResolutionComponent } from './Promotion Initiation/Create/conflict-resolution/conflict-resolution.component';
import { PromoDateChangeComponent } from './Promotion Modification/promo-date-change/promo-date-change.component';
import { ArticleMcAdditionComponent } from './Promotion Modification/article-mc-addition/article-mc-addition.component';
import { ArticleMcRemovalComponent } from './Promotion Modification/article-mc-removal/article-mc-removal.component';
import { Level1Component } from './Promotion Approval/level1/level1.component';
import { Level2Component } from './Promotion Approval/level2/level2.component';
import { BusinessExigencyComponent } from './Promotion Approval/business-exigency/business-exigency.component';
import { WorkbenchComponent } from './Promotion Execution/Execute Management/workbench/workbench.component';
import { DashboardComponent } from './Promotion Execution/Execute Management/dashboard/dashboard.component';
import { PromoCommunicationComponent } from './promo-communication/promo-communication.component';
import { PromoLifeCycleArticleMcLevelComponent } from './Reports/promo-life-cycle-article-mc-level/promo-life-cycle-article-mc-level.component';
import { StoreProposalComponent } from './Reports/store-proposal/store-proposal.component';
import { PromoLifeCycleComponent } from './Reports/promo-life-cycle/promo-life-cycle.component';
import { ConsolidatedReportComponent } from './Reports/consolidated-report/consolidated-report.component';
import { VendorBackedReportComponent } from './Reports/vendor-backed-report/vendor-backed-report.component';
import { IntegratedReportComponent } from './Reports/integrated-report/integrated-report.component';
import { UserMchMappingReportComponent } from './Reports/user-mch-mapping-report/user-mch-mapping-report.component';
import { VistexComponent } from './Vistex/vistex/vistex.component';
import { SapLoginComponent } from './SAP Login/sap-login/sap-login.component';
import { CreationComponent } from './Promotion Execution/Promotion Set-up/Internal Task/creation/creation.component';
import { InwardTaskComponent } from './Promotion Execution/Promotion Set-up/Internal Task/inward-task/inward-task.component';
import { OutwardTaskComponent } from './Promotion Execution/Promotion Set-up/Internal Task/outward-task/outward-task.component';


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
    McWiseApproverComponent,
    InitiatePromotionComponent,
    CreatePromotionInitiationComponent,
    CreateSubPromoUsingFileComponent,
    OrganizationGroupComponent,
    ConflictResolutionComponent,
    PromoDateChangeComponent,
    ArticleMcAdditionComponent,
    ArticleMcRemovalComponent,
    Level1Component,
    Level2Component,
    BusinessExigencyComponent,
    WorkbenchComponent,
    DashboardComponent,
    PromoCommunicationComponent,
    PromoLifeCycleArticleMcLevelComponent,
    StoreProposalComponent,
    PromoLifeCycleComponent,
    ConsolidatedReportComponent,
    VendorBackedReportComponent,
    IntegratedReportComponent,
    UserMchMappingReportComponent,
    VistexComponent,
    SapLoginComponent,
    CreationComponent,
    InwardTaskComponent,
    OutwardTaskComponent
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
