import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss']
})
export class SocialLinkComponent implements OnInit {

  @Input() social:any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
