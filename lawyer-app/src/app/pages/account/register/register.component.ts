import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../account.css']
})
export class RegisterComponent implements OnInit {

  registerUserForm: FormGroup;
  registerAttorneyForm: FormGroup;
  mobileRegix = /^0?9[123]\d{8}$/;
  errorMessages = {
    mobile: [
      { type: 'required', message: 'شماره موبایل را وارد کنید.' },
      { type: 'minlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.' }
    ],
    password: [
      { type: 'required', message: 'کلمه عبور را وارد کنید.' },
      { type: 'minlength', message: 'کلمه عبور نمی تواند کمتر از 6 کاراکتر باشد.' }
    ],
    confirmPassword: [
      { type: 'required', message: 'تکرار کلمه عبور را وارد کنید.' },
      { type: 'minlength', message: 'تکرار کلمه عبور نمی تواند کمتر از 6 کاراکتر باشد.' }
    ],
  };

  constructor(public formBuilder: FormBuilder) {
    this.createUserForm();
    this.createAttorneyForm();
  }

  ngOnInit(): void {
  }

  createUserForm(): void {
    this.registerUserForm = this.formBuilder.group(
      {
        mobile: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern(this.mobileRegix)
          ])
        ),
        password: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        ),
        confirmPassword: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        ),
      }, {
        validators: this.password.bind(this)
    });
  }

  createAttorneyForm(): void {
    this.registerAttorneyForm = this.formBuilder.group(
      {
        mobile: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern(this.mobileRegix)
          ])
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
          Validators.compose([
            Validators.required,
            Validators.minLength(6)
          ])
        ),
      }, {
        validators: this.password.bind(this)
      });
  }

  // tslint:disable-next-line:typedef
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  saveUser(): void {
    console.log('saved');
  }

  saveAttorney(): void {
    console.log('saved');
  }

}
