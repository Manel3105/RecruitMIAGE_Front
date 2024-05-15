// Importations des modules nécessaires
import { Component } from '@angular/core';
import {LoginInFormComponent} from "../../components/login-in-form/login-in-form.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-pages-login',
  standalone: true,
  imports: [
    LoginInFormComponent,
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './pages-login.component.html',
  styleUrl: './pages-login.component.css'
})
export class PagesLoginComponent {

}



