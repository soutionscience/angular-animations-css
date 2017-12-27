import { Component, OnInit } from '@angular/core';

import { Project } from './project.model';

import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[];
  markedPrjIndex = false;
  progress = 'progressing';
  createNew = false;
 

  constructor(private prjService: ProjectsService) {
   }

  ngOnInit() {
    this.prjService.loadProjects()
      .subscribe(
        (prj: Project[]) => {
          this.progress = 'finished';
          this.projects = prj;
        }
      );

      console.log("marked project value", this.markedPrjIndex)

      
  }
 
  onStatusUpdated(newStatus: string, id: number) {
    this.projects[id].status = newStatus;
    console.log("marked project value", this.markedPrjIndex)
  }

  onProjectDeleted(index: number) {
    this.projects.splice(index, 1);
  }

  onProjectCreated(project: Project) {
    this.createNew = false;
    this.projects.push(project);
  }
  clickedonDiv(){
    console.log("div clicked")
    this.markedPrjIndex = true;
    console.log(this.markedPrjIndex)
  }
  
}
