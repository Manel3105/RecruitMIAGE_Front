import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiUrl = 'http://localhost:3000/create-project';

  constructor(private http: HttpClient, private router: Router) { }

  addProject(project: any): void {
    this.http.post(this.apiUrl, project, { withCredentials: true }).pipe(
      catchError((error) => {
        console.error('Error during project creation:', error);
        return throwError(() => error);
      })
    ).subscribe({
      next: (response) => {
        console.log('Project created successfully:', response);
        this.router.navigate(['/tableaudebord']);
      },
      error: (error) => {
        console.error('Project creation failed:', error);
      }
    });
  }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/projects');
  }
}
