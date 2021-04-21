import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsChooseTimeComponent } from './tickets-choose-time.component';

describe('TicketsChooseTimeComponent', () => {
  let component: TicketsChooseTimeComponent;
  let fixture: ComponentFixture<TicketsChooseTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketsChooseTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsChooseTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
