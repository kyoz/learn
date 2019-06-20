import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nested-form',
  template: `
    <h2>Nested Form</h2>
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

      <div>Data: {{ infoForm.value | json }}</div>

      <button (click)="setValue()">setValue</button>
      <button (click)="patchValue()">patchValue</button><br>
      <button (click)="setValueWrong()">setValue (just firstname)</button>
      <button (click)="patchValueWrong()">patchValue (just firstname)</button><br>
      <b>Note:</b> patchValue() can update just one FormControl, but with setValue(), we have to update the whole structure of formGroup, if no, it'll raised error

    </form>
  `
})
export class NestedFormComponent {
  infoForm: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    address: new FormGroup({
      address: new FormControl(''),
      country: new FormControl(''),
      zipcode: new FormControl('')
    })
  });

  setValue() {
    this.infoForm.setValue({
      firstname: 'Ban',
      lastname: 'Kyoz',
      address: {
        address: '123 Skype',
        country: 'Sai Gon',
        zipcode: '123123'
      }
    });
  }

  setValueWrong() {
    this.infoForm.setValue({
      firstname: 'patched firstname'
    });
  }

  patchValue() {
    this.infoForm.patchValue({
      firstname: 'Sai',
      lastname: 'Tama',
      address: {
        address: '11 District',
        country: 'Manga',
        zipcode: '9999'
      }
    });
  }

  patchValueWrong() {
    this.infoForm.patchValue({
      firstname: 'patched firstname'
    });
  }
}

