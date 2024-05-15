// Importation de modules Angular nécessaires pour la création de composants et la gestion de formulaires
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { LoginService } from '../../services/login.service';

// Décorateur @Component pour définir les métadonnées du composant
@Component({
  selector: 'app-login-in-form',
  templateUrl: './login-in-form.component.html', // Chemin vers le fichier de template du composant
  standalone: true,
  imports: [
    FormsModule // Importation de FormsModule pour la gestion des formulaires dans le template
  ],
  styleUrls: ['./login-in-form.component.css']
})
export class LoginInFormComponent {
  // Déclarations des variables pour les données du formulaire
  username: any;
  password: any;

  // Constructeur pour injecter le service de login
  constructor(private log: LoginService) {}

  // Méthode appelée lors de la soumission du formulaire
  onLogin(): void {
    // Vérifie que les champs ne sont pas vides
    if (this.username && this.password) {
      // Appelle la méthode handleLogin du service avec les informations de connexion
      this.log.handleLogin(this.username, this.password);
    } else {
      // Affiche une erreur dans la console si les champs sont vides
      console.error("Username or password fields are empty.");
    }
  }
}
