import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BlogModel} from '../../../../models/admin/BlogModel';

@Component({
  selector: 'app-admin-edit-dialog-blog',
  templateUrl: './admin-edit-dialog-blog.component.html',
  styleUrls: ['./admin-edit-dialog-blog.component.css']
})
export class AdminEditDialogBlogComponent {

  public Editor = ClassicEditor;

  form: FormGroup;
  errorMessages = {
    title: [
      { type: 'required', message: 'عنوان را وارد کنید.' },
      { type: 'maxlength', message: 'عنوان نمی تواند بیشتر از 100 وارد باشد.' }
    ],
    description: [
      { type: 'required', message: 'توضیحات را وارد کنید.' },
      { type: 'maxlength', message: 'توضیحات نمی تواند بیشتر از 500 وارد باشد.' }
    ],
    summary: [
      { type: 'required', message: 'خلاصه را وارد کنید.' },
      { type: 'maxlength', message: 'خلاصه نمی تواند بیشتر از 500 وارد باشد.' }
    ],
    picture: [
      { type: 'required', message: 'تصویر را انتخاب کنید.' }
    ]
  };

  constructor(
    public formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AdminEditDialogBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogModel) {
    this.createForm();
  }

  createForm(): void {
    this.form = this.formBuilder.group(
      {
        title: new FormControl(
          this.data.title,
          Validators.compose([
            Validators.required,
            Validators.maxLength(100)
          ])
        ),
        description: new FormControl(
          this.data.description,
          Validators.compose([
            Validators.required,
            Validators.maxLength(500)
          ])
        ),
        summary: new FormControl(
          this.data.summary,
          Validators.compose([
            Validators.required,
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
