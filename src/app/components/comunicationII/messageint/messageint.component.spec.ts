import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageintComponent } from './messageint.component';

describe('MessageintComponent', () => {
  let component: MessageintComponent;
  let fixture: ComponentFixture<MessageintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
