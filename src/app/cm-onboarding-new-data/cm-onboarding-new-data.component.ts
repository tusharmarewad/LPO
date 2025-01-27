import { Component } from '@angular/core';

@Component({
  selector: 'app-cm-onboarding-new-data',
  templateUrl: './cm-onboarding-new-data.component.html',
  styleUrls: ['./cm-onboarding-new-data.component.css']
})
export class CMOnboardingNewDataComponent {
  activeTab: string = 'Project_Details'; // Default active tab
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
