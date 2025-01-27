import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddLeadComponent } from './add-lead/add-lead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { AddClientComponent } from './add-client/add-client.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LoanstatusComponent } from './loanstatus/loanstatus.component';
import { CheckAvailabilityComponent } from './check-availability/check-availability.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CampignComponent } from './campign/campign.component';
import { ClientBankComponent } from './client-bank/client-bank.component';
import { EventComponent } from './event/event.component';
import { HttpClientModule } from '@angular/common/http';
import { AgreementRequestedComponent } from './agreement-requested/agreement-requested.component';
import { AgreementRegisteredComponent } from './agreement-registered/agreement-registered.component';
import { AgreementResubmisionComponent } from './agreement-resubmision/agreement-resubmision.component';
import { RequestForStampdutyComponent } from './request-for-stampduty/request-for-stampduty.component';
import { RequestForCertifiedComponent } from './request-for-certified/request-for-certified.component';
import { RequestForBindingComponent } from './request-for-binding/request-for-binding.component';
import { CreateScheduleComponent } from './create-schedule/create-schedule.component';
import { Lawyer1DashboardComponent } from './lawyer1-dashboard/lawyer1-dashboard.component';
import { Lawyer2DashboardComponent } from './lawyer2-dashboard/lawyer2-dashboard.component';
import { L2AgreementResubmissionComponent } from './l2-agreement-resubmission/l2-agreement-resubmission.component';
import { L2AgreementRegisteredComponent } from './l2-agreement-registered/l2-agreement-registered.component';
import { L2AgreementReviewComponent } from './l2-agreement-review/l2-agreement-review.component';
import { L2NewdraftCreateComponent } from './l2-newdraft-create/l2-newdraft-create.component';
import { L2NewdraftResubmissionComponent } from './l2-newdraft-resubmission/l2-newdraft-resubmission.component';
import { Lawyer2RequestforStampdutyComponent } from './lawyer2-requestfor-stampduty/lawyer2-requestfor-stampduty.component';
import { Lawyer2RequestforCertifiedComponent } from './lawyer2-requestfor-certified/lawyer2-requestfor-certified.component';
import { Lawyer2RequestforBindingComponent } from './lawyer2-requestfor-binding/lawyer2-requestfor-binding.component';
import { Lawyer2CreateScheduleComponent } from './lawyer2-create-schedule/lawyer2-create-schedule.component';
import { ExecutorClientSignatureComponent } from './executor-client-signature/executor-client-signature.component';
import { ExecutorBuilderSignatureComponent } from './executor-builder-signature/executor-builder-signature.component';
import { ExecutorResubmissionComponent } from './executor-resubmission/executor-resubmission.component';
import { ExcuterDashboardComponent } from './excuter-dashboard/excuter-dashboard.component';
import { ExexutorClientAppointmentComponent } from './exexutor-client-appointment/exexutor-client-appointment.component';
import { ExexutorBuilderAppointmentComponent } from './exexutor-builder-appointment/exexutor-builder-appointment.component';
import { BuilderReportComponent } from './builder-report/builder-report.component';
import { BuilderAgreementExecutionComponent } from './builder-agreement-execution/builder-agreement-execution.component';
import { BuiderDashboardComponent } from './buider-dashboard/buider-dashboard.component';
import { BuilderAgreementResubmissionComponent } from './builder-agreement-resubmission/builder-agreement-resubmission.component';
import { BuilderCheckAvailabilityComponent } from './builder-check-availability/builder-check-availability.component';
import { SmDashboardComponent } from './sm-dashboard/sm-dashboard.component';
import { AuthorityDashboardComponent } from './authority-dashboard/authority-dashboard.component';
import { AuthorityReportComponent } from './authority-report/authority-report.component';
import { AuthorityRequestComponent } from './authority-request/authority-request.component';
import { AuthorityResubmissionComponent } from './authority-resubmission/authority-resubmission.component';
import { LoanDepDashboardComponent } from './loan-dep-dashboard/loan-dep-dashboard.component';
import { LoanDepRequestComponent } from './loan-dep-request/loan-dep-request.component';
import { LoanDepDisbursementRequestComponent } from './loan-dep-disbursement-request/loan-dep-disbursement-request.component';
import { LoanDepNewDemandComponent } from './loan-dep-new-demand/loan-dep-new-demand.component';
import { LoanDepReportComponent } from './loan-dep-report/loan-dep-report.component';
import { PrinterDashboardComponent } from './printer-dashboard/printer-dashboard.component';
import { PrinterAgreementPrintComponent } from './printer-agreement-print/printer-agreement-print.component';
import { PrinterAgreementDeliveryComponent } from './printer-agreement-delivery/printer-agreement-delivery.component';
import { PrinterScheduleClientComponent } from './printer-schedule-client/printer-schedule-client.component';
import { PrinterScheduleBuilderComponent } from './printer-schedule-builder/printer-schedule-builder.component';
import { BDMDashboardComponent } from './bdm-dashboard/bdm-dashboard.component';
import { BdmCreateScheduleComponent } from './bdm-create-schedule/bdm-create-schedule.component';
import { BdmAddLeadComponent } from './bdm-add-lead/bdm-add-lead.component';
import { BdmLeadStatusComponent } from './bdm-lead-status/bdm-lead-status.component';
import { BdmAddProjectComponent } from './bdm-add-project/bdm-add-project.component';
import { CMDashboardComponent } from './cm-dashboard/cm-dashboard.component';
import { CMAddLeadComponent } from './cm-add-lead/cm-add-lead.component';
import { CMLeadStatusComponent } from './cm-lead-status/cm-lead-status.component';
import { CMOnboardingNewDataComponent } from './cm-onboarding-new-data/cm-onboarding-new-data.component';
import { CMOnboardingModifyComponent } from './cm-onboarding-modify/cm-onboarding-modify.component';
import { CMDraftNewAgreementComponent } from './cm-draft-new-agreement/cm-draft-new-agreement.component';
import { CMDraftAdHocComponent } from './cm-draft-ad-hoc/cm-draft-ad-hoc.component';
import { CMReportBdmComponent } from './cm-report-bdm/cm-report-bdm.component';
import { CMReportAgreementComponent } from './cm-report-agreement/cm-report-agreement.component';
import { CMAddProjectComponent } from './cm-add-project/cm-add-project.component';
import { BdmAdHocComponent } from './bdm-ad-hoc/bdm-ad-hoc.component';
import { AccountantDashboardComponent } from './accountant-dashboard/accountant-dashboard.component';
import { AccountantPaymentCertifiedComponent } from './accountant-payment-certified/accountant-payment-certified.component';
import { AccountantPaymentStampdutyComponent } from './accountant-payment-stampduty/accountant-payment-stampduty.component';
import { SmViewMasterDataComponent } from './sm-view-master-data/sm-view-master-data.component';
import { SmCheckAvailabilityComponent } from './sm-check-availability/sm-check-availability.component';
import { SmSalesTargetComponent } from './sm-sales-target/sm-sales-target.component';
import { SmTeamPerSalesTargetComponent } from './sm-team-per-sales-target/sm-team-per-sales-target.component';
import { SmMyTeamComponent } from './sm-my-team/sm-my-team.component';
import { SmTeamPerformanceComponent } from './sm-team-performance/sm-team-performance.component';
import { SmAccountsComponent } from './sm-accounts/sm-accounts.component';
import { SmAddRmLeadsComponent } from './sm-add-rm-leads/sm-add-rm-leads.component';
import { SmRmBankComponent } from './sm-rm-bank/sm-rm-bank.component';
import { SmClientBankComponent } from './sm-client-bank/sm-client-bank.component';
import { SmCancelRefundComponent } from './sm-cancel-refund/sm-cancel-refund.component';
import { SmTeamPerformanceParticularComponent } from './sm-team-performance-particular/sm-team-performance-particular.component';
import { NgChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardComponent,
    AddLeadComponent,
    HeaderComponent,
    AddClientComponent,
    LoginComponent,
    SignupComponent,
    LoanstatusComponent,
    CheckAvailabilityComponent,
    CalculatorComponent,
    CampignComponent,
    ClientBankComponent,
    EventComponent,
    AgreementRequestedComponent,
    AgreementRegisteredComponent,
    AgreementResubmisionComponent,
    RequestForStampdutyComponent,
    RequestForCertifiedComponent,
    RequestForBindingComponent,
    CreateScheduleComponent,
    Lawyer1DashboardComponent,
    Lawyer2DashboardComponent,
    L2AgreementResubmissionComponent,
    L2AgreementRegisteredComponent,
    L2AgreementReviewComponent,
    L2NewdraftCreateComponent,
    L2NewdraftResubmissionComponent,
    Lawyer2RequestforStampdutyComponent,
    Lawyer2RequestforCertifiedComponent,
    Lawyer2RequestforBindingComponent,
    Lawyer2CreateScheduleComponent,
    ExecutorClientSignatureComponent,
    ExecutorBuilderSignatureComponent,
    ExecutorResubmissionComponent,
    ExcuterDashboardComponent,
    ExexutorClientAppointmentComponent,
    ExexutorBuilderAppointmentComponent,
    BuilderReportComponent,
    BuilderAgreementExecutionComponent,
    BuiderDashboardComponent,
    BuilderAgreementResubmissionComponent,
    BuilderCheckAvailabilityComponent,
    SmDashboardComponent,
    AuthorityDashboardComponent,
    AuthorityReportComponent,
    AuthorityRequestComponent,
    AuthorityResubmissionComponent,
    LoanDepDashboardComponent,
    LoanDepRequestComponent,
    LoanDepDisbursementRequestComponent,
    LoanDepNewDemandComponent,
    LoanDepReportComponent,
    PrinterDashboardComponent,
    PrinterAgreementPrintComponent,
    PrinterAgreementDeliveryComponent,
    PrinterScheduleClientComponent,
    PrinterScheduleBuilderComponent,
    BDMDashboardComponent,
    BdmCreateScheduleComponent,
    BdmAddLeadComponent,
    BdmLeadStatusComponent,
    BdmAddProjectComponent,
    CMDashboardComponent,
    CMAddLeadComponent,
    CMLeadStatusComponent,
    CMOnboardingNewDataComponent,
    CMOnboardingModifyComponent,
    CMDraftNewAgreementComponent,
    CMDraftAdHocComponent,
    CMReportBdmComponent,
    CMReportAgreementComponent,
    CMAddProjectComponent,
    BdmAdHocComponent,
    AccountantDashboardComponent,
    AccountantPaymentCertifiedComponent,
    AccountantPaymentStampdutyComponent,
    SmViewMasterDataComponent,
    SmCheckAvailabilityComponent,
    SmSalesTargetComponent,
    SmTeamPerSalesTargetComponent,
    SmMyTeamComponent,
    SmTeamPerformanceComponent,
    SmAccountsComponent,
    SmAddRmLeadsComponent,
    SmRmBankComponent,
    SmClientBankComponent,
    SmCancelRefundComponent,
    SmTeamPerformanceParticularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // For template-driven forms
    ReactiveFormsModule, // For reactive forms
    HttpClientModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
