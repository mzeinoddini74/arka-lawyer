import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export interface DialogData {
  id: number;
  parent: number;
  comment: string;
}

@Component({
  selector: 'app-admin-reply-dialog-comment',
  templateUrl: './admin-reply-dialog-online-request.component.html',
  styleUrls: ['./admin-reply-dialog-online-request.component.css']
})
export class AdminReplyDialogOnlineRequestComponent {

  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<AdminReplyDialogOnlineRequestComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onConfirm(): void {
    // Close the dialog, return true
    this.dialogRef.close(this.data);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
