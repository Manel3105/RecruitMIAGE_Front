// Importations des modules et services nécessaires
import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {SigninformComponent} from "../../components/signinform/signinform.component";

@Component({
  selector: 'app-pages-sign-in',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    SigninformComponent
  ],
  templateUrl: './pages-sign-in.component.html',
  styleUrl: './pages-sign-in.component.css'
})
export class PagesSignInComponent {

}
