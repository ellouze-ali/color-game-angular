import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl, } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  err: any;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  

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

  handleLoginClick(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    } else {
      let observable =this.userService.login({password: this.form.value.password, email: this.form.value.email}).subscribe((user) =>{
        this.router.navigate(["/"])
        observable.unsubscribe()
      },(err) => {
        this.err = err
        observable.unsubscribe()
      })


    }
    console.log(JSON.stringify(this.form?.value, null, 2));
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls ;
  }
}