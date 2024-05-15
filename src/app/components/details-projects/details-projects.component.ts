// Importation des modules nécessaires d'Angular
import { Component, OnInit } from '@angular/core'; // Importe Component pour définir un composant, OnInit pour l'initialisation lors du cycle de vie du composant
import { ProjectService } from '../../services/new-project.service'; // Service pour interagir avec les données des projets
import { NgForOf } from "@angular/common"; // Directive pour répéter un template pour chaque élément d'une liste
import { ActivatedRoute } from "@angular/router"; // Service pour accéder aux paramètres de la route courante
import { NavbarComponent } from "../navbar/navbar.component"; // Composant de barre de navigation
import { FooterComponent } from "../footer/footer.component"; // Composant de pied de page

// Décorateur Component qui configure les propriétés du composant
@Component({
  selector: 'app-project-list', // Sélecteur CSS pour utiliser ce composant
  templateUrl: './details-projects.component.html', // Fichier HTML qui sert de vue pour ce composant
  standalone: true, // Indique que le composant peut être utilisé sans appartenir à un module spécifique
  imports: [
    NgForOf, // Importation de la directive NgFor pour utilisation dans le template
    NavbarComponent, // Importation du composant Navbar pour utilisation dans le template
    FooterComponent // Importation du composant Footer pour utilisation dans le template
  ],
  styleUrls: ['./details-projects.component.css'] // Chemins des fichiers CSS pour les styles du composant
})
export class DetailsProjectsComponent implements OnInit {
  // Initialisation des propriétés pour stocker les détails du projet et les membres
  project = {
    titre: '',
    theme: '',
    description: '',
    nbparticipants: 0
  };
  members: any[] = []; // Tableau pour stocker les membres du projet

  // Constructeur pour injecter les dépendances nécessaires
  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

  // Méthode ngOnInit qui est appelée après la construction du composant
  ngOnInit(): void {
    // Récupération de l'ID du projet à partir des paramètres de la route
    const projectId = this.route.snapshot.params['id'];
    // Appel du service pour obtenir les détails du projet via HTTP
    this.projectService.getProjectDetails(projectId).subscribe({
      next: (data) => {
        this.project = data.project; // Mise à jour de la propriété project avec les données reçues
        this.members = data.members; // Mise à jour de la liste des membres
      },
      error: (error) => console.error('Erreur lors de la récupération des détails du projet:', error) // Gestion des erreurs
    });
  }
}
