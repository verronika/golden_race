import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-placebet',
  templateUrl: './placebet.component.html',
  styleUrls: ['./placebet.component.css']
})
export class PlacebetComponent implements OnInit, OnDestroy {

  ball!: string;
  subscription!: Subscription;

  constructor(private data: DataService) { }

  @HostBinding('class.internalMatGrid') defaultClass: boolean = false;


  ngOnInit(): void {
    this.defaultClass = true;
    this.subscription = this.data.currentMessage.subscribe(ball => {
      console.log('from place',ball)
      this.ball = ball
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
