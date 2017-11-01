import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProjectsService {
  public projects: any[] = [];
  public loadedProjects: boolean = false;

  constructor( public http:Http ) {
    this.loadProjects();
  }

  public loadProjects(){
    if (this.projects.length === 0){
      this.http.get('https://portfolio-cb0c7.firebaseio.com/productos_idx.json')
        .subscribe(data => {
          console.log(data.json());
          this.projects = data.json();
          this.loadedProjects = true;
        })
      ;
    }
  }

}
