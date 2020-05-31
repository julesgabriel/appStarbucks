import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-action-nav',
  template: '<div style="background: #006341; height: 8vh; color: white; font-weight: 900; display: flex; align-items: center; justify-content: center">\n' +
      '{{content}}' +
      '</div>',
  styleUrls: ['./action-nav.component.scss'],
})
export class ActionNavComponent implements OnInit {
  @Input() content:string;

  constructor() { }

  ngOnInit() {}
}
