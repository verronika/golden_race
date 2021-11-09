import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';
import { GameDataReceived } from 'src/models/game.data.received';
import { GameBallReceived } from '../../models/game.data.received';

@Component({
  selector: 'app-resultball',
  templateUrl: './resultball.component.html',
  styleUrls: ['./resultball.component.css']
})
export class ResultballComponent implements OnInit {

  winner : boolean = false;
  executeGame : boolean = false;
  winnerBall: any;
  subscription!: Subscription;
  profit : number= 0;
                         
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentResult.subscribe(data => {
      
      var randomNumber= this.getRandomInt(1,11);
      if(typeof data.balls != 'undefined' ){
       this.checkWinner(data,randomNumber)
      }
    })
    
  }
  checkWinner(data:GameBallReceived,winnerNumber:number){
    data.balls.forEach((ball: GameDataReceived) => {
      if (ball.number == winnerNumber ) {
        this.winner = true;
        this.winnerBall = ball;
        this.profit = data.resultado * 1.5
      }
    });
    this.executeGame= true;
  }
  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
