/**
 * Created by Dheymer Leon on 31/10/2017.
 */
import { RouterModule, Routes } from '@angular/router';
import {
    AboutComponent,
    PortfolioComponent,
    PortfolioItemsComponent
} from './components/index.pages';

const app_routes: Routes = [
    {path: '', component: PortfolioComponent},
    {path: 'about', component: AboutComponent},
    {path: 'portfolio-items', component: PortfolioItemsComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes, {useHash: true});
