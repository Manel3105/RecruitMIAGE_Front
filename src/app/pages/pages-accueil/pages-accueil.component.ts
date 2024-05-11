import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {ProjectService} from "../../services/new-project.service";
import {CreerNvProjetComponent} from "../../components/creer-nv-projet/creer-nv-projet.component";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";


@Component({
  selector: 'app-pages-accueil',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    CreerNvProjetComponent,
    NgIf,
    CommonModule,
  ],
  templateUrl: './pages-accueil.component.html',
  styleUrl: './pages-accueil.component.css'
})
export class PagesAccueilComponent implements OnInit{
  projects: any[] = [];
  showCreateProjectForm = false;
  constructor(private router: Router, private projectService: ProjectService ) {}
  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }





}
