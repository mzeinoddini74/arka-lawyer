import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export interface DialogData {
  id: number;
  comment: string;
}

@Component({
  selector: 'app-admin-edit-dialog-comment',
  templateUrl: './admin-edit-dialog-online-request.component.html',
  styleUrls: ['./admin-edit-dialog-online-request.component.css']
})
export class AdminEditDialogOnlineRequestComponent {

  public Editor = ClassicEditor;

  constructor(
    public dialogRef: MatDialogRef<AdminEditDialogOnlineRequestComponent>,
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
