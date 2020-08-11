import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  date = new Date
  socials:any[] = [
    { icon: 'github', link: 'https://github.com/Mia-Salazar' },
    { icon: 'codepen', link: 'https://codepen.io/MiaSalazar' },
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/miasalazar/' },
    { icon: 'medium', link: 'https://medium.com/@marasalazar' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
