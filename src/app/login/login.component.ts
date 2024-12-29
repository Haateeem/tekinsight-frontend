import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  message: { text: string, category: string } | null = null;

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email && this.password) {
      this.message = { text: 'Login successful!', category: 'success' };


    } else {
      this.message = { text: 'Please fill in all fields', category: 'danger' };
    }

    this.router.navigate(['dashboard'])


  }

  closeMessage() {
    this.message = null;
  }
}
