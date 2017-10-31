import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InfoService {

  public info: any = {};
  public team: any[] = [];
  public loadedInfo: boolean = false;
  public loadedAbout: boolean = false;

  constructor( public http:Http ) {
    this.loadPageInfo();
    this.loadAboutUs();
  }

  public loadPageInfo(){
      this.http.get('assets/data/info.page.json')
          .subscribe(data => {
              //console.log(data.json());
              this.info = data.json();
              this.loadedInfo = true;
          })
      ;
  }
  public loadAboutUs(){
      this.http.get('https://portfolio-cb0c7.firebaseio.com/equipo.json')
          .subscribe(data => {
              console.log(data.json());
              this.team = data.json();
              this.loadedAbout = true;
          })
      ;
  }

}
