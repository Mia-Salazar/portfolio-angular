import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-superpower-item',
  templateUrl: './superpower-item.component.html',
  styleUrls: ['./superpower-item.component.scss']
})
export class SuperpowerItemComponent implements OnInit {
  @Input() title: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
