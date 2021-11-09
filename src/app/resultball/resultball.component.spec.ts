import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultballComponent } from './resultball.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DataService } from '../data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { GameBallReceived } from 'src/models/game.data.received';

describe('ResultballComponent', () => {
  let component: ResultballComponent;
  let fixture: ComponentFixture<ResultballComponent>;
  let service: DataService;
  let gameBallsReceived = new GameBallReceived()

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ 
        ResultballComponent 
      ],
      providers: [
        DataService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(DataService);
    gameBallsReceived.balls = [
      {
        number: 1,
        color: 'primary',
        disabled: false
      }
    ];
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('numero randomm para el resultado', () => {
    var result = component.getRandomInt(5,10);

    expect(result).toBeGreaterThanOrEqual(5);
    expect(result).toBeLessThan(10);
    
  });

  it('check game exec', () => {
    
    gameBallsReceived.resultado = 1;
    service.resultGame(gameBallsReceived)

    expect(component.executeGame).toEqual(true);
  });

  it('check winner', () => {
    component.checkWinner(gameBallsReceived,1)    
    expect(component.winner).toEqual(true);
    expect(component.winnerBall).toEqual(gameBallsReceived.balls[0]);
    expect(component.profit).toEqual(1.5);
  });
});
