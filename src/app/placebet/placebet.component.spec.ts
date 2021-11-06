import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacebetComponent } from './placebet.component';

describe('PlacebetComponent', () => {
  let component: PlacebetComponent;
  let fixture: ComponentFixture<PlacebetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacebetComponent ]
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
