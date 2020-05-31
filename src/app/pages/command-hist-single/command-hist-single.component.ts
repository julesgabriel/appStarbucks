import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-command-hist-single',
  templateUrl: './command-hist-single.component.html',
  styleUrls: ['./command-hist-single.component.scss'],
})
export class CommandHistSingleComponent implements OnInit {

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
