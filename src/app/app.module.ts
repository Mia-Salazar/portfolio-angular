import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SuperpowerComponent } from './pages/superpower/superpower.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { HomeComponent } from './pages/home/home.component';
import { BoxComponent } from './components/box/box.component';
import { HeadingComponent } from './components/heading/heading.component';
import { BarComponent } from './components/bar/bar.component';
import { ErrorComponent } from './pages/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinkComponent,
    ContactFormComponent,
    ContactComponent,
    SuperpowerComponent,
    PortfolioComponent,
    AwardsComponent,
    HomeComponent,
    BoxComponent,
    HeadingComponent,
    BarComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RecaptchaModule,
    FormsModule,
    RecaptchaFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
