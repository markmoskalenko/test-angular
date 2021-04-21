import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsChooseDateComponent } from './tickets-choose-date.component';

describe('TicketsChooseDateComponent', () => {
  let component: TicketsChooseDateComponent;
  let fixture: ComponentFixture<TicketsChooseDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsChooseDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsChooseDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
