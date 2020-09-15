import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {BlogModel} from '../../../../models/admin/BlogModel';

@Component({
  selector: 'app-admin-edit-dialog-blog',
  templateUrl: './admin-edit-dialog-blog.component.html',
  styleUrls: ['./admin-edit-dialog-blog.component.css']
})
export class AdminEditDialogBlogComponent {

  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<AdminEditDialogBlogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BlogModel) {}


  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
