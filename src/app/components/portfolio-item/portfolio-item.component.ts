import { Component, Input, OnInit } from '@angular/core';

import { PortfolioItem } from 'src/app/models/portfolio.model';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {
  @Input() portfolio: PortfolioItem;

  constructor() { }

  ngOnInit(): void {
  }

}
