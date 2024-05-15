// Importations des modules et services nécessaires
import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SigninformComponent} from "../../components/signinform/signinform.component";
import {CreerNvProjetComponent} from "../../components/creer-nv-projet/creer-nv-projet.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectService} from "../../services/new-project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pages-tableau-de-bord',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent,
        SigninformComponent,
        CreerNvProjetComponent,
        NgForOf,
        NgIf,
    ],
  templateUrl: './pages-tableau-de-bord.component.html',
  styleUrl: './pages-tableau-de-bord.component.css'
})
export class PagesTableauDeBordComponent implements OnInit{
  projects: any[] = [];
  participatingProjects: any[] = [];
  userId: number = 1;
  constructor(private projectService: ProjectService, private router: Router) {
  }

  // Méthode appelée à l'initialisation du composant
  ngOnInit(): void {
    this.loadProjects();
    this.loadParticipatingProjects();
  }

  // Charge la liste des projets créés par l'utilisateur
  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }

  // Charge la liste des projets auxquels l'utilisateur participe
  loadParticipatingProjects(): void {
    this.projectService.getUserProjects(this.userId).subscribe({
      next: projects => this.participatingProjects = projects,
      error: err => console.error('Erreur lors de la récupération des projets participant:', err)
    });
  }
  // Navigue vers les détails d'un projet spécifié par son ID
  goToProjectDetails(projectId: number): void {
    this.router.navigate(['/project-details', projectId]);
  }
}
