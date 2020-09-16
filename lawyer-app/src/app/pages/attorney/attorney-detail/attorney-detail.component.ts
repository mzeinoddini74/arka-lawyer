import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-attorney-detail',
  templateUrl: './attorney-detail.component.html',
  styleUrls: ['./attorney-detail.component.css']
})
export class AttorneyDetailComponent implements OnInit {

  form: FormGroup;
  errorMessages = {
    name: [
      { type: 'required', message: 'نام خود را وارد کنید.' },
      { type: 'maxlength', message: 'نام نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    email: [
      { type: 'maxlength', message: 'پست الکترونیکی نمی تواند بیشتر از 200 کاراکتر باشد.' },
      { type: 'email', message: 'لطفا پست الکترونیکی معتبر وارد کنید.' }
    ],
    comment: [
      { type: 'required', message: 'نظر/پیام را وارد کنید.' },
      { type: 'maxlength', message: 'نظر/پیام نمی تواند بیشتر از 500 کاراکتر باشد.' }
    ]
  };

  public Editor = ClassicEditor;

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
        email: new FormControl(
          null,
          Validators.compose([
            Validators.maxLength(200),
            Validators.email
          ])
        ),
        comment: new FormControl(
          null,
          Validators.compose([
            Validators.required,
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

  saveComment(): void {
    if (this.captchaSuccess === true){
      console.log('saved');
    }
    else{
      this.captchaError = true;
    }
  }
}
