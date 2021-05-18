import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageextComponent } from './messageext.component';

describe('MessageextComponent', () => {
  let component: MessageextComponent;
  let fixture: ComponentFixture<MessageextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
