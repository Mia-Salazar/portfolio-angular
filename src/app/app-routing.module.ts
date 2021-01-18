import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/pages/home/home.component'
import { ContactComponent } from '../app/pages/contact/contact.component'
import { PortfolioComponent } from '../app/pages/portfolio/portfolio.component'
import { SuperpowerComponent } from '../app/pages/superpower/superpower.component'
import { AwardsComponent } from '../app/pages/awards/awards.component'
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'superpower', component: SuperpowerComponent },
  { path: 'awards', component: AwardsComponent },
  { path: 'routePath', component: HomeComponent },
  { path: '404', component: ErrorComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
