import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/* Décorateur qui rend le service disponible globalement dans toute l'application */
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  /* URL de base de l'API pour accéder aux projets */
  private apiUrl = 'http://localhost:3000/projects';

  /* Injection de HttpClient pour effectuer des requêtes HTTP */
  constructor(private http: HttpClient) { }

  /* Méthode pour ajouter un membre à un projet spécifique */
  addMember(projectId: number, userId: number, role: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${projectId}/members`, { projectId, userId, role })
      .pipe(
        catchError(this.handleError) /* Gestion des erreurs avec RxJS */
      );
  }

  /* Gestionnaire d'erreurs privé pour centraliser la gestion des erreurs HTTP */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      /* Traitement des erreurs côté client ou réseau */
      console.error('An error occurred:', error.error.message);
    } else {
      /* Réponse d'erreur du serveur */
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    /* Renvoie un Observable avec un message d'erreur destiné à l'utilisateur */
    return throwError(
      'Something bad happened; please try again later.');
  }
}
