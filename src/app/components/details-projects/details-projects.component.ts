import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/new-project.service';
import {NgForOf} from "@angular/common";

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
  projects: any[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getProjects().subscribe(projects => this.projects = projects);
  }

  participate(projectId: number) {
    this.projectService.addMember(projectId, 1, 'Participant').subscribe({
      next: (resp) => alert(resp.message),
      error: (error) => alert(error.error.message)
    });
  }
}
