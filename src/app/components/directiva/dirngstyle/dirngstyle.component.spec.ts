import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirngstyleComponent } from './dirngstyle.component';

describe('DirngstyleComponent', () => {
  let component: DirngstyleComponent;
  let fixture: ComponentFixture<DirngstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirngstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirngstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
