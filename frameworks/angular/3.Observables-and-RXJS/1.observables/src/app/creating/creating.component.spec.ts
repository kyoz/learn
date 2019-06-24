import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatingComponent } from './creating.component';

describe('CreatingComponent', () => {
  let component: CreatingComponent;
  let fixture: ComponentFixture<CreatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
