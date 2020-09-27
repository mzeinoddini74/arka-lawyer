import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AttorneyWorkModel} from '../../../../models/attorney/AttorneyModel';

@Component({
  selector: 'app-attorney-edit-dialog-work',
  templateUrl: './attorney-edit-dialog-work.component.html',
  styleUrls: ['./attorney-edit-dialog-work.component.css']
})
export class AttorneyEditDialogWorkComponent implements OnInit {

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

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AttorneyEditDialogWorkComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AttorneyWorkModel) {
    this.createWorkForm();
  }
  createWorkForm(): void {
    this.workForm = this.formBuilder.group(
      {
        company: new FormControl(
          this.data.company,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        position: new FormControl(
          this.data.position,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        startYear: new FormControl(
          this.data.startYear,
          Validators.compose([
            Validators.required,
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        endYear: new FormControl(
          this.data.endYear,
          Validators.compose([
            Validators.maxLength(4),
            Validators.minLength(4)
          ])
        ),
        stillWorking: new FormControl(
          this.data.stillWorking
        )
      }
    );
  }

  onConfirm(): void {
    const id = this.data.id;
    this.data = this.workForm.value;
    this.data.id = id;
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  ngOnInit(): void {
  }

}
