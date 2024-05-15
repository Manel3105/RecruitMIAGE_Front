import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

/* Déclare le service comme injectable et disponible globalement dans l'application */
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  /* URL de l'API pour la connexion */
  private loginUrl = 'http://localhost:3000/login';

  /* Constructeur injectant HttpClient pour les requêtes HTTP et Router pour la navigation */
  constructor(private http: HttpClient, private router: Router) { }

  /* Fonction de connexion qui envoie les identifiants de l'utilisateur via POST */
  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password }, { responseType: 'text' });
  }

  /* Gère le processus de connexion complet incluant la redirection en cas de succès */
  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (response) => {
        /* Affiche la réponse en cas de succès et redirige vers le tableau de bord */
        console.log(response); // Log pour le débogage
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        /* Affiche un message d'erreur si la connexion échoue */
        console.error('Error during login:', error.error);
      }
    });
  }
}
