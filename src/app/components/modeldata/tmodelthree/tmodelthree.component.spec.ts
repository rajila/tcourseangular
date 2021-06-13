import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmodelthreeComponent } from './tmodelthree.component';

describe('TmodelthreeComponent', () => {
  let component: TmodelthreeComponent;
  let fixture: ComponentFixture<TmodelthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmodelthreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmodelthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
