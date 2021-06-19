import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosenparaleloComponent } from './eventosenparalelo.component';

describe('EventosenparaleloComponent', () => {
  let component: EventosenparaleloComponent;
  let fixture: ComponentFixture<EventosenparaleloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosenparaleloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosenparaleloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
