// Importation des décorateurs et modules nécessaires d'Angular
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

// Importation du service personnalisé qui gère la logique de création de nouveaux projets
import { ProjectService } from "../../services/new-project.service";

// Décorateur Component qui définit les métadonnées du composant Angular
@Component({
  selector: 'app-creer-nv-projet', // Nom du sélecteur pour référencer ce composant dans un template HTML
  standalone: true, // Indique que le composant est autonome et peut être importé sans appartenir à un module
  imports: [
    FormsModule // Importe FormsModule pour utiliser le data binding sur les formulaires
  ],
  templateUrl: './creer-nv-projet.component.html', // Chemin vers le template HTML du composant
  styleUrl: './creer-nv-projet.component.css' // Chemin vers le fichier de styles CSS du composant
})
export class CreerNvProjetComponent {
  // Déclaration d'une propriété 'project' qui est un objet avec des propriétés pour titre, thème, description, et nombre de participants
  project = {
    titre: '',
    theme: '',
    description: '',
    nbparticipants: 0
  };

  // Constructeur qui injecte le service ProjectService
  constructor(private projectService: ProjectService) {
  }

  // Méthode createProject qui utilise le service pour ajouter le projet avec les données actuelles de l'objet 'project'
  createProject() {
    this.projectService.addProject(this.project);
  }
}
