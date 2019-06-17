# Angular
Just a place to learn Angular

## Contents

- [Architecture](#architecture)
    - [Modules](#modules)
    - [Components](#components)
    - [Services & DI](#services-&-di)
- [Templates Syntax](#templates-syntax)
    - [Interpolation and Template Expressions](#interpolation-and-template-expressions)
    - [Binding Syntax](#binding-syntax)
    - [Property Binding](#property-binding)
    - [Attribute, Class, and styles bindings](#attribute,-class,-and-styles-bindings)
    - [Event bindings](#event-bindings)
    - [Two-way bindings](#two-way-bindings)
    - [Build-in directives](#build-in-directives)
        - [Attribute directives](#attribute-directives)
        - [Structure directives](#structure-directives)
    - [Template references variables](#template-references-variables)
    - [Input and Output properties](#input-and-output-properties)
    - [Template expression operators](#template-expression-operators)
    - [Built-in template functions](#build-in-template-functions)
- [Lifecycle Hooks](#lifecycle-hooks)
    - [Lifecycle sequence](#lifecycle-sequence)
    - [Content projection](#content-projection)
- [Component Interaction](#component-interaction)
    - [Intercept input property changes](#intercept-input-property-changes)
    - [Parent listen for child event](#parent-listen-for-child-event)
- [Component Styles](#component-styles)
    - [Special Selector](#special-selector)
    - [Loading Component Styles](#loading-component-styles)
    - [View Encapsulation](#view-encapsulation)

## Architecture

- [Modules](https://next.angular.io/guide/architecture-modules)
- [Components](https://next.angular.io/guide/architecture-components)
- [Services & DI](https://next.angular.io/guide/architecture-services)

## Templates Syntax

### Interpolation and Template Expressions

- Interpolation: {{...}}
- Template Expressions: {{ 1 + 1 }}

### Binding Syntax

| Data direction                     | Syntax                     | Type          |
|:-----------------------------------|----------------------------|---------------|
| One-way (from data source to view) | {{expression}}             | Interpolation |
|                                    | [target]="expression"      | Property      |
|                                    | bind-target="expression"   | Attribute     |
|                                    |                            | Class         |
|                                    |                            | Style         |
| One-way (from view to data source) | (target)="statement"       | Event         |
|                                    | on-target="statement"      |               |
| Two-way                            | [(target)]="expression"    | Two-way       |
|                                    | bindon-target="expression" |               |

### Property Binding

- One way property bindings:

```html
<!-- All of these is property binding -->
<img [src]="heroImageUrl">
<img bind-src="heroImageUrl">
<button [disabled]="isUnchanged">Cancel is disabled</button>
<app-hero-detail [hero]="currentHero"></app-hero-detail>
```

- Property binding or interpolation?

```html
<!-- We can actually binding with interpolation {{...}} or property binding syntax -->
<p><img src="{{heroImageUrl}}"> is the <i>interpolated</i> image.</p>
<p><img [src]="heroImageUrl"> is the <i>property bound</i> image.</p>

<p><span>"{{title}}" is the <i>interpolated</i> title.</span></p>
<p>"<span [innerHTML]="title"></span>" is the <i>property bound</i> title.</p>
```

### Attribute, class, and styles bindings

- Attribute binding:

```html
<table border=1>
  <tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
  <tr><td>Five</td><td>Six</td></tr>
</table>
```

- Class binding:

```html
<div class="bad curly special"
     [class]="badCurly">Bad curly</div>
<div [class.special]="isSpecial">The class binding is special</div>
<div class="special"
     [class.special]="!isSpecial">This one is not so special</div>
```

- Style binding:

```html
<button [style.color]="isSpecial ? 'red': 'green'">Red</button>
<button [style.background-color]="canSave ? 'cyan': 'grey'" >Save</button>
<button [style.font-size.em]="isSpecial ? 3 : 1" >Big</button>
<button [style.font-size.%]="!isSpecial ? 150 : 50" >Small</button>
```

### Event bindings

- Target event:

```html
<button (click)="onSave($event)">Save</button>
<button on-click="onSave($event)">on-click Save</button>

<button (myClick)="clickMessage=$event" clickable>click with myClick</button>
```

- $event and event handling statements:

```html
<!-- without NgModel -->
<input [value]="currentItem.name"
       (input)="currentItem.name=$event.target.value" >
```

- Custom events with EventEmitter:

```html
<img src="{{itemImageUrl}}" [style.display]="displayNone">
<span [style.text-decoration]="lineThrough">{{ item.name }}
</span>
<button (click)="delete()">Delete</button>
```

```javascript
@Output() deleteRequest = new EventEmitter<Item>();

delete() {
  this.deleteRequest.emit(this.item);
  this.displayNone = this.displayNone ? '' : 'none';
  this.lineThrough = this.lineThrough ? '' : 'line-through';
}
```

### Two-way bindings

Two way binding with banana in the box: ( [(...)] )

```javascript
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  template: `
  <div>
    <button (click)="dec()" title="smaller">-</button>
    <button (click)="inc()" title="bigger">+</button>
    <label [style.font-size.px]="size">FontSize: {{size}}px</label>
  </div>`
})
export class SizerComponent {
  @Input()  size: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
```

```html
<app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"></app-sizer>
```

### Build-in directives

#### Attribute directives

- NgClass:

```html
<!-- toggle the "special" class on/off with a property -->
<div [class.special]="isSpecial">The class binding is special</div>
```

- NgStyle:

```html
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >
  This div is x-large or smaller.
</div>
```

- NgModel: 

```html
<input [(ngModel)]="currentHero.name">
```

#### Structure directives

- NgIf

```html
<app-hero-detail *ngIf="isActive"></app-hero-detail>
```

- NgFor

```html
<div *ngFor="let hero of heroes">{{hero.name}}</div>
<!-- With index -->
<div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>
```

- NgFor with trackBy
```html
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
  ({{hero.id}}) {{hero.name}}
</div>
```

```javascript
trackByHeroes(index: number, hero: Hero): number { return hero.id; }
```

- NgSwitch

```html
<div [ngSwitch]="currentHero.emotion">
  <app-happy-hero    *ngSwitchCase="'happy'"    [hero]="currentHero"></app-happy-hero>
  <app-sad-hero      *ngSwitchCase="'sad'"      [hero]="currentHero"></app-sad-hero>
  <app-confused-hero *ngSwitchCase="'confused'" [hero]="currentHero"></app-confused-hero>
  <app-unknown-hero  *ngSwitchDefault           [hero]="currentHero"></app-unknown-hero>
</div>
```

### Template references variables

- A template reference variable is often a reference to a DOM element within a template. It can also be a reference to an Angular component or directive or a web component.

```html
<input #phone placeholder="phone number">
<button (click)="callPhone(phone.value)">Call</button>
```

- Template references with ref-prefix

```html
<input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>
```

### Input and Output properties

- Normally

```javascript
@Input()  hero: Hero;
@Output() deleteRequest = new EventEmitter<Hero>();

// With alias
@Output('myClick') clicks = new EventEmitter<string>(); //  @Output(alias) propertyName = ...
```

- Alternatively, we can identify members in the inputs and outputs arrays of the directive metadata, as in this example:

```javascript
@Component({
  inputs: ['hero'],
  outputs: ['deleteRequest'],
})

// Alias
@Component({
  outputs: ['clicks:myClick']  // propertyName:alias
})
```

### Template expression operators

- Pipe operator ( | )

```html
<div>Title through uppercase pipe: {{title | uppercase}}</div>

<!-- Chain pipe -->
<div>
  Title through a pipe chain:
  {{title | uppercase | lowercase}}
</div>

<!-- Pipe with parameters -->
<div>Birthdate: {{currentHero?.birthdate | date:'longDate'}}</div>
```

- Safe navigation operator ( ?. )

```html
<!-- No stop rendering if current hero is null or undefined -->
The current hero's name is {{currentHero?.name}}

<!-- This s**t can chain though object properties -->
{{ currentHero?.name?.english?.hello }}
```

- Non-null assertion operator ( ! )

```html
<!--No hero, no text -->
<div *ngIf="hero">
  The hero's name is {{hero!.name}}
</div>
```

### Build-in template functions

- The $any() type cast function

```html
<!-- It prevents TypeScript from reporting that bestByDate is not a member of the item object when it runs type checking on the template.-->
<p>The item's undeclared best by date is: {{$any(item).bestByDate}}</p>

<!-- Also work with this to allow access to undeclared members of the component -->
<p>The item's undeclared best by date is: {{$any(this).bestByDate}}</p>
```

## Lifecycle Hooks

### Lifecycle sequence

| Hook                    | Purpose and Timing                                                                                                                                                                                                                           |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ngOnChanges()           | Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.<br><br> Called before ngOnInit() and whenever one or more data-bound input properties change. |
| ngOnInit()              | Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.<br><br> Called once, after the first ngOnChanges().                                           |
| ngDoCheck()             | Detect and act upon changes that Angular can't or won't detect on its own.<br><br> Called during every change detection run, immediately after ngOnChanges() and ngOnInit().                                                                 |
| ngAfterContentInit()    | Respond after Angular projects external content into the component's view / the view that a directive is in.<br><br> Called once after the first ngDoCheck().<br>                                                                            |
| ngAfterContentChecked() | Respond after Angular checks the content projected into the directive/component.<br><br> Called after the ngAfterContentInit() and every subsequent ngDoCheck().                                                                             |
| ngAfterViewInit()       | Respond after Angular initializes the component's views and child views / the view that a directive is in.<br><br> Called once after the first ngAfterContentChecked().                                                                      |
| ngAfterViewChecked()    | Respond after Angular checks the component's views and child views / the view that a directive is in.<br><br> Called after the ngAfterViewInit() and every subsequent ngAfterContentChecked().                                               |
| ngOnDestroy()           | Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.<br><br> Called just before Angular destroys the directive/component.                                  |

### Content projection

- Is a way to import HTML content from outside the component and insert that content into the component's template in designed spot

```html
<!-- AfterContentComponent (after-content) template -->
<div>-- Projected content begin --</div>
  <ng-content></ng-content>
<div>-- Projected content end --</div>

<!-- Use content projection -->
<after-content>
  <!-- AppChildComponent (app-child) will be insert in to AfterContentComponent and replace for ng-content -->
  <app-child></app-child>
</after-content>
```

## Component Interaction

### Intercept input property changes

#### Intercept input property changes with a setter

```javascript
@Component({
  selector: 'app-name-child',
  template: '<h3>"{{name}}"</h3>'
})
export class NameChildComponent {
  private _name = '';
 
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
 
  get name(): string { return this._name; }
}
```

#### Intercept input property changes with ngOnChanges()

```javascript
export class VersionChildComponent implements OnChanges {
  @Input() major: number;
  @Input() minor: number;
  changeLog: string[] = [];
 
  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}
```

### Parent listen for child event

#### With EventEmitter

```javascript
@Component({
  selector: 'app-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="didVote">Agree</button>
    <button (click)="vote(false)" [disabled]="didVote">Disagree</button>
  `
})
export class VoterComponent {
  @Input()  name: string;
  @Output() voted = new EventEmitter<boolean>();
  didVote = false;
 
  vote(agreed: boolean) {
    this.voted.emit(agreed);
    this.didVote = true;
  }
}
```

#### With child via local variable

```javascript
@Component({
  selector: 'app-countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <app-countdown-timer #timer></app-countdown-timer>
  `,
  styleUrls: ['../assets/demo.css']
})
```

#### With @ViewChild()

```javascript
export class CountdownViewChildParentComponent implements AfterViewInit {
 
  @ViewChild(CountdownTimerComponent, {static: false} private timerComponent: CountdownTimerComponent;
 
  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
```

#### With a service

[Example](https://next.angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service)

## Component Styles

### Special Selector

#### :host

- Use the :host pseudo-class selector to target styles in the element that hosts the component (as opposed to targeting elements inside the component's template).

```javascript
// Parent Component
@Component({
  selector: 'app-parent',
  template: `
    <div class="container">
      This is parent component
      <app-child class="child"></app-child>
    </div>
  `,
  styles: [`
    .container { color: red }
  `]
})
```

```javascript
// Child component
@Component({
  selector: 'app-child',
  template: `
    <div class="container">This is child component</div>
  `,
  styles: [`
    .container { color: blue }

    :host {
      font-size: 30px;
    }

    // Or use :host(.class-exist-in-host)
    // :host(.child) {
    //   font-size: 30px;
    // }
  `]
})
```

#### (deprecated) /deep/, >>>, and ::ng-deep

- Component styles normally apply only to the HTML in the component's own template.

- Applying the ::ng-deep pseudo-class to any CSS rule completely disables view-encapsulation for that rule. Any style with ::ng-deep applied becomes a global style. In order to scope the specified style to the current component and all its descendants, be sure to include the :host selector before ::ng-deep. If the ::ng-deep combinator is used without the :host pseudo-class selector, the style can bleed into other components.

- The following example targets all h3 elements, from the host element down through this component to all of its child elements in the DOM.

```css
:host /deep/ h3 {
  font-style: italic;
}
```

### :host-content

- Sometimes it's useful to apply styles based on some condition outside of a component's view. For example, a CSS theme class could be applied to the document <body> element, and you want to change how your component looks based on that.

- Use the :host-context() pseudo-class selector, which works just like the function form of :host(). The :host-context() selector looks for a CSS class in any ancestor of the component host element, up to the document root. The :host-context() selector is useful when combined with another selector.

```css
// Find up to root what element with class 'this-is-body' and apply background: #bdbdbd to all it children elements
:host-context(.this-is-body) * {
  background: #bdbdbd;
}
```

### Loading Component Styles
### View Encapsulation

## References
- [Angular homepage](https://angular.io)
