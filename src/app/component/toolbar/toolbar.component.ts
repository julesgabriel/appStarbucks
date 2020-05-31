import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
    private titleToolBar: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.titleToolBar = "12 Avenue Léonard De Vinci";
        let url = window.location.href;
        if (url.includes('cart')) {
            this.titleToolBar = "Panier";
            document.getElementById('basket').style.color = "#006341"
        } else if (url.includes('contentOrder')) {
            this.titleToolBar = "Contenu de la commande";
        }
    }

    async redirectCart() {
        await this.router.navigate(['/cart'])
    }
}
