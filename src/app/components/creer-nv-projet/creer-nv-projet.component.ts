import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ProjectService} from "../../services/new-project.service";

@Component({
  selector: 'app-creer-nv-projet',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './creer-nv-projet.component.html',
  styleUrl: './creer-nv-projet.component.css'
})
export class CreerNvProjetComponent {
  project = {
    titre: '',
    theme: '',
    description: '',
    nbparticipants: 0
  };


  constructor(private projectService: ProjectService) {
  }

  createProject() {
    this.projectService.addProject(this.project);
  }
}
