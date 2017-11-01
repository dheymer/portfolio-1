import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {

  constructor( public projectsService:ProjectsService) { }

  ngOnInit() {
  }

}
