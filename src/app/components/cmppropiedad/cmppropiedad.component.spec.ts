import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmppropiedadComponent } from './cmppropiedad.component';

describe('CmppropiedadComponent', () => {
  let component: CmppropiedadComponent;
  let fixture: ComponentFixture<CmppropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmppropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmppropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
