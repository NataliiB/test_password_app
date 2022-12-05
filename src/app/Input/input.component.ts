import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  reactiveForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.reactiveForm = fb.group({});
  }

  password = new FormControl(null);
  result$ = '';

  doValidation(value: any) {
    if (value.length < 8 && value.length!) {
      return (this.result$ = 'Danger');
    } else if (
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#/,.?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(value)
    ) {
      return (this.result$ = 'Strong');
    } else if (
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value) ||
      /^(?=.*[A-Za-z])(?=.*[@$!/%*,.#?&])[A-Za-z.,@$!/%*#?&]{8,}$/.test(value) ||
      /^(?=.*\d)(?=.*[@$!%*.,/#?&])[\d@$/,.!%*#?&]{8,}$/.test(value)
    ) {
      return (this.result$ = 'Medium');
    } else if (value.length !== 0) {
      return (this.result$ = 'Easy');
    } else {
      return (this.result$ = '');
    }
  }
  ngOnInit() {
    this.password.valueChanges.subscribe((value) => {
      this.doValidation(value);
    });
  }
}
