import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        let tabsHome = document.getElementById('home').childNodes;
        let url = window.location.href;
        if (url.includes("home")) {
            for (let i = 0; i < tabsHome.length; i++) {
                tabsHome[i].style.color = "#006341"
            }
        }
    }
}
