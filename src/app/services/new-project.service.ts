import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

/* Service déclaré comme injectable et disponible globalement */
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  /* URL de base pour les détails du projet */
  private apiUrl = 'http://localhost:3000/projects';
  private baseUrl = 'http://localhost:3000';
  private Url = 'http://localhost:3000/project-details';


  /* Injection des dépendances HttpClient pour les requêtes HTTP et Router pour la navigation */
  constructor(private http: HttpClient, private router: Router) { }

  /* Méthode pour ajouter un projet. Effectue une requête POST avec gestion des erreurs */
  addProject(project: any): void {
    this.http.post(this.apiUrl, project, { withCredentials: true }).pipe(
      catchError((error) => {
        /* Affichage des erreurs en console et renvoi d'une erreur observable */
        console.error('Error during project creation:', error);
        return throwError(() => error);
      })
    ).subscribe({
      next: (response) => {
        /* Confirmation en console et redirection après création du projet */
        console.log('Project created successfully:', response);
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        /* Gestion des échecs de création du projet avec un message d'erreur */
        console.error('Project creation failed:', error);
      }
    });
  }

  /* Récupération de la liste de tous les projets sous forme d'observable */
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/projects');
  }

  /* Récupération des détails d'un projet spécifique par son ID */
  getProjectDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.Url}/${id}`);
  }

  getUserProjects(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user-projects/${userId}`);
  }

}
