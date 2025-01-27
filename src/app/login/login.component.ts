
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  forgot=false;
  otp_div=false;
  constructor(private router: Router) { }
  GoTo_home() {
    // Example static credentials
    const credentials = [
      { email: 'rm@gmail.com', password: '123', role: 'RM', route: '/Home' },
      { email: 'sm@gmail.com', password: '123', role: 'SM', route: '/sm-dashboard' },
      { email: 'bdm@gmail.com', password: '123', role: 'BDM', route: '/bdm-dashboard' },
      { email: 'lawyer1@gmail.com', password: '123', role: 'Lawyer1', route: '/lawyer1-dashboard' },
      { email: 'lawyer2@gmail.com', password: '123', role: 'Lawyer2', route: '/lawyer2-dashboard' },
      { email: 'builder@gmail.com', password: '123', role: 'Builder', route: '/builder-dashboard' },
      { email: 'cm@gmail.com', password: '123', role: 'CM', route: '/cm-dashboard' },
      { email: 'executor@gmail.com', password: '123', role: 'Executor', route: '/executor-dashboard' },
      { email: 'authority@gmail.com', password: '123', role: 'Authority', route: '/authority-dashboard' },
      { email: 'loan@gmail.com', password: '123', role: 'Loan', route: '/loan-dashboard' },
      { email: 'printer@gmail.com', password: '123', role: 'Printer', route: '/printer-dashboard' },
      { email: 'accountant@gmail.com', password: '123', role: 'Accountant', route: '/accountant-dashboard' },
    ];
  
    const enteredEmail = (document.getElementById('email') as HTMLInputElement).value;
    const enteredPassword = (document.getElementById('password') as HTMLInputElement).value;
  
    const user = credentials.find(
      (cred) => cred.email === enteredEmail && cred.password === enteredPassword
    );
  
    if (user) {
      sessionStorage.setItem('userRole', user.role);
      // Navigate to the specific route based on role
      this.router.navigate([user.route]);
    } else {
      alert('Invalid Credentials');
    }
  }
  
  GoTo_signup(){
    this.router.navigate(['/signup']);
  }
  GoTo_forgot(){
    // console.log('click');
    
    this.forgot=true;
  }
  GoTo_login(){
    this.forgot=false;
  }
  GoTo_verify(){
    this.otp_div=true;
  }

  
}