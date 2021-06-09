import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnydirngComponent } from './anydirng.component';

describe('AnydirngComponent', () => {
  let component: AnydirngComponent;
  let fixture: ComponentFixture<AnydirngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnydirngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnydirngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
