import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  private apiUrl = 'http://localhost:3000/register';

  constructor(private http: HttpClient, private router: Router) { }

  addutilisateur(utilisateur: any): Observable<any> {
    return this.http.post(this.apiUrl, utilisateur, {withCredentials: true}).pipe(
      catchError((error) => {
        // Gestion des erreurs éventuelles ici
        console.error('Error during registration:', error);
        return throwError(() => error);
      })
    );
  }

  // Nouvelle méthode pour gérer l'inscription et la redirection
  registerAndRedirect(utilisateur: any): void {
    this.addutilisateur(utilisateur).subscribe({
      next: (response) => {
        console.log('Registration successful:', response);
        // Redirection vers la page du tableau de bord après l'inscription
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        console.error('Registration failed:', error);
      }
    });
  }
}
