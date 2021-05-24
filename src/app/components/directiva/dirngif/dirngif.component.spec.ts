import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngifComponent } from './dirngif.component';

describe('DirngifComponent', () => {
  let component: DirngifComponent;
  let fixture: ComponentFixture<DirngifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
