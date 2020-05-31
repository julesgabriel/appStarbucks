import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-command-card-history',
  templateUrl: './command-card-history.component.html',
  styleUrls: ['./command-card-history.component.scss'],
})
export class CommandCardHistoryComponent implements OnInit {

  @Input() imgUrl:string
  @Input() name:string
  @Input() date:string
  @Input() type:string
  @Input() price:number

  constructor() { }

  ngOnInit() {}

}