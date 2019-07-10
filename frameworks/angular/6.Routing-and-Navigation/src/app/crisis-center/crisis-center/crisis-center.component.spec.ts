import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisCenterComponent } from './crisis-center.component';

describe('CrisisCenterComponent', () => {
  let component: CrisisCenterComponent;
  let fixture: ComponentFixture<CrisisCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
