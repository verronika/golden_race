import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultballComponent } from './resultball.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DataService } from '../data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ResultballComponent', () => {
  let component: ResultballComponent;
  let fixture: ComponentFixture<ResultballComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
