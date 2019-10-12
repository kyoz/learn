import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryOneComponent } from './library-one.component';

describe('LibraryOneComponent', () => {
  let component: LibraryOneComponent;
  let fixture: ComponentFixture<LibraryOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
