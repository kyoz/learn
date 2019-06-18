import {
  Component, Input, SimpleChanges,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>+ Child</div>
    <ng-content></ng-content>
  `
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() data;

  constructor() {
    console.log('constructor: CHILD');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges()', changes);
  }

  ngOnInit() {
    console.log('ngOnInit()');
  }

  ngDoCheck() {
    console.log('ngDoCheck()');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked()');
  }
}

