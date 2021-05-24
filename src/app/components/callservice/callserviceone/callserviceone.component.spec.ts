import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallserviceoneComponent } from './callserviceone.component';

describe('CallserviceoneComponent', () => {
  let component: CallserviceoneComponent;
  let fixture: ComponentFixture<CallserviceoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallserviceoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallserviceoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
