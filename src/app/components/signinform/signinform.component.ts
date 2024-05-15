// Importations des modules nécessaires d'Angular
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InscriptionService } from "../../services/inscription.service";

// Décorateur @Component pour définir les propriétés et métadonnées du composant
@Component({
  selector: 'app-signinform',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './signinform.component.html',
  styleUrls: ['./signinform.component.css']
})
export class SigninformComponent {
  // Déclaration des propriétés pour stocker les données utilisateur saisies dans le formulaire
  user = {};
  firstname = "";
  name = "";
  username = "";
  email = "";
  password = "";
  passwordConfirm = "";

  // Constructeur injectant le service d'inscription
  constructor(private inscriptionService: InscriptionService) { }

  // Méthode pour gérer l'inscription
  inscrire() {
    // Vérification que les deux mots de passe entrés sont identiques
    if (this.password !== this.passwordConfirm) {
      console.error("Les mots de passe ne correspondent pas."); // Affichage d'une erreur si les mots de passe ne correspondent pas
      return; // Arrêt de l'exécution de la méthode si les mots de passe ne correspondent pas
    }

    // Préparation de l'objet utilisateur avec les données collectées
    this.user = {
      nom: this.name,
      prenom: this.firstname,
      nomuser: this.username,
      email: this.email,
      mdp: this.password,
    };

    // Appel du service d'inscription pour enregistrer l'utilisateur et rediriger
    this.inscriptionService.registerAndRedirect(this.user);
  }
}
