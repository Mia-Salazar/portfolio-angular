import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { ContactComponent } from './components/contact/contact.component';
import { SuperpowerComponent } from './pages/superpower/superpower.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { HomeComponent } from './pages/home/home.component';
import { BoxComponent } from './components/box/box.component';
import { HeadingComponent } from './components/heading/heading.component';
import { BarComponent } from './components/bar/bar.component';
import { NavComponent } from './components/nav/nav.component';

import { StoreModule } from '@ngrx/store';
import { FightReducer } from './pages/home/fight.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinkComponent,
    ContactComponent,
    SuperpowerComponent,
    PortfolioComponent,
    AwardsComponent,
    HomeComponent,
    BoxComponent,
    HeadingComponent,
    BarComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({count: FightReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
