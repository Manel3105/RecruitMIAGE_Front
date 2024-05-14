import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/new-project.service';
import {NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-project-list',
  templateUrl: './details-projects.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./details-projects.component.css']
})
export class DetailsProjectsComponent implements OnInit {
  project: any;
  members: any[] = [];

  constructor(private projectService: ProjectService, private route: ActivatedRoute) {}

  ngOnInit(): void {
      // @ts-ignore
    const projectId = +this.route.snapshot.paramMap.get('id'); // Convertit l'id de chaîne en nombre
      this.projectService.getProjectDetails(projectId).subscribe((data) => {
        this.project = data; // Mettre à jour pour supposer que `data` est l'objet projet
        this.members = data.members; // Assurez-vous que votre backend renvoie cette structure ou adaptez selon votre réponse
      });
    }

}
