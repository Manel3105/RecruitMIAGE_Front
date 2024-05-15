// Importations des modules et services nécessaires
import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ProjectService } from "../../services/new-project.service";
import { CreerNvProjetComponent } from "../../components/creer-nv-projet/creer-nv-projet.component";
import { NgIf } from "@angular/common";
import { MemberService } from "../../services/member.service"
import { Router} from "@angular/router";
import { HttpClient} from "@angular/common/http";

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
export class PagesAccueilComponent implements OnInit {
  projects: any[] = [];
  showCreateProjectForm = false;
  private apiUrl = 'http://localhost:3000/project-details';



  constructor(
    private projectService: ProjectService,
    private memberService: MemberService,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadProjects(); // Chargement des projets dès l'initialisation du composant
  }

//méthode pour récupérer tous les projets disponibles
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

//Cette méthode permet à un utilisateur de s'inscrire à un projet
  joinProject(projectId: number) {
    const userId = 1; // Idéalement, cet ID devrait provenir d'un service d'authentification
    this.memberService.addMember(projectId, userId, 'Participant').subscribe({
      next: (response) => {
        console.log('Member added successfully', response);
        alert('Vous êtes inscrit au projet!');
      },
      error: (error) => {
        console.error('Failed to join project', error);
        alert('Erreur lors de l\'inscription au projet.');
      }
    });
  }

//Cette méthode est utilisée pour naviguer vers la page de détails d'un projet spécifique
  goToProjectDetails(projectId: number): void {
    this.router.navigate(['/project-details', projectId]);
  }

}
