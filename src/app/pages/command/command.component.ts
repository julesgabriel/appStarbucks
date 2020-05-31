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

    hist: histCard[] = [
        {
            imgUrl : '../../../assets/img/refreshaCitronSquare.png',
            name : 'Refresha',
            date : '20/05/1957',
            type : 'A Emporter',
            price : 25,
        }  ,    {
            imgUrl : '../../../assets/img/refreshaCitronSquare.png',
            name : 'Cafe',
            date : '99/56/4894',
            type : 'Sur Place',
            price : 99.99,
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

interface histCard {
    imgUrl: string,
    name: string,
    date: string,
    type: string,
    price: number
}