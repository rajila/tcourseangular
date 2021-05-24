import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallservicetwoComponent } from './callservicetwo.component';

describe('CallservicetwoComponent', () => {
  let component: CallservicetwoComponent;
  let fixture: ComponentFixture<CallservicetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallservicetwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallservicetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
