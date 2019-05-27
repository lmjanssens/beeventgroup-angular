import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEventManagerComponent } from './login-event-manager.component';

describe('LoginEventManagerComponent', () => {
  let component: LoginEventManagerComponent;
  let fixture: ComponentFixture<LoginEventManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEventManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEventManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
