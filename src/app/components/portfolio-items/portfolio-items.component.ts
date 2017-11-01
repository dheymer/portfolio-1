import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-items',
  templateUrl: './portfolio-items.component.html',
  styles: []
})
export class PortfolioItemsComponent {

  constructor( private route:ActivatedRoute ) {
    route.params.subscribe( parameters => {
      console.log(parameters);
      console.log(parameters['id']);
    });
  }

}
