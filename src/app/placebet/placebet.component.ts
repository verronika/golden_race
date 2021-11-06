import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-placebet',
  templateUrl: './placebet.component.html',
  styleUrls: ['./placebet.component.css']
})
export class PlacebetComponent implements OnInit {

  constructor() { }

  @HostBinding('class.internalMatGrid') defaultClass: boolean = false;


  ngOnInit(): void {
    this.defaultClass = true;
  }

}
