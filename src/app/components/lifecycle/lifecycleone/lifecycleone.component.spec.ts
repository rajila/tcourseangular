import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleoneComponent } from './lifecycleone.component';

describe('LifecycleoneComponent', () => {
  let component: LifecycleoneComponent;
  let fixture: ComponentFixture<LifecycleoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
