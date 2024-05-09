import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InscriptionService} from "../../services/inscription.service";
import {Router} from "express";

@Component({
  selector: 'app-signinform',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signinform.component.html',
  styleUrl: './signinform.component.css'
})
export class SigninformComponent {
  user = {};
  prenom="";
  nom="";
  nomuser="";
  email="";
  mdp="";
  mdpConfirm="";
  constructor(private inscription : InscriptionService, private routeur: Router) { }
  inscrire() {

    this.user = {
      nom: this.nom,
      prenom: this.prenom,
      nomuser: this.nomuser,
      email: this.email,
      mdp: this.mdp
    }

    this.inscription.addutilisateur(this?.user).subscribe(data => {
      console.log(data);
    });
  }

}
//fonction alerte message
