import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  @Input() number: number;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
