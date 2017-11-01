/**
 * Created by Dheymer Leon on 31/10/2017.
 */
import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    PortfolioComponent,
    PortfolioItemsComponent,
    SearchComponent
} from './components/index.pages';

const app_routes: Routes = [
    {path: 'home', component: PortfolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'portfolio-items/:id', component: PortfolioItemsComponent},
    {path: 'search/:item', component: SearchComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
