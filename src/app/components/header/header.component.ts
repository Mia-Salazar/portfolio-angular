import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string;

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.getLanguage();
  }

  useLanguage(language: string) {
    localStorage.setItem('lang', language);
    this.language = language;
    this.translate.use(language);
  }

  getLanguage() {
    if (localStorage.getItem('lang') === 'en') {
      this.language = 'en';
    } else {
      this.language = 'es';
    }
  }
}
