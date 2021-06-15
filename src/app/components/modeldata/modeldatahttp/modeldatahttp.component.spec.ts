import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeldatahttpComponent } from './modeldatahttp.component';

describe('ModeldatahttpComponent', () => {
  let component: ModeldatahttpComponent;
  let fixture: ComponentFixture<ModeldatahttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeldatahttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeldatahttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
