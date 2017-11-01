import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styles: []
})
export class PortfolioItemsComponent {

  project: any = undefined;

  constructor( private route:ActivatedRoute,
               private projectService: ProjectsService ) {
    route.params.subscribe( parameters => {
      //console.log(parameters);
      //console.log(parameters['id']);
      projectService.loadSingle( parameters['id'] )
          .subscribe( data => {
            this.project = data.json();
            console.log( this.project);
          })
    })
  }

}
