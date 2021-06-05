import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngmodelComponent } from './dirngmodel.component';

describe('DirngmodelComponent', () => {
  let component: DirngmodelComponent;
  let fixture: ComponentFixture<DirngmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
