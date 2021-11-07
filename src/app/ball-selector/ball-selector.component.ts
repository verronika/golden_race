import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.css']
})
export class BallSelectorComponent implements OnInit, OnDestroy{

  message!: string;
  subscription!: Subscription;

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
  
  constructor(private data: DataService) { }

  ngOnInit() {
   
  }

  ngOnDestroy() {
  }

  clickBall(event: any, numberSelection: number) {
    this.data.changeMessage(numberSelection)
  }

}
