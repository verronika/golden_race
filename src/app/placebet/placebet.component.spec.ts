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
});
