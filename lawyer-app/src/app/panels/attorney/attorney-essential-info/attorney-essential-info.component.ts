import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-attorney-essential-info',
  templateUrl: './attorney-essential-info.component.html',
  styleUrls: ['./attorney-essential-info.component.css']
})
export class AttorneyEssentialInfoComponent implements OnInit {

  personalForm: FormGroup;
  educationForm: FormGroup;
  workForm: FormGroup;
  additionalForm: FormGroup;

  personalErrorMessages = {
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
    ]
  };
  educationalErrorMessages = {
    university: [
      { type: 'required', message: 'نام دانشگاه خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام دانشگاه نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    grade: [
      { type: 'required', message: 'مقطع تحصیلی را وارد کنید.' },
      { type: 'maxlength', message: 'مقطع تحصیلی نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    major: [
      { type: 'required', message: 'رشته تحصیلی را وارد کنید.' },
      { type: 'maxlength', message: 'رشته تحصیلی نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    startYear: [
      { type: 'required', message: 'سال شروع را وارد کنید.' },
      { type: 'minlength', message: 'سال شروع باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال شروع باید 4 رقم باشد.' },
    ],
    endYear: [
      { type: 'minlength', message: 'سال پایان باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال پایان باید 4 رقم باشد.' },
    ]
  };
  workErrorMessages = {
    company: [
      { type: 'required', message: 'نام موسسه خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام موسسه نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    position: [
      { type: 'required', message: 'سمت را وارد کنید.' },
      { type: 'maxlength', message: 'سمت نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    startYear: [
      { type: 'required', message: 'سال شروع را وارد کنید.' },
      { type: 'minlength', message: 'سال شروع باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال شروع باید 4 رقم باشد.' },
    ],
    endYear: [
      { type: 'minlength', message: 'سال پایان باید 4 رقم باشد.' },
      { type: 'maxlength', message: 'سال پایان باید 4 رقم باشد.' },
    ]
  };
  additionalErrorMessages = {
    type: [
      { type: 'required', message: 'نوع کاربر حقوقی را انتخاب کنید.' }
    ],
  };

  constructor(public formBuilder: FormBuilder) {
    this.createPersonalForm();
    this.createEducationalForm();
    this.createWorkForm();
    this.createAdditionalForm();
  }

  createPersonalForm(): void {
    this.personalForm = this.formBuilder.group(
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
        )
      }
    );
  }

  createEducationalForm(): void {
    this.educationForm = this.formBuilder.group(
      {
        university: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        grade: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        major: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        startYear: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        endYear: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        stillStudying: new FormControl(
          null
        ),
        degreePicture: new FormControl(
          null
        ),
        lastDegree: new FormControl(
          null
        )
      }
    );
  }

  createWorkForm(): void {
    this.workForm = this.formBuilder.group(
      {
        company: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        position: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        startYear: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        endYear: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        stillWorking: new FormControl(
          null
        )
      }
    );
  }

  createAdditionalForm(): void {
    this.additionalForm = this.formBuilder.group(
      {
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

}
