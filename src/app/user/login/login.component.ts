import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [
          Validators.required,
          Validators.email,
          Validators.minLength(6),
        ]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5)
          ]
        ],
      },
    ); 
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }
    console.log(JSON.stringify(this.form?.value, null, 2));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls ;
  }
}