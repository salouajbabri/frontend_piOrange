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
  numero = ''; // Stores the entered phone number

  // Function triggered on form submission
  onSubmit() {
    // Validate if the input matches specific credentials
    if (this.numero.trim() === '') {
      alert('Please enter your phone number');
      return;
    }

    // Example logic for checking valid credentials
    if (this.numero === 'user') {
      alert('Login successful');
    } else {
      alert('Invalid credentials');
    }
  }

  // Function triggered when the "Cancel" button is clicked
  onCancel() {
    this.numero = ''; // Clear the input field
    alert('Operation canceled');
  }
}
