import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();

  private clearSource = new BehaviorSubject(false);
  currentClear = this.clearSource.asObservable();

  constructor() { }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }
  clear(message: any) {
    this.clearSource.next(message)
  }
}
