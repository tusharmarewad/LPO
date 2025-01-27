import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  userRole: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve role from session storage or service
    this.userRole = sessionStorage.getItem('userRole') || '';
  }

  shouldDisplay(role: string): boolean {
    return this.userRole === role;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  isSubModulesVisible = false;
  isrequestSubModulesVisible = false;
  isLayer2AgreementActive = false;
  isLayer2NewDraftsActive = false;
  isLawyer2RequestForActive = false;
  isExecutorAgreement = false;
  isExecutorschedule = false;
  isBuilderAgreement = false;
  isPrinterAgreement = false;
  isPrinterSchedule = false;
  isBDMLeadActive = false;
  isCMLeadActive = false;
  isOnboardingActive = false;
  isDraftActive = false;
  isReportActive = false;
  isAccActive = false;

  hideAccModules(){
    this.isAccActive = false;
  }

  showAccModules(){
    this.isAccActive = true;
  }

  hideCMReportModules(){
    this.isReportActive = false;
  }

  showCMReportModules(){
    this.isReportActive = true;
  }

  hideCMDraftModules(){
    this.isDraftActive = false;
  }

  showCMDraftModules(){
    this.isDraftActive = true;
  }

  hideCMOnboardingModules(){
    this.isOnboardingActive = false;
  }

  showCMOnboardingModules(){
    this.isOnboardingActive = true;
  }

  hideCMLeadModules(){
    this.isCMLeadActive = false;
  }

  showCMLeadModules(){
    this.isCMLeadActive = true;
  }
  

  hideBDMLeadModules(){
    this.isBDMLeadActive = false;
  }

  showBDMLeadModules(){
    this.isBDMLeadActive = true;
  }
  
  showPrinterScheduleModules(){
    this.isPrinterSchedule = true;
  }
  hidePrinterScheduleModules(){
    this.isPrinterSchedule = false;
  }
  showPrinterAgreenmentModules(){
   this.isPrinterAgreement = true;
  }

  hidePrinterAgreenmentModules(){
    this.isPrinterAgreement = false;
  }

  hideBuilderAgreenmentModules(){
    this.isBuilderAgreement = false;
  }

  showBuilderAgreenmentModules(){
    this.isBuilderAgreement = true;
  }

  showExecutorAgreenmentModules(){
    this.isExecutorAgreement = true;
  }
  hideExecutorAgreenmentModules(){
    this.isExecutorAgreement = false;
  }

  showExecutorSchedule(){
    this.isExecutorschedule = true;
  }
  hideExecutorSchedule(){
    this.isExecutorschedule = false;
  }

  showSubModules() {
    this.isSubModulesVisible = true;
  }

  hideSubModules() {
    this.isSubModulesVisible = false;
  }

  showreqSubModules(){
    this.isrequestSubModulesVisible = true;
  }

  hideredSubModules(){
    this.isrequestSubModulesVisible = false;
  }

  showLawyer2AgreenmentModules(){
    this. isLayer2AgreementActive = true;
  }
 

  hideLawyer2AgreenmentModules(){
    this.isLayer2AgreementActive = false;
  }

  showLawyer2NewDraftModules(){
    this. isLayer2NewDraftsActive = true;
  }
 

  hideLawyer2NewDraftModules(){
    this.isLayer2NewDraftsActive = false;
  }

  showLawyer2RequestForModules(){
    this.isLawyer2RequestForActive = true;
  }

  hideLawyer2RequestForModules(){
    this.isLawyer2RequestForActive = false;
  }



  GoTo_addlead(){
    this.router.navigate(['/add-lead']);
  }
  GoTo_addclient(){
    this.router.navigate(['/add-client']);
  }
  GoTo_RM_dashboard(){
    this.router.navigate(['/Home']);
  }

  go_to_loan_status(){
    this.router.navigate(['/loan-status'])
  }
  GoTo_lawyer1_dashboard(){
    this.router.navigate(['/lawyer1-dashboard'])
  }
  GoTo_lawyer2_dashboard(){
    this.router.navigate(['/lawyer2-dashboard'])
  }
  checkAvailability(){
    this.router.navigate(['/check-availability'])
  }
  go_to_Calculator(){
    
    this.router.navigate(['/calculator'])
  }
  go_to_Campign(){
    this.router.navigate(['/campign']) 
  }
  go_to_Client_bank(){
    this.router.navigate(['/client-bank']) 
  }
  GoTo_addevent(){
    this.router.navigate(['/event'])
  }

  go_to_request(){
    this.router.navigate(['/agreement-requested'])
  }

  go_to_resubmission(){
    this.router.navigate(['/agreement-resubmision'])
  }
  go_to_registered(){
    this.router.navigate(['/agreement-registered'])
  }

  go_to_stampduty(){
    this.router.navigate(['/request-for-stampduty'])
  }

  go_to_certified(){
    this.router.navigate(['/request-for-certified'])
  }

  go_to_binding(){
    this.router.navigate(['/request-for-binding'])
  }
  GoTo_create_schedule(){
    this.router.navigate(['/create-schedule'])
  }

  go_to_review(){
    this.router.navigate(['/L2-agreement-review'])
  }

  go_to_L2_resubmission(){
    this.router.navigate(['/L2-agreement-resubmission'])
  }

  go_to_L2_registered(){
    this.router.navigate(['/L2-agreement-registered'])
  }

  go_to_new_draft_L2_create(){
    this.router.navigate(['/L2-newdraft-create'])
  }

  go_to_new_draft_L2_resubmission(){
    this.router.navigate(['/L2-newdraft-resubmission'])
  }

  go_to_req_for_L2_Stampduty(){
    this.router.navigate(['/L2-request-for-stampduty'])
  }

  go_to_req_for_L2_Certified(){
    this.router.navigate(['/L2-request-for-certified'])
  }

  go_to_req_for_L2_Binding(){
    this.router.navigate(['/L2-request-for-binding'])
  }

  go_to_L2_create_schedule(){
    this.router.navigate(['/L2-create-schedule'])
  }
  GoTo_executor_dashboard(){
    this.router.navigate(['/executor-dashboard'])
  }
  GoTo_executor_client_signature(){
    this.router.navigate(['/executor-client-signature'])
  }
  GoTo_executor_builder_signature(){
    this.router.navigate(['/executor-builder-signature'])
  }
  GoTo_executor_resubmission(){
    this.router.navigate(['/executor-resubmission'])
  }
  GoTo_executor_client_appointment(){
    this.router.navigate(['/executor-client-appointment'])
  }
  GoTo_executor_builder_appointment(){
    this.router.navigate(['/executor-builder-appointment'])
  }
  GoTo_builder_agreement_execution(){
    this.router.navigate(['/builder-agreenment-execution'])
  }
  GoTo_builder_dashboard(){
    this.router.navigate(['/builder-dashboard'])
  }
  GoTo_builder_agreement_resubmission(){
    this.router.navigate(['/builder-agreenment-resubmission'])
  }
  
  GoTo_builder_check_availability(){
    this.router.navigate(['/builder-check-availability'])
  }
  GoTo_builder_report(){
    this.router.navigate(['/builder-report'])
  }

  GoTo_sm_dashboard(){
    this.router.navigate(['/sm-dashboard'])
  }


  GoTo_sm_add_rm_details(){
    this.router.navigate(['/sm-add-leads'])
  }
  
  GoTo_sm_rm_bank(){
    this.router.navigate(['/sm-rm-bank'])
  }
  
  GoTo_sm_Project_Details(){
    this.router.navigate(['/sm-view-master-data'])
  }
  
  GoTo_sm_My_Team(){
    this.router.navigate(['/sm-my-team'])
  }
  
  GoTo_sm_Team_Performance(){
    this.router.navigate(['/sm-team-performance'])
  }
  
  GoTo_sm_Check_Availability(){
    this.router.navigate(['/sm-check-availability'])
  }
  
  GoTo_sm_Sales_Target(){
    this.router.navigate(['/sm-sales-target'])
  }
  
  GoTo_sm_Accounts(){
    this.router.navigate(['/sm-accounts'])
  }
  
  GoTo_sm_Cancel_Refund(){
    this.router.navigate(['/sm-cancel-refund'])
  }






  GoTo_authority_dashboard(){
    this.router.navigate(['/authority-dashboard'])
  }
  GoTo_authority_report(){
    this.router.navigate(['/authority-report'])
  }
  GoTo_authority_request(){
    this.router.navigate(['/authority-request'])
  }
  GoTo_authority_resubmission(){
    this.router.navigate(['/authority-resubmission'])
  }

  GoTo_loan_dashboard(){
    this.router.navigate(['/loan-dashboard'])
  }
  GoTo_loan_request(){
    this.router.navigate(['/loan-request'])
  }
  GoTo_loan_disbursement_request(){
    this.router.navigate(['/disbursment-loan-request'])
  }
  GoTo_loan_new_demand(){
    this.router.navigate(['/loan-new-demand'])
  }
  GoTo_loan_report(){
    this.router.navigate(['/loan-new-report'])
  }
  GoTo_printer_dashboard(){
    this.router.navigate(['/printer-dashboard'])
  }
  GoTo_printer_agreement_print(){
    this.router.navigate(['/printer-agreement-print'])
  }
  GoTo_printer_agreement_delivery(){
    this.router.navigate(['/printer-agreement-delivery'])
  }
  GoTo_printer_schedule_client(){
    this.router.navigate(['/printer-schedule-client'])
  }
  GoTo_printer_schedule_builder(){
    this.router.navigate(['/printer-schedule-builder'])
  }
  GoTo_bdm_dashboard(){
    this.router.navigate(['/bdm-dashboard'])
  }
  GoTo_bdm_create_schedule(){
    this.router.navigate(['/bdm-create-schedule'])
  }
  GoTo_bdm_add_lead(){
    this.router.navigate(['/bdm-add-lead'])
  }
  GoTo_bdm_lead_status(){
    this.router.navigate(['/bdm-lead-status'])
  }
  GoTo_bdm_add_project(){
    this.router.navigate(['/bdm-add-project'])
  }
  GoTo_bdm_ad_hoc(){
    this.router.navigate(['/bdm-ad-hoc'])
  }
  GoTo_CM_dashboard(){
    this.router.navigate(['/cm-dashboard'])
  }
  GoTo_CM_add_lead(){
    this.router.navigate(['/cm-add-lead'])
  }
  GoTo_CM_lead_status(){
    this.router.navigate(['/cm-lead-status'])
  }
  GoTo_CM_onboarding_new_data(){
    this.router.navigate(['/cm-onboarding-new-data'])
  }
  GoTo_CM_onboarding_modify(){
    this.router.navigate(['/cm-onboarding-modify'])
  }
  GoTo_CM_draft_new_agreement(){
    this.router.navigate(['/cm-draft-new-agreement'])
  }
  GoTo_CM_draft_ad_hoc(){
    this.router.navigate(['/cm-draft-ad-hoc'])
  }
  GoTo_CM_report_bdm(){
    this.router.navigate(['/cm-report-bdm'])
  }
  GoTo_CM_report_agreement(){
    this.router.navigate(['/cm-report-agreement'])
  }
  GoTo_cm_add_project(){
    this.router.navigate(['/cm-add-project'])
  }
  GoTo_acc_dashboard(){
    this.router.navigate(['/accountant-dashboard'])
  }
  GoTo_acc_payment__certified(){
    this.router.navigate(['/accountant-payment-certified'])
  }
  GoTo_acc_payment__stampduty(){
    this.router.navigate(['/accountant-payment-stampduty'])

  }
}