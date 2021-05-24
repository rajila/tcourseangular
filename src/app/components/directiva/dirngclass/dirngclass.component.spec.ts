import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngclassComponent } from './dirngclass.component';

describe('DirngclassComponent', () => {
  let component: DirngclassComponent;
  let fixture: ComponentFixture<DirngclassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngclassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
