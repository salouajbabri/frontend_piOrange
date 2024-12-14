import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpClient } from '@angular/common/http';

import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  phoneNumber: string = '';
  password: string = '';
  message: string = '';

  constructor(private http: HttpClient ,private router :Router, private loginService: LoginService) {}

  login() {
    this.loginService.login(this.phoneNumber, this.password).subscribe({
      next: (response) => (this.message = response),
      error: (error) => (this.message = 'Login failed.'),
    });
  }
}
