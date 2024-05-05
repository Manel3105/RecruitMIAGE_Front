import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ListProjectsComponent} from "../../components/list-projects/list-projects.component";

@Component({
  selector: 'app-pages-accueil',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ListProjectsComponent
  ],
  templateUrl: './pages-accueil.component.html',
  styleUrl: './pages-accueil.component.css'
})
export class PagesAccueilComponent {

}
