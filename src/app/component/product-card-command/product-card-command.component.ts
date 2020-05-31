import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card-command',
  template: '<ion-card>' +
      '    <ion-card-header style="background: url({{imgUrl}})">' +
      '    </ion-card-header>' +
      '    <ion-card-content>' +
      '        <ion-card-title>{{name}}</ion-card-title>' +
      '        <hr>' +
      '        <div class="productConfig">' +
      '            <ion-card-subtitle>{{size}}</ion-card-subtitle>' +
      '            <ion-card-subtitle><span>{{price}} euros</span></ion-card-subtitle>' +
      '        </div>' +
      '    </ion-card-content>' +
      '</ion-card>',
  styleUrls: ['./product-card-command.component.scss'],
})
export class ProductCardCommandComponent implements OnInit {

  @Input() imgUrl:string
  @Input() name:string
  @Input() size:string
  @Input() price:number
  constructor() { }

  ngOnInit() {}

}
