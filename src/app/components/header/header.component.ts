import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string = 'en';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    console.log(language)
    this.language = language;
    this.translate.use(language);
  }
}
