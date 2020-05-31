import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {

    data = [
        {
            "produit": "Refresha Citron - Citron Vert",
            "prix": "6.50",
            "taille": "Venti",
            "img": "../../../assets/products/refresha.jpeg"
        },
        {
            "produit": "Refresha Citron - Citron Vert",
            "prix": "5.50",
            "taille": "Grande",
            "img": "../../../assets/products/refresha.jpeg"
        }
    ]
    dataStored : any;

    constructor(private router:Router) {}
    ngOnInit() {
        localStorage.setItem("produits", JSON.stringify(this.data))
        let storesProducts = JSON.parse(localStorage.getItem("produits"));
        console.log(storesProducts)
        this.dataStored = storesProducts
    }

    redirectToRoute(){
        this.router.navigate(['contentOrder'])
    }
}
