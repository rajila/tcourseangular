import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasynconeComponent } from './tasyncone.component';

describe('TasynconeComponent', () => {
  let component: TasynconeComponent;
  let fixture: ComponentFixture<TasynconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasynconeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasynconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
