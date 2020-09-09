import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.css']
})
export class RegisterComponent implements OnInit {

  public registerUserForm: FormGroup;
  public registerAttorneyForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createUserForm();
    this.createAttorneyForm();
  }

  // tslint:disable-next-line:typedef
  createUserForm(){
    this.registerUserForm = new FormGroup({
      mobile: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      confirmPassword: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      )
    });
  }

  // tslint:disable-next-line:typedef
  createAttorneyForm(){
    this.registerAttorneyForm = new FormGroup({
      mobile: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ),
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ),
      confirmPassword: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(6)
        ]
      )
    });
  }

  // tslint:disable-next-line:typedef
  saveUser(){
    console.log('saved');
  }
}

// tslint:disable-next-line:typedef
// function checkPassword(formGroup: FormGroup) {
//   const {value: password} = formGroup.get('password');
//   const {value: confirmPassword} = formGroup.get('confirmPassword');
//   return password === confirmPassword ? null : {passwordNotMatch: true};
// }

// tslint:disable-next-line:typedef
function checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const password = group.get('password').value;
  const confirmPassword = group.get('confirmPassword').value;

  return password === confirmPassword ? null : { notSame: true };
}
