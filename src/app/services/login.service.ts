import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/login';

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post(this.loginUrl, { username, password }, { responseType: 'text' });
  }

  handleLogin(username: string, password: string) {
    this.login(username, password).subscribe({
      next: (response) => {
        console.log(response); // Log pour le débogage
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        console.error('Error during login:', error.error); // Gestion des erreurs
      }
    });
  }
}
