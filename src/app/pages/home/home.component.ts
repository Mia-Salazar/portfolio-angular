import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { Store } from '@ngrx/store';
import { Action } from '@ngrx/store';

interface FightState {
  count: number
}

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
  count = 100

  constructor(private store: Store<FightState>) {
    this.store.subscribe(state => this.count = state.count
    )
  }

  ngOnInit(): void {
  }

  attackReducer(){
    const actionAttack: Action = {
      type: 'ATTACK'
    }

    const actionDefeat: Action = {
      type: 'DEFEAT'
    }

    if (this.count > 0) {
      this.store.dispatch(actionAttack)
    }

    if (this.count < 0) {
      this.store.dispatch(actionDefeat)
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
