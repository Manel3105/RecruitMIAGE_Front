import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service'; // Importer le service d'authentification
import { Router } from '@angular/router';

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
  loginForm: FormGroup;
  nomuser: any;
  mdp: any;

  constructor(private formBuilder: FormBuilder, private log: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group({
      nomuser: ['', Validators.required],
      mdp: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const username = this.loginForm.value.nomuser;
    const password = this.loginForm.value.mdp;

    this.login(username, password);
  }

  login(username: string, password: string) {
    this.log.login(username, password).subscribe(response => {
      if (response.success){
        this.router.navigate(['/tableaudebord']);
      } else {
        console.log("Erreur de login");
      }
    });
  }
}
