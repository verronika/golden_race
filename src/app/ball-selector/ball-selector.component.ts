import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit {

  balls: Array<any> = [
    {
      number: 1,
      color: 'primary'
    },
    {
      number: 2,
      color: 'accent'
    },
    {
      number: 3,
      color: 'warn'
    },
    {
      number: 4,
      color: 'primary'
    },
    {
      number: 5,
      color: 'warn'
    },
    {
      number: 6,
      color: 'primary'
    },
    {
      number: 7,
      color: 'accent'
    },
    {
      number: 8,
      color: 'warn'
    },
    {
      number: 9,
      color: 'primary'
    },
    {
      number: 10,
      color: 'accent'
    },
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  clickBall(event: any, numberSelection: number) {
    console.log(numberSelection);
  }

}
