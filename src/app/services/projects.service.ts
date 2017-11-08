import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class ProjectsService {
  public projects: any[] = [];
  public filteredProjects: any[] = [];
  public loadedProjects: boolean = false;

  constructor( public http:Http ) {
    this.loadProjects();
  }

  public searchProduct ( searchText:string){
    console.log('Buscando producto');
    console.log(this.projects.length);
    if (this.projects.length === 0){
      this.loadProjects().then(() => {
        this.filterProjects(searchText);
      })
    }else{
      this.filterProjects(searchText);
    }
  }

  private filterProjects(text : string){
    this.projects.forEach(proj => {
      console.log(proj);
    })
  }

  public loadSingle( id: string ){
    return this.http.get(`https://portfolio-cb0c7.firebaseio.com/productos/${id}.json`);
  }

  public loadProjects(){
    let promise = new Promise((resolve, reject) =>{
      this.http.get('https://portfolio-cb0c7.firebaseio.com/productos_idx.json')
          .subscribe(data => {
            //console.log(data.json());
            setTimeout(() => {
              this.projects = data.json();
              this.loadedProjects = true;
              resolve();
            }, 1000);

          })
      ;
    });
    return promise;
  }

}
