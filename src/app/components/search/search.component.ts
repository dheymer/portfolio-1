import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  searchText : string = undefined;

  constructor( private route:ActivatedRoute, public projService: ProjectsService) {
    route.params.subscribe(parameters => {
      this.searchText = parameters['item'];
      console.log(this.searchText);
      projService.searchProduct(this.searchText);
    });
  }

}
