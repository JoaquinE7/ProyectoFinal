import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  durationInSeconds = 5;
  contactForm?: FormGroup;

  constructor(private fb: FormBuilder) {}
  //private _snackBar: MatSnackBar

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      type: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    //console.log(this.contactForm.value);
  }
}