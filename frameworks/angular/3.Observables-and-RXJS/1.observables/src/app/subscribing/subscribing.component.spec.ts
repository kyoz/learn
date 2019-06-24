import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribingComponent } from './subscribing.component';

describe('SubscribingComponent', () => {
  let component: SubscribingComponent;
  let fixture: ComponentFixture<SubscribingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
