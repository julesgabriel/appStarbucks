import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountbutton',
  templateUrl: './accountbutton.component.html',
  styleUrls: ['./accountbutton.component.scss'],
})
export class AccountbuttonComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {}

  async favoris()
  {
    await this.router.navigate(['/account/fav']);
  }
  parametre()
  {
    this.router.navigateByUrl('account/para');
  }
  aide()
  {
    this.router.navigateByUrl('account/aide');
  }
}
