import { Component } from '@angular/core';
import { InfoService } from './services/info.service';
import { ProjectsService } from './services/projects.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  constructor( public infoService: InfoService,
               public projectsService: ProjectsService ){

  }
}
