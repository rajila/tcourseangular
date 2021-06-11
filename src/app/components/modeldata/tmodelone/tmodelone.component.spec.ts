import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmodeloneComponent } from './tmodelone.component';

describe('TmodeloneComponent', () => {
  let component: TmodeloneComponent;
  let fixture: ComponentFixture<TmodeloneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmodeloneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmodeloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
