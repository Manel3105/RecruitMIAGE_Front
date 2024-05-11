import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { InscriptionService } from "../../services/inscription.service";

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
  user = {};
  firstname = "";
  name = "";
  username = "";
  email = "";
  password = "";
  passwordConfirm = "";

  constructor(private inscriptionService: InscriptionService) { }

  inscrire() {
    // Assurez-vous que les mots de passe correspondent avant de procéder à l'inscription
    if (this.password !== this.passwordConfirm) {
      console.error("Les mots de passe ne correspondent pas.");
      return;
    }

    this.user = {
      nom: this.name,
      prenom: this.firstname,
      nomuser: this.username,
      email: this.email,
      mdp: this.password,
    };

    // Utiliser la méthode registerAndRedirect pour inscrire l'utilisateur et le rediriger
    this.inscriptionService.registerAndRedirect(this.user);
  }
}
