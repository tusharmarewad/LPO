import { Component } from '@angular/core';

@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.css']
})
export class AddLeadComponent {
  activeTab: string = 'create-lead'; // Default active tab
  leads = [
    { name: 'John Doe', phone: '123-456-7890', email: 'john@example.com', unit: 'A1', status: 'Active', remark: 'Follow up' },
    { name: 'Jane Smith', phone: '987-654-3210', email: 'jane@example.com', unit: 'B2', status: 'Pending', remark: 'Send email' },
    // Add more sample data here
  ];
  searchText = '';
  currentPage = 1;
  pageSize = 10;

  get filteredLeads() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const filtered = this.leads.filter(lead =>
      lead.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
    return filtered.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Array.from(
      { length: Math.ceil(this.leads.length / this.pageSize) },
      (_, i) => i + 1
    );
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages.length) {
      this.currentPage = page;
    }
  }
  setActiveTab(tab: string) {
    this.activeTab = tab;
  }










  lead = {
    name: '',
    mobile: '',
    email: '',
    type: '',
  };

  onSubmit() {
    console.log('Form Submitted:', this.lead);
    // Add logic here to handle form submission, such as sending the data to the backend.
    alert('Lead submitted successfully!');
  }
}
