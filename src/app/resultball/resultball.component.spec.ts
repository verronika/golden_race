import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultballComponent } from './resultball.component';

describe('ResultballComponent', () => {
  let component: ResultballComponent;
  let fixture: ComponentFixture<ResultballComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultballComponent ]
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
