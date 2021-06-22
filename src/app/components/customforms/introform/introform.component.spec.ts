import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroformComponent } from './introform.component';

describe('IntroformComponent', () => {
  let component: IntroformComponent;
  let fixture: ComponentFixture<IntroformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
