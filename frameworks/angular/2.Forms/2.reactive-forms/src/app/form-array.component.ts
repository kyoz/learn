import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  template: `
    <h2>Group Control with FormArray</h2>
    This is a great option if we don't know the number of child values in advance
    <hr>
    <form [formGroup]="infoForm">

      <div formArrayName="aliases">
        <label>Aliases</label> <button (click)="addAlias()">Add alias</button>

        <div *ngFor="let address of aliases.controls; let i=index">
          <!-- The repeated alias template -->
          <label>
            Alias: <input type="text" [formControlName]="i">
          </label>
        </div>
      </div>

      <button [disabled]="!infoForm.valid">Submit</button>

      <div>Data: {{ infoForm.value | json }}</div>
      <div>Form Status: {{ infoForm.status }}</div>

    </form>

    <br>
  `
})
export class FormArrayComponent {
  infoForm: FormGroup = this.formBuilder.group({
    firstname: ['', Validators.required],
    lastname: [''],
    address: this.formBuilder.group({
      address: [''],
      country: [''],
      zipcode: ['']
    }),
    aliases: this.formBuilder.array([
      this.formBuilder.control('')
    ])
  });


  constructor(private formBuilder: FormBuilder) { }

  get aliases() {
    // Because the returned control is of the type AbstractControl,
    // we need to provide an explicit type to access the method syntax for the form array instance.
    return this.infoForm.get('aliases') as FormArray;
  }

  addAlias() {
    this.aliases.push(this.formBuilder.control(''));
  }
}

