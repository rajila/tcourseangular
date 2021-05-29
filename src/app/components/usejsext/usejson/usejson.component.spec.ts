import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsejsonComponent } from './usejson.component';

describe('UsejsonComponent', () => {
  let component: UsejsonComponent;
  let fixture: ComponentFixture<UsejsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsejsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsejsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
