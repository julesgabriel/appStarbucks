import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800,
    slidesPerView: 5,
    spaceBetween: 5,
    loop: true,
    swipeGesture: true
  };

  constructor() {}

  ngOnInit() {}
}
