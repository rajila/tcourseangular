import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeasyncComponent } from './pipeasync.component';

describe('PipeasyncComponent', () => {
  let component: PipeasyncComponent;
  let fixture: ComponentFixture<PipeasyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeasyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeasyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
