import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-placebet',
  templateUrl: './placebet.component.html',
  styleUrls: ['./placebet.component.css']
})
export class PlacebetComponent implements OnInit, OnDestroy {

  ball!: any;
  subscription!: Subscription;

  balls: Array<any> = [
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    },
    {
      disabled: true
    }
  ];

  ballReset: Array<any> = []; 

  constructor(private data: DataService) { }

  @HostBinding('class.internalMatGrid') defaultClass: boolean = false;


  ngOnInit(): void {
    
    
    this.defaultClass = true;

    this.subscription = this.data.currentMessage.subscribe(ballReceived => {
      console.log('from place',ballReceived)
      this.ball = ballReceived
      
      this.balls.every((ball, index)=>{
        if (ball.disabled && this.ball ) {
          this.balls[index]={
            number: this.ball.number,
            color: this.ball.color,
            disabled: false
          }
          return false
        }
        return true;
      })
    })

    this.subscription = this.data.currentClear.subscribe(clearBalls => {
      console.log("hola");
      if (clearBalls == true) {
        this.balls = this.ballReset;
      }
    })
    
   

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
