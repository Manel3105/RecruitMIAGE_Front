import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InscriptionService} from "./services/inscription.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [InscriptionService],
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetWeb';
}
