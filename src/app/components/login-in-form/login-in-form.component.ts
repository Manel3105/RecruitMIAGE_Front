import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-login-in-form',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './login-in-form.component.html',
  styleUrl: './login-in-form.component.css'
})
export class LoginInFormComponent {
  nomuser: any;
  mdp: any;

}
