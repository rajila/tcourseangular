import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngswitchComponent } from './dirngswitch.component';

describe('DirngswitchComponent', () => {
  let component: DirngswitchComponent;
  let fixture: ComponentFixture<DirngswitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngswitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
