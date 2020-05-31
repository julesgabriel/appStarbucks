import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-cardproduct',
    template: '<ion-item class="card"><div><img src="{{img}}" alt="{{name}}"><p style="font-size: 12px">{{name}}</p><hr> ' +
        '<div style="display: flex; justify-content: space-between"><span class="reduceFont">{{size}}</span><span class="reduceFont">{{price}}</span></div></div></ion-item>',
    styleUrls: ['./cardproduct.component.scss'],
})
export class CardproductComponent implements OnInit {
    @Input() name: string;
    @Input() price: number;
    @Input() img: string;
    @Input() size: string;
}
