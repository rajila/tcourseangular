import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngforComponent } from './dirngfor.component';

describe('DirngforComponent', () => {
  let component: DirngforComponent;
  let fixture: ComponentFixture<DirngforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
