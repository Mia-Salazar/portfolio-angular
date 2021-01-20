import { Component, OnInit } from '@angular/core';

import { AwardItem } from '../../models/awards.models';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  awards: AwardItem[] = [
    { title: 'awards.article', link: 'http://www.revistacomunicacion.org/pdf/n16/Articulos/A3_GarciaRosales_Analisis_semiotica_profunda_propaganda_Corea.pdf', image: '../../../assets/images/corea-2018.png' },
    { title: 'awards.article', link: 'http://www.revistacomunicacion.org/pdf/n14/Articulos/A5_Salazar-Garcia-Rosales-Analisis-de-los-elementos-estetico-expresivos-en-la-propaganda-de-Corea-del-Sur-y-Corea-del-Norte.pdf', image: '../../../assets/images/corea-2015.png' },
    { title: 'awards.story', link: 'https://twitter.com/AJNaurenia/status/675077654589083650', image: '../../../assets/images/naurenia.jpg' },
    { title: 'awards.medium', link: 'https://medium.com/@marasalazar/developers-nightmare-web-accessibility-52b9a6890403', image: '../../../assets/images/ratio.PNG' },
    { title: 'awards.medium', link: 'https://medium.com/@marasalazar/why-icomoon-why-15c2d78ec96e', image: '../../../assets/images/icomoon.png' },
    { title: 'awards.medium', link: 'https://marasalazar.medium.com/how-to-structure-css-in-vue-like-a-pro-5475749cf5ea', image: '../../../assets/images/vue.png' },
    { title: 'awards.medium', link: 'https://marasalazar.medium.com/c%C3%B3mo-dar-soporte-a-ie-y-no-morir-en-el-intento-7049dcbbf43f', image: '../../../assets/images/ie.png' },
    { title: 'awards.medium', link: 'https://marasalazar.medium.com/to-angular-material-or-not-to-angular-material-940a616ac22d', image: '../../../assets/images/material.png' },
    { title: 'awards.cyber', link: 'https://blog.enthec.com/the-importance-of-maintaining-the-health-of-your-dns/', image: '../../../assets/images/kartos.jpg' },
    { title: 'awards.cyber', link: 'https://blog.enthec.com/discover-how-to-protect-your-company-from-web-exposition-with-kartos/', image: '../../../assets/images/kartos.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
