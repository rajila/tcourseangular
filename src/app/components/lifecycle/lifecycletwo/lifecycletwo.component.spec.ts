import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycletwoComponent } from './lifecycletwo.component';

describe('LifecycletwoComponent', () => {
  let component: LifecycletwoComponent;
  let fixture: ComponentFixture<LifecycletwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycletwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycletwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
