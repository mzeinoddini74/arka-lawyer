import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-home-contact',
  templateUrl: './home-contact.component.html',
  styleUrls: ['./home-contact.component.css']
})
export class HomeContactComponent implements OnInit {

  form: FormGroup;
  mobileRegix = /^0?9[123]\d{8}$/;
  errorMessages = {
    name: [
      { type: 'required', message: 'نام خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    mobile: [
      { type: 'required', message: 'شماره موبایل را وارد کنید.' },
      { type: 'minlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'maxlength', message: 'شماره موبایل باید 11 رقم باشد.' },
      { type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.' }
    ],
    subject: [
      { type: 'required', message: 'موضوع را وارد کنید.' },
      { type: 'maxlength', message: 'موضوع نمی تواند بیشتر از 200 کاراکتر باشد.' }
    ],
    description: [
      { type: 'maxlength', message: 'توضیحات نمی تواند بیشتر از 500 کاراکتر باشد.' }
    ]
  };

  public captchaIsLoaded = false;
  public captchaSuccess = false;
  public captchaError = false;
  public captchaIsExpired = false;
  public captchaResponse?: string;

  constructor(public formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        name: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        mobile: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11),
            Validators.pattern(this.mobileRegix)
          ])
        ),
        subject: new FormControl(
          null,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200),
          ])
        ),
        description: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(500)
          ])
        ),
        recaptcha: new FormControl(
          null
        )
      }
    );
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  handleSuccess($event: string) {
    this.captchaSuccess = true;
    this.captchaError = false;
    console.log('success');
  }

  saveRequest(): void {
    if (this.captchaSuccess === true){
      console.log('saved');
    }
    else{
      this.captchaError = true;
    }
  }
}
