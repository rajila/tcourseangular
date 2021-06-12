import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmodeltwoComponent } from './tmodeltwo.component';

describe('TmodeltwoComponent', () => {
  let component: TmodeltwoComponent;
  let fixture: ComponentFixture<TmodeltwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmodeltwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmodeltwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
