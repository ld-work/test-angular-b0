import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('itemForm') form: NgForm;

  get submitMessage() { return this._submitMessage; }
  private _submitMessage = '';  // tslint:disable-line: variable-name

  onSubmit(form: NgForm) {
    this._submitMessage = 'Submitted. Form value is ' + JSON.stringify(form.value);
  }

  callPhone(value: string) {
    console.warn(`Calling ${value} ...`);
  }

  callFax(value: string) {
    console.warn(`Faxing ${value} ...`);
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/