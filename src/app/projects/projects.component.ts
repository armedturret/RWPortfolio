import { Component } from '@angular/core';

import { ProjectService } from '../project.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [];

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

  getThumbnailStyling(thumbnail: string){
    return "linear-gradient(to bottom, transparent 0%, black 50%), url(" + thumbnail + ")";
  }
}
