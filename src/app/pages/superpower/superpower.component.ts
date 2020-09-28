import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-superpower',
  templateUrl: './superpower.component.html',
  styleUrls: ['./superpower.component.scss']
})
export class SuperpowerComponent implements OnInit {
  mobile = true;
  scroll = false;
  weaknessOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  valueBar(num){
    if (this.mobile || this.scroll) {
      return num
    }
  }

  @HostListener("window:scroll", [])onWindowScroll() {
    if (window.innerWidth > 767) {
      this.mobile = false;
      if(window.scrollY > 900) {
        this.scroll = true;
      } else  {
        this.scroll = false;
      }
    }   
  }

}
