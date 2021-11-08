import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-placebet',
  templateUrl: './placebet.component.html',
  styleUrls: ['./placebet.component.css']
})
export class PlacebetComponent implements OnInit, OnDestroy {

  ball!: any;
  subscription!: Subscription;
  contador = 0;
  placebet!: number;
  resultado: number = 0;

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

  constructor(private data: DataService) { 
  }

  @HostBinding('class.internalMatGrid') defaultClass: boolean = false;


  ngOnInit(): void {
    
    
    this.defaultClass = true;

    this.subscription = this.data.currentMessage.subscribe(ballReceived => {
      //creamos una variable para verificar si existe el numero
      let exist = false;
      console.log('from place',ballReceived)
      //metemos ballReceived en this.ball,ahora this.ball es la bola recibida
      this.ball = ballReceived
      this.contador = 0;
      this.balls.forEach((ball)=>{
        if (this.ball.number == ball.number) {
          exist=true;
        }
      })
      
      this.balls.every((ball, index)=>{
        if (ball.disabled && this.ball && !exist ) {
          this.balls[index]={
            number: this.ball.number,
            color: this.ball.color,
            disabled: false
          }
          return false
        }
        return true;
      })
      this.balls.forEach((ball)=>{
        if (ball.disabled == false) {
          this.contador++;
          console.log("este" + this.contador);
        }
      })
    })

    this.subscription = this.data.currentClear.subscribe(clearBalls => {
      if (clearBalls == true) {
        this.balls.forEach((ball,index)=>{
          this.balls[index]={
            disabled: true
          }
        })
      }
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  okResult(){
    this.resultado = this.contador * this.placebet;
  }

  
  placebetResult() {
      
      let message = {
        balls: this.balls,
        resultado: this.resultado
      }
      console.log(message);
      this.data.resultGame(message)
      
  }
}


