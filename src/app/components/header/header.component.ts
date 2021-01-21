import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  language: string = 'es';

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    this.language = language;
    this.translate.use(language);
  }
}
