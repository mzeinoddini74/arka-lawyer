import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {UserModel} from '../../../../models/user/UserModel';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin-edit-dialog-user',
  templateUrl: './admin-edit-dialog-user.component.html',
  styleUrls: ['./admin-edit-dialog-user.component.css']
})
export class AdminEditDialogUserComponent {

  form: FormGroup;
  mobileRegix = /^0?9[123]\d{8}$/;
  errorMessages = {
    mobile: [
      { type: 'required', message: 'شماره موبایل خود را وارد کنید.' },
      { type: 'maxlength', message: 'شماره موبایل باید 11 کاراکتر باشد.' },
      { type: 'minlength', message: 'شماره موبایل باید 11 کاراکتر باشد.' },
      { type: 'pattern', message: 'لطفا شماره موبایل معتبر وارد کنید.' }
    ],
    password: [
      { type: 'required', message: 'رمز عبور را وارد کنید.' }
    ],
    fullname: [
      { type: 'required', message: 'نام و نام خانوادگی را وارد کنید.' },
      { type: 'maxlength', message: 'نام و نام خانوادگی نمی تواند از 200 رقم باشد.' },
    ],
    email: [
      { type: 'maxlength', message: 'پست الکترونیکی نمی تواند از 200 رقم باشد.' },
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminEditDialogUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserModel) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        mobile: new FormControl(
          this.data.mobile,
          Validators.compose([
            Validators.required,
            Validators.maxLength(11),
            Validators.minLength(11),
            Validators.pattern(this.mobileRegix)
          ])
        ),
        password: new FormControl(
          this.data.password,
          Validators.compose([
            Validators.required
          ])
        ),
        fullname: new FormControl(
          this.data.fullname,
          Validators.compose([
            Validators.required,
            Validators.maxLength(200)
          ])
        ),
        gender: new FormControl(
          this.data.gender
        ),
        tel: new FormControl(
          this.data.tel
        ),
        email: new FormControl(
          this.data.email,
          Validators.compose([
            Validators.maxLength(200)
          ])
        ),
        profilePicture: new FormControl(
          this.data.profilePicture
        ),
        province: new FormControl(
          this.data.province
        ),
        city: new FormControl(
          this.data.city
        ),
        address: new FormControl(
          this.data.address
        )
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
      this.form.controls.profilePicture = file.name;
    }
  }
}
