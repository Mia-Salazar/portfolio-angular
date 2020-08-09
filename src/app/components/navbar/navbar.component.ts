import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggle:boolean = false

  constructor() { 
  }

  openMenu() {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
  }

}
