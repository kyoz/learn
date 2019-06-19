import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

describe('Test Forms', () => {
  let reactiveFormComponent: ReactiveFormComponent;
  let reactiveFormFixture: ComponentFixture<ReactiveFormComponent>;
  let templateDrivenFormComponent: TemplateDrivenFormComponent;
  let templateDrivenFormFixture: ComponentFixture<TemplateDrivenFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        AppComponent,
        ReactiveFormComponent,
        TemplateDrivenFormComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    reactiveFormFixture = TestBed.createComponent(ReactiveFormComponent);
    reactiveFormComponent = reactiveFormFixture.componentInstance;
    reactiveFormFixture.detectChanges();
    templateDrivenFormFixture = TestBed.createComponent(TemplateDrivenFormComponent);
    templateDrivenFormComponent = templateDrivenFormFixture.componentInstance;
    templateDrivenFormFixture.detectChanges();
  });

  it('[ReactiveFormComponent] should create', () => {
    expect(reactiveFormComponent).toBeDefined();
  });

  it('[ReactiveFormComponent] should update the value of the input field', () => {
    const input = reactiveFormFixture.nativeElement.querySelector('input');

    input.value = 'Red';
    input.dispatchEvent(new Event('input'));

    expect(reactiveFormFixture.componentInstance.colorControl.value).toEqual('Red');
  });

  it('[TemplateDrivenFormComponent] should create', () => {
    expect(reactiveFormComponent).toBeDefined();
  });

  it('[TemplateDrivenFormComponent] should update the value of the input field', () => {
    const input = templateDrivenFormFixture.nativeElement.querySelector('input');

    input.value = 'Red';
    input.dispatchEvent(new Event('input'));

    reactiveFormFixture.detectChanges();

    expect(templateDrivenFormComponent.color).toEqual('Red');
  });



});
