# Angular
Just a place to learn Angular

## Contents

- [Architecture](#architecture)
    - [Modules](#modules)
    - [Components](#components)
    - [Services & DI](#services-&-di)
- [Templates syntax](#templates-syntax)
    - [Interpolation and template expressions](#interpolation-and-template-expressions)
    - [Binding syntax](#binding-syntax)
    - [Property binding](#property-binding)
    - [Attribute, class, and styles bindings](#attribute,-class,-and-styles-bindings)
    - [Event bindings](#event-bindings)
    - [Two-way bindings](#two-way-bindings)
    - [Build-in directives](#build-in-directives)
        - [Components](#components)
        - [Attribute directives](#attribute-directives)
        - [Structure directives](#structure-directives)
    - [Template references variables](#template-references-variables)
    - [Input and output properties](#input-and-output-properties)
    - [Template expression operators](#template-expression-operators)
    - [Built-in template functions](#build-in-template-functions)
- [Lifecycle hooks](#lifecycle-hooks)
    - [Lifecycle sequence](#lifecycle-sequence)
    - [Content projection](#content-projection)
- [Component interaction](#component-interaction)
    - [Intercept input property changes](#intercept-input-property-changes)
    - [Parent listen for child event](#parent-listen-for-child-event)
- [Component styles](#component-styles)
    - [Special selector](#special-selector)
    - [Loading component styles](#loading-component-styles)
    - [View encapsulation](#view-encapsulation)
    - [Inspecting generated CSS](#inspecting-generated-css)
- [Custom directives](#custom-directives)
    - [Custom attribute directives](#custom-attribute-directives)
    - [Custom structure directives](#custom-stucture-directives)
- [Custom pipes](#custom-pipes)

## Architecture

- [Modules](https://next.angular.io/guide/architecture-modules)
- [Components](https://next.angular.io/guide/architecture-components)
- [Services & DI](https://next.angular.io/guide/architecture-services)

## Templates syntax

### Interpolation and template expressions

- Interpolation: {{...}}
- Template Expressions: {{ 1 + 1 }}

### Binding syntax

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

### Property binding

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

#### Components

- Angular's components is directive with template.

#### Attribute directives

- Change the appearance or behavior of an element, component, or another directive.

##### NgClass:

```html
<!-- toggle the "special" class on/off with a property -->
<div [class.special]="isSpecial">The class binding is special</div>
```

##### NgStyle:

```html
<div [style.font-size]="isSpecial ? 'x-large' : 'smaller'" >
  This div is x-large or smaller.
</div>
```

##### NgModel: 

```html
<input [(ngModel)]="currentHero.name">
```

#### Structure directives

- Change the DOM layout by adding and removing DOM elements

##### NgIf

```html
<app-hero-detail *ngIf="isActive"></app-hero-detail>
```

##### NgFor

```html
<div *ngFor="let hero of heroes">{{hero.name}}</div>
<!-- With index -->
<div *ngFor="let hero of heroes; let i=index">{{i + 1}} - {{hero.name}}</div>
```

##### NgFor with trackBy
```html
<div *ngFor="let hero of heroes; trackBy: trackByHeroes">
  ({{hero.id}}) {{hero.name}}
</div>
```

```javascript
trackByHeroes(index: number, hero: Hero): number { return hero.id; }
```

##### NgSwitch

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

### Input and output properties

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

## Lifecycle hooks

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

## Component interaction

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

#### :host-content

- Sometimes it's useful to apply styles based on some condition outside of a component's view. For example, a CSS theme class could be applied to the document <body> element, and you want to change how your component looks based on that.

- Use the :host-context() pseudo-class selector, which works just like the function form of :host(). The :host-context() selector looks for a CSS class in any ancestor of the component host element, up to the document root. The :host-context() selector is useful when combined with another selector.

```css
// Find up to root what element with class 'this-is-body' and apply background: #bdbdbd to all it children elements
:host-context(.this-is-body) * {
  background: #bdbdbd;
}
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

### Loading component styles

#### Styles in component metadata

- You can add a styles array property to the @Component decorator.
- Each string in the array defines some CSS for this component.

```javascript
@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styles: ['h1 { font-weight: normal; }']
})
```

**Note**: Style strings added to the @Component.styles array must be written in CSS because the CLI cannot apply a preprocessor to inline styles.

#### Style files in component metadata

```javascript
@Component({
  selector: 'app-root',
  template: `
    <h1>Tour of Heroes</h1>
    <app-hero-main [hero]="hero"></app-hero-main>
  `,
  styleUrls: ['./app.component.css']
})
```

```css
// app.component.html file
h1 {
  color: red
}
```

#### Template inline styles

```javascript
@Component({
  selector: 'app-hero-controls',
  template: `
    <style>
      button {
        background-color: white;
        border: 1px solid #777;
      }
    </style>
    <h3>Controls</h3>
    <button (click)="activate()">Activate</button>
  `
})
```

#### Template link tags

```javascript
@Component({
  selector: 'app-hero-team',
  template: `
    <!-- We must use a relative URL so that the AOT compiler can find the stylesheet -->
    <link rel="stylesheet" href="../assets/hero-team.component.css">
    <h3>Team</h3>
    <ul>
      <li *ngFor="let member of hero.team">
        {{member}}
      </li>
    </ul>`
})
```

#### CSS @import

```css
/* The AOT compiler needs the `./` to show that this is local */
@import './hero-details-box.css';
```

### View encapsulation

- As discussed earlier, component CSS styles are encapsulated into the component's view and don't affect the rest of the application.

- To control how this encapsulation happens on a per component basis, you can set the view encapsulation mode in the component metadata. Choose from the following modes:

  - ShadowDom view encapsulation uses the browser's native shadow DOM implementation (see Shadow DOM on the MDN site) to attach a shadow DOM to the component's host element, and then puts the component view inside that shadow DOM. The component's styles are included within the shadow DOM.

  - Native view encapsulation uses a now deprecated version of the browser's native shadow DOM implementation - learn about the changes.

  - Emulated view encapsulation (the default) emulates the behavior of shadow DOM by preprocessing (and renaming) the CSS code to effectively scope the CSS to the component's view. For details, see Appendix 1.

  - None means that Angular does no view encapsulation. Angular adds the CSS to the global styles. The scoping rules, isolations, and protections discussed earlier don't apply. This is essentially the same as pasting the component's styles into the HTML.

- To set the components encapsulation mode, use the encapsulation property in the component metadata:

```javascript
// warning: few browsers support shadow DOM encapsulation at this time
encapsulation: ViewEncapsulation.Native
```

### Inspecting generated CSS

- When using emulated view encapsulation, Angular preprocesses all component styles so that they approximate the standard shadow CSS scoping rules.

- In the DOM of a running Angular application with emulated view encapsulation enabled, each DOM element has some extra attributes attached to it:

```html
<hero-details _nghost-pmm-5>
  <h2 _ngcontent-pmm-5>Mister Fantastic</h2>
  <hero-team _ngcontent-pmm-5 _nghost-pmm-6>
    <h3 _ngcontent-pmm-6>Team</h3>
  </hero-team>
</hero-detail>
```

- There are two kinds of generated attributes:
  - An element that would be a shadow DOM host in native encapsulation has a generated _nghost attribute. This is typically the case for component host elements.
  - An element within a component's view has a _ngcontent attribute that identifies to which host's emulated shadow DOM this element belongs.

- The exact values of these attributes aren't important. They are automatically generated and you never refer to them in application code. But they are targeted by the generated component styles, which are in the <head> section of the DOM:

```css
[_nghost-pmm-5] {
  display: block;
  border: 1px solid black;
}

h3[_ngcontent-pmm-6] {
  background-color: white;
  border: 1px solid #777;
}
```

- These styles are post-processed so that each selector is augmented with _nghost or _ngcontent attribute selectors. These extra selectors enable the scoping rules described in this page.

## Custom directives

### Custom attribute directives

- An example with highlight directive which will highlight when you hover on element with that directive.

```html
<p appHighlight>Hover me bro</p>
<p appHighlight color="red">Hover me bro</p>
<p appHighlight color="blue">Hover me bro</p>
```

```javascript
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('color') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.color = color === null ? 'black' : 'white';
  }
}
```

### Custom structure directives

- A simple example for custom structure directive with behavior opposite to *ngIf

```javascript
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) { }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
}
```

## Custom pipes

### Pure pipe

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe'
})
export class SimplePipe implements PipeTransform {

  transform(value: 'string', args?: any): any {
    console.log('pure pipe run');
    return value + (args || 'Hihi');
  }
}
```

### Impure pipe

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simplePipe',
  pure: false
})
export class SimplePipe implements PipeTransform {

  transform(value: 'string', args?: any): any {
    console.log('pure pipe run');
    return value + (args || 'Hihi');
  }
}
```

## References
- [Angular homepage](https://angular.io)
