import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { BrowserModule } from '@angular/platform-browser';

import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialLinkComponent } from './social-link/social-link.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BoxComponent } from './box/box.component';
import { HeadingComponent } from './heading/heading.component';
import { BarComponent } from './bar/bar.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { AwardItemComponent } from './award-item/award-item.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinkComponent,
    ContactFormComponent,
    BoxComponent,
    HeadingComponent,
    BarComponent,
    PortfolioItemComponent,
    AwardItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    RecaptchaModule,
    FormsModule,
    BrowserModule,
    RecaptchaFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SocialLinkComponent,
    ContactFormComponent,
    BoxComponent,
    HeadingComponent,
    BarComponent,
    PortfolioItemComponent,
    AwardItemComponent
  ]
})
export class ComponentsModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}