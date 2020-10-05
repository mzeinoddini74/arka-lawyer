import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  form: FormGroup;

  errorMessages = {
    fullname: [
      { type: 'required', message: 'نام خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    email: [
      { type: 'required', message: 'پست الکترونیکی خود را وارد کنید.' },
      { type: 'maxlength', message: 'پست الکترونیکی نمی تواند بیشتر از 200 کاراکتر باشد.' },
      { type: 'email', message: 'لطفا پست الکترونیکی معتبر وارد کنید.' }
    ],
    tel: [
      { type: 'required', message: 'شماره تلفن را وارد کنید.' },
      { type: 'minlength', message: 'شماره تلفن باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره تلفن باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره تلفن معتبر وارد کنید.' }
    ],
    gender: [
      { type: 'required', message: 'جنسیت را انتخاب کنید.' }
    ],
    address: [
      { type: 'required', message: 'آدرس را انتخاب کنید.' },
      { type: 'maxlength', message: 'آدرس نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    profilePicture: [
      { type: 'required', message: 'تصویر پروفایل را آپلود کنید.' }
    ]
  };

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        fullname: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        gender: new FormControl(
          null,
          Validators.compose([
            Validators.required
          ])
        ),
        tel: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(11),
            Validators.minLength(11)
          ])
        ),
        address: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        email: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200),
            Validators.email
          ])
        ),
        profilePicture: new FormControl(
          null,
          Validators.compose([
            Validators.required
          ])
        )
      }
    );
  }

  ngOnInit(): void {
  }

  getProfilePicture(event): void {
    for ( const file of event.files){
      this.form.controls.personalPicture = file.name;
    }
  }
}
