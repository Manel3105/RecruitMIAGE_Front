import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

/* Marque ce service comme injectable au niveau racine de l'application */
@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  /* URL de l'API pour l'inscription des utilisateurs */

  private apiUrl = 'http://localhost:3000/register';

  /* Injecte HttpClient et Router via le constructeur pour les requêtes HTTP et la navigation */
  constructor(private http: HttpClient, private router: Router) { }

  /* Méthode pour ajouter un utilisateur. Elle retourne un Observable traitant la requête POST. */
  addutilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.apiUrl, utilisateur, {withCredentials: true}).pipe(
      catchError((error) => {
        /* Gère les erreurs HTTP en affichant un message d'erreur et en renvoyant une erreur observée */
        console.error('Error during registration:', error);
        return throwError(() => error);
      })
    );
  }

  /* Méthode pour inscrire un utilisateur et le rediriger après l'inscription réussie */
  registerAndRedirect(utilisateur: any): void {
    this.addutilisateur(utilisateur).subscribe({
      next: (response) => {
        /* En cas de succès, affiche un message de succès et redirige vers le tableau de bord */
        console.log('Registration successful:', response);
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        /* Affiche un message d'erreur en cas d'échec de l'inscription */
        console.error('Registration failed:', error);
      }
    });
  }
}
