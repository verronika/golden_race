import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export interface Tile {
  cols: number;
  rows: number;
}

/**
 *  Dynamic grid-list
 */

export class GridListDynamicExample {
  tiles: Tile[] = [
    {cols: 3, rows: 1},
    {cols: 1, rows: 2},
    {cols: 1, rows: 1},
    {cols: 2, rows: 1},
  ];
}