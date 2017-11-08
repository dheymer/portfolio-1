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
  id: string = '';

  constructor( private route:ActivatedRoute,
               private projectService: ProjectsService ) {
    route.params.subscribe( parameters => {
      projectService.loadSingle( parameters['id'] )
          .subscribe( data => {
            this.project = data.json();
            this.id = parameters['id'];
            //console.log( this.project);
      })
    })
  }

}
