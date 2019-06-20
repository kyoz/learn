import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  template: `
    <h2>Group Control with FormBuilder</h2>
    <hr>
    <form [formGroup]="infoForm">

      <b>INFO</b>

      <div style="padding-left: 32px">
        <div>
          First name: <input type="text" formControlName="firstname">
        </div>
        <div>
          Last name: <input type="text" formControlName="lastname">
        </div>
      </div>

      <b>ADDRESS</b>

      <div style="padding-left: 32px" formGroupName="address">
        <div>
          Address: <input type="text" formControlName="address">
        </div>
        <div>
          Country: <input type="text" formControlName="country">
        </div>
        <div>
          Zipcode: <input type="text" formControlName="zipcode">
        </div>
      </div>

      <button [disabled]="!infoForm.valid">Submit</button>

      <div>Data: {{ infoForm.value | json }}</div>
      <div>Form Status: {{ infoForm.status }}</div>

    </form>

    <br>
    <div><b>Caution</b>: Use these HTML5 validation attributes in combination with the built-in validators provided by Angular's reactive forms. Using these in combination prevents errors when the expression is changed after the template has been checked.</div>
  `
})
export class FormBuilderComponent {
  infoForm: FormGroup = this.formBuilder.group({
    firstname: ['', [Validators.required, Validators.minLength(3)]],
    lastname: [''],
    address: this.formBuilder.group({
      address: [''],
      country: [''],
      zipcode: ['']
    })
  });


  constructor(private formBuilder: FormBuilder) {
    
  }
}

