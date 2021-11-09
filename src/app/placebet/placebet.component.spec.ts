import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacebetComponent } from './placebet.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DataService } from '../data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';


describe('PlacebetComponent', () => {
  let component: PlacebetComponent;
  let fixture: ComponentFixture<PlacebetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ 
        PlacebetComponent 
      ],
      providers: [
        DataService
      ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacebetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('multiplicacion ok', () => {

    component.contador = 3
    component.placebet = 20
    component.okResult()
    expect(component.resultado).toEqual(60)
    expect(component.error).toEqual(false)
    expect(component.error2).toEqual(false)
    expect(component.disabledButton).toEqual(false)
  });

  it('sin apuesta', () => {
    component.contador = 3
    component.okResult()
    expect(component.error).toEqual(false)
    expect(component.error2).toEqual(true)
    expect(component.disabledButton).toEqual(true)
  });

});
