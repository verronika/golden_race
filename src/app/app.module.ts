import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBadgeModule} from '@angular/material/badge';
import { PlacebetComponent } from './placebet/placebet.component';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { ResultballComponent } from './resultball/resultball.component';



@NgModule({
  declarations: [
    AppComponent,
    PlacebetComponent,
    BallSelectorComponent,
    ResultballComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatInputModule,
    MatBadgeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

/**
 *  Dynamic grid-list
 */
