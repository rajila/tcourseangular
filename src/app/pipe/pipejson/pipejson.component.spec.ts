import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipejsonComponent } from './pipejson.component';

describe('PipejsonComponent', () => {
  let component: PipejsonComponent;
  let fixture: ComponentFixture<PipejsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipejsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
