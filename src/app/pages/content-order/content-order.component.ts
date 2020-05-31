import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-content-order',
    templateUrl: './content-order.component.html',
    styleUrls: ['./content-order.component.scss'],
})
export class ContentOrderComponent implements OnInit {
    dataStored: any;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    redirectToRoute() {
        this.router.navigate(['thanks'])
    }
}
