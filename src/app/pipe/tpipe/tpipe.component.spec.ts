import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TpipeComponent } from './tpipe.component';

describe('TpipeComponent', () => {
  let component: TpipeComponent;
  let fixture: ComponentFixture<TpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
