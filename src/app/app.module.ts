import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

// Routes
import { app_routing } from './app.routes';

// Services
import { InfoService } from './services/info.service';
import { ProjectsService } from './services/projects.service';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemsComponent } from './components/portfolio-items/portfolio-items.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    AboutComponent,
    PortfolioItemsComponent,
    SearchComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    app_routing
  ],
  providers: [
      InfoService,
      ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
