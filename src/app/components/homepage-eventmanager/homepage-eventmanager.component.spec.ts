import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageEventmanagerComponent } from './homepage-eventmanager.component';

describe('HomepageEventmanagerComponent', () => {
  let component: HomepageEventmanagerComponent;
  let fixture: ComponentFixture<HomepageEventmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageEventmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageEventmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
