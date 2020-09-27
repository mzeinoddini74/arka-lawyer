import {Component, Inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LegalUserType} from '../../../../models/attorney/ILegalUserType';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../../models/user/UserModel';
import {BannerModel} from '../../../../models/admin/BannerModel';

@Component({
  selector: 'app-admin-edit-dialog-banner',
  templateUrl: './admin-edit-dialog-banner.component.html',
  styleUrls: ['./admin-edit-dialog-banner.component.css']
})
export class AdminEditDialogBannerComponent {

  form: FormGroup;
  errorMessages = {
    title: [
      { type: 'maxlength', message: 'عنوان نمی تواند بیشتر از 100 کاراکتر باشد.' }
    ],
    description: [
      { type: 'maxlength', message: 'توضیحات نمی تواند بیشتر از 500 کاراکتر باشد.' }
    ],
    link: [
      { type: 'maxlength', message: 'لینک نمی تواند بیشتر از 500 کاراکتر باشد.' }
    ],
    picture: [
      { type: 'required', message: 'تصویر را انتخاب کنید.' },
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminEditDialogBannerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BannerModel) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        title: new FormControl(
          this.data.title,
          Validators.compose([
            Validators.maxLength(100)
          ])
        ),
        description: new FormControl(
          this.data.description,
          Validators.compose([
            Validators.maxLength(500)
          ])
        ),
        link: new FormControl(
          this.data.link,
          Validators.compose([
            Validators.maxLength(500)
          ])
        ),
        picture: new FormControl(
          this.data.picture,
          Validators.compose([
            Validators.required
          ])
        ),
      }
    );
  }

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  getPicture(event): void {
    for ( const file of event.files){
      this.form.controls.picture = file.name;
    }
  }
}
