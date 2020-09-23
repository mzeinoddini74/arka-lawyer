import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LegalUserType} from '../../../models/attorney/ILegalUserType';

@Component({
  selector: 'app-attorney-profile',
  templateUrl: './attorney-profile.component.html',
  styleUrls: ['./attorney-profile.component.css']
})
export class AttorneyProfileComponent implements OnInit {

  form: FormGroup;
  LegalUserTypes: LegalUserType[];

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
    fatherName: [
      { type: 'required', message: 'نام پدر را وارد کنید.' },
      { type: 'maxlength', message: 'نام پدر نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    profilePicture: [
      { type: 'required', message: 'تصویر پروفایل را آپلود کنید.' }
    ],
    type: [
      { type: 'required', message: 'نوع کاربر حقوقی را انتخاب کنید.' }
    ]
  };

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
    this.LegalUserTypes = [
      {name: 'وکیل پایه یک دادگستری', code: '1'},
      {name: 'وکیل پایه یک قوه قضاییه', code: '2'},
      {name: 'وکیل پایه دو قوه قضاییه', code: '3'},
      {name: 'کارآموز کانون وکلای دادگستری', code: '4'},
      {name: 'کارآموز قوه قضاییه', code: '5'},
      {name: 'کارشناس حقوقی', code: '6'},
      {name: 'کارشناس رسمی دادگستری', code: '7'}
    ];
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
        fatherName: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
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
        ),
        resume: new FormControl(
          null
        ),
        license: new FormControl(
          null
        ),
        booklet: new FormControl(
          null
        ),
        type: new FormControl(
          null,
          Validators.compose([
            Validators.required,
          ])
        )
      }
    );
  }

  ngOnInit(): void {
  }

  getLicense(event): void {
    for ( const file of event.files){
      this.form.controls.license = file.name;
    }
  }
  getBooklet(event): void {
    for ( const file of event.files){
      this.form.controls.booklet = file.name;
    }
  }
  getResume(event): void {
    for ( const file of event.files){
      this.form.controls.resume = file.name;
    }
  }
  getProfilePicture(event): void {
    for ( const file of event.files){
      this.form.controls.personalPicture = file.name;
    }
  }

}
