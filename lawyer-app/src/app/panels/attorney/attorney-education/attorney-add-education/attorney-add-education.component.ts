import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LegalUserType} from '../../../../models/attorney/ILegalUserType';

@Component({
  selector: 'app-attorney-add-education',
  templateUrl: './attorney-add-education.component.html',
  styleUrls: ['./attorney-add-education.component.css']
})
export class AttorneyAddEducationComponent implements OnInit {

  educationForm: FormGroup;
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

  constructor(public formBuilder: FormBuilder) {
    this.createEducationalForm();
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

  ngOnInit(): void {
  }

  getDegreePicture(event): void {
    for ( const file of event.files){
      this.educationForm.controls.degreePicture = file.name;
    }
  }
}
