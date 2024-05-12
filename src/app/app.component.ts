import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {InscriptionService} from "./services/inscription.service";
import {HttpClientModule} from "@angular/common/http";
import {LoginService} from "./services/login.service";
import {ProjectService} from "./services/new-project.service";
import {MemberService} from "./services/member.service";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [InscriptionService, LoginService, ProjectService, MemberService],
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetWeb';
}
