import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-custom-order',
  templateUrl: './custom-order.component.html',
  styleUrls: ['./custom-order.component.scss'],
})
export class CustomOrderComponent implements OnInit {

  public valueSize : string;
  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  addValue($event){
    this.valueSize = $event.target.textContent;
    this.dismiss()
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
