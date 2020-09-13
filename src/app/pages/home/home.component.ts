import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        animationName: 'runaway',
        animationDuration: '0.8s'
      })),
      state('final', style({
        animationName: 'runaway',
        animationDuration: '0.8s'
      })),
      transition('initial=>final', animate('1ms')),
      transition('final=>initial', animate('1ms'))
    ]),
  ]
})
export class HomeComponent implements OnInit {
  number = 100

  constructor() { }

  ngOnInit(): void {
  }

  attack(){
    if (this.number > 0) {
      let damage = Math.floor(Math.random() * 25);
      this.number = this.number - damage
    }

    if (this.number < 0) {
      this.number = 0
    }

    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }


  //Animation

  currentState = 'initial';
  listItem = [];
  list_order: number = 1;

  addItem() {
    var listitem = "ListItem " + this.list_order;
    this.list_order++;
    this.listItem.push(listitem);
  }
  removeItem() {
    this.listItem.length -= 1;
  }

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
}
