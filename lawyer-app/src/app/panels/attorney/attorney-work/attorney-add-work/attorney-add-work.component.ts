import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LegalUserType} from '../../../../models/attorney/ILegalUserType';

@Component({
  selector: 'app-attorney-add-work',
  templateUrl: './attorney-add-work.component.html',
  styleUrls: ['./attorney-add-work.component.css']
})
export class AttorneyAddWorkComponent implements OnInit {

  workForm: FormGroup;
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

  constructor(public formBuilder: FormBuilder) {
    this.createWorkForm();
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
  ngOnInit(): void {
  }

}
