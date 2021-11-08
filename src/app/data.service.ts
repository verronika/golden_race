import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameBallReceived } from 'src/models/game.data.received';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  private clearSource = new BehaviorSubject(false);
  currentClear = this.clearSource.asObservable();

  private placebetResult = new BehaviorSubject(new GameBallReceived());
  currentResult = this.placebetResult.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  clear(message: any) {
    this.clearSource.next(message)
  }
  resultGame(message: any) {
    this.placebetResult.next(message)
  }
  
}

