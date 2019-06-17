import {
  Component, Input, SimpleChanges,
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  ChangeDetectorRef
} from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div>* Parent</div>
    <div style="margin-left: 32px">
      <app-child data="'test data'">
        <span style="padding-left: 32px">
          + Child ng-content
        </span>
      </app-child>
    </div>
  `
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() data;

  constructor(private changeDetectionRef: ChangeDetectorRef) {
    console.log('%cconstructor: PARENT', 'color: #ff9400');
    setTimeout(() => {
      console.log('---------------      call detectChanges()      ------------------');
      this.changeDetectionRef.detectChanges();
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('%cngOnChanges()', 'color: #ff9400', changes);
  }

  ngOnInit() {
    console.log('%cngOnInit()', 'color: #ff9400');
  }

  ngDoCheck() {
    console.log('%cngDoCheck()', 'color: #ff9400');
  }

  ngAfterContentInit() {
    console.log('%cngAfterContentInit()', 'color: #ff9400');
  }

  ngAfterContentChecked() {
    console.log('%cngAfterContentChecked()', 'color: #ff9400');
  }

  ngAfterViewInit() {
    console.log('%cngAfterViewInit()', 'color: #ff9400');
  }

  ngAfterViewChecked() {
    console.log('%cngAfterViewChecked()', 'color: #ff9400');
  }
}

