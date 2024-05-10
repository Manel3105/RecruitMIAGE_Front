import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SigninformComponent} from "../../components/signinform/signinform.component";

@Component({
  selector: 'app-pages-tableau-de-bord',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent,
        SigninformComponent
    ],
  templateUrl: './pages-tableau-de-bord.component.html',
  styleUrl: './pages-tableau-de-bord.component.css'
})
export class PagesTableauDeBordComponent {

}
