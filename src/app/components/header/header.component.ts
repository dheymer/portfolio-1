import { Component } from '@angular/core';
import {InfoService} from "../../services/info.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  constructor( public infoService: InfoService, private router:Router ){

  }

  productSearch( searhText: string ){
    console.log(searhText);
    this.router.navigate(['search', searhText]);
  }
}
