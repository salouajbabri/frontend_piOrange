import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  onSubmit() {
    if (this.username === 'user' && this.password === 'password') {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }
}
