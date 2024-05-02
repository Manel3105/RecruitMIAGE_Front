import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

@Component({
  selector: 'app-pages-accueil',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent
  ],
  templateUrl: './pages-accueil.component.html',
  styleUrl: './pages-accueil.component.css'
})
export class PagesAccueilComponent {

}
