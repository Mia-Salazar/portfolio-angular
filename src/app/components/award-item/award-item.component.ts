import { Component, Input, OnInit } from '@angular/core';

import { AwardItem } from 'src/app/models/awards.models';

@Component({
  selector: 'app-award-item',
  templateUrl: './award-item.component.html',
  styleUrls: ['./award-item.component.scss']
})
export class AwardItemComponent implements OnInit {
  @Input() award: AwardItem;
  @Input() index: number;
  
  constructor() {
  }

  ngOnInit(): void {
  }
}
