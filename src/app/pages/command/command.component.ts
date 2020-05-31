import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.scss'],
})
export class CommandComponent implements OnInit {

  slideOpts = {
    swipeGesture: true
  }

  array: products[] = [
      {
        imgUrl : '../../../assets/img/refreshaCitronSquare.png',
        name : 'Refresha',
        size : 'Venti',
        price : 6,
    }  ,    {
        imgUrl : '../../../assets/img/refreshaCitronSquare.png',
        name : 'Cafe',
        size : 'Grande',
        price : 12,
    }
  ]
  constructor() { }

  ngOnInit() {}

}

interface products {
  imgUrl: string,
  name: string,
  size: string,
  price: number
}