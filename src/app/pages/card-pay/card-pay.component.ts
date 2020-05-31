import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-card-pay',
    template: '<ion-card style="padding: 10px; border: 1px solid rgba(0,0,0,0.2)">{{paiement}}</ion-card>',
})
export class CardPayComponent implements OnInit {
    @Input() paiement: string;
}
