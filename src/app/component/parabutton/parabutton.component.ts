import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-parabutton',
  templateUrl: './parabutton.component.html',
  styleUrls: ['./parabutton.component.scss'],
})
export class ParabuttonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  paiement()
  {
    this.router.navigateByUrl('account/paiement');
  }
}
