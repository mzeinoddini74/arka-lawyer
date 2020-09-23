import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {AttorneyEducationModel} from '../../../../models/attorney/AttorneyModel';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-attorney-edit-dialog-education',
  templateUrl: './attorney-edit-dialog-education.component.html',
  styleUrls: ['./attorney-edit-dialog-education.component.css']
})
export class AttorneyEditDialogEducationComponent implements OnInit {

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

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AttorneyEditDialogEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AttorneyEducationModel) {
    this.createEducationalForm();
  }

  createEducationalForm(): void {
    this.educationForm = this.formBuilder.group(
      {
        university: new FormControl(
          this.data.university,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        grade: new FormControl(
          this.data.grade,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        major: new FormControl(
          this.data.major,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
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
        stillStudying: new FormControl(
          this.data.stillStudying,
        ),
        degreePicture: new FormControl(
          this.data.degreePicture
        ),
        lastDegree: new FormControl(
          this.data.lastDegree
        )
      }
    );
  }

  onConfirm(): void {
    const id = this.data.id;
    this.data = this.educationForm.value;
    this.data.id = id;
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  getDegreePicture(event): void {
    for ( const file of event.files){
      this.educationForm.controls.degreePicture = file.name;
    }
  }

  ngOnInit(): void {
  }

}
