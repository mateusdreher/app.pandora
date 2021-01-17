import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNumbersComponent } from './view-numbers.component';

describe('ViewNumbersComponent', () => {
  let component: ViewNumbersComponent;
  let fixture: ComponentFixture<ViewNumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNumbersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
