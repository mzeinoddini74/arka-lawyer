import { NgModule } from '@angular/core';
import {InputNumberModule} from 'primeng/inputnumber';
import {KeyFilterModule} from 'primeng/keyfilter';
import {FileUploadModule} from 'primeng/fileupload';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

const primengComponents = [
  InputNumberModule,
  KeyFilterModule,
  FileUploadModule,
  ButtonModule,
  ConfirmDialogModule
];

@NgModule({
  declarations: [],
  imports: [primengComponents],
  exports: [primengComponents]
})
export class PrimengModule { }
