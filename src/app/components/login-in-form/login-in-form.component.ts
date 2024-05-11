import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service'; // Importer le service d'authentification

@Component({
  selector: 'app-login-in-form',
  templateUrl: './login-in-form.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./login-in-form.component.css']
})
export class LoginInFormComponent {
  username: any;
  password: any;

  constructor(private log: LoginService) {}
  onLogin(): void {
    if (this.username && this.password) {
      this.log.handleLogin(this.username, this.password);
    } else {
      console.error("Username or password fields are empty.");
    }
  }
}
