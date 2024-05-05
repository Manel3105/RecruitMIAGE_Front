import { Component } from '@angular/core';
import {Projets} from "../../Projets";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-list-projects',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-projects.component.html',
  styleUrl: './list-projects.component.css'
})
export class ListProjectsComponent {
  liste: Projets[]=[];


  protected readonly Projets = Projets;
}
