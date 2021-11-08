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
                         
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.subscription = this.data.currentResult.subscribe(data => {
      
      var dataReceived: GameBallReceived = data
      var randomNumber= this.getRandomInt(1,11);
      console.log(dataReceived);
      if(typeof dataReceived.balls != 'undefined' ){
        dataReceived.balls.forEach((ball: GameDataReceived) => {
            if (ball.number == randomNumber ) {
              this.winner = true;
              this.winnerBall = ball;
            }
        });
        this.executeGame= true;
      }
    })
  }

  getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }




}
