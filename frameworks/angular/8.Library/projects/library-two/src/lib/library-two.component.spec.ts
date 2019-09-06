import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryTwoComponent } from './library-two.component';

describe('LibraryTwoComponent', () => {
  let component: LibraryTwoComponent;
  let fixture: ComponentFixture<LibraryTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
