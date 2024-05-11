import { Component } from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ListProjectsComponent} from "../../components/list-projects/list-projects.component";
import {CreerNvProjetComponent} from "../../components/creer-nv-projet/creer-nv-projet.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages-accueil',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    ListProjectsComponent,
    CreerNvProjetComponent,
    NgIf
  ],
  templateUrl: './pages-accueil.component.html',
  styleUrl: './pages-accueil.component.css'
})
export class PagesAccueilComponent {
  showCreateProjectForm = false;
  constructor(private router: Router) {}





}
