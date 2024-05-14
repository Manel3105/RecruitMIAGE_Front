import {Component, OnInit} from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SigninformComponent} from "../../components/signinform/signinform.component";
import {CreerNvProjetComponent} from "../../components/creer-nv-projet/creer-nv-projet.component";
import {NgForOf, NgIf} from "@angular/common";
import {ProjectService} from "../../services/new-project.service";

@Component({
  selector: 'app-pages-tableau-de-bord',
  standalone: true,
    imports: [
        FooterComponent,
        NavbarComponent,
        SigninformComponent,
        CreerNvProjetComponent,
        NgForOf,
        NgIf,
    ],
  templateUrl: './pages-tableau-de-bord.component.html',
  styleUrl: './pages-tableau-de-bord.component.css'
})
export class PagesTableauDeBordComponent implements OnInit{
  projects: any[] = [];
  constructor(private projectService: ProjectService) {
  }
  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }

}
