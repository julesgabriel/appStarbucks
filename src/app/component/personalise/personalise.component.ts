import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModalController } from '@ionic/angular';
import {CustomOrderComponent} from '../custom-order/custom-order.component';

@Component({
  selector: 'app-personalise',
  templateUrl: './personalise.component.html',
  styleUrls: ['./personalise.component.scss'],
})
export class PersonaliseComponent implements OnInit {

  public counter : number = 0;
  public disabled : boolean = true;
  constructor(public modalController: ModalController,private router : Router) { }
  ngOnInit() {}


  addQuantityDrink(){
    this.counter += 1;
    if (this.counter > 0) {
      this.disabled = false;
    }
  }

  removeQuantityDrink(){
    this.counter -= 1;
    if (this.counter === 0) {
      this.disabled = true;
    }
  }

  addToCart(){
    let title = document.getElementById("title").textContent;
    let prix = document.getElementById("price").textContent;
    let image = document.getElementById("image").getAttribute("src");
    let data = [
      {
        "produit":title,
        "prix":prix,
        "quantite":this.counter,
        "taille":"Venti",
        "image":image
    }
    ]
    localStorage.setItem("produits", JSON.stringify(data))
    let storeProducts = JSON.parse(localStorage.getItem("produits"))
    this.router.navigate(['home'])
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CustomOrderComponent,
      cssClass: 'modal_custom'
    });
    return await modal.present();
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
