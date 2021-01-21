import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-angular';

  constructor(private translate: TranslateService) {
    if (localStorage.getItem('lang') === 'en') {
      translate.setDefaultLang('en');
    } else {
      translate.setDefaultLang('es');
    }
  }
}
