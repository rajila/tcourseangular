import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanimationComponent } from './tanimation.component';

describe('TanimationComponent', () => {
  let component: TanimationComponent;
  let fixture: ComponentFixture<TanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
