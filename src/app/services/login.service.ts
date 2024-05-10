import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/login'
  constructor(private http: HttpClient) {}

  login(nomuser: string, mdp: string){
    return this.http.post<any>(this.apiUrl, {nomuser, mdp});
  }
}
